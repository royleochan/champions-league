from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from .database.database import engine
from .models.base import Base
from .routers import operation_routes, team_routes, match_routes


def include_routers(app):
    app.include_router(team_routes.router)
    app.include_router(match_routes.router)
    app.include_router(operation_routes.router)


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
    include_routers(app)
    create_tables()
    return app


app = start_application()


@app.get("/")
async def root():
    return {"message": "Welcome to champions league."}
