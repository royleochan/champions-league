from typing import Generic, List, Type, TypeVar
from pydantic import BaseModel
from sqlalchemy.orm import Session

from ..models.base import Base

ModelType = TypeVar("ModelType", bound=Base)
BaseSchemaType = TypeVar("BaseSchemaType", bound=BaseModel)


class BaseRepository(Generic[ModelType, BaseSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get_all(self, db: Session) -> List[ModelType]:
        return db.query(self.model).all()

    def bulk_create(self, objects: List[BaseSchemaType], db: Session) -> List[ModelType]:
        to_create = [self.model(**obj) for obj in objects]
        db.bulk_save_objects(to_create)
        db.commit()

        return to_create
