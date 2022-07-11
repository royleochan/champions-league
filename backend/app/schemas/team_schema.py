from .common import ApiBase


class TeamBase(ApiBase):
    name: str
    group: int
    registration_date: str
