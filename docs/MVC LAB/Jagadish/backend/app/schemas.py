# # the data contract(partof model)
# from pydantic import BaseModel

# class TaskCreate(BaseModel):
#     title: str


from pydantic import BaseModel, ConfigDict, Field

class TaskCreate(BaseModel):
    title: str = Field(..., min_lenght=1, max_lenght=200)
    owner_id: int
class Task(TaskCreate):
    id: int 
    

class User(BaseModel):
    id: int
    name: str
    
    model_config = ConfigDict(from_attributes=True)
    
    # TODO: add the line that lets pydantic read from ORM objects.
    # Hint: model_config = ConfigDict(from_attributes=True)
