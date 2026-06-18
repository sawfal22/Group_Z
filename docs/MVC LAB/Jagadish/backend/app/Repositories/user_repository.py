from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import User

class UserRepository:
    def __init__(self, db: Session):
        self._db = db

    def all(self) -> list[User]:
        return list(self._db.scalars(select(User)))

    def find(self, user_id: int) -> User | None:
        return self._db.get(User, user_id)

    # def add(self, title: str) -> Task:
    #     task = Task(title=title)
    #     self._db.add(task)
    #     self._db.commit()
    #     self._db.refresh(task)
    #     return task

    # def remove(self, task_id: int) -> bool:
    #     task = self._db.get(Task, task_id)
    #     if task is None:
    #         return False
    #     self._db.delete(task)
    #     self._db.commit()
    #     return True