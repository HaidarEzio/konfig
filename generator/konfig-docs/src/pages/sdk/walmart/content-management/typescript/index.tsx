import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function WalmartContentManagementTypeScriptSdk() {
  return (
    <Sdk
      sdkName="walmart-content-management-typescript-sdk"
      metaDescription="Walmart is the world's largest retailer, and the Walmart Open API provides access to our extensive product catalog, thus enabling digital businesses to create new and innovative shopping experiences."
      company="Walmart"
      serviceName="Content Management"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/logo.png"
      clientNameCamelCase="walmart"
      homepage="developer.walmart.com/"
      lastUpdated={new Date("2024-02-01T00:23:52.426Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v3/feeds",
    "method": "contentProductFeed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feeds",
    "typeScriptTag": "feeds",
    "description": "Content feeds",
    "parameters": [
      {
        "name": "feedType",
        "schema": "string",
        "required": true,
        "description": "The feed Type"
      },
      {
        "name": "wmConsumerChannelType",
        "schema": "string",
        "required": false,
        "description": "A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding"
      },
      {
        "name": "wmQosCorrelationId",
        "schema": "string",
        "required": true,
        "description": "A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID"
      },
      {
        "name": "wmSvcName",
        "schema": "string",
        "required": true,
        "description": "Walmart Service Name"
      },
      {
        "name": "wmSecTimestamp",
        "schema": "string",
        "required": true,
        "description": "The Epoch timestamp"
      },
      {
        "name": "wmSecAuthSignature",
        "schema": "string",
        "required": true,
        "description": "The vendor's digital signature, generated by running the JAR file or custom generation code"
      },
      {
        "name": "wmConsumerId",
        "schema": "string",
        "required": true,
        "description": "A unique ID required to access the API"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": ""
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
    "url": "/v2/feeds",
    "method": "updateRichMedia",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feeds",
    "typeScriptTag": "feeds",
    "description": "Rich Media",
    "parameters": [
      {
        "name": "feedType",
        "schema": "string",
        "required": true,
        "description": "The feed Type"
      },
      {
        "name": "wmConsumerChannelType",
        "schema": "string",
        "required": false,
        "description": "A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding"
      },
      {
        "name": "wmQosCorrelationId",
        "schema": "string",
        "required": true,
        "description": "A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID"
      },
      {
        "name": "wmSvcName",
        "schema": "string",
        "required": true,
        "description": "Walmart Service Name"
      },
      {
        "name": "wmSecTimestamp",
        "schema": "string",
        "required": true,
        "description": "The Epoch timestamp"
      },
      {
        "name": "wmSecAuthSignature",
        "schema": "string",
        "required": true,
        "description": "The vendor's digital signature, generated by running the JAR file or custom generation code"
      },
      {
        "name": "wmConsumerId",
        "schema": "string",
        "required": true,
        "description": "A unique ID required to access the API"
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
    "url": "/feeds",
    "method": "getAllFeedStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feeds",
    "typeScriptTag": "feeds",
    "description": "Feed status",
    "parameters": [
      {
        "name": "feedId",
        "schema": "string",
        "required": true,
        "description": "A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special characters must be escaped (e.g., feedId: '...3456@789...' must be entered in the URL as '...3456%40789)."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The object response to the starting number, where 0 is the first entity that can be requested."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of entities to be returned. Maximum 20 entities."
      },
      {
        "name": "wmConsumerChannelType",
        "schema": "string",
        "required": false,
        "description": "A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding"
      },
      {
        "name": "wmQosCorrelationId",
        "schema": "string",
        "required": true,
        "description": "A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID"
      },
      {
        "name": "wmSvcName",
        "schema": "string",
        "required": true,
        "description": "Walmart Service Name"
      },
      {
        "name": "wmSecTimestamp",
        "schema": "string",
        "required": true,
        "description": "The Epoch timestamp"
      },
      {
        "name": "wmSecAuthSignature",
        "schema": "string",
        "required": true,
        "description": "The vendor's digital signature, generated by running the JAR file or custom generation code"
      },
      {
        "name": "wmConsumerId",
        "schema": "string",
        "required": true,
        "description": "A unique ID required to access the API"
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
    "url": "/feeds/{feedId}",
    "method": "getFeedItemStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feeds",
    "typeScriptTag": "feeds",
    "description": "Feed item status",
    "parameters": [
      {
        "name": "feedId",
        "schema": "string",
        "required": true,
        "description": "A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special characters must be escaped (e.g., feedId: '...3456@789...' must be entered in the URL as '...3456%40789)."
      },
      {
        "name": "includeDetails",
        "schema": "string",
        "required": false,
        "description": "Includes details of each entity in the feed. Do not set this parameter to true."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The object response to the starting number, where 0 is the first entity that can be requested."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of entities to be returned. Maximum 20 entities."
      },
      {
        "name": "wmConsumerChannelType",
        "schema": "string",
        "required": false,
        "description": "A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding"
      },
      {
        "name": "wmQosCorrelationId",
        "schema": "string",
        "required": true,
        "description": "A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID"
      },
      {
        "name": "wmSvcName",
        "schema": "string",
        "required": true,
        "description": "Walmart Service Name"
      },
      {
        "name": "wmSecTimestamp",
        "schema": "string",
        "required": true,
        "description": "The Epoch timestamp"
      },
      {
        "name": "wmSecAuthSignature",
        "schema": "string",
        "required": true,
        "description": "The vendor's digital signature, generated by running the JAR file or custom generation code"
      },
      {
        "name": "wmConsumerId",
        "schema": "string",
        "required": true,
        "description": "A unique ID required to access the API"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Content Management"
      apiBaseUrl="https://marketplace.walmartapis.com/v3/feeds"
      
      endpoints={4}
      sdkMethods={4}
      schemas={10}
      parameters={34}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/openapi.yaml"
    />
  );
}
  