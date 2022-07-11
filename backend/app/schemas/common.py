from pydantic import BaseModel
from humps import camelize


class ApiBase(BaseModel):
    class Config:
        alias_generator = camelize
        orm_mode = True
        allow_population_by_field_name = True
