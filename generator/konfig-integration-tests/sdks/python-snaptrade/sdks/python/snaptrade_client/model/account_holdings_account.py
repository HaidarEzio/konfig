# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
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

from snaptrade_client import schemas  # noqa: F401


class AccountHoldingsAccount(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Account Holdings with Account ID
    """


    class MetaOapg:
        
        class properties:
        
            @staticmethod
            def account() -> typing.Type['SnapTradeHoldingsAccountAccountId']:
                return SnapTradeHoldingsAccountAccountId
            
            
            class balances(
                schemas.ListBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneTupleMixin
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['Balance']:
                        return Balance
            
            
                def __new__(
                    cls,
                    *args: typing.Union[list, tuple, None, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'balances':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class positions(
                schemas.ListBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneTupleMixin
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['Position']:
                        return Position
            
            
                def __new__(
                    cls,
                    *args: typing.Union[list, tuple, None, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'positions':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class option_positions(
                schemas.ListBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneTupleMixin
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['OptionsPosition']:
                        return OptionsPosition
            
            
                def __new__(
                    cls,
                    *args: typing.Union[list, tuple, None, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'option_positions':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class orders(
                schemas.ListBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneTupleMixin
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['AccountOrderRecord']:
                        return AccountOrderRecord
            
            
                def __new__(
                    cls,
                    *args: typing.Union[list, tuple, None, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'orders':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
        
            @staticmethod
            def total_value() -> typing.Type['SnapTradeHoldingsTotalValue']:
                return SnapTradeHoldingsTotalValue
            __annotations__ = {
                "account": account,
                "balances": balances,
                "positions": positions,
                "option_positions": option_positions,
                "orders": orders,
                "total_value": total_value,
            }
        additional_properties = schemas.AnyTypeSchema
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["account"]) -> 'SnapTradeHoldingsAccountAccountId': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["balances"]) -> MetaOapg.properties.balances: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["positions"]) -> MetaOapg.properties.positions: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["option_positions"]) -> MetaOapg.properties.option_positions: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["orders"]) -> MetaOapg.properties.orders: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["total_value"]) -> 'SnapTradeHoldingsTotalValue': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["account"], typing_extensions.Literal["balances"], typing_extensions.Literal["positions"], typing_extensions.Literal["option_positions"], typing_extensions.Literal["orders"], typing_extensions.Literal["total_value"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["account"]) -> typing.Union['SnapTradeHoldingsAccountAccountId', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["balances"]) -> typing.Union[MetaOapg.properties.balances, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["positions"]) -> typing.Union[MetaOapg.properties.positions, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["option_positions"]) -> typing.Union[MetaOapg.properties.option_positions, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["orders"]) -> typing.Union[MetaOapg.properties.orders, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["total_value"]) -> typing.Union['SnapTradeHoldingsTotalValue', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["account"], typing_extensions.Literal["balances"], typing_extensions.Literal["positions"], typing_extensions.Literal["option_positions"], typing_extensions.Literal["orders"], typing_extensions.Literal["total_value"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        account: typing.Union['SnapTradeHoldingsAccountAccountId', schemas.Unset] = schemas.unset,
        balances: typing.Union[MetaOapg.properties.balances, list, tuple, None, schemas.Unset] = schemas.unset,
        positions: typing.Union[MetaOapg.properties.positions, list, tuple, None, schemas.Unset] = schemas.unset,
        option_positions: typing.Union[MetaOapg.properties.option_positions, list, tuple, None, schemas.Unset] = schemas.unset,
        orders: typing.Union[MetaOapg.properties.orders, list, tuple, None, schemas.Unset] = schemas.unset,
        total_value: typing.Union['SnapTradeHoldingsTotalValue', schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'AccountHoldingsAccount':
        return super().__new__(
            cls,
            *args,
            account=account,
            balances=balances,
            positions=positions,
            option_positions=option_positions,
            orders=orders,
            total_value=total_value,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.account_order_record import AccountOrderRecord
from snaptrade_client.model.balance import Balance
from snaptrade_client.model.options_position import OptionsPosition
from snaptrade_client.model.position import Position
from snaptrade_client.model.snap_trade_holdings_account_account_id import SnapTradeHoldingsAccountAccountId
from snaptrade_client.model.snap_trade_holdings_total_value import SnapTradeHoldingsTotalValue