# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from carbon.type.embedding_and_chunk_embedding import EmbeddingAndChunkEmbedding

class RequiredEmbeddingAndChunk(TypedDict):
    user_file_id: int

    chunk_index: typing.Optional[int]

    source_content: str

    embedding: EmbeddingAndChunkEmbedding

class OptionalEmbeddingAndChunk(TypedDict, total=False):
    pass

class EmbeddingAndChunk(RequiredEmbeddingAndChunk, OptionalEmbeddingAndChunk):
    pass