from typing import List
from sqlalchemy.orm import Session

from ..models.team import Team
from ..schemas.team_schema import TeamBase


def get_all_teams(db: Session) -> List[Team]:
    return db.query(Team).all()


def bulk_create_teams(teams: List[TeamBase], db: Session) -> List[Team]:
    to_create = [Team(**team.dict()) for team in teams]
    db.bulk_save_objects(to_create)
    db.commit()

    return to_create
