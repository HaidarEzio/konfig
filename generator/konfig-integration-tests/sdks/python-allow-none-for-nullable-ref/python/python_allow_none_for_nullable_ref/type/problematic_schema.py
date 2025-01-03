# coding: utf-8

"""
    python-allow-none-for-nullable-ref API

    A simple API based for testing python-allow-none-for-nullable-ref.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_allow_none_for_nullable_ref.type.regular_object_nullable import RegularObjectNullable

class RequiredProblematicSchema(TypedDict):
    pass

class OptionalProblematicSchema(TypedDict, total=False):
    # WARNING: This property is deprecated
    # This property is tested to ensure that we can pass a None value
    nullable_property: typing.Optional[RegularObjectNullable]

class ProblematicSchema(RequiredProblematicSchema, OptionalProblematicSchema):
    pass
