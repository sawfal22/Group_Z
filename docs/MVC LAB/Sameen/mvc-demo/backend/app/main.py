from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
import os

from app.database import Base, engine
from app import models 
from app.controllers.task_controller import router as task_router

app = FastAPI(title="MVC Task API")

Base.metadata.create_all(bind=engine)

# CORS (frontend + docker network safe)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://frontend:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(task_router, prefix="/tasks", tags=["tasks"])


# @app.get("/db-ping")
# def db_ping():
#     database_url = os.getenv("DATABASE_URL")

#     if not database_url:
#         return {"error": "DATABASE_URL not set"}

#     engine = create_engine(database_url)

#     with engine.connect() as conn:
#         version = conn.execute(text("SELECT version()")).scalar()

#     return {"postgres": version}