# # the data contract(partof model)
# from pydantic import BaseModel

# class TaskCreate(BaseModel):
#     title: str
# class Task(TaskCreate):
#     id: int 

from pydantic import BaseModel, ConfigDict, Field

class TaskCreate(BaseModel):
    title: str = Field(..., min_lenght=1, max_lenght=200)

class Task(TaskCreate):
    id: int
    
    model_config = ConfigDict(from_attributes=True)
    
    # TODO: add the line that lets pydantic read from ORM objects.
    # Hint: model_config = ConfigDict(from_attributes=True)
