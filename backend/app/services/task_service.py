# # Service (all the logic)
# class TaskService:
#     def __init__(self):
#         self._tasks = [
#             {"id": 1, "title": "Learn MVC"},
#             {"id": 2, "title": "Build Docker app"},
#         ]

#     def list_tasks(self):
#         return self._tasks

#     def create_task(self, title: str) -> dict:
#         next_id = max((t["id"] for t in self._tasks), default=0) + 1
#         task = {"id": next_id, "title": title}
#         self._tasks.append(task)
#         return task

#     def delete_task(self, task_id: int) -> bool:
#         for i, task in enumerate(self._tasks):
#             if task["id"] == task_id:
#                 self._tasks.pop(i)
#                 return True
#         return False




# class TaskService:
#     def __init__(self, repo=None):
#         self._repo = repo or TaskRepository()
#     def list_tasks(self):
#         return self._repo.all()
#     def create_task(self, title):
#         return self._repo.add(title)
#     def delete_task(self, task_id):
#         return self._repo.remove(task_id)

from app.repositories.task_repository import TaskRepository
# from app.services.task_service import TaskService
 #from app.exceptions import TaskNotFoundException

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
            raise TaskNotFoundError(task_id)
        return task




    # def __init__(self, repo: TaskRepository):
    #     self._repo = repo
    # def list_tasks(self) -> 
    #     ... # delegate to the repo

    # def get_task(self, task_id: int):
    #     """Return the task or raise TaskNotFoundError."""
    #     ...
    # def create_task(self, tittle: str):
    #     """Strip the title: raise ValeuError if empty; otherwise add via repo."""
    #     ...
    # def delete_task(self, task_id: int) -> bool:
    #     ... # delegate to the repo
        