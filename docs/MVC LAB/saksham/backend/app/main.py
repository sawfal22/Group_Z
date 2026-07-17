from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
import os

from app.controllers.task_controller import router as task_router
from app.database import Base, engine
from app import models

app = FastAPI(title="MVC Task API")

# Create tables (ok for dev; use Alembic in production)
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://frontend:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(task_router, prefix="/tasks", tags=["tasks"])


@app.get("/db-ping")
def db_ping():
    try:
        with engine.connect() as conn:
            version = conn.execute(text("SELECT version()")).scalar()
        return {"postgres": version}

    except Exception as e:
        return {"error": str(e)}