from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from ..config.db_config import DbConfig


db_config = DbConfig()

SQLALCHEMY_DATABASE_URL = f"postgresql://{db_config.db_user}:{db_config.db_password}@{db_config.db_host}:5432/{db_config.database}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
