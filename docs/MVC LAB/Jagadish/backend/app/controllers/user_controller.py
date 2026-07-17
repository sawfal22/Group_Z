from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import User
from app.schemas import Task as TaskSchema, User as UserSchema
# from app.services.task_service import TaskService #TaskNotFoundError


router = APIRouter()

@router.get("/", response_model=list[UserSchema])
def list_users(db: Session = Depends(get_db)):
    # """ Return all users.
    # Hint: list(db.scalars(select(User)))
    return list(db.scalars(select(User)))

@router.get("/{user_id}/tasks", response_model=list[TaskSchema])
def list_user_tasks(user_id: int, Session = Depends(get_db)):
    user = db.get(User, user_id)
    if user is None:
         raise HTTPException(status_code=404, detail="User not found")
    return user.tasks
# service = TaskService()

# def get_task_repo(db_Session = Depends(get_db)) -> TaskRepository:
#     return TaskRepository(db_Session)

# def get_task_service(repo: TaskRepository = Depends(get_task_repo)) -> TaskService:
#     return TaskService(repo)

# @router.get("/", response_model=list[Task])
# def get_tasks(service: TaskService = Depends(get_task_service)) -> list[dict]:
#     return service.list_tasks()

# @router.get("/{task_id}", response_model=Task)
# def get_task(task_id: int, service: TaskService = Depends(get_task_service)) -> list[dict]:
#     try:
#         return service.get_task(task_id)
#     except TaskNotFoundError:
#         raise HTTPException(status_code=404, detail="Task not found")

# @router.post("/", response_model=Task, status_code=201)
# def create_task(payload: TaskCreate, service: TaskService = Depends(get_task_service)):
#     return service.create_task(payload.title)

# @router.delete("/{task_id}", status_code=204)
# def delete_task(task_id: int, service: TaskService = Depends(get_task_service)):
#     if not service.delete_task(task_id):
#         raise HTTPException(status_code=404, detail="Task not found")


