
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
async def reset(db: Session = Depends(get_db)):
    match_repository.delete_all(db)
    team_repository.delete_all(db)

    return {"message": "Successfully reset data."}


@router.get("/results")
async def compute_results(db: Session = Depends(get_db)):
    teams = team_repository.get_all(db)
    matches = match_repository.get_all(db)
    group_one = {team.name: TeamResult(
        team.name, team.registration_date, team.group) for team in teams if team.group == 1}
    group_two = {team.name: TeamResult(
        team.name, team.registration_date, team.group) for team in teams if team.group == 2}

    for match in matches:
        group = group_one if match.team_one in group_one and match.team_two in group_one else group_two
        team_one = group[match.team_one]
        team_two = group[match.team_two]

        team_one.add_goals(match.team_one_goals)
        team_two.add_goals(match.team_two_goals)
        if match.team_one_goals > match.team_two_goals:
            team_one.add_win()
            team_two.add_loss()
        elif match.team_one_goals < match.team_two_goals:
            team_one.add_loss()
            team_two.add_win()
        else:
            team_one.add_draw()
            team_two.add_draw()

    group_one_lst = [team for team in group_one.values()]
    group_two_lst = [team for team in group_two.values()]
    group_one_lst.sort(reverse=True)
    group_two_lst.sort(reverse=True)

    return {
        "one": [vars(team) for team in group_one_lst],
        "two": [vars(team) for team in group_two_lst]
    }
