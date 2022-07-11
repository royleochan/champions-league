
from typing import List
from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from ..database.database import get_db
from ..schemas.match_schema import MatchBase
from ..repositories.match_repository import match_repository


router = APIRouter(
    prefix="/match",
    tags=['Match']
)


@router.get("", response_model=List[MatchBase])
async def get_matches(db: Session = Depends(get_db)):
    return match_repository.get_all(db)


@router.post("",  response_model=List[MatchBase], status_code=201)
def create_matches(matches: List[MatchBase], db: Session = Depends(get_db)):
    created_matches = match_repository.bulk_create(matches, db)

    return created_matches
