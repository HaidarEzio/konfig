import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WorkdayStaffingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="workday-staffing-typescript-sdk"
      metaDescription={`Workday is a leading provider of enterprise cloud applications for finance and human resources, helping customers adapt and thrive in a changing world. Workday applications for financial management, human resources, planning, spend management, and analytics are built with artificial intelligence and machine learning at the core to help organizations around the world embrace the future of work. Workday is used by more than 10,000 organizations around the world and across industries – from medium-sized businesses to more than 50% of the Fortune 500.`}
      company="Workday"
      serviceName="Staffing"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/staffing/logo.png"
      companyKebabCase="workday"
      clientNameCamelCase="workdayStaffing"
      homepage="workday.com"
      lastUpdated={new Date("2024-03-27T18:00:59.706Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/staffing/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/staffing/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr"]}
      methods={[
  {
    "url": "/jobChanges/{ID}/location",
    "method": "getLocationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Returns the location information for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/organizationAssignmentChanges",
    "method": "initiateOrganizationAssignmentChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Initiates an organization assignment change for a specific worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/skillItems",
    "method": "getSkillItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Secured by: Person Data: Skills, Self-Service: Skills\n\nScope: Worker Profile and Skills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/skillItems",
    "method": "createSkillItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Secured by: Person Data: Skills, Self-Service: Skills\n\nScope: Worker Profile and Skills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/startDetails/{subresourceID}",
    "method": "getStartDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the start details for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/startDetails/{subresourceID}",
    "method": "updateStartDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the startDetails options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/region",
    "method": "getRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a region for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/workContactInformationChanges",
    "method": "createWorkContactInformationChanges",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates a new Home Contact Change business process event for the parent Person.\n\nSecured by: Change Work Contact Information (REST Service)\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/administrative",
    "method": "getAdministrativeOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the administrative options for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobProfile/{subresourceID}",
    "method": "getProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a job profile for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobProfile/{subresourceID}",
    "method": "updateJobProfileOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the jobProfile options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/location/{subresourceID}",
    "method": "getLocationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Returns the location information for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/location/{subresourceID}",
    "method": "partialUpdateLocationOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the location options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics",
    "method": "getCheckInTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of Check-Ins topics.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics",
    "method": "createCheckInTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates Check-In topics.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/comment",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the comment information for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}",
    "method": "getInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a single organization assignment change event instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/customOrganizations/{subresourceID}",
    "method": "getCustomOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the custom organizations for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/customOrganizations/{subresourceID}",
    "method": "updateCustomOrganizations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the custom organizations for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/businessUnit/{subresourceID}",
    "method": "getBusinessUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a business unit for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/businessUnit/{subresourceID}",
    "method": "updateBusinessUnit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the business unit for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations/{ID}",
    "method": "getInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves a single supervisory organization instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/position",
    "method": "getPositionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a position for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/startDetails",
    "method": "getStartDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the start details for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations/{ID}/orgChart",
    "method": "getOrgChart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves information about an organization chart of the specified supervisory organization id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics/{subresourceID}?type=archive",
    "method": "updateCheckInTopicState",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Partially updates an existing Check-In topic to archived or un-archived.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/skillItems/{subresourceID}",
    "method": "getSkillItemsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Secured by: Person Data: Skills, Self-Service: Skills\n\nScope: Worker Profile and Skills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/externalSkillLevel/{subresourceID}",
    "method": "getExternalSkillLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves all external skill level information for a worker. You can filter the external skill levels by externalSkillId.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/externalSkillLevel/{subresourceID}",
    "method": "updateExternalSkillLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Updates external skill levels.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/startDetails/{subresourceID}",
    "method": "getStartDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the start details for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/startDetails/{subresourceID}",
    "method": "partiallyUpdateStartDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the start details for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/moveTeam/{subresourceID}",
    "method": "getMoveTeamOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a move team option from the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/moveTeam/{subresourceID}",
    "method": "updateMoveTeamOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the moveTeam options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/homeContactInformationChanges",
    "method": "createHomeContactChangeProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates a new Home Contact Change business process event for the parent Person.\n\nSecured by: Change Home Contact Information (REST Service)\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/position/{subresourceID}",
    "method": "getPositionBySubresourceId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a position for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/position/{subresourceID}",
    "method": "updatePositionOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the position options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/comment",
    "method": "getCommentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Returns the comment information for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobProfiles",
    "method": "listCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobProfiles",
    "typeScriptTag": "jobProfiles",
    "description": "Retrieves a collection of job profiles.",
    "parameters": [
      {
        "name": "includeInactive",
        "schema": "boolean",
        "required": false,
        "description": "If true, the method returns inactive job profiles. Default is false."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/businessTitle/{subresourceID}",
    "method": "getBusinessTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a business title for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/businessTitle/{subresourceID}",
    "method": "updateBusinessTitleOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the businessTitle options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns/{subresourceID}",
    "method": "deleteCheckIn",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Deletes an existing Check-In instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns/{subresourceID}",
    "method": "getCheckIn",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single Check-In instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns/{subresourceID}",
    "method": "updateCheckIn",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Partially updates an existing Check-In instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobClassification",
    "method": "getJobClassification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a job classification for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/administrative/{subresourceID}",
    "method": "getAdminOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the administrative options for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/administrative/{subresourceID}",
    "method": "updateAdministrativeOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the administrative options for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/moveTeam",
    "method": "getMoveTeamOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a move team option from the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/opening",
    "method": "getOpeningOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the opening options for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/explicitSkills",
    "method": "getExplicitSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Get Explicit Skills for Skill Enabled",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "skill",
        "schema": "string",
        "required": false,
        "description": "Retrieves the skills for the specified skill name."
      },
      {
        "name": "skillSource",
        "schema": "string",
        "required": false,
        "description": "The Workday ID of the skill source. Returns skills associated with the skill source."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/explicitSkills",
    "method": "saveUserSkills",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Save skills a user has",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/businessTitle",
    "method": "getBusinessTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a business title for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/explicitSkills/{subresourceID}",
    "method": "getExplicitSkillsForSkillEnabled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Get Explicit Skills for Skill Enabled",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/company/{subresourceID}",
    "method": "getCompanyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a company for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/company/{subresourceID}",
    "method": "partiallyUpdateCompany",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the company for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobFamilies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobFamilies",
    "typeScriptTag": "jobFamilies",
    "description": "Retrieves a collection of job families.",
    "parameters": [
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "If true, the method returns inactive job families. Default is false."
      },
      {
        "name": "jobFamilyGroup",
        "schema": "array",
        "required": false,
        "description": "The job family group for the job family. You can specify more than 1 jobFamilyGroup query parameter."
      },
      {
        "name": "jobProfile",
        "schema": "array",
        "required": false,
        "description": "The job profile for the job family. You can specify more than 1 jobFamilyGroup query parameter. For possible values, you can use a returned id from GET /jobProfiles."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costing/{subresourceID}",
    "method": "getCostingOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the costing organizations for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costing/{subresourceID}",
    "method": "partiallyUpdateCostingOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the costing organization options for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics/{subresourceID}",
    "method": "deleteCheckInTopic",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Deletes an existing Check-In topic instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics/{subresourceID}",
    "method": "getCheckInTopic",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single Check-In topic instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkInTopics/{subresourceID}",
    "method": "partiallyUpdateCheckInTopic",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Partially updates an existing Check-In topic instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/homeContactInformationChanges/{subresourceID}",
    "method": "getHomeContactChange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves an existing Home Contact Change event for the Person.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{ID}/workspace",
    "method": "getWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieves a collection of workspaces for the specified job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/contract",
    "method": "getContractOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the contract options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/startDetails",
    "method": "getStartDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the start details for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/region/{subresourceID}",
    "method": "getRegionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a region for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/region/{subresourceID}",
    "method": "updateRegion",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the region for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/workContactInformationChanges/{subresourceID}",
    "method": "getWorkContactChange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves an existing Work Contact Change event for the Person.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{ID}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieves a single job instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a single change job event instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns",
    "method": "getCheckIns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of Check-Ins.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns",
    "method": "createCheckIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates Check-Ins.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers",
    "method": "getCollectionStaffing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of workers and current staffing information.",
    "parameters": [
      {
        "name": "includeTerminatedWorkers",
        "schema": "boolean",
        "required": false,
        "description": "Include terminated workers in the output"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searches workers by name or worker ID. The search is case-insensitive. You can include space-delimited search strings for an OR search."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobFamilies/{ID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobFamilies",
    "typeScriptTag": "jobFamilies",
    "description": "Retrieves a single job family instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/customOrganizations",
    "method": "getCustomOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the custom organizations for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/submit",
    "method": "submitChangeJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Submit the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobClassification/{subresourceID}",
    "method": "getJobClassification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a job classification for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobClassification/{subresourceID}",
    "method": "updateJobClassificationOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the jobClassification options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations/{ID}/members/{subresourceID}",
    "method": "getMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves a single member instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/jobChanges",
    "method": "initiateJobChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Initiates a job change request for a specific worker",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/opening/{subresourceID}",
    "method": "getOpeningOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the opening options for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/opening/{subresourceID}",
    "method": "updateOpeningOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the opening options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves a supervisory organization for the specified ID.",
    "parameters": [
      {
        "name": "includeInactive",
        "schema": "boolean",
        "required": false,
        "description": "If true, this method returns the inactive organizations. Default is false."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costing",
    "method": "getCostingOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the costing organizations for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}",
    "method": "getStaffingInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of workers and current staffing information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/serviceDates/{subresourceID}",
    "method": "getServiceDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single service date information instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/submit",
    "method": "submitChangeRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Submits the organization changes request for the specified ID, and initiates the Change Organization Assignment business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costCenter/{subresourceID}",
    "method": "getCostCenter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a cost center for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costCenter/{subresourceID}",
    "method": "updateCostCenter",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates the cost center for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/comment/{subresourceID}",
    "method": "getCommentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves the comment information for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/comment/{subresourceID}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Partially updates  the comment for the organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/serviceDates",
    "method": "getServiceDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of service dates for the specified worker id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/contract/{subresourceID}",
    "method": "getContractOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves the contract options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/contract/{subresourceID}",
    "method": "partiallyUpdateContractOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the contract options for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieves a collection of jobs.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/checkIns/{subresourceID}?type=archive",
    "method": "partiallyUpdateCheckIn",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Partially updates an existing Check-In to archived or un-archived.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/jobProfile",
    "method": "getJobProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Retrieves a job profile for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobProfiles/{ID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobProfiles",
    "typeScriptTag": "jobProfiles",
    "description": "Retrieves a single job profile instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/externalSkillLevel",
    "method": "getExternalSkillLevel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves all external skill level information for a worker. You can filter the external skill levels by externalSkillId.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "externalSkillId",
        "schema": "string",
        "required": false,
        "description": "All External Skills. If passed, the External Skill Level associated with the External Skill ID."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/externalSkillLevel",
    "method": "createExternalSkillLevels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates external skill levels.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges",
    "method": "createChangeEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Creates a new change organization assignment event for a specific filled or unfilled position.",
    "parameters": [],
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations/{ID}/members",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves a collection of members for the specified supervisory organization ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{ID}/workspace/{subresourceID}",
    "method": "getWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieves a single workspace instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/businessUnit",
    "method": "getBusinessUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a business unit for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/company",
    "method": "getCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a company for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/supervisoryOrganizations/{ID}/orgChart/{subresourceID}",
    "method": "getOrgChart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "supervisoryOrganizations",
    "typeScriptTag": "supervisoryOrganizations",
    "description": "Retrieves a single organization chart instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/comment/{subresourceID}",
    "method": "getCommentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Returns the comment information for the specified job change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobChanges/{ID}/comment/{subresourceID}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobChanges",
    "typeScriptTag": "jobChanges",
    "description": "Partially updates the comment for the specified change job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationAssignmentChanges/{ID}/costCenter",
    "method": "getCostCenter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizationAssignmentChanges",
    "typeScriptTag": "organizationAssignmentChanges",
    "description": "Retrieves a cost center for the specified organization assignment change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/regions",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/reason",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/customs",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/supervisoryOrganization",
    "method": "getSupervisoryOrgValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/programs",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/jobs",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/funds",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workersCompensationCodeOverrides",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/timeTypes",
    "method": "getTimeTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workShifts",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/costCenters",
    "method": "getAssignmentChangeGroupCostCenters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/businessUnits",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/frequencies",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/employeeTypes",
    "method": "getEmployeeTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/payRateTypes",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/templates",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workers",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/contingentWorkerTypes",
    "method": "getContingentWorkerTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/currencies",
    "method": "getCurrencyInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/proposedPosition",
    "method": "getProposedPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/jobs",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/companyInsiderTypes",
    "method": "getCompanyInsiderTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/headcountOptions",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/grants",
    "method": "getGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workerTypes",
    "method": "getWorkerTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/workers",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workStudyAwards",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/locations",
    "method": "availableLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/positions",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/jobRequisitions",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/jobProfiles",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/companies",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/workSpaces",
    "method": "getWorkspaceInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/assignmentTypes",
    "method": "getAssignmentTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/jobChangesGroup/jobClassifications",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/organizationAssignmentChangesGroup/gifts",
    "method": "getGiftInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="staffing"
      apiBaseUrl="https://<tenantHostname>/staffing/v6"
      apiVersion="v6"
      endpoints={115}
      sdkMethods={181}
      schemas={214}
      parameters={234}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/staffing/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/staffing/openapi.yaml"
      developerDocumentation="community.workday.com/sites/default/files/file-hosting/restapi"
    />
  );
}
  