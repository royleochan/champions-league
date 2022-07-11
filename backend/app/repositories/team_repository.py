from typing import Type

from .base_repository import BaseRepository
from ..models.team import Team
from ..schemas.team_schema import TeamBase


class TeamRepository(BaseRepository[Team, TeamBase]):
    def __init__(self, model: Type[Team]):
        super().__init__(model)


team_repository = TeamRepository(Team)
