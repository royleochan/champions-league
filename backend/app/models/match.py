from sqlalchemy import Column, DateTime, Integer, String, ForeignKey
from datetime import datetime


from .base_class import Base


class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True)
    team_one = Column(String, ForeignKey("teams.name"))
    team_two = Column(String, ForeignKey("teams.name"))
    team_one_goals = Column(Integer, nullable=False)
    team_two_goals = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    modified_at = Column(DateTime(timezone=True), default=datetime.utcnow)
