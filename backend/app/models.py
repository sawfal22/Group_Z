from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base
from datetime import datetime
from sqlalchemy import DateTime, func 

class Task(Base):
    __tablename__ = "tasks"
    # TODO: id - int, primary key.
    # Hint: mapped_column(primary_key=True)
    id: Mapped[int] = mapped_column(primary_key=True)
    
    # TODO: title - string, max length 200.
    #  Hint: mapped_column (String(200))
    title: Mapped[str] = mapped_column(String(200))

    owner_id: Mapped[int]=mapped_column(ForeignKey("users.id"))
    owner:Mapped["User"]=relationship(back_populates="tasks")

    created_at: Mapped[datetime] =  mapped_column(DateTime(timezone=True), server_default=func.now())

class User(Base):
    __tablename__ = "users"
    # TODO: id - int, primary key.
    # Hint: mapped_column(primary_key=True)
    id: Mapped[int] = mapped_column(primary_key=True)
    
    # TODO: title - string, max length 200.
    #  Hint: mapped_column (String(200))
    name: Mapped[str] = mapped_column(String(200))

    tasks: Mapped[list["Task"]]= relationship(back_populates="owner")