import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FrontCoreTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="front-core-typescript-sdk"
      metaDescription={`Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.`}
      company="Front"
      serviceName="Core"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/core/logo.png"
      companyKebabCase="front"
      clientNameCamelCase="frontCore"
      homepage="front.com"
      lastUpdated={new Date("2024-03-25T20:47:15.965Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/core/favicon.png"
      contactUrl="https://community.front.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/core/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","email","communication","customer_operations","support","sales","account_management","customer_service","help_desk","customer_communication","churn_prevention","channel_routing","real_time_collaboration","collaboration","email_collaboration","shared_inbox"]}
      methods={[
  {
    "url": "/accounts",
    "method": "listCompanyAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List Accounts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the accounts. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create account",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
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
    "url": "/accounts/custom_fields",
    "method": "listAccountCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Account's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "deleteAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "getAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Fetch an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
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
    "url": "/accounts/{account_id}",
    "method": "updateAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
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
    "url": "/accounts/{account_id}/contacts",
    "method": "removeContactFrom",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Remove contact from Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
      },
      {
        "name": "contact_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/contacts",
    "method": "listAccountContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List account contacts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the contacts. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/accounts/{account_id}/contacts",
    "method": "addContactsToAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Add contact to Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "ACCOUNT_ID",
        "default": "acc_123"
      },
      {
        "name": "contact_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/analytics/exports",
    "method": "createNewExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Create a new analytics export.",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "number",
        "description": ""
      },
      {
        "name": "end",
        "schema": "number",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
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
    "url": "/analytics/exports/{export_id}",
    "method": "getExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Fetch an analytics export.",
    "parameters": [
      {
        "name": "exportId",
        "schema": "string",
        "required": true,
        "description": "The export ID.",
        "example": "EXPORT_ID",
        "default": "exp_123"
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
    "url": "/analytics/reports",
    "method": "createNewReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Create a new analytics report.",
    "parameters": [
      {
        "name": "start",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "end",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "array",
        "required": true,
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
    "url": "/analytics/reports/{report_uid}",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Fetch an analytics report.",
    "parameters": [
      {
        "name": "reportUid",
        "schema": "string",
        "required": true,
        "description": "The report UID.",
        "example": "REPORT_UID",
        "default": "723ec32796f12c6f05f6b124d8ef76191a38cec990e0f65d549206c51373f1a0"
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
    "url": "/channels",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "List channels",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}",
    "method": "getChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Get channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
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
    "url": "/channels/{channel_id}",
    "method": "updateChannel",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Update Channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Your channel name"
      },
      {
        "name": "inbox_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/drafts",
    "method": "createNewDraftMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Create draft",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHOR_ID"
      },
      {
        "name": "to",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "quote_body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "private"
      },
      {
        "name": "signature_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "should_add_default_signature",
        "schema": "boolean",
        "required": false,
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
    "url": "/channels/{channel_id}/incoming_messages",
    "method": "receiveCustomMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Receive custom messages",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "body_format",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "markdown"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/messages",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Create message",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The sending channel ID. Alternatively, you can supply the sending channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "to",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signature_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "should_add_default_signature",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/validate",
    "method": "validateSmtpSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Validate channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/comments/{comment_id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The Comment ID",
        "example": "COMMENT_ID",
        "default": "com_123"
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
    "url": "/comments/{comment_id}/mentions",
    "method": "listMentionedTeammates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List comment mentions",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The Comment ID",
        "example": "COMMENT_ID",
        "default": "com_123"
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
    "url": "/company/rules",
    "method": "listAllCompanyRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List all company rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/tags",
    "method": "listCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List company tags",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the tags. Only supports `id`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/company/tags",
    "method": "createCompanyTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create company tag",
    "parameters": [
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
        "example": "NAME"
      },
      {
        "name": "highlight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/contact_groups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "List groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact_groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Create group",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contact_groups/{contact_group_id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Delete group",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "The contact group ID",
        "example": "CONTACT_GROUP_ID",
        "default": "grp_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contact_groups/{contact_group_id}/contacts",
    "method": "removeContacts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Remove contacts from group",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "The contact group ID",
        "example": "CONTACT_GROUP_ID",
        "default": "grp_123"
      },
      {
        "name": "contact_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contact_groups/{contact_group_id}/contacts",
    "method": "listGroupContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "List contacts in group",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "The contact group ID",
        "example": "CONTACT_GROUP_ID",
        "default": "grp_123"
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
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
    "url": "/contact_groups/{contact_group_id}/contacts",
    "method": "addContactsToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Add contacts to group",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "The contact group ID",
        "example": "CONTACT_GROUP_ID",
        "default": "grp_123"
      },
      {
        "name": "contact_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "listCompanyContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List contacts",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the contacts. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/custom_fields",
    "method": "listContactFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Contact's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/merge",
    "method": "mergeContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Merge contacts",
    "parameters": [
      {
        "name": "target_contact_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_ids",
        "schema": "array",
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
    "url": "/contacts/{contact_id}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "getOneContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
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
    "url": "/contacts/{contact_id}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatar",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_spammer",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "group_names",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/conversations",
    "method": "listConversationsReverseChronologicalOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List contact conversations",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The Contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/contacts/{contact_id}/handles",
    "method": "removeHandle",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact Handles",
    "typeScriptTag": "contactHandles",
    "description": "Delete contact handle",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/handles",
    "method": "addNewHandle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Handles",
    "typeScriptTag": "contactHandles",
    "description": "Add contact handle",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      },
      {
        "name": "handle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dwight@limitlesspaper.com"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/notes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Notes",
    "typeScriptTag": "contactNotes",
    "description": "List notes",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/notes",
    "method": "createNewNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Notes",
    "typeScriptTag": "contactNotes",
    "description": "Add note",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The contact ID. Alternatively, you can supply the contact's source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CONTACT_ID",
        "default": "crd_123"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHOR_ID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
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
    "url": "/conversations",
    "method": "listInReverseChronologicalOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversations",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the conversations. Only supports `date`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/conversations",
    "method": "createDiscussion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create discussion conversation",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "inbox_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "comment",
        "schema": "object",
        "required": true,
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
    "url": "/conversations/custom_fields",
    "method": "listConversationCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Conversation's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/search/{query}",
    "method": "searchByQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Search conversations",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Search query string. See [Search](https://dev.frontapp.com/docs/search-1) topic for usage details.",
        "example": "QUERY",
        "default": "inbox:inb_123 tag:tag_345"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/conversations/{conversation_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}",
    "method": "updateConversationById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "assignee_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inbox_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": "Invalid input, such as invalid custom fields"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/assignee",
    "method": "updateAssignee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation assignee",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "assignee_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSIGNEE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/comments",
    "method": "listConversationComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List conversation comments",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}/comments",
    "method": "addNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Add comment",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "attachments",
        "schema": "array",
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
    "url": "/conversations/{conversation_id}/drafts",
    "method": "listConversationDrafts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "List conversation drafts",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}/drafts",
    "method": "createDraftReply",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Create draft reply",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversation events",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/conversations/{conversation_id}/followers",
    "method": "removeFollowers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete conversation followers",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversation followers",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}/followers",
    "method": "addFollowers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add conversation followers",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/inboxes",
    "method": "listInboxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversation inboxes",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
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
    "url": "/conversations/{conversation_id}/links",
    "method": "removeLinks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Remove conversation links",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "link_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add conversation link",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "link_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "link_external_urls",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/messages",
    "method": "listMessagesInReverseChronologicalOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversation messages",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the messages. Only supports `created_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/conversations/{conversation_id}/messages",
    "method": "createMessageReply",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Create message reply",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "to",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quote_body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signature_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "should_add_default_signature",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/reminders",
    "method": "updateReminders",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation reminders",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "teammate_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMMATE_ID"
      },
      {
        "name": "scheduled_at",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/tags",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Remove conversation tag",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "tag_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/tags",
    "method": "addTagsToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add conversation tag",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The conversation ID",
        "example": "CONVERSATION_ID",
        "default": "cnv_123"
      },
      {
        "name": "tag_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/custom_fields",
    "method": "listContactCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Contact's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/download/{attachment_link_id}",
    "method": "downloadAttachmentFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Download attachment",
    "parameters": [
      {
        "name": "attachmentLinkId",
        "schema": "string",
        "required": true,
        "description": "The Attachment ID",
        "example": "ATTACHMENT_LINK_ID",
        "default": "fil_55c8c149"
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
    "url": "/drafts/{draft_id}",
    "method": "deleteDraftMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Delete draft",
    "parameters": [
      {
        "name": "draftId",
        "schema": "string",
        "required": true,
        "description": "The draft ID",
        "example": "DRAFT_ID",
        "default": "msg_123"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/events",
    "method": "listDetailedInboxEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List events",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with optional properties `before`, `after`, or `types`. `before` and `after` should be a timestamp in seconds with up to 3 decimal places. `types` should be a list of [event types](https://dev.frontapp.com/reference/events)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per page (max 15)",
        "default": 15
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the events. Only supports `created_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/events/{event_id}",
    "method": "getEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get event",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The event ID",
        "example": "EVENT_ID",
        "default": "evt_55c8c149"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An event is created everytime something interesting is happening in Front."
      }
    ]
  },
  {
    "url": "/inboxes",
    "method": "listInboxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List inboxes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/inboxes",
    "method": "createDefaultTeamInbox",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Create inbox",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/inboxes/custom_fields",
    "method": "listInboxCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Inbox's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/inboxes/{inbox_id}",
    "method": "getInbox",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Get inbox",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
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
    "url": "/inboxes/{inbox_id}/channels",
    "method": "listChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List inbox channels",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
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
    "url": "/inboxes/{inbox_id}/channels",
    "method": "createInboxChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Create a channel",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "send_as",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/inboxes/{inbox_id}/conversations",
    "method": "listConversationsInbox",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List inbox conversations",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/inboxes/{inbox_id}/imported_messages",
    "method": "importNewInboxMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Import message",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "body_format",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "markdown"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "created_at",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "email"
      },
      {
        "name": "assignee_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/inboxes/{inbox_id}/teammates",
    "method": "removeAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Removes inbox access",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/inboxes/{inbox_id}/teammates",
    "method": "listTeammatesAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List inbox access",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
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
    "url": "/inboxes/{inbox_id}/teammates",
    "method": "addTeammateAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Add inbox access",
    "parameters": [
      {
        "name": "inboxId",
        "schema": "string",
        "required": true,
        "description": "The Inbox ID",
        "example": "INBOX_ID",
        "default": "inb_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/knowledge_base_articles/{article_id}",
    "method": "deleteArticle",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Delete an article",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to delete",
        "example": "ARTICLE_ID",
        "default": "kba_123"
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
    "url": "/knowledge_base_articles/{article_id}",
    "method": "getArticleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get a knowledge base article",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to fetch",
        "example": "ARTICLE_ID",
        "default": "kba_123"
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
    "url": "/knowledge_base_articles/{article_id}/content",
    "method": "getContentDefaultLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get knowledge base article with content in default locale",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to fetch",
        "example": "ARTICLE_ID",
        "default": "kba_123"
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
    "url": "/knowledge_base_articles/{article_id}/content",
    "method": "updateArticleContentDefaultLocale",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update article content in default locale.",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to update",
        "example": "ARTICLE_ID",
        "default": "kba_123"
      },
      {
        "name": "author_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "draft"
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
    "url": "/knowledge_base_articles/{article_id}/download/{attachment_id}",
    "method": "downloadAttachmentArticle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Download attachment from an article",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article",
        "example": "ARTICLE_ID",
        "default": "kba_123"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file to download",
        "example": "ATTACHMENT_ID"
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
    "url": "/knowledge_base_articles/{article_id}/locales/{locale}/content",
    "method": "getArticleContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get knowledge base article with content in specified locale",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to fetch",
        "example": "ARTICLE_ID",
        "default": "kba_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch",
        "example": "LOCALE",
        "default": "en"
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
    "url": "/knowledge_base_articles/{article_id}/locales/{locale}/content",
    "method": "updateArticleContentLocale",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update article content in specified locale",
    "parameters": [
      {
        "name": "articleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the article to update",
        "example": "ARTICLE_ID",
        "default": "kba_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content",
        "example": "LOCALE",
        "default": "en"
      },
      {
        "name": "author_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "draft"
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
    "url": "/knowledge_base_categories/{category_id}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Delete a knowledge base category",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to delete",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/knowledge_base_categories/{category_id}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get a knowledge base category",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to fetch",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
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
    "url": "/knowledge_base_categories/{category_id}/articles",
    "method": "listArticlesInCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "List articles in a category",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/knowledge_base_categories/{category_id}/content",
    "method": "getCategoryContentDefaultLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get knowledge base category content in default locale",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to fetch",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
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
    "url": "/knowledge_base_categories/{category_id}/content",
    "method": "updateCategoryDefaultLocale",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update knowledge base category in default locale",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to update",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/knowledge_base_categories/{category_id}/locales/{locale}/content",
    "method": "getCategoryContentLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get knowledge base category with content in specified locale",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to fetch",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch",
        "example": "LOCALE",
        "default": "en"
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
    "url": "/knowledge_base_categories/{category_id}/locales/{locale}/content",
    "method": "updateCategoryContentLocale",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update knowledge base category in specified locale",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the category to update",
        "example": "CATEGORY_ID",
        "default": "kbc_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content",
        "example": "LOCALE",
        "default": "en"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/knowledge_bases",
    "method": "listKnowledgeBases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "List knowledge bases",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/knowledge_bases",
    "method": "createNewKnowledgeBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create a knowledge base",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "internal",
        "default": "external"
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
    "url": "/knowledge_bases/{knowledge_base_id}",
    "method": "getKnowledgeBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get a knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to fetch",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
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
    "url": "/knowledge_bases/{knowledge_base_id}/articles",
    "method": "listArticlesInBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "List articles in a knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/knowledge_bases/{knowledge_base_id}/articles",
    "method": "createArticleDefaultLocale",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create article in a knowledge base in default locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to create the article in",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "category_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "author_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "draft"
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
    "url": "/knowledge_bases/{knowledge_base_id}/categories",
    "method": "listCategoriesInBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "List categories in a knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/knowledge_bases/{knowledge_base_id}/categories",
    "method": "createCategoryDefaultLocale",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create knowledge base category in default locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to create the category in",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_category_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/knowledge_bases/{knowledge_base_id}/content",
    "method": "getContentDefaultLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get a knowledge base with content in default locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to fetch",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
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
    "url": "/knowledge_bases/{knowledge_base_id}/content",
    "method": "updateDefaultKnowledgeBase",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update knowledge base in default locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to update",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
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
      }
    ]
  },
  {
    "url": "/knowledge_bases/{knowledge_base_id}/locales/{locale}/articles",
    "method": "createArticleLocale",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create article in a knowledge base in specified locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to create the article in",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the article's content",
        "example": "LOCALE",
        "default": "en"
      },
      {
        "name": "category_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "author_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "draft"
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
    "url": "/knowledge_bases/{knowledge_base_id}/locales/{locale}/categories",
    "method": "createCategoryInLocale",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create knowledge base category in specified locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to create the category in",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the category's content",
        "example": "LOCALE",
        "default": "en"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_category_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/knowledge_bases/{knowledge_base_id}/locales/{locale}/content",
    "method": "getKnowledgeBaseContentInLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get a knowledge base with content in specified locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to fetch",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch",
        "example": "LOCALE",
        "default": "en"
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
    "url": "/knowledge_bases/{knowledge_base_id}/locales/{locale}/content",
    "method": "updateKnowledgeBaseLocale",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update knowledge base in specified locale",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the knowledge base to update",
        "example": "KNOWLEDGE_BASE_ID",
        "default": "knb_123"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content",
        "example": "LOCALE",
        "default": "en"
      },
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
      }
    ]
  },
  {
    "url": "/links",
    "method": "listByIdAndType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "List links",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `types`, whose value should be a list of link types (examples - `web`, `jira`, `asana` )."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the links. Only supports `id`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/links",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Create link",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pattern",
        "schema": "string",
        "description": "",
        "example": "ORDER-123"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A link used to connect a Front conversation to an external resource."
      }
    ]
  },
  {
    "url": "/links/custom_fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Link's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/links/{link_id}",
    "method": "getLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Get link",
    "parameters": [
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The link ID",
        "example": "LINK_ID",
        "default": "top_123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A link used to connect a Front conversation to an external resource."
      }
    ]
  },
  {
    "url": "/links/{link_id}",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Update a link",
    "parameters": [
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The link ID",
        "example": "LINK_ID",
        "default": "top_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/links/{link_id}/conversations",
    "method": "listConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "List link conversations",
    "parameters": [
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The Link ID",
        "example": "LINK_ID",
        "default": "top_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the conversations. Only supports `date`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/me",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Token Identity",
    "typeScriptTag": "tokenIdentity",
    "description": "API Token details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/message_template_folders",
    "method": "listFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "List folders",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message template folders. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/message_template_folders",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Create folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTO templates"
      },
      {
        "name": "parent_folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
    "url": "/message_template_folders/{message_template_folder_id}",
    "method": "deleteFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Delete folder",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The message template folder id",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/message_template_folders/{message_template_folder_id}",
    "method": "getFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Get folder",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
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
    "url": "/message_template_folders/{message_template_folder_id}",
    "method": "updateFolder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Update folder",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_folder_id",
        "schema": "string",
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
    "url": "/message_template_folders/{message_template_folder_id}/message_template_folders",
    "method": "getChildFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Get child folders",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
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
    "url": "/message_template_folders/{message_template_folder_id}/message_template_folders",
    "method": "createChildFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Create child folder",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The parent message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTO templates"
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
    "url": "/message_template_folders/{message_template_folder_id}/message_templates",
    "method": "getChildTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Get child templates",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
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
    "url": "/message_template_folders/{message_template_folder_id}/message_templates",
    "method": "createChildTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Create child template",
    "parameters": [
      {
        "name": "messageTemplateFolderId",
        "schema": "string",
        "required": true,
        "description": "The parent message template folder ID",
        "example": "MESSAGE_TEMPLATE_FOLDER_ID",
        "default": "rsf_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sorry, I'm OOO until October 25th."
      },
      {
        "name": "inbox_ids",
        "schema": "array",
        "required": false,
        "description": "",
        "example": null
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
    "url": "/message_templates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "List message templates",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/message_templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Create message template",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sorry, I'm OOO until October 25th."
      },
      {
        "name": "folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "inbox_ids",
        "schema": "array",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "attachments",
        "schema": "array",
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
    "url": "/message_templates/{message_template_id}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Delete message template",
    "parameters": [
      {
        "name": "messageTemplateId",
        "schema": "string",
        "required": true,
        "description": "The message template ID",
        "example": "MESSAGE_TEMPLATE_ID",
        "default": "rsp_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/message_templates/{message_template_id}",
    "method": "getTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Get message template",
    "parameters": [
      {
        "name": "messageTemplateId",
        "schema": "string",
        "required": true,
        "description": "The message template ID",
        "example": "MESSAGE_TEMPLATE_ID",
        "default": "rsp_123"
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
    "url": "/message_templates/{message_template_id}",
    "method": "updateTemplateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Update message template",
    "parameters": [
      {
        "name": "messageTemplateId",
        "schema": "string",
        "required": true,
        "description": "The message template ID",
        "example": "MESSAGE_TEMPLATE_ID",
        "default": "rsp_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folder_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inbox_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
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
    "url": "/messages/{message_id}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The message ID",
        "example": "MESSAGE_ID",
        "default": "msg_123"
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
    "url": "/messages/{message_id}/seen",
    "method": "getMessageSeenStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get message seen status",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The message ID",
        "example": "MESSAGE_ID",
        "default": "msg_123"
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
    "url": "/messages/{message_id}/seen",
    "method": "markMessageSeen",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Mark message seen",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The message ID",
        "example": "MESSAGE_ID",
        "default": "msg_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/rules",
    "method": "listCompanyRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rules/{rule_id}",
    "method": "getRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Get rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "The Rule ID",
        "example": "RULE_ID",
        "default": "rul_123"
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
    "url": "/shift/{shift_id}",
    "method": "getShift",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Get shift",
    "parameters": [
      {
        "name": "shiftId",
        "schema": "string",
        "required": true,
        "description": "The Shift ID",
        "example": "SHIFT_ID",
        "default": "shf_123"
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
    "url": "/shift/{shift_id}/teammates",
    "method": "removeTeammatesFromShift",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Remove teammates from shift",
    "parameters": [
      {
        "name": "shiftId",
        "schema": "string",
        "required": true,
        "description": "The Shift ID",
        "example": "SHIFT_ID",
        "default": "shf_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/shift/{shift_id}/teammates",
    "method": "listShiftTeammates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List shift's teammates",
    "parameters": [
      {
        "name": "shiftId",
        "schema": "string",
        "required": true,
        "description": "The Shift ID",
        "example": "SHIFT_ID",
        "default": "shf_123"
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
    "url": "/shift/{shift_id}/teammates",
    "method": "addTeammatesToShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Add teammates to shift",
    "parameters": [
      {
        "name": "shiftId",
        "schema": "string",
        "required": true,
        "description": "The Shift ID",
        "example": "SHIFT_ID",
        "default": "shf_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/shifts",
    "method": "listShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List Shifts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shifts",
    "method": "createShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Create shift",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "times",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
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
    "url": "/shifts/{shift_id}",
    "method": "updateShift",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Update shift",
    "parameters": [
      {
        "name": "shiftId",
        "schema": "string",
        "required": true,
        "description": "The Shift ID",
        "example": "SHIFT_ID",
        "default": "shf_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "times",
        "schema": "object",
        "description": ""
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/signatures/{signature_id}",
    "method": "deleteSignature",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "Delete signature",
    "parameters": [
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The signature ID",
        "example": "SIGNATURE_ID",
        "default": "sig_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/signatures/{signature_id}",
    "method": "getSignature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "Get signatures",
    "parameters": [
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The signature ID",
        "example": "SIGNATURE_ID",
        "default": "sig_123"
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
    "url": "/signatures/{signature_id}",
    "method": "updateSignature",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "Update signature",
    "parameters": [
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The signature ID",
        "example": "SIGNATURE_ID",
        "default": "sig_123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_visible_for_all_teammate_channels",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "channel_ids",
        "schema": "array",
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
    "url": "/tags",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the tags. Only supports `id`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/tags",
    "method": "createTagOldestTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create tag",
    "parameters": [
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
        "example": "NAME"
      },
      {
        "name": "highlight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tag to delete",
        "example": "TAG_ID",
        "default": "tag_123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag ID",
        "example": "TAG_ID",
        "default": "tag_123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag ID",
        "example": "TAG_ID",
        "default": "tag_123"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "highlight",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_tag_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/tags/{tag_id}/children",
    "method": "listChildren",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tag children",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag ID",
        "example": "TAG_ID",
        "default": "tag_123"
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
    "url": "/tags/{tag_id}/children",
    "method": "createChildTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create child tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag ID",
        "example": "TAG_ID",
        "default": "tag_123"
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
        "example": "NAME"
      },
      {
        "name": "highlight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/tags/{tag_id}/conversations",
    "method": "listTaggedConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tagged conversations",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tag",
        "example": "TAG_ID",
        "default": "tag_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/teammates",
    "method": "listCompanyMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "List teammates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teammates/custom_fields",
    "method": "listTeammateCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Teammate's custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teammates/{teammate_id}",
    "method": "getTeammateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Get teammate",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A teammate is a user in Front."
      }
    ]
  },
  {
    "url": "/teammates/{teammate_id}",
    "method": "updateTeammate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Update teammate",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_available",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teammates/{teammate_id}/channels",
    "method": "listTeammate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "List teammate channels",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/contact_groups",
    "method": "listTeammateGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "List teammate groups",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/contact_groups",
    "method": "createTeammateGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Create teammate group",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teammates/{teammate_id}/contacts",
    "method": "listTeammateContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List teammate contacts",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the contacts. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teammates/{teammate_id}/contacts",
    "method": "createTeammateContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create teammate contact",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/conversations",
    "method": "listAssignedConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "List assigned conversations",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
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
    "url": "/teammates/{teammate_id}/inboxes",
    "method": "getInboxList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "List teammate inboxes",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/message_template_folders",
    "method": "listTeammateFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "List teammate folders",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message template folders. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teammates/{teammate_id}/message_template_folders",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Create teammate folder",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTO templates"
      },
      {
        "name": "parent_folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
    "url": "/teammates/{teammate_id}/message_templates",
    "method": "listTeammateTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "List teammate message templates",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teammates/{teammate_id}/message_templates",
    "method": "addNewTeammateTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Create teammate message template",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sorry, I'm OOO until October 25th."
      },
      {
        "name": "folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
    "url": "/teammates/{teammate_id}/rules",
    "method": "listTeammateRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List teammate rules",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/shifts",
    "method": "teammateShiftsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List Teammate Shifts",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/signatures",
    "method": "listTeammate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "List teammate signatures",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
    "url": "/teammates/{teammate_id}/signatures",
    "method": "createTeammateSignature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "Create teammate signature",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "sender_info",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "channel_ids",
        "schema": "array",
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
    "url": "/teammates/{teammate_id}/tags",
    "method": "listTeammateTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List teammate tags",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the tags. Only supports `id`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teammates/{teammate_id}/tags",
    "method": "createTeammateTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create teammate tag",
    "parameters": [
      {
        "name": "teammateId",
        "schema": "string",
        "required": true,
        "description": "The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "TEAMMATE_ID",
        "default": "tea_123"
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
        "example": "NAME"
      },
      {
        "name": "highlight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{team_id}",
    "method": "getWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The Team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/channels",
    "method": "listTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "List team channels",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/contact_groups",
    "method": "listTeamGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "List team groups",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/contact_groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Groups",
    "typeScriptTag": "contactGroups",
    "description": "Create team group",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{team_id}/contacts",
    "method": "listTeamContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List team contacts",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the contacts. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teams/{team_id}/contacts",
    "method": "createTeamContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create team contact",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/inboxes",
    "method": "listTeamInboxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List team inboxes",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/inboxes",
    "method": "createTeamInbox",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Create team inbox",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{team_id}/message_template_folders",
    "method": "listTeamFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "List team folders",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_55c8c149"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message template folders. Either `created_at` or `updated_at`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teams/{team_id}/message_template_folders",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Template Folders",
    "typeScriptTag": "messageTemplateFolders",
    "description": "Create team folder",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_55c8c149"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTO templates"
      },
      {
        "name": "parent_folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
    "url": "/teams/{team_id}/message_templates",
    "method": "listTeamTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "List team message templates",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_55c8c149"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teams/{team_id}/message_templates",
    "method": "createTeamTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Templates",
    "typeScriptTag": "messageTemplates",
    "description": "Create team message template",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_55c8c149"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Out of Office"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sorry, I'm OOO until October 25th."
      },
      {
        "name": "folder_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "inbox_ids",
        "schema": "array",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "attachments",
        "schema": "array",
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
    "url": "/teams/{team_id}/rules",
    "method": "listTeamRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List team rules",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/shifts",
    "method": "listTeamShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List team Shifts",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/shifts",
    "method": "createTeamShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Create team shift",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The Team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "times",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
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
    "url": "/teams/{team_id}/signatures",
    "method": "listTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "List team signatures",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
    "url": "/teams/{team_id}/signatures",
    "method": "createTeamSignature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signatures",
    "typeScriptTag": "signatures",
    "description": "Create team signature",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "sender_info",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "is_visible_for_all_teammate_channels",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "channel_ids",
        "schema": "array",
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
    "url": "/teams/{team_id}/tags",
    "method": "listTeamTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List team tags",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Max number of results per [page](https://dev.frontapp.com/docs/pagination)",
        "example": 25
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)",
        "example": "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Field used to sort the tags. Only supports `id`."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which results should be sorted",
        "example": "asc"
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
    "url": "/teams/{team_id}/tags",
    "method": "createTeamTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create team tag",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
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
        "example": "NAME"
      },
      {
        "name": "highlight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_visible_in_conversation_lists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is a label that can be used to classify conversations."
      }
    ]
  },
  {
    "url": "/teams/{team_id}/teammates",
    "method": "removeTeammates",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove teammates from team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The Team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{team_id}/teammates",
    "method": "addTeammates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add teammates to team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The Team ID",
        "example": "TEAM_ID",
        "default": "tim_123"
      },
      {
        "name": "teammate_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/drafts/{message_id}",
    "method": "editMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Edit draft",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The draft ID",
        "example": "MESSAGE_ID",
        "default": "msg_123"
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
      apiTitle="Core API"
      apiBaseUrl="https://api2.frontapp.com"
      apiVersion="1.0.0"
      endpoints={122}
      sdkMethods={197}
      schemas={163}
      parameters={535}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/core/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/core/openapi.yaml"
      developerDocumentation="dev.frontapp.com/reference/introduction"
    />
  );
}
  