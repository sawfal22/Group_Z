# the data contract(partof model)
from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
class Task(TaskCreate):
    id: int 