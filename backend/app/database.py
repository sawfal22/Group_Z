# import os
# from sqlalchemy import create_engine
# from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

# DATABASE_URL = os.environ["DATABASE_URL"]

# # TODO 1: create the engine.
# # Hint: create_engine(DATABASE_URL, pool_pre_ping=True) 
# engine = ...
# # TODO 2: create the sessionmaker.
# # Hint: sessionmaker (bind=engine, autoflush=False, autocommit=False)
# SessionLocal = ...

# class Base(DeclarativeBase):
#     """All ORM models inherit from this."""

# def get_db():
#     """
#     FastAPI dependency. ONE session per request, always closed.
#     Hint: it's a generator - open SessionLcal(), yield it inside try,
#         db.close() in finally.
#         """
#         ...
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

DATABASE_URL = os.environ["DATABASE_URL"]

engine = create_engine(DATABASE_URL, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Base(DeclarativeBase):
    ...

def get_db():
    db:Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()