# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal

from python_splitit_client.type.address_data import AddressData
from python_splitit_client.type.authorization_model import AuthorizationModel
from python_splitit_client.type.bluesnap_vaulted_shopper_token import BluesnapVaultedShopperToken
from python_splitit_client.type.card_brand import CardBrand
from python_splitit_client.type.card_data import CardData
from python_splitit_client.type.card_type import CardType
from python_splitit_client.type.gw_authorization_status import GwAuthorizationStatus
from python_splitit_client.type.installment import Installment
from python_splitit_client.type.installment_status import InstallmentStatus
from python_splitit_client.type.links_data import LinksData
from python_splitit_client.type.mocker_shopper_token import MockerShopperToken
from python_splitit_client.type.payment_method_model import PaymentMethodModel
from python_splitit_client.type.payment_method_type import PaymentMethodType
from python_splitit_client.type.plan_status import PlanStatus
from python_splitit_client.type.purchase_method import PurchaseMethod
from python_splitit_client.type.refund_model import RefundModel
from python_splitit_client.type.refund_status import RefundStatus
from python_splitit_client.type.search_installment_plan_response_item import SearchInstallmentPlanResponseItem
from python_splitit_client.type.search_installment_plan_response_item_extended_params import SearchInstallmentPlanResponseItemExtendedParams
from python_splitit_client.type.shopper_data import ShopperData
from python_splitit_client.type.spreedly_token import SpreedlyToken
from python_splitit_client.type.three_ds_redirect_data_v3 import ThreeDsRedirectDataV3
from python_splitit_client.type.three_ds_redirect_data_v3_params import ThreeDsRedirectDataV3Params

class RequiredInstallmentPlanSearchResponse(TypedDict):
    pass

class OptionalInstallmentPlanSearchResponse(TypedDict, total=False):
    PlanList: typing.List[SearchInstallmentPlanResponseItem]

class InstallmentPlanSearchResponse(RequiredInstallmentPlanSearchResponse, OptionalInstallmentPlanSearchResponse):
    pass