import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ClayHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="clay-hr-typescript-sdk"
      metaDescription={`Gartner Cool Vendor for Human Capital Management, ClayHR is the AI powered HCM system for fast growing mid-sized enterprises.

With an open API, rich data integrations and highly configurable platform,
BizMerlinHR enables you to hire the best candidates, easily onboard your employees, guide their performance and train and retaining your best talent.

ClayHR was launched in 2013, and has customers spanning multiple industries across North America, South America, Europe, Africa and Asia Pacific.

Completely cloud based application available via your favorite web browsers and native iOS and Android mobile apps. 100+ integrations with JIRA, Salesforce, FreshBooks, QuickBooks, Slack and others.`}
      company="ClayHR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/logo.png"
      companyKebabCase="clay-hr"
      clientNameCamelCase="clayHr"
      homepage="clayhr.com"
      lastUpdated={new Date("2024-03-25T23:38:15.229Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","human_resources","hr_reporting","hr_analytics","employee_onboarding","performance_reviews","timesheets_leave_tracking","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Get Access Token for Authentication",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/announcement/create",
    "method": "createNewAnnouncement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "Create Announcement",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "Title of the announcement.",
        "example": "Travel Policies"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "Description of the announcement.",
        "example": "There are some amendments done in policy leave."
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "Any link associated/brief of the announcement.",
        "example": "https://www.google.com"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of Announcement. Choose between [\"A\", \"D\", \"I\"]. Defaults to \"A\". \n A - Active, D - In Draft, I - Archive",
        "example": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/announcement/{annId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "Retrieve Announcement",
    "parameters": [
      {
        "name": "annId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the announcement.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/announcement/edit",
    "method": "updateAnnouncement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "Update Announcement",
    "parameters": [
      {
        "name": "annId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the announcement.",
        "example": null
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "Title of the announcement.",
        "example": "TITLE"
      },
      {
        "name": "desciption",
        "schema": "string",
        "required": true,
        "description": "Description of the announcement.",
        "example": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "Link associated with the announcement.",
        "example": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of Announcement. Choose between [\"A\", \"D\", \"I\"]. Defaults to \"A\". \n A - Active, D - In Draft, I - Archive",
        "example": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/attachment/list/{annId}",
    "method": "getAttachmentsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "Retrieve Announcement Attachments",
    "parameters": [
      {
        "name": "annId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the announcement.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Retrieve candidates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/",
    "method": "submitNewCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create new candidate",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Name of the candidate."
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email ID of the candidate."
      },
      {
        "name": "isNewCand",
        "schema": "string",
        "description": "Is this new candidate?"
      },
      {
        "name": "phone",
        "schema": "integer",
        "description": "Phone number of the candidate."
      },
      {
        "name": "source",
        "schema": "string",
        "description": "The source from which the candidate is being created.",
        "default": "API"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/detail/{recruitid}",
    "method": "getCandidateDetailByRecruitid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Retrieve the candidate detail by recruitid",
    "parameters": [
      {
        "name": "recruitid",
        "schema": "integer",
        "required": true,
        "description": "The ID of the recruiter.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/list",
    "method": "getBasicDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Retrieve candidates with basic details",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number.",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of candidates per page.",
        "default": 20
      },
      {
        "name": "search",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfield",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieve Custom Field by ID",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the custom field.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieve Custom Fields",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "description": "The object type of custom field."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfieldvalues",
    "method": "getValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieve Custom Field Value",
    "parameters": [
      {
        "name": "customFieldCode",
        "schema": "string",
        "description": "customFieldCode"
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "customFieldId",
        "example": 0
      },
      {
        "name": "userEmail",
        "schema": "string",
        "description": "userEmail"
      },
      {
        "name": "empId",
        "schema": "string",
        "description": "empId"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfieldvalues",
    "method": "updateValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update Custom Field Value",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "empId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/customlist",
    "method": "getCustomLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieve Custom Lists",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/delete",
    "method": "deleteByContactId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dependents",
    "typeScriptTag": "dependents",
    "description": "Delete dependent by contactId",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact ID of Dependent",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/attachment/download",
    "method": "getDocumentAsByteArray",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Library",
    "typeScriptTag": "documentLibrary",
    "description": "Retrieve document as byte array",
    "parameters": [
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "File ID from the server",
        "example": "FILENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/documentLibrary",
    "method": "getAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Library",
    "typeScriptTag": "documentLibrary",
    "description": "Retrieve attachments within document library",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/currencylist",
    "method": "getCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Retrieve currencies",
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
      }
    ]
  },
  {
    "url": "/expensereport",
    "method": "getReportDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Retrieve the details of expense report",
    "parameters": [
      {
        "name": "expenseReportId",
        "schema": "integer",
        "description": "The ID of the expense report."
      },
      {
        "name": "guid",
        "schema": "string",
        "description": "The unique system generated ID of the user."
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/expensereport",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Create expense report",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of the expense report.",
        "example": "Travel expense report."
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "Amount to be added in expense report.",
        "example": 300
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of the expense report.",
        "example": "This expene report is regarding the travelling."
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/expensetypes",
    "method": "getExpenseTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Retrieve expense types",
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
      }
    ]
  },
  {
    "url": "/expensereports",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Retrieve expense reports by User ID",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "description": "The unique system generated ID of the user."
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email of the user."
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
      }
    ]
  },
  {
    "url": "/expensereport/submit/{expenseReportId}",
    "method": "submitExpenseReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Submit expense report",
    "parameters": [
      {
        "name": "expenseReportId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the expense report.",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of the expense report.",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/expensereport/delete",
    "method": "deleteExpenseReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Delete expense report",
    "parameters": [
      {
        "name": "expenseReportId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the expense report.",
        "example": 0
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
    "url": "/expenseitem",
    "method": "createNewExpenseItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense Reports",
    "typeScriptTag": "expenseReports",
    "description": "Create expense item",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "Amount of the expense item.",
        "example": 0
      },
      {
        "name": "billable",
        "schema": "string",
        "required": true,
        "description": "Y for \"Yes\" and N for \"No\".",
        "example": "BILLABLE"
      },
      {
        "name": "cid",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the customer.",
        "example": 0
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "Code of the currency.",
        "example": "CURRENCYCODE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date of creating expense item.",
        "example": "DATE"
      },
      {
        "name": "expenseItemId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the expense item.",
        "example": 0
      },
      {
        "name": "expenseType",
        "schema": "string",
        "required": true,
        "description": "The type of expense.",
        "example": "EXPENSETYPE"
      },
      {
        "name": "expenseTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the expense type.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project.",
        "example": 0
      },
      {
        "name": "reimbursible",
        "schema": "string",
        "required": true,
        "description": "Y for \"Yes\" and N for \"No\".",
        "example": "REIMBURSIBLE"
      },
      {
        "name": "remarks",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REMARKS"
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
    "url": "/api/getdynaforms",
    "method": "getDynaForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Retrieve forms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/my",
    "method": "getAssignedForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Retrieve completed forms assigned to me  ",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/response/{dynamicFormId}",
    "method": "getFormResponse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Retrieve form response ",
    "parameters": [
      {
        "name": "assignUserId",
        "schema": "integer",
        "required": false,
        "description": "The ID of User.",
        "example": null
      },
      {
        "name": "assignmentId",
        "schema": "integer",
        "required": false,
        "description": "The Assignment ID of the User.",
        "example": null
      },
      {
        "name": "dynamicFormId",
        "schema": "integer",
        "required": true,
        "description": "The ID of Form.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/responselist",
    "method": "getFormResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Retrieve form responses",
    "parameters": [
      {
        "name": "dynamicFormId",
        "schema": "integer",
        "required": true,
        "description": "The ID of Form.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/saveFormResponse",
    "method": "saveFormResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Save form repsonse ",
    "parameters": [
      {
        "name": "assignmentId",
        "schema": "integer",
        "required": true,
        "description": "The Assignment ID of the User.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/saveItemResponse",
    "method": "submitItemResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Save item response",
    "parameters": [
      {
        "name": "assignmentId",
        "schema": "integer",
        "required": true,
        "description": "The Assignment ID of the User.",
        "example": 0
      },
      {
        "name": "itemId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the form Item.",
        "example": 0
      },
      {
        "name": "responseValue",
        "schema": "string",
        "required": true,
        "description": "Response Value to save in Form.",
        "example": "RESPONSEVALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/view",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Retrieve form details",
    "parameters": [
      {
        "name": "dynamicFormId",
        "schema": "integer",
        "required": true,
        "description": "The ID of Form.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/goal/list",
    "method": "getUserGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Retrieve goals of user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/jobprofiles",
    "method": "getJobProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job profiles",
    "typeScriptTag": "jobProfiles",
    "description": "Retrieve job profiles",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of the job profile A- Active, OPEN- Open, ARCHV- Archive",
        "example": "STATUS",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/leave/hours/credit",
    "method": "getRemainingHoursCredit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Retrieve remaining hours credit for leave policy",
    "parameters": [
      {
        "name": "leaveDate",
        "schema": "string",
        "required": true,
        "description": "The date of the leave.",
        "example": "LEAVEDATE"
      },
      {
        "name": "leaveId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the leave.",
        "example": 0
      },
      {
        "name": "leaveUserId",
        "schema": "integer",
        "required": true,
        "description": "The userId for that leave.",
        "example": 0
      },
      {
        "name": "ptoPolicyId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the ptoPolicy",
        "example": 0
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/leaverequest",
    "method": "createNewLeave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Create a new leave.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createUserViewModel",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "endDateMeridiem",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "meridiem",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ptoPolicyModel",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "totalLeaveDays",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "totalLeaveHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "userModel",
        "schema": "object",
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
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/leaverequests",
    "method": "getLeaveRequestsWithinDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Retrieve leave requests within a date range",
    "parameters": [
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "End date of the leave.",
        "example": "ENDDATE"
      },
      {
        "name": "leaveUserid",
        "schema": "integer",
        "required": false,
        "description": "The userId for that leave.",
        "default": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start date of the leave.",
        "example": "STARTDATE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The status of leave. \n AP: Leave approved \n WA: Leave is waiting for approval \n RJ: Leave has been rejected \n PAP: Leave is in a muti layer approval flow and has been partially approved \n RCAL:  Leave was approved, taken, computed and then recalled ",
        "default": "AP"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/manage/leaves",
    "method": "getLeavesBasedOnRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Retrieve leaves for approval/rejection by filtering on basis of Role",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/process/leave",
    "method": "processLeaveById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Process the leave of a user by leave Id",
    "parameters": [
      {
        "name": "leaveId",
        "schema": "integer",
        "required": true,
        "description": "The Id for the leave.",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "The status of leave. \n AP: Leave approved \n WA: Leave is waiting for approval \n RJ: Leave has been rejected \n PAP: Leave is in a muti layer approval flow and has been partially approved \n RCAL:  Leave was approved, taken, computed and then recalled ",
        "example": "STATUS",
        "default": "AP"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/userpto/balance/add",
    "method": "addPtoBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Add PTO balance.",
    "parameters": [
      {
        "name": "ptobalances",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTOBALANCES"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/orgrelation/orgRelationsByUser",
    "method": "getOrgRelationsByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrgRelation",
    "typeScriptTag": "orgRelation",
    "description": "Retrieve all the OrgRelations for the given user.",
    "parameters": [
      {
        "name": "employeeUserId",
        "schema": "integer",
        "description": "User Id for which org relation will be fetched."
      },
      {
        "name": "empId",
        "schema": "string",
        "description": "Employee Id for which org relation will be fetched."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email for which org relation will be fetched.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/orgrelation/allactive",
    "method": "getAllActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrgRelation",
    "typeScriptTag": "orgRelation",
    "description": "Retrieve all active OrgRelations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/orgrelation/save",
    "method": "saveUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrgRelation",
    "typeScriptTag": "orgRelation",
    "description": "Saves the OrgRelation for the User",
    "parameters": [
      {
        "name": "orgRelationId",
        "schema": "integer",
        "required": true,
        "description": "ID of OrgRelation for which data will be saved.",
        "example": 0
      },
      {
        "name": "managerUserId",
        "schema": "integer",
        "required": true,
        "description": "User Id of the manager.",
        "example": 0
      },
      {
        "name": "managerEmail",
        "schema": "string",
        "required": true,
        "description": "Email of manager.",
        "example": "MANAGEREMAIL"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "description": "User's email."
      },
      {
        "name": "otherUserId",
        "schema": "integer",
        "description": "User Id of the reporter."
      },
      {
        "name": "relationType",
        "schema": "string",
        "description": "Type of relation w.r.t manager."
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Date of start in that org unit."
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": "Ending date in that org unit."
      },
      {
        "name": "cid",
        "schema": "integer",
        "description": "Company ID."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "User is active or not active."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/orgunits",
    "method": "getOrgUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org Units",
    "typeScriptTag": "orgUnits",
    "description": "Retrieve org units",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/orgunits/add",
    "method": "createNewOrgUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org Units",
    "typeScriptTag": "orgUnits",
    "description": "Create new org unit",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of the org unit.",
        "example": "NAME"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "Description of the org unit.",
        "example": "DESCRIPTION"
      },
      {
        "name": "deptHead",
        "schema": "integer",
        "description": "The ID of the department head."
      },
      {
        "name": "deptHeadName",
        "schema": "string",
        "description": "Name of the department head."
      },
      {
        "name": "departmentCode",
        "schema": "string",
        "description": "The code of the department."
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "description": "The ID of the department."
      },
      {
        "name": "departmentLabel",
        "schema": "string",
        "description": "Label for the department."
      },
      {
        "name": "noOfEmployees",
        "schema": "integer",
        "description": "Number of employees."
      },
      {
        "name": "parentDepartmentId",
        "schema": "integer",
        "description": "The ID of the parent department."
      },
      {
        "name": "parentDepartmentName",
        "schema": "string",
        "description": "Name of the parent department."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/paystub",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Stubs",
    "typeScriptTag": "payStubs",
    "description": "Retrieve my pay stubs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/completeUserDetails",
    "method": "createOrUpdateUserDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Create or Update user",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "empId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "guid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayFullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shortName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "namePronunciation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "familySuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workerType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userDateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "departmentID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "locationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "locationName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportsToEmail",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "educationList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contactList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "financialList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFieldValues",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/add",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Create user",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "First name of user.",
        "example": "FIRSTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Mail ID of user.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/update",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Update user",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "description": "The unique system generated ID of the user."
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the user."
      },
      {
        "name": "empId",
        "schema": "string",
        "description": "Employee ID of the user. \n To update the employee ID, you need admin access."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "First name of the user."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "Last name of the user."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "Last name of the user."
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "description": "Second last name of the user."
      },
      {
        "name": "displayFullName",
        "schema": "string",
        "description": "Display name of the user."
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "description": "Cell phone of the user."
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "Phone number of the user."
      },
      {
        "name": "familySuffix",
        "schema": "string",
        "description": "Family suffix of the user."
      },
      {
        "name": "userDateOfBirth",
        "schema": "string",
        "description": "Date of birth of the user."
      },
      {
        "name": "jobGrade",
        "schema": "string",
        "description": "Job grade of the user."
      },
      {
        "name": "userStartDate",
        "schema": "string",
        "description": "Starting date of the user."
      },
      {
        "name": "userEndDate",
        "schema": "string",
        "description": "End date of the user."
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "Gender of the user."
      },
      {
        "name": "position",
        "schema": "string",
        "description": "Position of the user."
      },
      {
        "name": "profileId",
        "schema": "string",
        "description": "Profile ID of the user."
      },
      {
        "name": "shortName",
        "schema": "string",
        "description": "Short name of the user."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the user."
      },
      {
        "name": "locationName",
        "schema": "string",
        "description": "Location of the user."
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Location ID of user location."
      },
      {
        "name": "notes",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/basic",
    "method": "getUserBasicInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve user basic information",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Email of user"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/compensation/add",
    "method": "createUserCompensation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Create compensation for user",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "Value of compensation",
        "example": "VALUE"
      },
      {
        "name": "compensationType",
        "schema": "string",
        "required": true,
        "description": "Type of compensation. \n sal - Salary, pay - , INCTV - Incentive, SVCR - Severance",
        "example": "COMPENSATIONTYPE"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYCODE"
      },
      {
        "name": "period",
        "schema": "string",
        "required": true,
        "description": "Time period for compensation. \n HRLY - Hourly, DLY - Daily, WKLY - Weekly,\n BWKLY - Bi-Weekly, MTHLY - Monthly, BMTH - Bi-Monthly, QTRLY - Quarterly, BYRLY - Bi-Yearly, YRLY - Yearly, \n ONEF - OneOff",
        "example": "PERIOD"
      },
      {
        "name": "effectivedate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVEDATE"
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of compensation. \n ACTV - Active, ARCHV - Archive, PVNL - Provisional",
        "example": "STATUS"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/compensation/update",
    "method": "updateFinancialRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Update financial record of User",
    "parameters": [
      {
        "name": "guid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "compensationType",
        "schema": "string",
        "required": true,
        "description": "Type of compensation. \n sal - Salary, pay - , INCTV - Incentive, SVCR - Severance",
        "example": "COMPENSATIONTYPE",
        "default": "sal"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYCODE"
      },
      {
        "name": "period",
        "schema": "string",
        "required": true,
        "description": "Time period for compensation. \n HRLY - Hourly, DLY - Daily, WKLY - Weekly,\n BWKLY - Bi-Weekly, MTHLY - Monthly, BMTH - Bi-Monthly, QTRLY - Quarterly, BYRLY - Bi-Yearly, YRLY - Yearly, \n ONEF - OneOff",
        "example": "PERIOD",
        "default": "HRLY"
      },
      {
        "name": "effectivedate",
        "schema": "string",
        "description": "",
        "example": "yyyy-mm-dd"
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": "",
        "example": "yyyy-mm-dd"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of compensation. \n ACTV - Active, ARCHV - Archive, PVNL - Provisional",
        "example": "STATUS",
        "default": "ACTV"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/list",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve a user or list of users",
    "parameters": [
      {
        "name": "name",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/permissions",
    "method": "getUserPermissionsAndMenuConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve user permissions and menu configurations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/update/status",
    "method": "getFinancialStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve user financial status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/uploadpicture",
    "method": "uploadUserProfilePicture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Upload user profile",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "userid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users",
    "method": "getAllUsersDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve all users details",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Name of the user."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users per page.",
        "default": 20
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDateBefore",
        "schema": "string",
        "description": "The date before the assigned Start Date."
      },
      {
        "name": "startDateAfter",
        "schema": "string",
        "description": "The date after the assigned Start Date."
      },
      {
        "name": "endDateBefore",
        "schema": "string",
        "description": "The date before the assigned End Date."
      },
      {
        "name": "endDateAfter",
        "schema": "string",
        "description": "The date after the assigned End Date."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the user. \n  A- Active User \n I- Inactive User \n F- Future Joiner ",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/basic",
    "method": "getBasicUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve basic user details",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Name of the user."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users per page.",
        "default": 20
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDateBefore",
        "schema": "string",
        "description": "The date before the assigned Start Date."
      },
      {
        "name": "startDateAfter",
        "schema": "string",
        "description": "The date after the assigned Start Date."
      },
      {
        "name": "endDateBefore",
        "schema": "string",
        "description": "The date before the assigned End Date."
      },
      {
        "name": "endDateAfter",
        "schema": "string",
        "description": "The date after the assigned End Date."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the user. \n  A- Active User \n I- Inactive User \n F- Future Joiner ",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/address/save",
    "method": "saveUserAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Save User Address",
    "parameters": [
      {
        "name": "empId",
        "schema": "string",
        "description": "The unique identity of the employee. "
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the user."
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/education/save",
    "method": "saveUserEducation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Save User Education",
    "parameters": [
      {
        "name": "empId",
        "schema": "string",
        "description": "The unique identity of the employee. "
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the user."
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/employment/save",
    "method": "saveUserEmployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Save User Employment",
    "parameters": [
      {
        "name": "empId",
        "schema": "string",
        "description": "The unique identity of the employee. "
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the user."
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/orgrelation/add",
    "method": "addReportsTo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Add reports to",
    "parameters": [
      {
        "name": "empId",
        "schema": "string",
        "description": "The unique identity of the employee. "
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the user."
      },
      {
        "name": "Add Objects",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/saveCustomFieldValues",
    "method": "saveCustomFieldValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Save Custom Field values",
    "parameters": [
      {
        "name": "empId",
        "schema": "string",
        "required": false,
        "description": "The unique identity of the employee."
      },
      {
        "name": "guid",
        "schema": "string",
        "required": false,
        "description": "The unique system generated ID of the user."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Email address of the user."
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/user/address/delete",
    "method": "deleteUserAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Delete User Address",
    "parameters": [
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the address.",
        "example": "ADDRESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/api/user/employment/delete",
    "method": "deleteUserEmployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Deletes User Employment",
    "parameters": [
      {
        "name": "empid",
        "schema": "integer",
        "required": true,
        "description": "The unique identity of the employee. ",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/user/education/delete",
    "method": "deleteUserEducation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Delete User Education",
    "parameters": [
      {
        "name": "educationId",
        "schema": "string",
        "required": true,
        "description": "Education ID the user",
        "example": "EDUCATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/appraisal/user",
    "method": "getPerformanceReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance Review",
    "typeScriptTag": "performanceReview",
    "description": "Retrieve Performance Reviews",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/appraisal/template/list",
    "method": "getTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance Review",
    "typeScriptTag": "performanceReview",
    "description": "Retrieve Performance Review Templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/appraisal/add",
    "method": "createPerformanceReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Performance Review",
    "typeScriptTag": "performanceReview",
    "description": "Create Performance Review",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the performance review template.",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Start Date of the performance review.",
        "example": "2022-10-02"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "End Date of the performance review.",
        "example": "2022-10-02"
      },
      {
        "name": "appraisalType",
        "schema": "string",
        "description": "Review Period",
        "default": "Annual"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/appraisal/getCompletedReviews",
    "method": "getCompletedReviewsBasedOnUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance Review",
    "typeScriptTag": "performanceReview",
    "description": "Retrieve Completed Performance Reviews",
    "parameters": [
      {
        "name": "targetUserId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/appraisal/bulkLaunch",
    "method": "launchPerformanceReviewsInBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Performance Review",
    "typeScriptTag": "performanceReview",
    "description": "Launch Performance Reviews In Bulk",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reviewType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importGoals",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importJobProfileSkills",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importSkills",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userIdList",
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
    "url": "/appraisal/assignment",
    "method": "getAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance Review Assignment",
    "typeScriptTag": "performanceReviewAssignment",
    "description": "Retrieve Performance Review Assignments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/position/save",
    "method": "createPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Save Position",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of Position",
        "example": "NAME"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of Position"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of openings",
        "example": 0,
        "default": "1"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of Position",
        "example": "STATUS",
        "default": "OPEN"
      },
      {
        "name": "accessLevel",
        "schema": "string",
        "required": true,
        "description": "Access level of Position \n 'pvt' - Private, 'ijp' - Publish Internally, 'pub' - Public",
        "example": "ACCESSLEVEL",
        "default": "pvt"
      },
      {
        "name": "requirements",
        "schema": "string",
        "description": "Requirements of Position"
      },
      {
        "name": "responsibilities",
        "schema": "string",
        "description": "Responsibilities of Position"
      },
      {
        "name": "dateOpen",
        "schema": "string",
        "required": true,
        "description": "Date of Opening",
        "example": "DATEOPEN"
      },
      {
        "name": "dateClose",
        "schema": "string",
        "required": true,
        "description": "Date of Closing",
        "example": "DATECLOSE"
      },
      {
        "name": "positionUid",
        "schema": "string",
        "required": true,
        "description": "Unique Identity of Position",
        "example": "POSITIONUID"
      },
      {
        "name": "projectid",
        "schema": "integer",
        "description": "Project ID of Position"
      },
      {
        "name": "funnelId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Funnel ID of Position",
        "example": 0
      },
      {
        "name": "approvalFlowId",
        "schema": "integer",
        "description": "Position Approval Flow ID of Position"
      },
      {
        "name": "locationid",
        "schema": "integer",
        "description": "Location ID of Position"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "Department ID of Position"
      },
      {
        "name": "profileid",
        "schema": "integer",
        "description": "Profile ID of Position"
      },
      {
        "name": "recruiterId",
        "schema": "integer",
        "description": "ID of Recruiter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/position/view",
    "method": "getPosition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Retrieve position",
    "parameters": [
      {
        "name": "positionid",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/position/list",
    "method": "getPositionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Retrieve positions",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/projects/allocation/{projectId}",
    "method": "listAllocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "List Allocations",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project.",
        "example": 0
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/projects/allocation",
    "method": "assignUserAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Assign Project Allocation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/projects/{projectId}",
    "method": "detailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Retrieve Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the project.",
        "example": "PROJECTID"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/projects",
    "method": "listProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "List Projects",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/projects",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create Project",
    "parameters": [
      {
        "name": "projectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Machine Learning"
      },
      {
        "name": "projectDesc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "The project relates to the machine learning services."
      },
      {
        "name": "shortCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ML_007"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/report",
    "method": "getReportDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get report",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "analyticId",
        "schema": "string",
        "required": true,
        "description": "analyticId",
        "example": "ANALYTICID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/report/content",
    "method": "getContentByAnalyticId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get content for report by analytic Id",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "analyticId",
        "schema": "string",
        "required": true,
        "description": "analyticId",
        "example": "ANALYTICID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/report/content",
    "method": "getContentForReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Retrieve report content",
    "parameters": [
      {
        "name": "analyticId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the report.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/skill/add",
    "method": "createNewSkill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Create a new skill",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "skillCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SKILLCODE"
      },
      {
        "name": "assessmentModel",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "skillTypeModel",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/skills",
    "method": "getSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Retrieve skills",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/userSkill",
    "method": "getUserAssignedSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Retrieve skills assigned to a user",
    "parameters": [
      {
        "name": "assignedUserId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user whose skills should be retrieved.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/survey/allresponses",
    "method": "getAllSurveyResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey",
    "typeScriptTag": "survey",
    "description": "Retrieve all the Responses of the Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "integer",
        "description": "The ID of the survey."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/survey/item/save",
    "method": "createItemResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey",
    "typeScriptTag": "survey",
    "description": "Create the item's response for a survey",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "assignmentId",
        "schema": "integer",
        "required": true,
        "description": "assignmentId",
        "example": 0
      },
      {
        "name": "itemId",
        "schema": "integer",
        "required": true,
        "description": "itemId",
        "example": 0
      },
      {
        "name": "responseValue",
        "schema": "string",
        "required": true,
        "description": "responseValue",
        "example": "RESPONSEVALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/survey/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey",
    "typeScriptTag": "survey",
    "description": "Get a list of surveys",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/survey/save",
    "method": "createResponseByAssignmentId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey",
    "typeScriptTag": "survey",
    "description": "Create a survey response by assignment id",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "assignmentId",
        "schema": "integer",
        "required": true,
        "description": "assignmentId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/survey/view",
    "method": "detailsByFormId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey",
    "typeScriptTag": "survey",
    "description": "Get the details of a survey form by form id",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "dynamicFormId",
        "schema": "integer",
        "required": false,
        "description": "dynamicFormId",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/user/timecard",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Retrieve timecard details by User ID.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "email of the user."
      },
      {
        "name": "guid",
        "schema": "string",
        "required": false,
        "description": "Graphical user ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/timecards",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Retrieve timecard basic details by User ID.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "email of the user."
      },
      {
        "name": "guid",
        "schema": "string",
        "required": false,
        "description": "Graphical user ID."
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/timecard/clock/out",
    "method": "clockOut",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Clock Out",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/verify/device",
    "method": "verifyDeviceWithDeviceUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Device verification with DeviceUUID.",
    "parameters": [
      {
        "name": "deviceUuid",
        "schema": "string",
        "required": true,
        "description": "deviceUUID",
        "example": "DEVICEUUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/verify/tvc",
    "method": "getTvcForClockinWithQrCodeUsingCid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "TVC code for clockin with QR Code using cid.",
    "parameters": [
      {
        "name": "cid",
        "schema": "integer",
        "required": true,
        "description": "cid",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/verify/user",
    "method": "verifyUserWithUserid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "User verification with userid.",
    "parameters": [
      {
        "name": "adpAssociateOid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allocation",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "appleUserIdentifier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calWeekPref",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calendarId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidateId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "careerPathwayId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "countryId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createuserid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "thumbnail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timecardPeriodPref",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tosVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userDateFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userDateOfBirth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userDisplayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userEndDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userNameFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "view",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workerType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workingDays",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/register",
    "method": "registerDeviceForClockInWithAssetModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Register device for ClockIn with AssetModel.",
    "parameters": [
      {
        "name": "accessories",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "acknowledge",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assetId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assetno",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assetstatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assettype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "selfAssign",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "serialno",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "service",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "specs",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supplier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userDomain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userMail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userPassword",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uuid",
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/timecards/details/{timecardId}",
    "method": "getDetailsByTimecardId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Retrieve timecard details based on timecard ID.",
    "parameters": [
      {
        "name": "timecardId",
        "schema": "integer",
        "required": true,
        "description": "Timecard ID of the timecard.",
        "example": 0
      },
      {
        "name": "flatcustomfields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timecards",
    "method": "getTimecardsByTimesheetId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve timecards by Timesheet ID.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start date of the timesheet.",
        "example": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "End date of the timesheet.",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/activitytype/list",
    "method": "listActivityTypesByCid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve list of activity types based on cid.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/allocations/list",
    "method": "getActiveAllocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve my active allocations.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/clockin",
    "method": "clockIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Clock in.",
    "parameters": [
      {
        "name": "proceedOutsideGeoFence",
        "schema": "integer",
        "description": "To clockin outside geofence",
        "default": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of timecard."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Project ID of project."
      },
      {
        "name": "projectManager",
        "schema": "string",
        "description": "Project Manager corresponding user."
      },
      {
        "name": "categoryCode",
        "schema": "string",
        "description": "Category of timecard. Choose between [\"Regular\", \"Overtime\"].",
        "example": "RG"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "Notes."
      },
      {
        "name": "billable",
        "schema": "string",
        "description": "Billable or non- billable timecard. Select 'Y' for billable and 'N' for non-billable",
        "example": "Y"
      },
      {
        "name": "activity",
        "schema": "string",
        "description": "Activity type of timecard."
      },
      {
        "name": "approvalRejectionReason",
        "schema": "string",
        "description": "Reason for approval rejection."
      },
      {
        "name": "clockInLongitude",
        "schema": "number",
        "description": "Longitude value while clocking in."
      },
      {
        "name": "clockInLatitude",
        "schema": "number",
        "description": "Latitude value while clocking in."
      },
      {
        "name": "clockOutLongitude",
        "schema": "number",
        "description": "Longitude value while clocking out."
      },
      {
        "name": "clockOutLatitude",
        "schema": "number",
        "description": "Latitude value while clocking out."
      },
      {
        "name": "projectAreaId",
        "schema": "integer",
        "description": "Project area ID of project area."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/clockout",
    "method": "clockOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Clock out.",
    "parameters": [
      {
        "name": "proceedOutsideGeoFence",
        "schema": "integer",
        "description": "clock out outside geofence",
        "default": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of timecard."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Project ID of project."
      },
      {
        "name": "projectManager",
        "schema": "string",
        "description": "Project Manager corresponding user."
      },
      {
        "name": "categoryCode",
        "schema": "string",
        "description": "Category of timecard. Choose between [\"Regular\", \"Overtime\"].",
        "example": "RG"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "Notes."
      },
      {
        "name": "billable",
        "schema": "string",
        "description": "Billable or non- billable timecard. Select 'Y' for billable and 'N' for non-billable",
        "example": "Y"
      },
      {
        "name": "activity",
        "schema": "string",
        "description": "Activity type of timecard."
      },
      {
        "name": "approvalRejectionReason",
        "schema": "string",
        "description": "Reason for approval rejection."
      },
      {
        "name": "clockInLongitude",
        "schema": "number",
        "description": "Longitude value while clocking in."
      },
      {
        "name": "clockInLatitude",
        "schema": "number",
        "description": "Latitude value while clocking in."
      },
      {
        "name": "clockOutLongitude",
        "schema": "number",
        "description": "Longitude value while clocking out."
      },
      {
        "name": "clockOutLatitude",
        "schema": "number",
        "description": "Latitude value while clocking out."
      },
      {
        "name": "projectAreaId",
        "schema": "integer",
        "description": "Project area ID of project area."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/delete",
    "method": "deleteByTimesheetId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Delete a timesheet.",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Timesheet ID of timesheet.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/preferences/list",
    "method": "getPreferencesByCid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve my timesheet preferences.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/save",
    "method": "createOrUpdateTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Create/Update a timesheet.",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Timesheet date.",
        "example": "DATE"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "Project ID of project.",
        "example": 0
      },
      {
        "name": "elapsedTime",
        "schema": "string",
        "required": true,
        "description": "Elapsed Time of timecard.",
        "example": "ELAPSEDTIME"
      },
      {
        "name": "cardId",
        "schema": "integer",
        "description": "Timecard Id of timecard."
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of timecard."
      },
      {
        "name": "clockedOutsideGeofence",
        "schema": "integer",
        "description": "Clocked in or clocked out outside geofence."
      },
      {
        "name": "projectManager",
        "schema": "string",
        "description": "Project Manager corresponding user."
      },
      {
        "name": "categoryCode",
        "schema": "string",
        "description": "Category of timecard. Choose between [\"Regular\", \"Overtime\"].",
        "example": "RG"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "Notes."
      },
      {
        "name": "billable",
        "schema": "string",
        "description": "Billable or non- billable timecard. Select 'Y' for billable and 'N' for non-billable",
        "example": "Y"
      },
      {
        "name": "activity",
        "schema": "string",
        "description": "Activity type of timecard."
      },
      {
        "name": "approvalRejectionReason",
        "schema": "string",
        "description": "Reason for approval rejection."
      },
      {
        "name": "clockInLongitude",
        "schema": "number",
        "description": "Longitude value while clocking in."
      },
      {
        "name": "clockInLatitude",
        "schema": "number",
        "description": "Latitude value while clocking in."
      },
      {
        "name": "clockOutLongitude",
        "schema": "number",
        "description": "Longitude value while clocking out."
      },
      {
        "name": "clockOutLatitude",
        "schema": "number",
        "description": "Latitude value while clocking out."
      },
      {
        "name": "projectAreaId",
        "schema": "integer",
        "description": "Project area ID of project area."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/update",
    "method": "updateStatusByTimesheetId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Update timesheet status by Timesheet ID.",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Timesheet ID of the timesheet.",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of timecard. Choose between [\"PD-Pending for Approval\", \"PAP-Partially Approved\", \"AP-Fully Approved\",\"NEW-New Timesheet\",\"RJ-Rejected\"].",
        "example": "AP"
      },
      {
        "name": "comments",
        "schema": "string",
        "description": "Comments"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheets",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve timesheets by User ID.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date of the timesheet."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date of the timesheet."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet/approvals/list",
    "method": "getApprovalList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve timesheet approvals.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start date of the timesheet.",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "End date of the timesheet.",
        "example": "ENDDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheet",
    "method": "getByTimesheetId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve a timesheet by timesheet ID.",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Tmesheet ID of timesheet.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/timesheets/details/{timeSheetId}",
    "method": "getDetailsByTimesheetId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve timesheet details by Timesheet ID.",
    "parameters": [
      {
        "name": "timeSheetId",
        "schema": "integer",
        "required": true,
        "description": "Timesheet ID of timesheet.",
        "example": 0
      },
      {
        "name": "flatcustomfields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/training/content",
    "method": "getTrainingContentByTrainingId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Retrieve training content by training ID",
    "parameters": [
      {
        "name": "trainingId",
        "schema": "integer",
        "required": true,
        "description": "trainingId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/training/status/update",
    "method": "updateUserStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Update training status for user",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Status of the user training.",
        "example": "STATUS"
      },
      {
        "name": "userTrainingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user training.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/training/talentlms/sync",
    "method": "synchronizeWithTalentLms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Sync with talent LMS",
    "parameters": [
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": true,
        "description": "redirectUrl",
        "example": "REDIRECTURL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trainings",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Retrieve trainings by user ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/ptopolicies",
    "method": "listPtoPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User PTO Policies",
    "typeScriptTag": "userPtoPolicies",
    "description": "Retrieve list of PTO policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/user/pto",
    "method": "getPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User PTO Policies",
    "typeScriptTag": "userPtoPolicies",
    "description": "Retrieve your PTO Policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/userworkflow/assign/{workflowId}",
    "method": "assignWorkflowToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserWorkflow",
    "typeScriptTag": "userWorkflow",
    "description": "Assign Workflow to User",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow.",
        "example": 0
      },
      {
        "name": "assigneeUserId",
        "schema": "integer",
        "required": true,
        "description": "The ID of Workflow Assignee.",
        "example": 0
      },
      {
        "name": "coordinatorUserId",
        "schema": "integer",
        "required": true,
        "description": "The ID of Workflow Coordinator.",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "Comment of the workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/userworkflows",
    "method": "getUserWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows by user id.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/userworkflows/{userworkflowid}",
    "method": "listTasksByUserworkflowId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get tasks by userworkflowid.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "userworkflowid",
        "schema": "integer",
        "required": true,
        "description": "userworkflowid",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/task/add",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Create a new task.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Created"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/task/update/status",
    "method": "updateStatusTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Update status workflow task.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "appraisalId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "cid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createts",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastEdit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "launchtsYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "phasename",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruitId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "systemTask",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "taskUid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transitionName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/task/{taskid}",
    "method": "getTaskDetailsByTaskId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get the details of a workflow task by task id.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "Authorization"
      },
      {
        "name": "taskid",
        "schema": "integer",
        "required": true,
        "description": "taskid",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/tasks",
    "method": "getTasksByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get tasks by user id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/workflows",
    "method": "getWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows.",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "status",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/test",
    "method": "getTest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Test",
    "typeScriptTag": "test",
    "description": "Retrieve test",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "The status of test - Choose between [\"A-Active\", \"ARCHV-Archive\", \"DRAFT-Draft\"].",
        "example": "STATUS",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/shifts",
    "method": "listShiftsUsingGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Get Shifts",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": "projectId"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "startDate"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "endDate"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "status"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/shifts/save",
    "method": "saveShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Save Shift",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/resume",
    "method": "extractPdfResume",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create a candidate from pdf resume",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/rm/api/feedback",
    "method": "listFeedback",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feedback",
    "typeScriptTag": "feedback",
    "description": "Retrieve feedback",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of feedback to retrieve. \nChoose between [\"all\", \"my\", \"team\"]. all - All Feedback, my - My Feedback, team - Team's feedback",
        "example": "TYPE",
        "default": "all"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/getgoal",
    "method": "getGoal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Retrieve Goal",
    "parameters": [
      {
        "name": "goalid",
        "schema": "integer",
        "required": true,
        "description": "ID to get a goal.",
        "example": 0
      },
      {
        "name": "reviewUserId",
        "schema": "integer",
        "description": "The ID of the user who is reviewee."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/goal",
    "method": "getAllGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Retrieve all goals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/goal",
    "method": "createNewGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create new goal",
    "parameters": [
      {
        "name": "additive",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "begindate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "commentCrediteatets",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commentDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyGoal",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "completionRatio",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "createUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "crediteatets",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currentValue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disposition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeRatio",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "goalId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "goalValue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "goalWeightage",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "hasGoalApprovalPermission",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "initialvalue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "isForward",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "lastUpdateUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "objectiveId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parentGoalId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "progressRatio",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "projectid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewUserId",
        "schema": "integer",
        "required": false,
        "description": "reviewUserId",
        "default": 0
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "typecode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "visibleToDirectReports",
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/deletegoal",
    "method": "deleteGoal",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete Goal",
    "parameters": [
      {
        "name": "goalId",
        "schema": "integer",
        "required": true,
        "description": "GoalId to delete a goal",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
      }
    ]
  },
  {
    "url": "/invoice",
    "method": "getByProjectId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Retrieve invoices by Project Id",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/objective",
    "method": "getByUserIdOrSpecificObjectiveById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "Retrieve objectives",
    "parameters": [
      {
        "name": "objectiveId",
        "schema": "string",
        "description": "ID of Objective"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve user details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/compensation",
    "method": "getFinancialRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve user financial record",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Email address of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/resource",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People and Permissions",
    "typeScriptTag": "peopleAndPermissions",
    "description": "Retrieve users",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Name of the user."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users per page.",
        "default": 20
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order to sort the users. \n asc- Ascending Order \n desc- Descending Order ",
        "default": "asc"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the user. \n  A- Active User \n I- Inactive User \n F- Future Joiner ",
        "default": "A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/timecard",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Get timecards by user id.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "type",
        "default": "leave"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/timecard/addtimecard",
    "method": "createTimecard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Create a new timecard.",
    "parameters": [
      {
        "name": "createtsDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customHours",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeStr",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "projectManager",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectModelAccount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usedTime",
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/timecard/clockin",
    "method": "createPastTimecard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timecards",
    "typeScriptTag": "timecards",
    "description": "Create a past timecard.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalRejectionReason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billable",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cardId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "caseNum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "caseUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "chargeType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createtsYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customHours",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTimeYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTimeStr",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "projectManager",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectModelAccount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ptoComputed",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeMonth",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeNanos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeSeconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeTimezoneOffset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeYear",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateTimeStr",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sumOfElapsedTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usedTime",
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Expense Reports"
      apiBaseUrl="https://acmecompany.bizmerlin.net/rm/api"
      apiVersion="1.0"
      endpoints={138}
      sdkMethods={143}
      schemas={425}
      parameters={921}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clayhr/openapi.yaml"
      developerDocumentation="clayhr.readme.io/"
    />
  );
}
  