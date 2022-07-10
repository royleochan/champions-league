from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from .database.database import engine
from .models.base import Base


def create_tables():
    Base.metadata.create_all(bind=engine)


def configure_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )


def start_application():
    app = FastAPI()
    configure_middleware(app)
    create_tables()
    return app


app = start_application()


@app.get("/")
async def root():
    return {"message": "Welcome to champions league."}
