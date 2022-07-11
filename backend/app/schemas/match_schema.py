from .common import ApiBase


class MatchBase(ApiBase):
    team_one: str
    team_two: str
    team_one_goals: int
    team_two_goals: int
