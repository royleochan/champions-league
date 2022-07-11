from typing import Type

from .base_repository import BaseRepository
from ..models.match import Match
from ..schemas.match_schema import MatchBase


class MatchRepository(BaseRepository[Match, MatchBase]):
    def __init__(self, model: Type[Match]):
        super().__init__(model)


match_repository = MatchRepository(Match)
