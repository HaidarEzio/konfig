# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
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

from carbon import schemas  # noqa: F401


class OrganizationUserFileTagsRemove(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "organization_user_file_id",
            "tags",
        }
        
        class properties:
        
            @staticmethod
            def tags() -> typing.Type['OrganizationUserFileTagsRemoveTags']:
                return OrganizationUserFileTagsRemoveTags
            organization_user_file_id = schemas.IntSchema
            __annotations__ = {
                "tags": tags,
                "organization_user_file_id": organization_user_file_id,
            }
    
    organization_user_file_id: MetaOapg.properties.organization_user_file_id
    tags: 'OrganizationUserFileTagsRemoveTags'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["tags"]) -> 'OrganizationUserFileTagsRemoveTags': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["organization_user_file_id"]) -> MetaOapg.properties.organization_user_file_id: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["tags", "organization_user_file_id", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["tags"]) -> 'OrganizationUserFileTagsRemoveTags': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["organization_user_file_id"]) -> MetaOapg.properties.organization_user_file_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["tags", "organization_user_file_id", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        organization_user_file_id: typing.Union[MetaOapg.properties.organization_user_file_id, decimal.Decimal, int, ],
        tags: 'OrganizationUserFileTagsRemoveTags',
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'OrganizationUserFileTagsRemove':
        return super().__new__(
            cls,
            *args,
            organization_user_file_id=organization_user_file_id,
            tags=tags,
            _configuration=_configuration,
            **kwargs,
        )

from carbon.model.organization_user_file_tags_remove_tags import OrganizationUserFileTagsRemoveTags