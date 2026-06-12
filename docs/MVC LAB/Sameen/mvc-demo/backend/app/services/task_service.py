from app.repositories.task_repository import TaskRepository
# from app.services.task_service import TaskService
# from app.exceptions import TaskNotFoundException

class TaskNotFoundError(Exception):
    pass

class TaskService:
    def __init__(self, repo=None):
        self._repo = repo or TaskRepository()

    def list_tasks(self):
        return self._repo.all()

    def create_task(self, title):
        return self._repo.add(title)

    def delete_task(self, task_id):
        return self._repo.remove(task_id)

    def get_task(self, task_id):
        task = self._repo.find(task_id)

        if task is None:
            return TaskNotFoundError(f"Task {task_id}not found")
        return task
