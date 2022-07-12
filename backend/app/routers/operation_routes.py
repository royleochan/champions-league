
from typing import List
from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from ..database.database import get_db
from ..schemas.operation_schema import TeamResult
from ..repositories.team_repository import team_repository
from ..repositories.match_repository import match_repository


router = APIRouter(
    prefix="/operation",
    tags=['Operations']
)


@router.delete("/reset")
async def compute_results(db: Session = Depends(get_db)):
    match_repository.delete_all(db)
    team_repository.delete_all(db)

    return {"message": "Successfully reset data."}
