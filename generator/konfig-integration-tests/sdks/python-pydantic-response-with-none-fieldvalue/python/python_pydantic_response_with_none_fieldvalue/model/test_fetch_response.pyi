# coding: utf-8

"""
    python-pydantic-response-with-none-fieldvalue API

    A simple API based for testing python-pydantic-response-with-none-fieldvalue.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_pydantic_response_with_none_fieldvalue import schemas  # noqa: F401


class TestFetchResponse(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "date",
            "missingDate",
            "missingValue",
            "value",
        }
        
        class properties:
            date = schemas.DateTimeSchema
            missingDate = schemas.DateTimeSchema
            value = schemas.StrSchema
            missingValue = schemas.StrSchema
            __annotations__ = {
                "date": date,
                "missingDate": missingDate,
                "value": value,
                "missingValue": missingValue,
            }
    
    date: MetaOapg.properties.date
    missingDate: MetaOapg.properties.missingDate
    missingValue: MetaOapg.properties.missingValue
    value: MetaOapg.properties.value
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["date"]) -> MetaOapg.properties.date: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["missingDate"]) -> MetaOapg.properties.missingDate: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["value"]) -> MetaOapg.properties.value: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["missingValue"]) -> MetaOapg.properties.missingValue: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["date", "missingDate", "value", "missingValue", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["date"]) -> MetaOapg.properties.date: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["missingDate"]) -> MetaOapg.properties.missingDate: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["value"]) -> MetaOapg.properties.value: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["missingValue"]) -> MetaOapg.properties.missingValue: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["date", "missingDate", "value", "missingValue", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        date: typing.Union[MetaOapg.properties.date, str, datetime, ],
        missingDate: typing.Union[MetaOapg.properties.missingDate, str, datetime, ],
        missingValue: typing.Union[MetaOapg.properties.missingValue, str, ],
        value: typing.Union[MetaOapg.properties.value, str, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'TestFetchResponse':
        return super().__new__(
            cls,
            *args,
            date=date,
            missingDate=missingDate,
            missingValue=missingValue,
            value=value,
            _configuration=_configuration,
            **kwargs,
        )