# # # the wiring
# # from fastapi import FastAPI
# # from fastapi.middleware.cors import CORSMiddleware
# # from app.controllers.task_controller import router as task_router
# # from sqlalchemy import create_engine,text
# # import os

# # from app.database import Base, engine
# # from app import models # F401 - registers Task with Base.metadata

# # app = FastAPI(title="MVC Task API")

# # Base.metadata.create_all(bind=engine) 


# # @app.get("/db-ping")
# # def db_ping():
# #     engine = create_engine(os.environ["DATABASE_URL"])
# #     with engine.connect() as conn:
# #         return {"postgres": conn.execute(text("SELECT version()")).scalar()}


# # # the view runs on different origins, so CORS is required
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:5173"],
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # app.include_router(task_router, prefix="/tasks", tags=["tasks"])

# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from app.controllers.task_controller import router as task_router
# from app.controllers.user_controller import router as user_router
# from app.controllers.auth_controller import router as auth_router
# from sqlalchemy import create_engine, text
# import os

# from sqlalchemy import select
# from app.database import SessionLocal
# from app.models import User, Task


# from app.database import Base, engine
# from app import models
# from app.auth.hashing import hash_password


# app = FastAPI(title="MVC Task API")

# # Base.metadata.create_all(bind=engine)

# app.add_middleware(
#      CORSMiddleware,
#      allow_origins=["http://localhost:5173"],
#      allow_methods=["*"],
#      allow_headers=["*"],
#  )

# app.include_router(task_router, prefix="/tasks", tags=["tasks"])
# app.include_router(user_router, prefix="/users", tags=["users"])
# app.include_router(auth_router, prefix="/auth", tags=["auth"])

# # def seed_users():
# #     """Insert two users if the table is empty."""
# #     with SessionLocal() as db:
# #         if db.scalars(select(User)).first() is not None:
# #             return
# #         # db.add_all([User(name="Jac"), User(name="JACPU")])
# #         db.commit()
# # Base.metadata.drop_all(bind=engine)
# # Base.metadata.create_all(bind=engine)


# def seed_users():
#     with SessionLocal() as db:
#         if db.scalars(select(User)).first() is not None:
#             return
#         db.add_all([
#             User(name="Jac", password_hash=hash_password("password123")),
#             User(name="JACPU", password_hash=hash_password("password123")),
#         ])
#         db.commit()

# seed_users() # call at module load





# # @app.get("/db-ping")
# # def db_ping():
# #     engine = create_engine(os.environ["DATABASE_URL"])
# #     with engine.connect() as conn:
# #         return {"postgres": conn.execute(text("SELECT version()")).scalar()}

# # # the View runs on a different origin, so CORS is required


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from app.controllers.task_controller import router as task_router
from app.controllers.user_controller import router as user_router
from app.controllers.auth_controller import router as auth_router

from app.auth.hashing import hash_password
from sqlalchemy import select
from app.database import SessionLocal
from app.models import User, Task
import os
from app.database import Base, engine
from app import models  # noqa: F401 - registers Task with Base.metadata
 
app = FastAPI(title="MVC Task API")
 
#Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
 
app.include_router(task_router, prefix="/tasks", tags=["tasks"])
app.include_router(user_router, prefix="/users", tags=["users"])
app.include_router(auth_router, prefix="/auth", tags=["auth"])
 
#
def seed_users():
    """Insert two users if the table is empty."""
    with SessionLocal() as db:
        if db.scalars(select(User)).first() is not None:
            return
        db.add_all([User(name="Jac", password_hash=hash_password("456")), User(name="Jaggu", password_hash=hash_password("456"))
        ])
        db.commit()
 
 
seed_users()