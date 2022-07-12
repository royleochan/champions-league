from .common import ApiBase


class TeamResult(ApiBase):
    team: str
    wins: int
    losses: int
    draws: int
    points: int
