import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WinkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="wink-typescript-sdk"
      metaDescription={`Wink helps hotels improve their products and sell them through innovative new sales channels that lets travelers book much more than just the room. We manage the content, distribution, engagement, conversion and payment. We let hotels and affiliates focus on sales while we do the rest.`}
      company="Wink"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/logo.jpg"
      companyKebabCase="wink"
      clientNameCamelCase="wink"
      homepage="wink.travel/"
      lastUpdated={new Date("2024-03-28T00:23:27.639Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/favicon.png"
      // Missing contactUrl
      contactEmail="bjorn@wink.travel"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["travel_expenses","hotel","content_management","engagement","travel_agent_portal"]}
      methods={[
  {
    "url": "/api/company/{companyIdentifier}/supplier-url/{supplierUrlIdentifier}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Delete Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "supplierUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove url with this identifier.",
        "example": "seller-url-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/supplier-url/{supplierUrlIdentifier}",
    "method": "getShareableUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Show Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "supplierUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show link with this identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/supplier-url/{supplierUrlIdentifier}",
    "method": "modifyUrlLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Update link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "supplierUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update url with this identifier.",
        "example": "seller-url-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplierUrlName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Bali Villa"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "twitterAccount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@travelikoworld"
      },
      {
        "name": "facebookAppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "19827398721938798237"
      },
      {
        "name": "theme",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "THEME_1"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hotel-1"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000,
        "default": -1
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}",
    "method": "removeCuratedList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Remove Curated List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}",
    "method": "updateCuratedListByIdentifier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Update Curated List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerIdentifier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Top 3 hotels in Chiang Mai"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NORMAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains both the curated list and all its items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/item/{itemIdentifier}",
    "method": "deleteListItemByIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Delete List Item",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove inventory from curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "itemIdentifier",
        "schema": "string",
        "required": true,
        "description": "Item identifier.",
        "example": "item-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/item/{itemIdentifier}",
    "method": "copyItemToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Copy Item to List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Copy inventory to curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "itemIdentifier",
        "schema": "string",
        "required": true,
        "description": "Item identifier.",
        "example": "item-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetListIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETLISTIDENTIFIER"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/item/{itemIdentifier}",
    "method": "moveListItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Move List Item",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Move inventory to curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "itemIdentifier",
        "schema": "string",
        "required": true,
        "description": "Item identifier.",
        "example": "item-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetListIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETLISTIDENTIFIER"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/{sellerUrlIdentifier}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Delete Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "sellerUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove url with this identifier.",
        "example": "seller-url-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/{sellerUrlIdentifier}",
    "method": "getSpecificUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Show Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "sellerUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show link with this identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/{sellerUrlIdentifier}",
    "method": "modifyLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Update link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "sellerUrlIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update url with this identifier.",
        "example": "seller-url-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerUrlName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Bali Villa"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "bali"
        ]
      },
      {
        "name": "twitterAccount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@travelikoworld"
      },
      {
        "name": "facebookAppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "19827398721938798237"
      },
      {
        "name": "theme",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEME_1"
      },
      {
        "name": "inventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_ROOM"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hotel-1"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "channel-inventory-1"
      },
      {
        "name": "transactionalItemIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "transactional-item-1"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000,
        "default": -1
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/{mapIdentifier}",
    "method": "deleteMapConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Delete Map",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove map owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "mapIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove map record with this identifier.",
        "example": "map-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/{mapIdentifier}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Show Map",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map record owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "mapIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map record with this identifier.",
        "example": "map-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/{mapIdentifier}",
    "method": "updateAdvancedConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Update Map",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update map owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "mapIdentifier",
        "schema": "string",
        "required": true,
        "description": "update map record with this identifier.",
        "example": "map-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My lovely map"
      },
      {
        "name": "typeIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEIDENTIFIER"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST"
      },
      {
        "name": "center",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "draggable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "zoomable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "initialZoomLevel",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 15
      },
      {
        "name": "mapStyle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "normal"
      },
      {
        "name": "mapMarkerColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc2138"
      },
      {
        "name": "mapHeight",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
      },
      {
        "name": "circles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rectangles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "markers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "polygons",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list/{listIdentifier}",
    "method": "deleteRankedGrid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Delete Ranked Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove grid owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Delete grid with this identifier.",
        "example": "ranked-grid-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list/{listIdentifier}",
    "method": "getSpecificRankedGrid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Ranked Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve grid for owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve grid with this identifier.",
        "example": "ranked-grid-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list/{listIdentifier}",
    "method": "updateRankedGrid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Update Ranked Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update list with this identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryRankedListName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My ranked list"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "lookup",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": -1
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MEMBER"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list/{listIdentifier}",
    "method": "removeCuratedList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Delete Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Delete curated list with this identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list/{listIdentifier}",
    "method": "getSpecificCuratedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show seller inventory lists owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve list with this identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list/{listIdentifier}",
    "method": "updateCuratedList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Update Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update list with this identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryListName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My list"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "bali"
        ]
      },
      {
        "name": "listType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LISTIDENTIFIER"
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": -1
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MEMBER"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/{inventoryIdentifier}",
    "method": "removeItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Delete Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to delete item from",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "inventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Delete inventory with this identifier.",
        "example": "card-inventory-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/{inventoryIdentifier}",
    "method": "getSingleCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Show Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to retrieve item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "inventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve inventory with this identifier.",
        "example": "card-inventory-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/{inventoryIdentifier}",
    "method": "updateCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Update Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to update item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "inventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update inventory with this identifier.",
        "example": "card-inventory-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryItemName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My fave travel inventory"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "inventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOTEL"
      },
      {
        "name": "channelInventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_ROOM"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNELINVENTORYIDENTIFIER"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1",
          "cloudinary-image-2"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 500
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "POPULARITY"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration/{engineConfigurationIdentifier}",
    "method": "removeExisting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Remove Customization",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove customization for this company",
        "example": "company-1"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove customization with this identifier",
        "example": "customization-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration/{engineConfigurationIdentifier}",
    "method": "getPrimaryCustomization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Show Customization",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show customization for this company",
        "example": "company-1"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "Load customization with this identifier",
        "example": "customization-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration/{engineConfigurationIdentifier}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Update Customization",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update customization for this company",
        "example": "company-1"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update customization with this application",
        "example": "customization-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engine Configuration 1"
      },
      {
        "name": "appendToPageTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "googleAnalyticsMeasurementId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "googleMapsAPIKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "google-maps-api-123"
      },
      {
        "name": "tawkToKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tawk-to-1"
      },
      {
        "name": "defaultCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD",
        "default": "USD"
      },
      {
        "name": "defaultLanguage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en",
        "default": "en"
      },
      {
        "name": "logos",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hostedBookingEngineUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://my.customtravelsite.com/book",
        "default": "https://ota.wink.travel"
      },
      {
        "name": "selfHosted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "themeColors",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfAdvanceDays",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "numberOfStayDays",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-12-24"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-12-31"
      },
      {
        "name": "roomConfigurations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "useDays",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "promotionalCodes",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "promo-1"
        ]
      },
      {
        "name": "sendBookingNotificationEmailsToProperty",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendBookingNotificationEmailsToBooker",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendBookingNotificationEmailsToChannelManager",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "wcBookClickAction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IBE_MODAL"
      },
      {
        "name": "showUnavailableCard",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "showRankings",
        "schema": "boolean",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/settings",
    "method": "getWinkLinksSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Show WinkLinks settings",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List syndication entries owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/settings",
    "method": "upsertSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Upsert syndication settings",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Update settings for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "intelligent",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "initialDisplayType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LIST",
        "default": "GRID_COLUMNS"
      },
      {
        "name": "profilePictureGeometry",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CIRCLE",
        "default": "CIRCLE"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/{syndicationEntryIdentifier}",
    "method": "deleteEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Delete WinkLinks entry",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication entry owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationEntryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication entry identifier.",
        "example": "syndication-entry-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/{syndicationEntryIdentifier}",
    "method": "showEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Show WinkLinks entry",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication entry owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationEntryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication entry identifier.",
        "example": "syndication-entry-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/{syndicationEntryIdentifier}",
    "method": "updateSyndicationEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Update syndication entry",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create entry for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationEntryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication entry identifier.",
        "example": "syndication-entry-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MrBeast goes to town"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "And on and on he goes"
      },
      {
        "name": "contentUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.google.com"
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEB_LINK"
      },
      {
        "name": "imageList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "videoList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "audioList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ogType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "website"
      },
      {
        "name": "media",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/category/{syndicationCategoryIdentifier}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Delete WinkLinks category",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication category owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationCategoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication category identifier.",
        "example": "syndication-category-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/category/{syndicationCategoryIdentifier}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Show WinkLinks category",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication category owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationCategoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication category identifier.",
        "example": "syndication-category-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/category/{syndicationCategoryIdentifier}",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Update syndication category",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create category for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "syndicationCategoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Syndication category identifier.",
        "example": "syndication-category-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Faves"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Create company",
    "parameters": [
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Company 1"
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Legal Company 1"
      },
      {
        "name": "companyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION"
      },
      {
        "name": "vatID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "vat-1"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.mymainsite.com"
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "geo-name-1"
      },
      {
        "name": "urls",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/supplier-url",
    "method": "createShareableLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Create Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplierUrlName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Bali Villa"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "twitterAccount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@travelikoworld"
      },
      {
        "name": "facebookAppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "19827398721938798237"
      },
      {
        "name": "theme",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "THEME_1"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hotel-1"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000,
        "default": -1
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/supplier-url/syndication/entry",
    "method": "createSyndicationCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Create Supplier URL SyndicationCard",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list",
    "method": "showCuratedLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Curated Lists",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show curated lists owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "withItems",
        "schema": "boolean",
        "required": false,
        "description": "Indicate whether to include all the list items in the result",
        "example": false,
        "default": false
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list",
    "method": "createCuratedList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Create Curated List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Top 3 Hotels in Chiang Mai"
      },
      {
        "name": "channelInventoryIdentifiers",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contains both the curated list and all its items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/item",
    "method": "addTravelInventoryToListItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Add Item to List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Add inventory to curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNELINVENTORYIDENTIFIER"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/item/supplier",
    "method": "addSupplierToListItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Add Supplier to List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Add inventory to curated list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url",
    "method": "generateNewLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Create Link",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create link owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerUrlName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Bali Villa"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "bali"
        ]
      },
      {
        "name": "twitterAccount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@travelikoworld"
      },
      {
        "name": "facebookAppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "19827398721938798237"
      },
      {
        "name": "theme",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEME_1"
      },
      {
        "name": "inventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_ROOM"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hotel-1"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "channel-inventory-1"
      },
      {
        "name": "transactionalItemIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "transactional-item-1"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000,
        "default": -1
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/syndication/entry",
    "method": "createSyndicationCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Create Seller URL SyndicationCard",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/supplier/grid",
    "method": "getPageOfSuppliers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Show suppliers",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "take",
        "schema": "integer",
        "description": "",
        "example": 10,
        "default": 30
      },
      {
        "name": "sort",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "group",
        "schema": "array",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/request",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hotel Relationship Requests",
    "typeScriptTag": "hotelRelationshipRequests",
    "description": "Create hotel request",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create hotel request and associate it with this company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTTYPE"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "introductoryMessage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hi there! Please give me a discount."
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/channel/grid",
    "method": "getPageOfSalesChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sales channel",
    "typeScriptTag": "salesChannel",
    "description": "Show sales channels",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "take",
        "schema": "integer",
        "description": "",
        "example": 10,
        "default": 30
      },
      {
        "name": "sort",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "group",
        "schema": "array",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map",
    "method": "listMaps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Show Maps",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List maps owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map",
    "method": "createAdvancedMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Create Map",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create map owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My lovely map"
      },
      {
        "name": "typeIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEIDENTIFIER"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST"
      },
      {
        "name": "center",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "draggable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "zoomable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "initialZoomLevel",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 15
      },
      {
        "name": "mapStyle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "normal"
      },
      {
        "name": "mapMarkerColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc2138"
      },
      {
        "name": "mapHeight",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
      },
      {
        "name": "circles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rectangles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "markers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "polygons",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/syndication/entry",
    "method": "createWinkLinksMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Create Map Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/supplier",
    "method": "createSupplierMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Create Supplier Map",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create supplier map owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My lovely map"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST"
      },
      {
        "name": "draggable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "zoomable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "initialZoomLevel",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 15
      },
      {
        "name": "mapStyle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "normal"
      },
      {
        "name": "mapMarkerColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc2138"
      },
      {
        "name": "mapHeight",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
      },
      {
        "name": "circles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rectangles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "markers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "polygons",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/lead",
    "method": "createLeadFromGoogle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Affiliate Lead",
    "typeScriptTag": "affiliateLead",
    "description": "Create lead",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create lead by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "placeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "place-1"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hotel X"
      },
      {
        "name": "messageFromUser",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hi there!"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/grid",
    "method": "supplierGridPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Inventory Supplier Search",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier suppliers on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "list",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 24,
        "default": 24
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list",
    "method": "createRankedGrid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Create Ranked Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryRankedListName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My ranked list"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "lookup",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": -1
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MEMBER"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list/syndication/entry",
    "method": "createNewWinkLinksGrid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Create Ranked Grid Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list",
    "method": "latestInventoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Latest Inventory",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 20,
        "default": 20
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list",
    "method": "createCuratedList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Create Grid",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryListName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My list"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "bali"
        ]
      },
      {
        "name": "listType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LISTIDENTIFIER"
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": -1
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MEMBER"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list/syndication/entry",
    "method": "createWinkLinksGrid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Create Grid Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item",
    "method": "createNewCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Create Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryItemName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My fave travel inventory"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "inventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOTEL"
      },
      {
        "name": "channelInventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_ROOM"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNELINVENTORYIDENTIFIER"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1",
          "cloudinary-image-2"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 500
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "POPULARITY"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/syndication/entry",
    "method": "createSyndicationEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Create Inventory Syndication Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/supplier",
    "method": "createSupplierCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Create Supplier Card",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to create item for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellerInventoryItemName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My fave travel inventory"
      },
      {
        "name": "engineConfigurationIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGINECONFIGURATIONIDENTIFIER"
      },
      {
        "name": "descriptions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "inventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOTEL"
      },
      {
        "name": "channelInventoryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_ROOM"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "multimediaIdentifiers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "cloudinary-image-1",
          "cloudinary-image-2"
        ]
      },
      {
        "name": "animate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "animateDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 500
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "POPULARITY"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIVE",
        "default": "NATIVE"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/grid",
    "method": "inventorySearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Inventory Search",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "list",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 24,
        "default": 24
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration",
    "method": "showPrimaryCustomization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Show Primary Customization",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show customization for this company",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration",
    "method": "createNewCustomization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Create Customization",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create customization for this company",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engine Configuration 1"
      },
      {
        "name": "appendToPageTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "googleAnalyticsMeasurementId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "googleMapsAPIKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "google-maps-api-123"
      },
      {
        "name": "tawkToKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tawk-to-1"
      },
      {
        "name": "defaultCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD",
        "default": "USD"
      },
      {
        "name": "defaultLanguage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en",
        "default": "en"
      },
      {
        "name": "logos",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hostedBookingEngineUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://my.customtravelsite.com/book",
        "default": "https://ota.wink.travel"
      },
      {
        "name": "selfHosted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "themeColors",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfAdvanceDays",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "numberOfStayDays",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-12-24"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-12-31"
      },
      {
        "name": "roomConfigurations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "useDays",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "promotionalCodes",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "promo-1"
        ]
      },
      {
        "name": "sendBookingNotificationEmailsToProperty",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendBookingNotificationEmailsToBooker",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendBookingNotificationEmailsToChannelManager",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "wcBookClickAction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IBE_MODAL"
      },
      {
        "name": "showUnavailableCard",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "showRankings",
        "schema": "boolean",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/grid",
    "method": "getGrid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Bookings",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show bookings for company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "take",
        "schema": "integer",
        "description": "",
        "example": 10,
        "default": 30
      },
      {
        "name": "sort",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "group",
        "schema": "array",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Create syndication entry",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create entry for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MrBeast goes to town"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "And on and on he goes"
      },
      {
        "name": "contentUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.google.com"
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEB_LINK"
      },
      {
        "name": "imageList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "videoList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "audioList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ogType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "website"
      },
      {
        "name": "media",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/consume-url",
    "method": "consumeUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Consume external URL",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Consume URL for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.google.com"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/category",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Create syndication category",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Create category for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Faves"
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/unique",
    "method": "checkUniqueness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Verify company name",
    "parameters": [
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My unique name"
      },
      {
        "name": "identifier",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Create Application",
    "parameters": [
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "App 1"
      },
      {
        "name": "entity",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "App 1"
      },
      {
        "name": "redirectUris",
        "schema": "array",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}",
    "method": "deleteCompanyByIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Delete Company",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}",
    "method": "getByIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Show Company",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}",
    "method": "updateExistingCompany",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Update Company",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Company 1"
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Legal Company 1"
      },
      {
        "name": "companyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION"
      },
      {
        "name": "vatID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "vat-1"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.mymainsite.com"
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "geo-name-1"
      },
      {
        "name": "urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/status",
    "method": "toggleStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Toggle Company Status",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/static/list/{listIdentifier}/sort",
    "method": "reorderListItems",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Re-Order List Items",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Sort curated list items owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "List identifier.",
        "example": "list-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "items",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/message/{identifier}",
    "method": "deleteByIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Delete notification",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/message/{identifier}",
    "method": "getMessagesByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Show notification",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/message/{identifier}",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Mark as read",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/manager/invite",
    "method": "inviteManager",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Invite Manager",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/list/sort",
    "method": "sortList",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Sort entire list",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Consume URL for this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Boolean response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Delete Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{id}",
    "method": "showSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Show Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{id}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "App 1"
      },
      {
        "name": "entity",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "App 1"
      },
      {
        "name": "redirectUris",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/hello",
    "method": "pingEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Test",
    "typeScriptTag": "test",
    "description": "Ping",
    "parameters": [],
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
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/supplier-url/list",
    "method": "getUrlList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier Links",
    "typeScriptTag": "supplierLinks",
    "description": "Show Links",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show links list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/list",
    "method": "getSellerUrls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Show Links",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show links list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/seller-url/inventory/{channelInventoryIdentifier}/media/list",
    "method": "getInventoryMediaList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shareable Links",
    "typeScriptTag": "shareableLinks",
    "description": "Show Inventory Media",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Channel inventory identifier.",
        "example": "channel-inventory-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/search/category/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Categories",
    "typeScriptTag": "searchCategories",
    "description": "Show categories",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List search categories on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/supplier/{supplierIdentifier}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Show supplier",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/supplier/list",
    "method": "getLatestInventory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Latest Inventory",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse suppliers on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 20,
        "default": 20
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/supplier/country/list",
    "method": "listSupplierCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Show unique supplier countries",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/supplier/city/list",
    "method": "showSupplierCitiesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Show unique supplier cities",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/request/{salesChannelRequestIdentifier}/re-apply",
    "method": "reapplySalesChannelRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hotel Relationship Requests",
    "typeScriptTag": "hotelRelationshipRequests",
    "description": "Re-apply hotel request",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Re-apply relationship request owned by this company identifier",
        "example": "company-1"
      },
      {
        "name": "salesChannelRequestIdentifier",
        "schema": "string",
        "required": true,
        "description": "Re-apply relationship request with this identifier",
        "example": "sales-channel-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/request/supplier/{supplierIdentifier}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hotel Relationship Requests",
    "typeScriptTag": "hotelRelationshipRequests",
    "description": "Show hotel request",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show hotel request for this company identifier",
        "example": "company-1"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show hotel request for this supplier identifier",
        "example": "supplier-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/request/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hotel Relationship Requests",
    "typeScriptTag": "hotelRelationshipRequests",
    "description": "Show hotel requests",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show all hotel requests for this company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/channel/supplier/{supplierIdentifier}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales channel",
    "typeScriptTag": "salesChannel",
    "description": "Show sales channel",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIERIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/message/list",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Show notifications",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/message/count",
    "method": "showUnreadMessageCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Show unread message count",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/marketplace/customer/invoice/upcoming",
    "method": "getUpcoming",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Show Upcoming Invoice",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/marketplace/customer/invoice/upcoming/items",
    "method": "getUpcomingItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Show Upcoming Invoices",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/marketplace/customer/invoice/list",
    "method": "getCompanyInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Show Invoices",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/markers/{listType}/{listIdentifier}",
    "method": "getMarkersByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Show Map Markers",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map markers for list owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "listIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map markers for list.",
        "example": "list-1"
      },
      {
        "name": "listType",
        "schema": "string",
        "required": true,
        "description": "Indicate whether this list is a curated or dynamic list.",
        "example": "LIST"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/map/marker/{channelInventoryIdentifier}",
    "method": "showMarkerForChannelInventory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maps",
    "typeScriptTag": "maps",
    "description": "Show Map Marker",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map markers for map owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show map marker for specific inventory.",
        "example": "channel-inventory-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Inventory map marker"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/{supplierIdentifier}/sales-channel/{salesChannelIdentifier}",
    "method": "inventorySupplierList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Show Inventory Supplier",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "supplierIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this supplier identifier.",
        "example": "supplier-1"
      },
      {
        "name": "salesChannelIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this sales channel identifier.",
        "example": "sales-channel-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/list",
    "method": "latestInventorySuppliersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Latest Inventory Suppliers",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 20,
        "default": 20
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/grid/{dynamicListIdentifier}",
    "method": "inventoryListSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Inventory Search by List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "dynamicListIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory supplier on behalf of this dynamic list identifier.",
        "example": "dynamic-list-1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 20,
        "default": 20
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/country/list",
    "method": "inventorySupplierCountriesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Show Inventory Supplier Countries",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List countries for inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/supplier/city/list",
    "method": "inventorySupplierCitiesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Show Inventory Supplier Cities",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List cities for inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/ranked/list/list",
    "method": "showRankedGridsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Ranked Grids",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve list for owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/list/list",
    "method": "getCuratedSearches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Grids",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show seller inventory lists owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/list",
    "method": "getAllCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Show Inventory Cards",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to retrieve items for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/item/inventory/{channelInventoryIdentifier}/media/list",
    "method": "showMediaList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Cards",
    "typeScriptTag": "inventoryCards",
    "description": "Show Card Media",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Company identifier to retrieve items for",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "channelInventoryIdentifier",
        "schema": "string",
        "required": true,
        "description": "Retrieve media for this channel inventory identifier.",
        "example": "channel-inventory-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/grid/{dynamicListIdentifier}",
    "method": "inventorySearchByList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Inventory Search by List",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "dynamicListIdentifier",
        "schema": "string",
        "required": true,
        "description": "Browse inventory on behalf of this dynamic list identifier.",
        "example": "dynamic-list-1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Skip to page.",
        "example": 20,
        "default": 20
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/country/list",
    "method": "inventoryCountryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Show Inventory Countries",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List countries for inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/city/list",
    "method": "inventoryCityList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discover",
    "typeScriptTag": "discover",
    "description": "Show Inventory Cities",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List cities for inventory on behalf of this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/inventory/campaign/list",
    "method": "showInventoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Show campaign inventory",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show campaigns for this company",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/dynamic/list",
    "method": "getSavedSearches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory Grids",
    "typeScriptTag": "inventoryGrids",
    "description": "Show Saved Searches",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List searches owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/configuration/list",
    "method": "getCompanyCustomizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customization",
    "typeScriptTag": "customization",
    "description": "Show Customizations",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show customizations for this company",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/{bookingIdentifier}",
    "method": "showByIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Booking",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show booking for company identifier",
        "example": "company-1"
      },
      {
        "name": "bookingIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show booking with booking identifier",
        "example": "booking-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/roomrate/list",
    "method": "showMasterRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Booked Master Rates",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show unique master rates for booking made with the help of company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/hotel/list",
    "method": "showBookedHotels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Booked Hotels",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show unique hotels for booking made with the help of company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/engine/list",
    "method": "showBookedApplicationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Booked Applications",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show unique applications for booking made with the help of company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/booking/engine/configuration/list",
    "method": "showCustomizationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookings",
    "typeScriptTag": "bookings",
    "description": "Show Booked Customizations",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Show unique customizations for booking made with the help of company identifier",
        "example": "company-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/entry/list",
    "method": "showList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Show WinkLinks list",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List syndication entries owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/syndication/category/list",
    "method": "showCategoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syndication Entry Publisher",
    "typeScriptTag": "syndicationEntryPublisher",
    "description": "Show WinkLinks list",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "List syndication categories owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/list",
    "method": "listOwnedCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Show Companies",
    "parameters": [
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{id}/revoke",
    "method": "refreshCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Revoke Application Credentials",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/list",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Show Applications",
    "parameters": [
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/sales/request/{salesChannelRequestIdentifier}",
    "method": "deleteRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Hotel Relationship Requests",
    "typeScriptTag": "hotelRelationshipRequests",
    "description": "Delete request",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove hotel request owned by this company identifier",
        "example": "company-1"
      },
      {
        "name": "salesChannelRequestIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove hotel request with this identifier",
        "example": "sales-channel-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/manager/{email}",
    "method": "removeManager",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Remove Manager",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "winkVersion",
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
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/company/{companyIdentifier}/lead/{leadIdentifier}",
    "method": "removeLead",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Affiliate Lead",
    "typeScriptTag": "affiliateLead",
    "description": "Delete Lead",
    "parameters": [
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove lead owned by this owner identifier.",
        "example": "owner-1"
      },
      {
        "name": "leadIdentifier",
        "schema": "string",
        "required": true,
        "description": "Remove lead record with this identifier.",
        "example": "lead-1"
      },
      {
        "name": "winkVersion",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Response object for when a system document is removed."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Generic error message"
      },
      {
        "statusCode": "403",
        "description": "Generic error message"
      },
      {
        "statusCode": "405",
        "description": "Generic error message"
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Generic error message"
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Wink API"
      apiBaseUrl="https://api.wink.travel"
      apiVersion="29.50.1"
      endpoints={98}
      sdkMethods={130}
      schemas={875}
      parameters={649}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wink/openapi.yaml"
      developerDocumentation="docs.wink.travel/affiliate"
    />
  );
}
  