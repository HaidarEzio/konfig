# coding: utf-8

"""
    python-pydantic-reserved-namespace-model API

    A simple API based for testing python-pydantic-reserved-namespace-model.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal
from pydantic import BaseModel, Field, RootModel

from python_pydantic_reserved_namespace_model.pydantic.inner import Inner

class TestFetchResponse(BaseModel):
    model_config_: Inner = Field(None, alias='model_config')