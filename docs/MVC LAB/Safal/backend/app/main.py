from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select

from app.database import Base, engine, SessionLocal
from app.models import User
from app import models
from app.controllers.task_controller import router as task_router
from app.controllers.user_controller import router as user_router


app = FastAPI(title="MVC Task API")

# CORS must come before routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
# Base.metadata.create_all(bind=engine)

# Routers — note user_router for /users
app.include_router(task_router, prefix="/tasks", tags=["tasks"])
app.include_router(user_router, prefix="/users", tags=["users"])


def seed_users():
    with SessionLocal() as db:
        if db.scalars(select(User)).first() is not None:
            return
        db.add_all([User(name="Safal"), User(name="John")])
        db.commit()

seed_users()