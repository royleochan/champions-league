from sqlalchemy import Column, DateTime, Integer, String
from datetime import datetime

from .base_class import Base


class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, nullable=False, index=True)
    group = Column(Integer, nullable=False)
    registration_date = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    modified_at = Column(DateTime(timezone=True), default=datetime.utcnow)
