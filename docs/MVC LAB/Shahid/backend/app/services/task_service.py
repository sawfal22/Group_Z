# class TaskService:
#     def __init__(self):
#         self._tasks = [
#             {"id": 1, "title": "Learn MVC"},
#             {"id": 2, "title": "Build Docker app"},
#         ]

#     def list_tasks(self):
#         return self._tasks

#     def create_task(self, title: str) -> dict:
#         new_task = {"id": len(self._tasks) + 1, "title": title}
#         self._tasks.append(new_task)
#         return new_task

#     def delete_task(self, task_id: int) -> bool:
#         for i, task in enumerate(self._tasks):
#             if task["id"] == task_id:
#                 self._tasks.pop(i)
#                 return True
#         return False
from app.repositories.task_repository import TaskRepository
from app.repositories.user_repository import UserRepository
from app.models import User
class TaskNotFoundError(Exception):
    pass
class UserNotFoundError(Exception):
    pass

# class TaskService:
#     def __init__(self, tasks: TaskRepository, users: UserRepository):
#         self._tasks = tasks
#         self._users = users

#     def list_tasks(self, current_user: User):
#         return self._tasks.all_for_user(current_user.id)

#     # def create_task(self, title):
#     #     return self._repo.add(title)

#     def create_task(self, title:str, owner_id: int):
#         task = title.strip()
#         if not title:
#             raise ValueError("Title cannot be empty or whitespace")
#         if self._users.find(owner_id) is None:
#             raise UserNotFoundError(owner_id)  
#         return self._tasks.add(title, owner_id)

#     def delete_task(self, task_id):
#         return self._tasks.remove(task_id)
    



    # def get_task(self, task_id):
    #     task = self._tasks.find(task_id)
    #     if task is None:
    #         raise TaskNotFoundError(task_id)
    #     return task

   
from app.models import User
class TaskNotFoundError(Exception): ...
class NotAuthorizedError(Exception):  ...

class TaskService:
    def __init__(self, tasks:TaskRepository, users: UserRepository):
        self._tasks = tasks
        self._users = users

    def list_tasks(self, current_user: User):
         return self._tasks.all_for_user(current_user.id)

    def get_task(self, task_id: int, current_user: User):
        task = self._tasks.find(task_id)
        if task is None:
            raise TaskNotFoundError(task_id)
        if task.owner_id != current_user.id:
            raise NotAuthorizedError()

    def create_task(self, title: str, current_user: User):
        title = title.strip()
        if not title:
            raise ValueError("Title cannot be empty or whitespace")
        return self._tasks.add(title, current_user.id)
    
    def delete_task(self, task_id: int, current_user: User) -> None:
        task = self._tasks.find(task_id)
        if task is None:
            raise TaskNotFoundError(task_id)
        if task.owner_id != current_user.id:
            raise NotAuthorizedError()
        self._tasks.remove(task_id)
    

    