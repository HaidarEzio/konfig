import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ConnexPayTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="connex-pay-typescript-sdk"
      metaDescription={`ConnexPay is the first and only company to bring together the two sides of the payment process—payments acceptance and virtual payments issuing—into a single platform with one contract and one reconciliation.

The flexibility of this technology allows clients to adopt the full end-to-end acquiring and issuing solution or leverage ConnexPay's innovative intelligent routing issuing-only platform.

Through innovative and patent-pending payments technology, ConnexPay provides reduced payments risk, a new source of revenue, automated reconciliation, and guaranteed lower merchant processing fees—all while avoiding large lines of credit or prepayments.

Founded in 2017, ConnexPay is a leading payments provider for travel agencies and brokers, ecommerce providers, online marketplaces, and more.`}
      company="ConnexPay"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/logo.webp"
      companyKebabCase="connex-pay"
      clientNameCamelCase="connexPay"
      homepage="connexpay.com/"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/favicon.png"
      contactUrl="https://docs.connexpay.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","online_payments","fintech","payments","payment_services"]}
      methods={[
  {
    "url": "/api/v1/token",
    "method": "issueAuthenticationToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Issuing Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE",
        "default": "password"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sales",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sale",
    "typeScriptTag": "sale",
    "description": "Create Sale",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID",
        "default": "{{Device}}"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": null
      },
      {
        "name": "TenderType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "credit"
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{{SequenceNumber}}"
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{{OrderNumber}}"
      },
      {
        "name": "SendReceipt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "RiskProcessingOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "StatementDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{{StatementDescription}}"
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ActivationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RequestIp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ConnexPayTransaction",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "RiskData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "Card",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "EnhancedData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomParameters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "LabelIDs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "BrowserData",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/void",
    "method": "createVoid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Void",
    "typeScriptTag": "void",
    "description": "Void",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "SaleGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Conditional Mandatory when SaleReferenceNumber, AuthOnlyGuid and ReturnGuid parameters are not present"
      },
      {
        "name": "ReturnGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Conditional Mandatory when SaleGuid, AuthOnlyGuid and SaleReferenceNumber parameters are not present"
      },
      {
        "name": "SaleReferenceNumber",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "AuthOnlyGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Conditional Mandatory when SaleGuid, SaleReferenceNumber and ReturnGuid parameters are not present"
      },
      {
        "name": "VoidReason",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/returns",
    "method": "itemRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Return",
    "typeScriptTag": "return",
    "description": "Return",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "SaleGuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SaleReferenceNumber",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnRetryCard",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/cancel",
    "method": "entireTripCancellation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancellation",
    "typeScriptTag": "cancellation",
    "description": "Cancel",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "SaleGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SALEGUID"
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VoidReason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authonlys",
    "method": "acquireClientAuthorization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Auth Only",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SendReceipt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "StatementDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RiskData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "Card",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "EnhancedData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BrowserData",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Captures",
    "method": "captureAuthorization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Capture",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "AuthOnlyGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHONLYGUID"
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ConnexPayTransaction",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomParameters",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/verify",
    "method": "cardBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verification",
    "typeScriptTag": "verification",
    "description": "Verify",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID",
        "default": "{{Device}}"
      },
      {
        "name": "Card",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/3ds",
    "method": "obtain3DSecureAuthentication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "3DS Authentication",
    "parameters": [
      {
        "name": "Card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID",
        "default": "{{deviceGuid}}"
      },
      {
        "name": "BrowserData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/3ds/{GUID}",
    "method": "3DsAuthenticationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StatusGroup",
    "typeScriptTag": "statusGroup",
    "description": "Get 3DS Status Group",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "required": true,
        "description": "Replace the original guid value with the guid that was returned with the status response indicating a device fingerprint or cardholder challenge is required to complete 3DS authentication..",
        "example": "GUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sales/UpdateFutureSale",
    "method": "updateDelayedActivation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sale",
    "typeScriptTag": "sale",
    "description": "Update Delayed Sale",
    "parameters": [
      {
        "name": "DeviceGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEGUID"
      },
      {
        "name": "SaleGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SALEGUID"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ActivationDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sales/Activate/{SaleGuid}",
    "method": "activateDelayed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sale",
    "typeScriptTag": "sale",
    "description": "Activate Delayed Sale",
    "parameters": [
      {
        "name": "saleGuid",
        "schema": "string",
        "required": true,
        "description": "The sale guid returned upon initial creation of the delayed activation sale.",
        "example": "SALEGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/Sales/{exportable}/{pageNumber}/{pageSize}",
    "method": "searchSales",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sale",
    "typeScriptTag": "sale",
    "description": "Search sales",
    "parameters": [
      {
        "name": "exportable",
        "schema": "string",
        "required": true,
        "description": "True or False. It means if you want results exportable to CSV.",
        "example": "EXPORTABLE",
        "default": "Mandatory"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Int. Number of page of the results. Default is 1 (Page size default is 500).",
        "example": 0,
        "default": null
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": true,
        "description": "Int. Size of each page of the results. Default is 500.",
        "example": "PAGESIZE",
        "default": "Optional"
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "AmountFrom",
        "schema": "number",
        "description": "",
        "default": null
      },
      {
        "name": "AmountTo",
        "schema": "number",
        "description": "",
        "default": null
      },
      {
        "name": "CardHolderName",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "CardLastFour",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "CardType",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "InvoiceNumber",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "OrderDateFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "OrderDateTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Status",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "MerchantCustomerId",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Activated",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "ActivationDateFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "ActivationDateTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/Voids/{exportable}/{pageNumber}/{pageSize}",
    "method": "searchVoids",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Void",
    "typeScriptTag": "void",
    "description": "Search voids",
    "parameters": [
      {
        "name": "exportable",
        "schema": "string",
        "required": true,
        "description": "True or False. It means if you want results exportable to CSV.",
        "example": "EXPORTABLE",
        "default": "Mandatory"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Int. Number of page of the results. Default is 1 (Page size default is 500).",
        "example": 0,
        "default": null
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": true,
        "description": "Int. Size of each page of the results. Default is 500.",
        "example": "PAGESIZE",
        "default": "Optional"
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "VoidReason",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Status",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/Returns/{exportable}/{pageNumber}/{pageSize}",
    "method": "searchSaleReturns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Return",
    "typeScriptTag": "return",
    "description": "Search returns",
    "parameters": [
      {
        "name": "exportable",
        "schema": "string",
        "required": true,
        "description": "True or False. It means if you want results exportable to CSV.",
        "example": "EXPORTABLE",
        "default": "Mandatory"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Int. Number of page of the results. Default is 1 (Page size default is 500).",
        "example": 0,
        "default": null
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": true,
        "description": "Int. Size of each page of the results. Default is 500.",
        "example": "PAGESIZE",
        "default": "Optional"
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "AmountFrom",
        "schema": "number",
        "description": "",
        "default": null
      },
      {
        "name": "AmountTo",
        "schema": "number",
        "description": "",
        "default": null
      },
      {
        "name": "CardHolderName",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Status",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/Verify/{exportable}/{pageNumber}/{pageSize}",
    "method": "searchVerifyOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Validation",
    "typeScriptTag": "validation",
    "description": "Search verify",
    "parameters": [
      {
        "name": "exportable",
        "schema": "string",
        "required": true,
        "description": "True or False. It means if you want results exportable to CSV.",
        "example": "EXPORTABLE",
        "default": "Mandatory"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Int. Number of page of the results. Default is 1 (Page size default is 500).",
        "example": 0,
        "default": null
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": true,
        "description": "Int. Size of each page of the results. Default is 500.",
        "example": "PAGESIZE",
        "default": "Optional"
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "CardLastFour",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "CardHolderName",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "CardType",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampFrom",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "TimeStampTo",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Status",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/HostedPaymentPageRequests",
    "method": "requestHppToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "HPP Token Request",
    "parameters": [
      {
        "name": "MerchantName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTNAME"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ResultRedirectUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LogoUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TenderTypeOptions",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "Credit"
        ]
      },
      {
        "name": "Expiration",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Current DateTime UTC"
      },
      {
        "name": "Sale",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/MerchantSelfServiceFunding",
    "method": "merchantCashBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Funding",
    "typeScriptTag": "funding",
    "description": "Client Self-Service Funding",
    "parameters": [
      {
        "name": "merchantGUID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "isFundCashBalance",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/MerchantFlexFunding/Funds/Transfer",
    "method": "transferMerchantCashBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Funding",
    "typeScriptTag": "funding",
    "description": "Client Funds Transfer",
    "parameters": [
      {
        "name": "TransferredFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSFERREDFROM"
      },
      {
        "name": "TransferredTo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSFERREDTO"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard",
    "method": "createVirtualCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardIssuance",
    "typeScriptTag": "cardIssuance",
    "description": "Issue Card",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "Phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "State",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ZipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "UsageLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ExpirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PurchaseType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURCHASETYPE"
      },
      {
        "name": "MIDWhitelist",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "MIDBlacklist",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{{OrderNumber}}"
      },
      {
        "name": "IncomingTransactionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SupplierId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "NonDomesticSupplier",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Transmission",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnCardData",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomParameters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "LabelIDs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/IssueLite",
    "method": "createVirtualCardLite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardIssue",
    "typeScriptTag": "cardIssue",
    "description": "Issue Lite",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID",
        "default": "MerchantGuid"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME",
        "default": "Jane"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME",
        "default": "Doe"
      },
      {
        "name": "Phone",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "1234567890"
      },
      {
        "name": "Address1",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "123 Test Street"
      },
      {
        "name": "Address2",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Suite 185"
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Alpharetta"
      },
      {
        "name": "State",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "GA"
      },
      {
        "name": "ZipCode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "30004"
      },
      {
        "name": "Country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "US"
      },
      {
        "name": "UsageLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 100
      },
      {
        "name": "ExpirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PurchaseType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURCHASETYPE",
        "default": "01"
      },
      {
        "name": "MIDWhitelist",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "MIDBlacklist",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "987654321"
      },
      {
        "name": "SupplierId",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "DL"
      },
      {
        "name": "NonDomesticSupplier",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "1234A"
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Transmission",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnCardData",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomParameters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ActivationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "1234"
      },
      {
        "name": "LabelIDs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/LodgedCard",
    "method": "createLodgedCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Issue Lodged Card",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "Phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "State",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ZipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "UsageLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LimitWindow",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIMITWINDOW"
      },
      {
        "name": "ExpirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PurchaseType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SupplierId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "NonDomesticSupplier",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Transmission",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnCardData",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LabelIDs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomParameters",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/{cardGuid}",
    "method": "updateCardDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update Card",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identififer for the Card.",
        "example": "CARDGUID"
      },
      {
        "name": "PurchaseType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MIDWhitelist",
        "schema": "array",
        "description": ""
      },
      {
        "name": "MIDBlacklist",
        "schema": "array",
        "description": ""
      },
      {
        "name": "UsageLimit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/LodgedCard/{CardGuid}",
    "method": "updateLodgedCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update Lodged Card",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identifier for the Card.",
        "example": "CARDGUID"
      },
      {
        "name": "UsageLimit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "LimitWindow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PurchaseType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Activated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/TerminateCard/<guid>",
    "method": "terminateByDate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Terminate Card",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "required": true,
        "description": "Card’s guid to terminate",
        "example": "GUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/Cancel/{{CardGuid}}",
    "method": "cancelVirtualCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Cancel Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/SendPaymentInfo/{cardGuid}",
    "method": "resendTransmissionInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Resend Transmission",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identififer for the Card.",
        "example": "CARDGUID"
      },
      {
        "name": "TransmissionMethods",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "EmailRecipient",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MerchantPhoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RecipientName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DaysToExpire",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FaxFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FaxRecipient",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Cards/{CardGuid}/{ShowFullPan}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Get Issue Card Detail",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identifier for the VCC.",
        "example": "CARDGUID"
      },
      {
        "name": "showFullPan",
        "schema": "boolean",
        "required": true,
        "description": "Set to True to indicate whether the response should include the full account number.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Addendum/VirtualCard",
    "method": "createVirtualCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addendum",
    "typeScriptTag": "addendum",
    "description": "Virtual Card Addendum",
    "parameters": [
      {
        "name": "ItemGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "Value",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "Category",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "IdExternal",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Note",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Sequence",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Addendum/Remove/<guid>",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addendum",
    "typeScriptTag": "addendum",
    "description": "Addendum Remove",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "required": true,
        "description": "The Addendum guid to terminate.",
        "example": "GUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/UpdateDelayedCard/{{CardGuid}}",
    "method": "updateDelayedActivation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update Virtual Card with Delayed Activation",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identifier for the Card.",
        "example": "CARDGUID"
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "ActivationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountLimit",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "TerminateDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueCard/ActivateDelayedCard/{{CardGuid}}",
    "method": "activateDelayed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Activate Virtual Card with Delayed Activation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Merchants/{merchantGuid}/Payees",
    "method": "createPayee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MerchantPayees",
    "typeScriptTag": "merchantPayees",
    "description": "Create merchant payee",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The merchant guid",
        "example": "MERCHANTGUID"
      },
      {
        "name": "idMerchant",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "isBusiness",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dbaName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEEID"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preferredPayoutMethod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREFERREDPAYOUTMETHOD"
      },
      {
        "name": "preferredCardBrand",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preferredCardClass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "guid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid ModelState"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to merchant."
      },
      {
        "statusCode": "409",
        "description": "A payee with this payeeID already exists"
      }
    ]
  },
  {
    "url": "/api/v1/Merchants/{merchantGuid}/Payees/Search/{page}/{pagesize}",
    "method": "getPayees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MerchantPayees",
    "typeScriptTag": "merchantPayees",
    "description": "Get merchant payees",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The merchant guid",
        "example": "MERCHANTGUID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page number",
        "example": 0
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page",
        "example": 0
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to merchant."
      }
    ]
  },
  {
    "url": "/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}",
    "method": "deletePayee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "MerchantPayees",
    "typeScriptTag": "merchantPayees",
    "description": "Delete merchant payee",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The merchant guid",
        "example": "MERCHANTGUID"
      },
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": true,
        "description": "The payee guid",
        "example": "PAYEEGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Merchant Found"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to merchant."
      }
    ]
  },
  {
    "url": "/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}",
    "method": "getPayee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MerchantPayees",
    "typeScriptTag": "merchantPayees",
    "description": "Get a merchant payee by guid",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The merchant guid",
        "example": "MERCHANTGUID"
      },
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": true,
        "description": "The payee guid",
        "example": "PAYEEGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No MerchantPayee found"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to merchant."
      }
    ]
  },
  {
    "url": "/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}",
    "method": "updatePayee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "MerchantPayees",
    "typeScriptTag": "merchantPayees",
    "description": "Update merchant payee",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The merchant guid",
        "example": "MERCHANTGUID"
      },
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": true,
        "description": "The payee guid",
        "example": "PAYEEGUID"
      },
      {
        "name": "idMerchant",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "isBusiness",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dbaName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEEID"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preferredPayoutMethod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREFERREDPAYOUTMETHOD"
      },
      {
        "name": "preferredCardBrand",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preferredCardClass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "guid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to merchant."
      },
      {
        "statusCode": "409",
        "description": "A payee with this payeeID already exists"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payees",
    "method": "getPayee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Get Payee",
    "parameters": [
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": false,
        "description": "Globally Unique Identifier for the Payee being retrieved"
      },
      {
        "name": "payeeEmailAddress",
        "schema": "string",
        "required": false,
        "description": "Email address of the Payee being retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The Payee's guid or email address must be provided"
      },
      {
        "statusCode": "401",
        "description": "User doesn't have access to this merchant"
      },
      {
        "statusCode": "404",
        "description": "Payee doesn't exist or doesn't belong to the user"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payees",
    "method": "createPayee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Create Payee",
    "parameters": [
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "409",
        "description": "A Payee with the provided email address already exists"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payees/{payeeGuid}/{status}",
    "method": "managePayee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Manage Payee",
    "parameters": [
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": true,
        "description": "Globally Unique Identifier for the Payee that will be changed",
        "example": "PAYEEGUID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Must be 'enable' or 'disable'",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status must be 'enable' or 'disable'"
      },
      {
        "statusCode": "401",
        "description": "User doesn't have access to this merchant"
      },
      {
        "statusCode": "404",
        "description": "Payee doesn't exist or doesn't belong to the user"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payees/{payeeGuid}",
    "method": "updatePayee",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Update Payee",
    "parameters": [
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": true,
        "description": "Globally Unique Identifier for a the Payee that will be updated",
        "example": "PAYEEGUID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "payeeGuid must be a valid guid value"
      },
      {
        "statusCode": "401",
        "description": "User doesn't have access to this merchant"
      },
      {
        "statusCode": "404",
        "description": "Payee doesn't exist or doesn't belong to the user"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payouts",
    "method": "createPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Create Payout",
    "parameters": [
      {
        "name": "payoutGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "payoutReferenceToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMO"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "orderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "associationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labelIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "BadRequest"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payouts/{payoutGuid}/Cancel",
    "method": "cancelPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Cancel Payments",
    "parameters": [
      {
        "name": "payoutGuid",
        "schema": "string",
        "required": true,
        "description": "Globally Unique Identifier for a the Payout that will be changed",
        "example": "PAYOUTGUID"
      },
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "payments",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Payment list must not be empty"
      },
      {
        "statusCode": "404",
        "description": "Payout doesn't exist or doesn't belong to the user --OR-- Payment doesn't exist or doesn't belong to payout"
      },
      {
        "statusCode": "409",
        "description": "Payout is in 'Rejected' State --OR-- All Payments must be in 'Approved' state"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payouts/{payoutGuid}",
    "method": "getPayoutDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Get Payout Details",
    "parameters": [
      {
        "name": "payoutGuid",
        "schema": "string",
        "required": true,
        "description": "Globally Unique Identifier for a the Payout that will be retrieved",
        "example": "PAYOUTGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "User doesn't have access to this merchant"
      },
      {
        "statusCode": "404",
        "description": "Payout doesn't exist or doesn't belong to the user"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/AuthenticatePaymentWidget",
    "method": "getAuthenticationTokenAsync",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Get Authentication Token for DropInUI",
    "parameters": [
      {
        "name": "payeeGuid",
        "schema": "string",
        "required": false,
        "description": "Globally Unique Identifier for the Payee being authenticated."
      },
      {
        "name": "payeeEmailAddress",
        "schema": "string",
        "required": false,
        "description": "Email address of the Payee being retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A valid Payee guid or email address must be provided"
      },
      {
        "statusCode": "401",
        "description": "User doesn't have access to this merchant"
      },
      {
        "statusCode": "404",
        "description": "Payee doesn't exist or doesn't belong to the user"
      }
    ]
  },
  {
    "url": "/api/v1/PushToCard/Payments/{ridGuid}/{cardId}",
    "method": "pushFundsToCardAsync",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PushToCard",
    "typeScriptTag": "pushToCard",
    "description": "Push Funds to a Card",
    "parameters": [
      {
        "name": "ridGuid",
        "schema": "string",
        "required": true,
        "description": "For Payment Widget clients. A ridGuid will will be returned upon creation of a Payout. That must be saved and passed here to complete the process.",
        "example": "RIDGUID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "For Payment Widget clients. The cardId is retrieved by calling the Get Payee endpoint.",
        "example": "CARDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Valid values for ridGuid and cardId must be provided"
      }
    ]
  },
  {
    "url": "/api/v1/IssueACH",
    "method": "createAchCreditPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Issue ACH",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PayeeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEENAME"
      },
      {
        "name": "StatementCompanyName",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Merchant Alias"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IncomingTransactionCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCOMINGTRANSACTIONCODE"
      },
      {
        "name": "AccountHolder",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/IssueACH/IssueLite",
    "method": "createCreditPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ACH",
    "typeScriptTag": "ach",
    "description": "Issue ACH Lite",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PayeeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEENAME"
      },
      {
        "name": "StatementCompanyName",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Merchant Alias"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AccountHolder",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "7H2345"
      },
      {
        "name": "SequenceNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AssociationId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Addendum/ACH",
    "method": "createAchPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addendum",
    "typeScriptTag": "addendum",
    "description": "ACH Purchase Addendum",
    "parameters": [
      {
        "name": "ItemGuid",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "Value",
        "schema": "string",
        "description": "",
        "default": "Mandatory"
      },
      {
        "name": "Category",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "IdExternal",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Note",
        "schema": "string",
        "description": "",
        "default": "Optional"
      },
      {
        "name": "Sequence",
        "schema": "string",
        "description": "",
        "default": "Optional"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/merchantsupplier/settings",
    "method": "tokenizeBankAccountInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Setting",
    "typeScriptTag": "setting",
    "description": "Merchant Supplier Setting",
    "parameters": [
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "SupplierName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERNAME"
      },
      {
        "name": "AccountHolder",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Cards/Transactions/{cardGuid}",
    "method": "searchVirtualCardHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Search Virtual Card History",
    "parameters": [
      {
        "name": "cardGuid",
        "schema": "string",
        "required": true,
        "description": "Global Unique Identifier for the Card. Required parameter.",
        "example": "CARDGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/AvailableFunds/{merchantGuid}",
    "method": "getAvailableDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Funds",
    "typeScriptTag": "funds",
    "description": "Available Funds",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "Merchant's Guid assigned by ConnexPay",
        "example": "MERCHANTGUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/PurchaseEventHistory/Resend",
    "method": "purchaseEventHistoryResend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Replay",
    "typeScriptTag": "replay",
    "description": "Purchase Event History (Replay Webhooks)",
    "parameters": [
      {
        "name": "SourceGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EventGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FromDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ToDateTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/chargeback/GetByUser",
    "method": "getChargebacksByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sale",
    "typeScriptTag": "sale",
    "description": "Sales Chargebacks",
    "parameters": [
      {
        "name": "/getByUser?startDate=20161201",
        "schema": "string",
        "required": true,
        "description": "Return all chargebacks for the authenticated user with a start date",
        "example": "/GETBYUSER?STARTDATE=2016-12-01"
      },
      {
        "name": "/getByUser?startDate=20161201&endDate=20161201",
        "schema": "string",
        "required": true,
        "description": "Return all chargebacks for the authenticated user with a start and end date",
        "example": "/GETBYUSER?STARTDATE=2016-12-01&ENDDATE=2016-12-01"
      },
      {
        "name": "/getByResolvedDate?startDate=20190920&endDate=20191021",
        "schema": "string",
        "required": true,
        "description": "Return all chargebacks for the authenticated user with a start and end date based on resolved date",
        "example": "/GETBYRESOLVEDDATE?STARTDATE=2019-09-20&ENDDATE=2019-10-21"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authenticate",
    "method": "generateReportingToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Reporting Token",
    "parameters": [
      {
        "name": "UserName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "Password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Accounting/DailyDetail",
    "method": "getDailyDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Get Daily Accounting Detail",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The client identifier for the requested transactions.",
        "example": "ab0123f5-7648-4e27-8709-ad0f4e162c20"
      },
      {
        "name": "releasedDate",
        "schema": "string",
        "required": true,
        "description": "Date on which the requested transactions were released to the client.",
        "example": "2022-12-31"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Accounting/DailySummary",
    "method": "getDailySummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Get Daily Accounting Summary",
    "parameters": [
      {
        "name": "merchantGuid",
        "schema": "string",
        "required": true,
        "description": "The client identifier for the requested transactions.",
        "example": "ab0123f5-7648-4e27-8709-ad0f4e162c20"
      },
      {
        "name": "releasedDate",
        "schema": "string",
        "required": true,
        "description": "Date on which the requested transactions were released to the client.",
        "example": "2022-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/IssuedCards",
    "method": "searchIssuedVirtualCards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Search Issued Cards",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Number of page of the results. Default is 1.",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "Size of each page of the results. Default is 1000.",
        "example": 0
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "SaleGuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IncomingTransactionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TimeStampFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TimeStampTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IssuedAmountFrom",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "IssuedAmountTo",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "OutgoingTransactionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SettledAmountFrom",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SettledAmountTo",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnedAmountFrom",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnedAmountTo",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/Search/Settlements",
    "method": "searchVirtualCardSettlements",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Settlement",
    "typeScriptTag": "settlement",
    "description": "Search Settlements",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Number of pages of results to return. Default is 1.",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "Size of each page of results. Default is 1000.",
        "example": 0
      },
      {
        "name": "MerchantGuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTGUID"
      },
      {
        "name": "DateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PostedDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PostedDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OrderNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IssuedAmountFrom",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IssuedAmountTo",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IssuedCardLastFour",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PostedAmountFrom",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "PostedAmountTo",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ExpirationDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ExpirationDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ConnexPay Reporting API"
      apiBaseUrl="https://sandboxreportingapi.connexpay.com"
      apiVersion="v1"
      endpoints={56}
      sdkMethods={59}
      schemas={142}
      parameters={503}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/connexpay/openapi.yaml"
      developerDocumentation="docs.connexpay.com/reference"
    />
  );
}
  