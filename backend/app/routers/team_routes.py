
from typing import List
from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from ..database.database import get_db
from ..schemas.team_schema import TeamBase
from ..services import team_service


router = APIRouter(
    prefix="/team",
    tags=['Team']
)


@router.get("", response_model=List[TeamBase])
async def get_teams(db: Session = Depends(get_db)):
    return team_service.get_all_teams(db)


@router.post("",  response_model=List[TeamBase], status_code=201)
def create_teams(teams: List[TeamBase], db: Session = Depends(get_db)):
    created_teams = team_service.bulk_create_teams(teams, db)

    return created_teams
