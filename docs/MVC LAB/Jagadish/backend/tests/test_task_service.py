import pytest

from app.models import User
from app.services.task_service import (
    TaskService,
    TaskNotFoundError,
    NotAuthorizedError
)
from tests.fakes import FakeTaskRepository, FakeUserRepository


def make_service():
    """Create a TaskService with fresh fake repositories."""
    alice = User(id=1, name="Alice")
    bob = User(id=2, name="Bob")

    tasks = FakeTaskRepository()
    users = FakeUserRepository([alice, bob])

    
    return TaskService (tasks, users), tasks, alice, bob


def test_list_tasks_returns_only_current_users_tasks():
    service, tasks, alice, bob = make_service()

    tasks.add("A1", alice.id)
    tasks.add("A2", alice.id)
    tasks.add("B1", bob.id)
    tasks.add("B2", bob.id)
    tasks.add("B3", bob.id)

    result = service.list_tasks(alice)

    assert len(result) == 2
    assert all(t.owner_id == alice.id for t in result)


def test_create_task_strips_whitespace_around_title():
    service, tasks, alice, _ = make_service()

    service.create_task("   read docs   ", alice)

    stored = tasks.all_for_user(alice.id)

    

    assert len(stored) == 1
    assert stored[0].title == "read docs"


def test_create_task_rejects_whitespace_only_title():
    service, tasks, alice, _ = make_service()

    with pytest.raises(ValueError):
        service.create_task("      ", alice)

    assert tasks.all_for_user(alice.id) == []


def test_get_task_raises_when_id_does_not_exist():
    service, _, alice, _ = make_service()

    with pytest.raises(TaskNotFoundError):
        service.get_task(999, alice)


def test_get_task_raises_when_current_user_is_not_owner():
    service, tasks, alice, bob = make_service()

    bobs_task = tasks.add("Bob's Secret", bob.id)

    with pytest.raises(NotAuthorizedError):
        service.get_task(bobs_task.id, alice)


def test_delete_task_raises_when_current_user_is_not_owner():
    service, tasks, alice, bob = make_service()

    bobs_task =tasks.add ("Bob's task", bob.id)

    with pytest.raises(NotAuthorizedError):
        service.delete_task(bobs_task.id, alice)

    assert tasks.find(bobs_task.id) is not None


def test_delete_own_task_removes_it_from_repository():
    service, tasks, alice, _ = make_service()

    task = tasks.add("read docs", alice.id)

    service.delete_task(task.id, alice)

    assert tasks.find(task.id) is None