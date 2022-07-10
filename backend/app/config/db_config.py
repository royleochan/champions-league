from pydantic import BaseSettings


class DbConfig(BaseSettings):
    db_host: str
    database: str
    db_user: str
    db_password: str

    class Config:
        env_file = ".env"
