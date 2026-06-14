# # import sqlite3


# # class TaskRepository:
# #     def __init__(self, db_path="tasks.db"):
# #         self._db = db_path
# #         self._init()

# #     def _init(self):
# #         with sqlite3.connect(self._db) as c:
# #             c.execute(
# #                 "CREATE TABLE IF NOT EXISTS tasks ("
# #                 "id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)"
# #             )

# #     def all(self):
# #         with sqlite3.connect(self._db) as c:
# #             rows = c.execute("SELECT id, title FROM tasks").fetchall()
# #             return [{"id": row[0], "title": row[1]} for row in rows]

# #     def add(self, title):
# #         with sqlite3.connect(self._db) as c:
# #             cur = c.execute("INSERT INTO tasks (title) VALUES (?)", (title,))
# #             return {"id": cur.lastrowid, "title": title}

# #     def remove(self, task_id):
# #         with sqlite3.connect(self._db) as c:
# #             cur = c.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
# #             return cur.rowcount > 0


# from sqlalchemy import select 
# from sqlalchmey.orm import

# from app.models import Task

# Class TaskRepository: 
#     def __init__(self, db: Session):
#         self._db = db
#     def all(self) -> list[Task]:
#         return list(self._db.scalars(select(Task)))     #"""Return every task.Hint: list(self.-db.scalars(select(Task)))"""#...


#     def find(self,task_id: int) -> Task | None:
#        return self._db.get(Task,task_id) # """Return a task by primary key, or None if missing.Hint: self._db.get(Task,task_id) """ ...


#     def add(self, title: str) -> Task:
#             # """Insert a new task and return it with the generated id.
#         # Hint: instaniate Task(title=title), db.add, db.commit, db.refresh.
#         # """
#         # ...
#         task=Task(title=title)
#         self._db.add(task)
#         self._db.commit()
#         self._db.refresh(task)
#         return task 

#     def remove(self, task_id:int) -> bool:
#         # """Delete by id. Return True if removed, False if not found.
#         # Hint: find first, check None, then db.delete + db.commit.
#         # """
#         # ...
#         task=self._db.get(Task,task_id)
#         if task is None:
#             return False
#             self._db.delete(task)
#             self._db.commit()
#             return True 
        
        

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import Task

class TaskRepository:
    def __init__(self, db: Session):
        self._db = db

    def all(self) -> list[Task]:
        return list(self._db.scalars(select(Task)))

    def find(self, task_id: int) -> Task | None:
        return self._db.get(Task, task_id)

    def add(self, title: str) -> Task:
        task = Task(title=title)
        self._db.add(task)
        self._db.commit()
        self._db.refresh(task)
        return task

    def remove(self, task_id: int) -> bool:
        task = self._db.get(Task, task_id)
        if task is None:
            return False
        self._db.delete(task)
        self._db.commit()
        return True