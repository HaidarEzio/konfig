import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AtlassianJiraTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="atlassian-jira-typescript-sdk"
      metaDescription={`We're a team of 7000+ Atlassians supporting an international group of 250,000+ customers. We build tools like Jira, Confluence, Bitbucket, and Trello to help teams across the world become more nimble, creative, and aligned.`}
      company="Atlassian"
      serviceName="Jira"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/logo.png"
      companyKebabCase="atlassian"
      clientNameCamelCase="atlassianJira"
      homepage="www.atlassian.com/software/jira"
      lastUpdated={new Date("2024-03-25T04:44:33.157Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/favicon.png"
      // Missing contactUrl
      contactEmail="ecosystem@atlassian.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["software_development","collaboration","project_management","task_management","productivity_software","issue_tracker","agile"]}
      methods={[
  {
    "url": "/rest/api/3/announcementBanner",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement banner",
    "typeScriptTag": "announcementBanner",
    "description": "Get announcement banner configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Announcement banner configuration."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/announcementBanner",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Announcement banner",
    "typeScriptTag": "announcementBanner",
    "description": "Update announcement banner configuration",
    "parameters": [
      {
        "name": "isDismissible",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/app/field/value",
    "method": "updateValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field values (apps)",
    "typeScriptTag": "issueCustomFieldValuesApps",
    "description": "Update custom fields",
    "parameters": [
      {
        "name": "generateChangelog",
        "schema": "boolean",
        "description": "Whether to generate a changelog for this update.",
        "default": true
      },
      {
        "name": "updates",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as the app that provided all the fields."
      },
      {
        "statusCode": "404",
        "description": "Returned if any field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/app/field/{fieldIdOrKey}/context/configuration",
    "method": "getContextConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field configuration (apps)",
    "typeScriptTag": "issueCustomFieldConfigurationApps",
    "description": "Get custom field configurations",
    "parameters": [
      {
        "name": "fieldIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the custom field, for example `customfield_10000`.",
        "example": "FIELDIDORKEY"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`."
      },
      {
        "name": "fieldContextId",
        "schema": "array",
        "description": "The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`."
      },
      {
        "name": "issueId",
        "schema": "integer",
        "description": "The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`."
      },
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "description": "The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`."
      },
      {
        "name": "issueTypeId",
        "schema": "string",
        "description": "The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the custom field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/app/field/{fieldIdOrKey}/context/configuration",
    "method": "updateContextConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field configuration (apps)",
    "typeScriptTag": "issueCustomFieldConfigurationApps",
    "description": "Update custom field configurations",
    "parameters": [
      {
        "name": "fieldIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the custom field, for example `customfield_10000`.",
        "example": "FIELDIDORKEY"
      },
      {
        "name": "configurations",
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
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the custom field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/app/field/{fieldIdOrKey}/value",
    "method": "updateValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field values (apps)",
    "typeScriptTag": "issueCustomFieldValuesApps",
    "description": "Update custom field value",
    "parameters": [
      {
        "name": "fieldIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the custom field. For example, `customfield_10010`.",
        "example": "FIELDIDORKEY"
      },
      {
        "name": "generateChangelog",
        "schema": "boolean",
        "description": "Whether to generate a changelog for this update.",
        "default": true
      },
      {
        "name": "updates",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/application-properties",
    "method": "getApplicationProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jira settings",
    "typeScriptTag": "jiraSettings",
    "description": "Get application property",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "description": "The key of the application property."
      },
      {
        "name": "permissionLevel",
        "schema": "string",
        "description": "The permission level of all items being returned in the list."
      },
      {
        "name": "keyFilter",
        "schema": "string",
        "description": "When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/application-properties/advanced-settings",
    "method": "getAdvancedSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jira settings",
    "typeScriptTag": "jiraSettings",
    "description": "Get advanced settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user is not an administrator."
      }
    ]
  },
  {
    "url": "/rest/api/3/application-properties/{id}",
    "method": "setApplicationProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jira settings",
    "typeScriptTag": "jiraSettings",
    "description": "Set application property",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The key of the application property to update.",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an application property."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/applicationrole",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application roles",
    "typeScriptTag": "applicationRoles",
    "description": "Get all application roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user is not an administrator."
      }
    ]
  },
  {
    "url": "/rest/api/3/applicationrole/{key}",
    "method": "getRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application roles",
    "typeScriptTag": "applicationRoles",
    "description": "Get application role",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the application role. Use the [Get all application roles](https://dac-static.atlassian.com) operation to get the key for each application role.",
        "example": "jira-software"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an application role."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user is not an administrator."
      },
      {
        "statusCode": "404",
        "description": "Returned if the role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/content/{id}",
    "method": "getContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get attachment content",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      },
      {
        "name": "redirect",
        "schema": "boolean",
        "description": "Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": "Returned if the request is successful when a `Range` header is provided and `redirect` is set to `false`."
      },
      {
        "statusCode": "303",
        "description": "Returned if the request is successful. See the `Location` header for the download URL."
      },
      {
        "statusCode": "400",
        "description": "Returned if the range supplied in the `Range` header is malformed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "The user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings."
      },
      {
        "statusCode": "416",
        "description": "Returned if the server is unable to satisfy the range of bytes provided."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/meta",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get Jira attachment settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the instance's attachment settings."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/thumbnail/{id}",
    "method": "getThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get attachment thumbnail",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      },
      {
        "name": "redirect",
        "schema": "boolean",
        "description": "Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment.",
        "default": true
      },
      {
        "name": "fallbackToDefault",
        "schema": "boolean",
        "description": "Whether a default thumbnail is returned when the requested thumbnail is not found.",
        "default": true
      },
      {
        "name": "width",
        "schema": "integer",
        "description": "The maximum width to scale the thumbnail to."
      },
      {
        "name": "height",
        "schema": "integer",
        "description": "The maximum height to scale the thumbnail to."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "303",
        "description": "Returned if the request is successful. See the `Location` header for the download URL."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "The user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings.\n *  `fallbackToDefault` is `false` and the request thumbnail cannot be downloaded."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/{id}",
    "method": "deleteAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Delete attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/{id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get attachment metadata",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata for an issue attachment."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/{id}/expand/human",
    "method": "expandHumanMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get all metadata for an expanded attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata for an archive (for example a zip) and its contents."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "The user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings."
      },
      {
        "statusCode": "409",
        "description": "Returned if the attachment is an archive, but not a supported archive format."
      }
    ]
  },
  {
    "url": "/rest/api/3/attachment/{id}/expand/raw",
    "method": "expandRaw",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Get contents metadata for an expanded attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the attachment.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "The user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings."
      },
      {
        "statusCode": "409",
        "description": "Returned if the attachment is an archive, but not a supported archive format."
      }
    ]
  },
  {
    "url": "/rest/api/3/auditing/record",
    "method": "getAuditRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit records",
    "typeScriptTag": "auditRecords",
    "description": "Get audit records",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "description": "The number of records to skip before returning the first result.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of results to return.",
        "default": 1000
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "The strings to match with audit field content, space separated."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Container for a list of audit records."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/avatar/{type}/system",
    "method": "getSystemAvatarsByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Get system avatars by type",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The avatar type.",
        "example": "project"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of system avatars."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "500",
        "description": "Returned if an error occurs while retrieving the list of avatars."
      }
    ]
  },
  {
    "url": "/rest/api/3/classification-levels",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Classification levels",
    "typeScriptTag": "classificationLevels",
    "description": "Get all classification levels",
    "parameters": [
      {
        "name": "status",
        "schema": "array",
        "description": "Optional set of statuses to filter by."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Ordering of the results by a given field. If not provided, values will not be sorted."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data classification."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/comment/list",
    "method": "getCommentsByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Get comments by IDs",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedBody` Returns the comment body rendered in HTML.\n *  `properties` Returns the comment's properties."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request contains more than 1000 IDs or is empty."
      }
    ]
  },
  {
    "url": "/rest/api/3/comment/{commentId}/properties",
    "method": "getKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue comment properties",
    "typeScriptTag": "issueCommentProperties",
    "description": "Get comment property keys",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "400",
        "description": "Returned if the comment ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the comment is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/comment/{commentId}/properties/{propertyKey}",
    "method": "deleteCommentProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue comment properties",
    "typeScriptTag": "issueCommentProperties",
    "description": "Delete comment property",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "COMMENTID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the comment or the property is not found or the user has the necessary project permissions but isn't a member of the role or group visibility of the comment is restricted to."
      }
    ]
  },
  {
    "url": "/rest/api/3/comment/{commentId}/properties/{propertyKey}",
    "method": "getPropertyValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue comment properties",
    "typeScriptTag": "issueCommentProperties",
    "description": "Get comment property",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "COMMENTID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the comment or the property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/comment/{commentId}/properties/{propertyKey}",
    "method": "setPropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue comment properties",
    "typeScriptTag": "issueCommentProperties",
    "description": "Set comment property",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "COMMENTID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the comment is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/component",
    "method": "findComponentsForProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Find components for projects",
    "parameters": [
      {
        "name": "projectIdsOrKeys",
        "schema": "array",
        "required": true,
        "description": "The project IDs and/or project keys (case sensitive)."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `name` Sorts by component name."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/component",
    "method": "createComponent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Create component",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ari",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "assigneeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAssigneeTypeValid",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lead",
        "schema": "object",
        "description": ""
      },
      {
        "name": "leadAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "leadUserName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "project",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "realAssignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "realAssigneeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a project component."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the user is not found.\n *  `name` is not provided.\n *  `name` is over 255 characters in length.\n *  `projectId` is not provided.\n *  `assigneeType` is an invalid value."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to browse the project containing the component."
      }
    ]
  },
  {
    "url": "/rest/api/3/component/{id}",
    "method": "deleteComponentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Delete component",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the component.",
        "example": "ID"
      },
      {
        "name": "moveIssuesTo",
        "schema": "string",
        "description": "The ID of the component to replace the deleted component. If this value is null no replacement is made."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the component is not found.\n *  the replacement component is not found.\n *  the user does not have permission to browse the project containing the component."
      }
    ]
  },
  {
    "url": "/rest/api/3/component/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Get component",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the component.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project component."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the component is not found or the user does not have permission to browse the project containing the component."
      }
    ]
  },
  {
    "url": "/rest/api/3/component/{id}",
    "method": "updateComponentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Update component",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the component.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ari",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "assigneeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAssigneeTypeValid",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lead",
        "schema": "object",
        "description": ""
      },
      {
        "name": "leadAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "leadUserName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "project",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "realAssignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "realAssigneeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project component."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the user is not found.\n *  `assigneeType` is an invalid value.\n *  `name` is over 255 characters in length."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira."
      },
      {
        "statusCode": "404",
        "description": "Returned if the component is not found or the user does not have permission to browse the project containing the component."
      }
    ]
  },
  {
    "url": "/rest/api/3/component/{id}/relatedIssueCounts",
    "method": "getRelatedIssueCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Get component issues count",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the component.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Count of issues assigned to a component."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the component is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration",
    "method": "getGlobalSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jira settings",
    "typeScriptTag": "jiraSettings",
    "description": "Get global settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the configuration of Jira."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration/timetracking",
    "method": "selectedProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get selected time tracking provider",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the time tracking provider."
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration/timetracking",
    "method": "selectProvider",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time tracking",
    "typeScriptTag": "timeTracking",
    "description": "Select time tracking provider",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the time tracking provider is not found."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration/timetracking/list",
    "method": "getAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all time tracking providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration/timetracking/options",
    "method": "getTimeTrackingOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time tracking settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the time tracking configuration."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/configuration/timetracking/options",
    "method": "setOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time tracking",
    "typeScriptTag": "timeTracking",
    "description": "Set time tracking settings",
    "parameters": [
      {
        "name": "defaultUnit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULTUNIT"
      },
      {
        "name": "timeFormat",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEFORMAT"
      },
      {
        "name": "workingDaysPerWeek",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "workingHoursPerDay",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the time tracking configuration."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request object is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/customFieldOption/{id}",
    "method": "getOptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Get custom field option",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field option.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a custom option for a field."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the custom field option is not found.\n *  the user does not have permission to view the custom field."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get all dashboards",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "The filter applied to the list of dashboards. Valid values are:\n\n *  `favourite` Returns dashboards the user has marked as favorite.\n *  `my` Returns dashboards owned by the user."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page containing dashboard details."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard",
    "method": "createDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Create dashboard",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editPermissions",
        "schema": "array",
        "required": true,
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
        "name": "sharePermissions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a dashboard."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/bulk/edit",
    "method": "editBulkDashboards",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Bulk edit dashboards",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "changeOwnerDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entityIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "extendAdminPermissions",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "permissionDetails",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a request to bulk edit shareable entity."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/gadgets",
    "method": "listAvailableGadgets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get available gadgets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of available gadgets."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Search for dashboards",
    "parameters": [
      {
        "name": "dashboardName",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with `name`."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter."
      },
      {
        "name": "owner",
        "schema": "string",
        "description": "This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter."
      },
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.\n *  `favourite_count` Sorts by dashboard popularity.\n *  `id` Sorts by dashboard ID.\n *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.\n *  `name` Sorts by dashboard name.\n *  `owner` Sorts by dashboard owner name.",
        "default": "name"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The status to filter by. It may be active, archived or deleted.",
        "default": "active"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `description` Returns the description of the dashboard.\n *  `owner` Returns the owner of the dashboard.\n *  `viewUrl` Returns the URL that is used to view the dashboard.\n *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.\n *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.\n *  `sharePermissions` Returns details of the share permissions defined for the dashboard.\n *  `editPermissions` Returns details of the edit permissions defined for the dashboard.\n *  `isWritable` Returns whether the current user has permission to edit the dashboard."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/gadget",
    "method": "listGadgets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get gadgets",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": 0
      },
      {
        "name": "moduleKey",
        "schema": "array",
        "description": "The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`."
      },
      {
        "name": "uri",
        "schema": "array",
        "description": "The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`."
      },
      {
        "name": "gadgetId",
        "schema": "array",
        "description": "The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of gadgets on the dashboard."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/gadget",
    "method": "addGadgetToDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Add gadget to dashboard",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ignoreUriAndModuleKeyValidation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "moduleKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "object",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a gadget."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}",
    "method": "removeGadgetFromDashboard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Remove gadget from dashboard",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": 0
      },
      {
        "name": "gadgetId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the gadget.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}",
    "method": "updateGadgetOnDashboard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Update gadget on dashboard",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": 0
      },
      {
        "name": "gadgetId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the gadget.",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties",
    "method": "getDashboardItemPropertyKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get dashboard item property keys",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "DASHBOARDID"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard item.",
        "example": "ITEMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}",
    "method": "deleteItemProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Delete dashboard item property",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "DASHBOARDID"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard item.",
        "example": "ITEMID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the dashboard item property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}",
    "method": "getItemProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get dashboard item property",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "DASHBOARDID"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard item.",
        "example": "ITEMID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the dashboard item property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}",
    "method": "setItemProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Set dashboard item property",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "DASHBOARDID"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard item.",
        "example": "ITEMID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \"config\", the request body's JSON must be an object with all keys and values as strings.",
        "example": "PROPERTYKEY"
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
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Delete dashboard",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the dashboard is deleted."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get dashboard",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a dashboard."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Returned if the dashboard is not found or the dashboard is not owned by or shared with the user."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Update dashboard",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard to update.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editPermissions",
        "schema": "array",
        "required": true,
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
        "name": "sharePermissions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a dashboard."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/dashboard/{id}/copy",
    "method": "copyDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Copy dashboard",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editPermissions",
        "schema": "array",
        "required": true,
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
        "name": "sharePermissions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a dashboard."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/data-policy",
    "method": "getDataPolicyWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App data policies (EAP)",
    "typeScriptTag": "appDataPoliciesEap",
    "description": "Get data policy for the workspace (EAP)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about data policy."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/data-policy/project",
    "method": "getDataPolicyProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App data policies (EAP)",
    "typeScriptTag": "appDataPoliciesEap",
    "description": "Get data policy for projects (EAP)",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "A list of project identifiers. This parameter accepts a comma-separated list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about data policies for a list of projects."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/events",
    "method": "listAllEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to complete this request."
      }
    ]
  },
  {
    "url": "/rest/api/3/expression/analyse",
    "method": "analyseExpression",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jira expressions",
    "typeScriptTag": "jiraExpressions",
    "description": "Analyse Jira expression",
    "parameters": [
      {
        "name": "check",
        "schema": "string",
        "description": "The check to perform:\n\n *  `syntax` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.\n *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.\n *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute.",
        "default": "syntax"
      },
      {
        "name": "contextVariables",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expressions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "issues.map(issue => issue.properties['property_key'])"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the analysed Jira expression."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/expression/eval",
    "method": "evaluateExpressionValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jira expressions",
    "typeScriptTag": "jiraExpressions",
    "description": "Evaluate Jira expression",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions."
      },
      {
        "name": "context",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expression",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "{ key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id) }"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The result of evaluating a Jira expression."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/field",
    "method": "getSystemAndCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Get fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/field",
    "method": "createCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Create custom field",
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
        "name": "searcherKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a field."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the user does not have permission to create custom fields.\n *  any of the request object properties have invalid or missing values."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/search",
    "method": "getFieldsPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Get fields paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "type",
        "schema": "array",
        "description": "The type of fields to search."
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The IDs of the custom fields to return or, where `query` is specified, filter."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with field names or descriptions."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `contextsCount` sorts by the number of contexts related to a field\n *  `lastUsed` sorts by the date when the value of the field last changed\n *  `name` sorts by the field name\n *  `screensCount` sorts by the number of screens related to a field"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `key` returns the key for each field\n *  `lastUsed` returns the date when the value of the field last changed\n *  `screensCount` returns the number of screens related to a field\n *  `contextsCount` returns the number of contexts related to a field\n *  `isLocked` returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og)\n *  `searcherKey` returns the searcher key for each custom field"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/search/trashed",
    "method": "listFieldsInTrashPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Get fields in trash paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with field names or descriptions."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `name` sorts by the field name\n *  `trashDate` sorts by the date the field was moved to the trash\n *  `plannedDeletionDate` sorts by the planned deletion date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldId}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Update custom field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
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
        "name": "searcherKey",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context",
    "method": "listCustomFieldContexts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Get custom field contexts",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "isAnyIssueType",
        "schema": "boolean",
        "description": "Whether to return contexts that apply to all issue types."
      },
      {
        "name": "isGlobalContext",
        "schema": "boolean",
        "description": "Whether to return contexts that apply to all projects."
      },
      {
        "name": "contextId",
        "schema": "array",
        "description": "The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context",
    "method": "createCustomFieldContext",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Create custom field context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
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
        "name": "projectIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The details of a created custom field context."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field, project, or issue type is not found."
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldId}/context/defaultValue",
    "method": "getDefaultValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Get custom field contexts default values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field, for example `customfield\\_10000`.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "array",
        "description": "The IDs of the contexts."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/defaultValue",
    "method": "setDefaultValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Set custom field contexts default values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "defaultValues",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/issuetypemapping",
    "method": "getIssueTypeMappingsForContexts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Get issue types for custom field context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "array",
        "description": "The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldId}/context/mapping",
    "method": "getCustomFieldContextsForProjectsAndIssueTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Get custom field contexts for projects and issue types",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "mappings",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/projectmapping",
    "method": "getProjectContextMapping",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Get project mappings for custom field context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field, for example `customfield\\_10000`.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "array",
        "description": "The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}",
    "method": "deleteCustomFieldContext",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Delete custom field context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}",
    "method": "updateCustomFieldContext",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Update custom field context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/issuetype",
    "method": "addIssueTypesToContext",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Add issue types to context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/issuetype/remove",
    "method": "removeIssueTypesFromContext",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Remove issue types from context",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option",
    "method": "getContextOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Get custom field options (context)",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "optionId",
        "schema": "integer",
        "description": "The ID of the option."
      },
      {
        "name": "onlyOptions",
        "schema": "boolean",
        "description": "Whether only options are returned.",
        "default": false
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option",
    "method": "createCustomFieldOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Create custom field options (context)",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of custom field options for a context."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option",
    "method": "updateContextOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Update custom field options (context)",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of custom field options for a context."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option/move",
    "method": "reorderCustomFieldOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Reorder custom field options (context)",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldOptionIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}",
    "method": "deleteCustomFieldOption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Delete custom field options (context)",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context from which an option should be deleted.",
        "example": 0
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the option is deleted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}/issue",
    "method": "replaceOptions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue custom field options",
    "typeScriptTag": "issueCustomFieldOptions",
    "description": "Replace custom field options",
    "parameters": [
      {
        "name": "replaceWith",
        "schema": "integer",
        "description": "The ID of the option that will replace the currently selected option."
      },
      {
        "name": "jql",
        "schema": "string",
        "description": "A JQL query that specifies the issues to be updated. For example, *project=10000*."
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to be deselected.",
        "example": 0
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found or does not support options, or the options to be replaced are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/project",
    "method": "assignContextsToProjects",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Assign custom field context to projects",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "projectIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/context/{contextId}/project/remove",
    "method": "removeCustomFieldContextFromProjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field contexts",
    "typeScriptTag": "issueCustomFieldContexts",
    "description": "Remove custom field context from projects",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "FIELDID"
      },
      {
        "name": "contextId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the context.",
        "example": 0
      },
      {
        "name": "projectIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/field/{fieldId}/contexts",
    "method": "getContextsForField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Get contexts for a field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the field to return contexts for.",
        "example": "FIELDID"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldId}/screens",
    "method": "getForFieldScreens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Get screens for a field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the field to return screens for.",
        "example": "FIELDID"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option",
    "method": "getAllIssueFieldOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Get all issue field options",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the field is not found or does not support options."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as a Jira administrator or the app that provided the field."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option",
    "method": "createFieldOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Create issue field option",
    "parameters": [
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      },
      {
        "name": "config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
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
        "description": "Details of the options for a select list issue field."
      },
      {
        "statusCode": "400",
        "description": "Returned if the option is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as a Jira administrator or the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found or does not support options."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/suggestions/edit",
    "method": "getSelectableIssueFieldOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Get selectable issue field options",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Filters the results to options that are only available in the specified project."
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found or does not support options."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/suggestions/search",
    "method": "getVisibleIssueFieldOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Get visible issue field options",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Filters the results to options that are only available in the specified project."
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found or does not support options."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/{optionId}",
    "method": "deleteOption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Delete issue field option",
    "parameters": [
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to be deleted.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as a Jira administrator or the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field or option is not found."
      },
      {
        "statusCode": "409",
        "description": "Returned if the option is selected for the field in any issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/{optionId}",
    "method": "getIssueFieldOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Get issue field option",
    "parameters": [
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to be returned.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the options for a select list issue field."
      },
      {
        "statusCode": "400",
        "description": "Returned if the field is not found or does not support options."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as a Jira administrator or the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if the option is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/{optionId}",
    "method": "updateOptionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Update issue field option",
    "parameters": [
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to be updated.",
        "example": 0
      },
      {
        "name": "config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
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
        "description": "Details of the options for a select list issue field."
      },
      {
        "statusCode": "400",
        "description": "Returned if the option is invalid, or the *ID* in the request object does not match the *optionId* parameter."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as a Jira administrator or the app that provided the field."
      },
      {
        "statusCode": "404",
        "description": "Returned if field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{fieldKey}/option/{optionId}/issue",
    "method": "deselectOptionFromIssues",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue custom field options (apps)",
    "typeScriptTag": "issueCustomFieldOptionsApps",
    "description": "Replace issue field option",
    "parameters": [
      {
        "name": "replaceWith",
        "schema": "integer",
        "description": "The ID of the option that will replace the currently selected option."
      },
      {
        "name": "jql",
        "schema": "string",
        "description": "A JQL query that specifies the issues to be updated. For example, *project=10000*."
      },
      {
        "name": "overrideScreenSecurity",
        "schema": "boolean",
        "description": "Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission.",
        "default": false
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](https://dac-static.atlassian.com) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`",
        "example": "FIELDKEY"
      },
      {
        "name": "optionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the option to be deselected.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Returned if the field is not found or does not support options, or the options to be replaced are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{id}",
    "method": "deleteCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Delete custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of a custom field.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "409",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{id}/restore",
    "method": "restoreCustomFieldFromTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Restore custom field from trash",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of a custom field.",
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
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/field/{id}/trash",
    "method": "moveCustomFieldToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue fields",
    "typeScriptTag": "issueFields",
    "description": "Move custom field to trash",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of a custom field.",
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
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration",
    "method": "getAllFieldConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Get all field configurations",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      },
      {
        "name": "isDefault",
        "schema": "boolean",
        "description": "If *true* returns default field configurations only.",
        "default": false
      },
      {
        "name": "query",
        "schema": "string",
        "description": "The query string used to match against field configuration names and descriptions.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration",
    "method": "createFieldConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Create field configuration",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a field configuration."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration/{id}",
    "method": "deleteFieldConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Delete field configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration/{id}",
    "method": "updateFieldConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Update field configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration.",
        "example": 0
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
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration/{id}/fields",
    "method": "getConfigurationItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Get field configuration items",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration.",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfiguration/{id}/fields",
    "method": "updateFieldConfigItems",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Update field configuration items",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration.",
        "example": 0
      },
      {
        "name": "fieldConfigurationItems",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme",
    "method": "listFieldConfigurationSchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Get all field configuration schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme",
    "method": "createFieldConfigurationScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Create field configuration scheme",
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
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of a field configuration scheme."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme/mapping",
    "method": "getConfigurationSchemeMapping",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Get field configuration issue type items",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "fieldConfigurationSchemeId",
        "schema": "array",
        "description": "The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if no field configuration schemes are found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme/project",
    "method": "getFieldConfigurationSchemesForProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Get field configuration schemes for projects",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "projectId",
        "schema": "array",
        "required": true,
        "description": "The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme/project",
    "method": "assignFieldConfigurationSchemeToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Assign field configuration scheme to project",
    "parameters": [
      {
        "name": "fieldConfigurationSchemeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/fieldconfigurationscheme/{id}",
    "method": "deleteScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Delete field configuration scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration scheme.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme/{id}",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Update field configuration scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration scheme.",
        "example": 0
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
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/fieldconfigurationscheme/{id}/mapping",
    "method": "assignIssueTypesToFieldConfigurationScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Assign issue types to field configurations",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration scheme.",
        "example": 0
      },
      {
        "name": "mappings",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field configuration scheme, the field configuration, or the issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/fieldconfigurationscheme/{id}/mapping/delete",
    "method": "removeIssueTypesFromFieldConfigScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue field configurations",
    "typeScriptTag": "issueFieldConfigurations",
    "description": "Remove issue types from field configuration scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field configuration scheme.",
        "example": 0
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter",
    "method": "createFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Create filter",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      },
      {
        "name": "overrideSharePermissions",
        "schema": "boolean",
        "description": "EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "approximateLastUsed",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editPermissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "favourite",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "favouritedCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jql",
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
        "name": "owner",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "searchUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharePermissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedUsers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "viewUrl",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a filter."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request object is invalid. For example, the `name` is not unique or the project ID is not specified for a project role share permission."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/defaultShareScope",
    "method": "getDefaultShareScope",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Get default share scope",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the scope of the default sharing for new filters and dashboards."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/defaultShareScope",
    "method": "setDefaultShareScope",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Set default share scope",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the scope of the default sharing for new filters and dashboards."
      },
      {
        "statusCode": "400",
        "description": "Returned if an invalid scope is set."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/favourite",
    "method": "listFavoriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get favorite filters",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/my",
    "method": "getUserFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get my filters",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      },
      {
        "name": "includeFavourites",
        "schema": "boolean",
        "description": "Include the user's favorite filters in the response.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Search for filters",
    "parameters": [
      {
        "name": "filterName",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with `name`."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`."
      },
      {
        "name": "owner",
        "schema": "string",
        "description": "This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`."
      },
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`."
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Do not exceed 200 filter IDs."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.\n *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.\n *  `is_favourite` Sorts by whether the filter is marked as a favorite.\n *  `id` Sorts by filter ID.\n *  `name` Sorts by filter name.\n *  `owner` Sorts by the ID of the filter owner.\n *  `is_shared` Sorts by whether the filter is shared.",
        "default": "name"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `description` Returns the description of the filter.\n *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.\n *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.\n *  `jql` Returns the JQL query that the filter uses.\n *  `owner` Returns the owner of the filter.\n *  `searchUrl` Returns a URL to perform the filter's JQL query.\n *  `sharePermissions` Returns the share permissions defined for the filter.\n *  `editPermissions` Returns the edit permissions defined for the filter.\n *  `isWritable` Returns whether the current user has permission to edit the filter.\n *  `approximateLastUsed` \\[Experimental\\] Returns the approximate date and time when the filter was last evaluated.\n *  `subscriptions` Returns the users that are subscribed to the filter.\n *  `viewUrl` Returns a URL to view the filter."
      },
      {
        "name": "overrideSharePermissions",
        "schema": "boolean",
        "description": "EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}",
    "method": "deleteFilterById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Delete filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the filter is not found."
      },
      {
        "statusCode": "401",
        "description": "Returned if the user does not have permission to delete the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter to return.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      },
      {
        "name": "overrideSharePermissions",
        "schema": "boolean",
        "description": "EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a filter."
      },
      {
        "statusCode": "400",
        "description": "Returned if the filter is not found or the user does not have permission to view it."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}",
    "method": "updateFilterById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Update filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter to update.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      },
      {
        "name": "overrideSharePermissions",
        "schema": "boolean",
        "description": "EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "approximateLastUsed",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editPermissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "favourite",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "favouritedCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jql",
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
        "name": "owner",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "searchUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharePermissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedUsers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "viewUrl",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a filter."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request object is invalid. For example, the `name` is not unique or the project ID is not specified for a project role share permission."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/columns",
    "method": "resetColumns",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Reset columns",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not have permission to view the filter."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/columns",
    "method": "getFilterColumns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get columns",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
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
        "description": "Returned if the user does not have permission to view the filter."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if a column configuration is not set for the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/columns",
    "method": "setColumns",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Set columns",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "columns",
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
        "description": "Returned if:\n\n *  a non-navigable field is set as a column.\n *  the user does not have permission to view the filter."
      },
      {
        "statusCode": "403",
        "description": "Returned if the requesting user is not an owner of the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/favourite",
    "method": "removeFavorite",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Remove filter as favorite",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a filter."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not have permission to view the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/favourite",
    "method": "addAsFavorite",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Add filter as favorite",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a filter."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not have permission to favorite the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/owner",
    "method": "changeFilterOwner",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Change filter owner",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter to update.",
        "example": 0
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned when:\n\n *  The new owner of the filter owns a filter with the same name.\n *  An attempt is made to change owner of the default filter."
      },
      {
        "statusCode": "403",
        "description": "Returned if the requesting user is not an owner of the filter or does not have *Administer Jira* global permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the filter or the new owner of the filter is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/permission",
    "method": "getSharePermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Get share permissions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
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
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not have permission to view the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/permission",
    "method": "addSharePermission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Add share permission",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectRoleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rights",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the request object is invalid. For example, it contains an invalid type, the ID does not match the type, or the project or group is not found.\n *  the user does not own the filter.\n *  the user does not have the required permissions."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not have permission to view the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/permission/{permissionId}",
    "method": "deleteSharePermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Delete share permission",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "permissionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the share permission.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the user does not own the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/filter/{id}/permission/{permissionId}",
    "method": "getSharePermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter sharing",
    "typeScriptTag": "filterSharing",
    "description": "Get share permission",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter.",
        "example": 0
      },
      {
        "name": "permissionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the share permission.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a share permission for the filter."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the filter is not found.\n *  the permission is not found.\n *  the user does not have permission to view the filter."
      }
    ]
  },
  {
    "url": "/rest/api/3/group",
    "method": "removeGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove group",
    "parameters": [
      {
        "name": "groupname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group. This parameter cannot be used with the `groupname` parameter."
      },
      {
        "name": "swapGroup",
        "schema": "string",
        "description": "As a group's name can change, use of `swapGroupId` is recommended to identify a group.  \nThe group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter."
      },
      {
        "name": "swapGroupId",
        "schema": "string",
        "description": "The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the group name is not specified."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing from the request."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the group is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/group",
    "method": "getGroupMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get group",
    "parameters": [
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group. This parameter cannot be used with the `groupName` parameter."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "List of fields to expand."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the group name is not specified."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the calling user does not have the Administer Jira global permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the group is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/group",
    "method": "createGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if group name is not specified or the group name is in use."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/group/bulk",
    "method": "getPaginatedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Bulk get groups",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "groupId",
        "schema": "array",
        "description": "The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`.",
        "example": "3571b9a7-348f-414a-9087-8e1ea03a7df8"
      },
      {
        "name": "groupName",
        "schema": "array",
        "description": "The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`."
      },
      {
        "name": "accessType",
        "schema": "string",
        "description": "The access level of a group. Valid values: 'site-admin', 'admin', 'user'."
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "The application key of the product user groups to search for. Valid values: 'jira-servicedesk', 'jira-software', 'jira-product-discovery', 'jira-core'."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/group/member",
    "method": "getGroupMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get users from group",
    "parameters": [
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group. This parameter cannot be used with the `groupName` parameter."
      },
      {
        "name": "includeInactiveUsers",
        "schema": "boolean",
        "description": "Include inactive users.",
        "default": false
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the group name is not specified."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the calling user does not have the Administer Jira global permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the group is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/group/user",
    "method": "removeUserFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove user from group",
    "parameters": [
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group. This parameter cannot be used with the `groupName` parameter."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `groupName` is missing.\n *  `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing from the request."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the group or user are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/group/user",
    "method": "addUserToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Add user to group",
    "parameters": [
      {
        "name": "groupname",
        "schema": "string",
        "description": "As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group. This parameter cannot be used with the `groupName` parameter."
      },
      {
        "name": "accountId",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `groupname` is not provided.\n *  `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing from the request."
      },
      {
        "statusCode": "403",
        "description": "Returned if the calling user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the group or user are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/groups/picker",
    "method": "findMatchingGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Find groups",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](https://dac-static.atlassian.com)."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "The string to find in group names.",
        "example": "query"
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": "As a group's name can change, use of `excludeGroupIds` is recommended to identify a group.  \nA group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter."
      },
      {
        "name": "excludeId",
        "schema": "array",
        "description": "A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`."
      },
      {
        "name": "caseInsensitive",
        "schema": "boolean",
        "description": "Whether the search for groups should be case insensitive.",
        "default": false
      },
      {
        "name": "userName",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups."
      }
    ]
  },
  {
    "url": "/rest/api/3/groupuserpicker",
    "method": "findMatchingUsersAndGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group and user picker",
    "typeScriptTag": "groupAndUserPicker",
    "description": "Find users and groups",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search string.",
        "example": "QUERY"
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return in each list.",
        "default": 50
      },
      {
        "name": "showAvatar",
        "schema": "boolean",
        "description": "Whether the user avatar should be returned. If an invalid value is provided, the default value is used.",
        "default": false
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": "The custom field ID of the field this request is for."
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present."
      },
      {
        "name": "issueTypeId",
        "schema": "array",
        "description": "The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present."
      },
      {
        "name": "avatarSize",
        "schema": "string",
        "description": "The size of the avatar to return. If an invalid value is provided, the default value is used.",
        "default": "xsmall"
      },
      {
        "name": "caseInsensitive",
        "schema": "boolean",
        "description": "Whether the search for groups should be case insensitive.",
        "default": false
      },
      {
        "name": "excludeConnectAddons",
        "schema": "boolean",
        "description": "Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users and groups found in a search."
      },
      {
        "statusCode": "400",
        "description": "Returned if the query parameter is not provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/instance/license",
    "method": "getLicensingInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "License metrics",
    "typeScriptTag": "licenseMetrics",
    "description": "Get license",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a license for the Jira instance."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue",
    "method": "createOrUpdateIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Create issue",
    "parameters": [
      {
        "name": "updateHistory",
        "schema": "boolean",
        "description": "Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen.",
        "default": false
      },
      {
        "name": "fields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "historyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "transition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a created issue or subtask."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "422",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/archive",
    "method": "archiveByJqlPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Archive issue(s) by JQL",
    "parameters": [
      {
        "name": "jql",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "412",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/archive",
    "method": "archiveByIdsPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Archive issue(s) by issue ID/key",
    "parameters": [
      {
        "name": "issueIdsOrKeys",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Number of archived/unarchived issues and list of errors that occurred during the action, if any."
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
        "statusCode": "412",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/bulk",
    "method": "bulkCreateIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Bulk create issue",
    "parameters": [
      {
        "name": "issueUpdates",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about the issues created and the errors for requests that failed."
      },
      {
        "statusCode": "400",
        "description": "Details about the issues created and the errors for requests that failed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/createmeta",
    "method": "getCreateIssueMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get create issue metadata",
    "parameters": [
      {
        "name": "projectIds",
        "schema": "array",
        "description": "List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`."
      },
      {
        "name": "projectKeys",
        "schema": "array",
        "description": "List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`."
      },
      {
        "name": "issuetypeIds",
        "schema": "array",
        "description": "List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`."
      },
      {
        "name": "issuetypeNames",
        "schema": "array",
        "description": "List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](https://dac-static.atlassian.com) and [Create issues](https://dac-static.atlassian.com)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The wrapper for the issue creation metadata for a list of projects."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes",
    "method": "getMetaIssueTypesForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get create metadata issue types for a project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the project.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of CreateMetaIssueTypes."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}",
    "method": "getFieldMetadataForProjectAndIssueType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get create field metadata for a project and issue type id",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the project.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "issueTypeId",
        "schema": "string",
        "required": true,
        "description": "The issuetype ID.",
        "example": "ISSUETYPEID"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of CreateMetaIssueType with Field."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/picker",
    "method": "pickerSuggestionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue search",
    "typeScriptTag": "issueSearch",
    "description": "Get issue picker suggestions",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A string to match against text fields in the issue such as title, description, or comments.",
        "example": "query"
      },
      {
        "name": "currentJql",
        "schema": "string",
        "description": "A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead."
      },
      {
        "name": "currentIssueKey",
        "schema": "string",
        "description": "The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query."
      },
      {
        "name": "currentProjectId",
        "schema": "string",
        "description": "The ID of a project that suggested issues must belong to."
      },
      {
        "name": "showSubTasks",
        "schema": "boolean",
        "description": "Indicate whether to include subtasks in the suggestions list."
      },
      {
        "name": "showSubTaskParent",
        "schema": "boolean",
        "description": "When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of issues suggested for use in auto-completion."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/properties",
    "method": "bulkSetPropertiesByList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Bulk set issues properties by list",
    "parameters": [
      {
        "name": "entitiesIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Returned if the operation is successful."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/properties/multi",
    "method": "bulkSetPropertiesByIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Bulk set issue properties by issue",
    "parameters": [
      {
        "name": "issues",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Returned if the operation is successful."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/properties/{propertyKey}",
    "method": "bulkDeleteIssuePropertyByFilter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Bulk delete issue property",
    "parameters": [
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      },
      {
        "name": "currentValue",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "entityIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/properties/{propertyKey}",
    "method": "bulkSetIssuePropertyByList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Bulk set issue property",
    "parameters": [
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
      },
      {
        "name": "expression",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/unarchive",
    "method": "unarchiveIssueByIdsPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Unarchive issue(s) by issue keys/ID",
    "parameters": [
      {
        "name": "issueIdsOrKeys",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Number of archived/unarchived issues and list of errors that occurred during the action, if any."
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
        "statusCode": "412",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/watching",
    "method": "getWatchingIssueBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue watchers",
    "typeScriptTag": "issueWatchers",
    "description": "Get is watching issue bulk",
    "parameters": [
      {
        "name": "issueIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A container for the watch status of a list of issues."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}",
    "method": "deleteIssueByIdOrKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Delete issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "deleteSubtasks",
        "schema": "string",
        "description": "Whether the issue's subtasks are deleted when the issue is deleted.",
        "default": "false"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue has subtasks and `deleteSubtasks` is not set to *true*."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to delete the issue."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}",
    "method": "getIssueDetailsByIdOrKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  `summary,comment` Returns only the summary and comments fields.\n *  `-description` Returns all (default) fields except description.\n *  `*navigable,-comment` Returns all navigable fields except comment.\n\nThis parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.\n\nNote: All fields are returned by default. This differs from [Search for issues using JQL (GET)](https://dac-static.atlassian.com) and [Search for issues using JQL (POST)](https://dac-static.atlassian.com) where the default is all navigable fields."
      },
      {
        "name": "fieldsByKeys",
        "schema": "boolean",
        "description": "Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.",
        "default": false
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:\n\n *  `*all` Returns all issue properties.\n *  Any issue property key, prefixed with a minus to exclude.\n\nExamples:\n\n *  `*all` Returns all properties.\n *  `*all,-prop1` Returns all properties except `prop1`.\n *  `prop1,prop2` Returns `prop1` and `prop2` properties.\n\nThis parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`."
      },
      {
        "name": "updateHistory",
        "schema": "boolean",
        "description": "Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](https://dac-static.atlassian.com) `lastViewed` field.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about an issue."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}",
    "method": "editIssueByIdOrKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Edit issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.",
        "default": true
      },
      {
        "name": "overrideScreenSecurity",
        "schema": "boolean",
        "description": "Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "returnIssue",
        "schema": "boolean",
        "description": "Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](https://dac-static.atlassian.com).",
        "default": false
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`.",
        "default": ""
      },
      {
        "name": "fields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "historyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "transition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
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
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the request body is missing.\n *  the user does not have the necessary permission to edit one or more fields.\n *  the request includes one or more fields that are not found or are not associated with the issue's edit screen.\n *  the request includes an invalid transition."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user uses `overrideScreenSecurity` or `overrideEditableFlag` but doesn't have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      },
      {
        "statusCode": "409",
        "description": "Returned if the issue could not be updated due to a conflicting update. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*"
      },
      {
        "statusCode": "422",
        "description": "Returned if a configuration problem prevents the issue being updated. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*"
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/assignee",
    "method": "assignIssueToUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Assign issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue to be assigned.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "applicationRoles",
        "schema": "object",
        "description": ""
      },
      {
        "name": "avatarUrls",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "object",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the user is not found.\n *  `name`, `key`, or `accountId` is missing.\n *  more than one of `name`, `key`, and `accountId` are provided."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/attachments",
    "method": "addAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue attachments",
    "typeScriptTag": "issueAttachments",
    "description": "Add attachment",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue that attachments are added to.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  the issue is not found.\n *  the user does not have permission to view the issue."
      },
      {
        "statusCode": "413",
        "description": "The attachments exceed the maximum attachment size for issues, or more than 60 files are requested to be uploaded. See [Configuring file attachments](https://confluence.atlassian.com/x/wIXKM) for details."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/changelog",
    "method": "getChangelogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get changelogs",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/changelog/list",
    "method": "getChangelogsByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get changelogs by IDs",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "changelogIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of changelogs."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/comment",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Get comments",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 5000
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field. Accepts *created* to sort comments by their created date."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of comments."
      },
      {
        "statusCode": "400",
        "description": "Returned if `orderBy` is set to a value other than *created*."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/comment",
    "method": "addCommentToIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Add comment",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML."
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "body",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jsdAuthorCanSeeRequest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "jsdPublic",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "renderedBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateAuthor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A comment."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/comment/{id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Delete comment",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the user does not have permission to delete the comment."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or comment is not found or the user does not have permission to view the issue or comment."
      },
      {
        "statusCode": "405",
        "description": "Returned if an anonymous call is made to the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/comment/{id}",
    "method": "getCommentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Get comment",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A comment."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or comment is not found or the user does not have permission to view the issue or comment."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/comment/{id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue comments",
    "typeScriptTag": "issueComments",
    "description": "Update comment",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "ID"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "Whether users are notified when a comment is updated.",
        "default": true
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML."
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "body",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jsdAuthorCanSeeRequest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "jsdPublic",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "renderedBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateAuthor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A comment."
      },
      {
        "statusCode": "400",
        "description": "Returned if the user does not have permission to edit the comment or the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or comment is not found or the user does not have permission to view the issue or comment."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/editmeta",
    "method": "getEditMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get edit issue metadata",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "overrideScreenSecurity",
        "schema": "boolean",
        "description": "Whether hidden fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether non-editable fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of editable field details."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user uses an override parameter but doesn't have permission to do so."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/notify",
    "method": "notifyEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Send notification for issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "ID or key of the issue that the notification is sent for.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "htmlBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restrict",
        "schema": "object",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "textBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the recipient is the same as the calling user.\n *  the recipient is invalid. For example, the recipient is set to the assignee, but the issue is unassigned.\n *  the request is invalid. For example, required fields are missing or have invalid values."
      },
      {
        "statusCode": "403",
        "description": "Returned if:\n\n *  outgoing emails are disabled.\n *  no SMTP server is configured."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/properties",
    "method": "getKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Get issue property keys",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The key or ID of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permissions to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Delete issue property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The key or ID of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or property is not found, or the user does not have permission to edit the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}",
    "method": "getByKeyAndValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Get issue property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The key or ID of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or property is not found or the user does not have permission to see the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}",
    "method": "setIssueProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue properties",
    "typeScriptTag": "issueProperties",
    "description": "Set issue property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the issue property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to edit the issue."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink",
    "method": "deleteByGlobalId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Delete remote issue link by global ID",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "10000"
      },
      {
        "name": "globalId",
        "schema": "string",
        "required": true,
        "description": "The global ID of a remote issue link.",
        "example": "system=http://www.mycompany.com/support&id=1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if a global ID isn't provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to link issues."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or remote issue link is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Get remote issue links",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "10000"
      },
      {
        "name": "globalId",
        "schema": "string",
        "description": "The global ID of the remote issue link."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an issue remote link."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if issue linking is disabled."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or remote issue link is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink",
    "method": "createOrUpdateRemoteIssueLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Create or update remote issue link",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "globalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "object",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the identifiers for a created or updated remote issue link."
      },
      {
        "statusCode": "201",
        "description": "Details of the identifiers for a created or updated remote issue link."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to link issues."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Delete remote issue link by ID",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "10000"
      },
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The ID of a remote issue link.",
        "example": "10000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the link ID is invalid or the remote issue link does not belong to the issue."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to link issues."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or remote issue link is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}",
    "method": "getByLinkId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Get remote issue link by ID",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the remote issue link.",
        "example": "LINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an issue remote link."
      },
      {
        "statusCode": "400",
        "description": "Returned if the link ID is invalid or the remote issue link does not belong to the issue."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if issue linking is disabled."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or remote issue link is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue remote links",
    "typeScriptTag": "issueRemoteLinks",
    "description": "Update remote issue link by ID",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "10000"
      },
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the remote issue link.",
        "example": "10000"
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "globalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "object",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to link issues."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or remote issue link is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/transitions",
    "method": "getTransitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get transitions",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](https://dac-static.atlassian.com)."
      },
      {
        "name": "transitionId",
        "schema": "string",
        "description": "The ID of the transition."
      },
      {
        "name": "skipRemoteOnlyCondition",
        "schema": "boolean",
        "description": "Whether transitions with the condition *Hide From User Condition* are included in the response.",
        "default": false
      },
      {
        "name": "includeUnavailableTransitions",
        "schema": "boolean",
        "description": "Whether details of transitions that fail a condition are included in the response",
        "default": false
      },
      {
        "name": "sortByOpsBarAndStatus",
        "schema": "boolean",
        "description": "Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of issue transitions."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/transitions",
    "method": "transitionIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Transition issue",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "fields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "historyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "transition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  no transition is specified.\n *  the user does not have permission to transition the issue.\n *  a field that isn't included on the transition screen is defined in `fields` or `update`.\n *  a field is specified in both `fields` and `update`.\n *  the request is invalid for any other reason."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      },
      {
        "statusCode": "409",
        "description": "Returned if the issue could not be updated due to a conflicting update. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*"
      },
      {
        "statusCode": "422",
        "description": "Returned if a configuration problem prevents the creation of the issue. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*"
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/votes",
    "method": "deleteUserVote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue votes",
    "typeScriptTag": "issueVotes",
    "description": "Delete vote",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  voting is disabled.\n *  the user has not voted on the issue.\n *  the issue is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/votes",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue votes",
    "typeScriptTag": "issueVotes",
    "description": "Get votes",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The details of votes on an issue."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  voting is disabled.\n *  the user does not have permission to view the issue.\n *  the issue is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/votes",
    "method": "addUserVote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue votes",
    "typeScriptTag": "issueVotes",
    "description": "Add vote",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  voting is disabled.\n *  the issue is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/watchers",
    "method": "removeWatcher",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue watchers",
    "typeScriptTag": "issueWatchers",
    "description": "Delete watcher",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if `accountId` is not supplied."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the permission to manage the watcher list."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or the user is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/watchers",
    "method": "listIssueWatchers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue watchers",
    "typeScriptTag": "issueWatchers",
    "description": "Get issue watchers",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The details of watchers on an issue."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/watchers",
    "method": "addWatcher",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue watchers",
    "typeScriptTag": "issueWatchers",
    "description": "Add watcher",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the permission to manage the watcher list."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or the user is not found or the user does not have permission to view the issue."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog",
    "method": "getDetailsForList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Get issue worklogs",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 5000
      },
      {
        "name": "startedAfter",
        "schema": "integer",
        "description": "The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned."
      },
      {
        "name": "startedBefore",
        "schema": "integer",
        "description": "The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated list of worklog details"
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue is not found or the user does not have permission to view the issue.\n *  `startAt` or `maxResults` has non-numeric values.\n *  time tracking is disabled."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog",
    "method": "createWorklog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Add worklog",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "Whether users watching the issue are notified by email.",
        "default": true
      },
      {
        "name": "adjustEstimate",
        "schema": "string",
        "description": "Defines how to update the issue's time estimate, the options are:\n\n *  `new` Sets the estimate to a specific value, defined in `newEstimate`.\n *  `leave` Leaves the estimate unchanged.\n *  `manual` Reduces the estimate by amount specified in `reduceBy`.\n *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.",
        "default": "auto"
      },
      {
        "name": "newEstimate",
        "schema": "string",
        "description": "The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`."
      },
      {
        "name": "reduceBy",
        "schema": "string",
        "description": "The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.",
        "default": ""
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.",
        "default": false
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "started",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeSpent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeSpentSeconds",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "updateAuthor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of a worklog."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.\n *  `adjustEstimate` is set to `manual` but `reduceBy` is not provided or is invalid.\n *  the user does not have permission to add the worklog.\n *  the request JSON is malformed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{id}",
    "method": "deleteWorklogById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Delete worklog",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "ID"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "Whether users watching the issue are notified by email.",
        "default": true
      },
      {
        "name": "adjustEstimate",
        "schema": "string",
        "description": "Defines how to update the issue's time estimate, the options are:\n\n *  `new` Sets the estimate to a specific value, defined in `newEstimate`.\n *  `leave` Leaves the estimate unchanged.\n *  `manual` Increases the estimate by amount specified in `increaseBy`.\n *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.",
        "default": "auto"
      },
      {
        "name": "newEstimate",
        "schema": "string",
        "description": "The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`."
      },
      {
        "name": "increaseBy",
        "schema": "string",
        "description": "The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`."
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.\n *  `adjustEstimate` is set to `manual` but `reduceBy` is not provided or is invalid.\n *  the user does not have permission to delete the worklog."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue is not found or user does not have permission to view the issue.\n *  the worklog is not found or the user does not have permission to view it.\n *  time tracking is disabled."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{id}",
    "method": "getWorklogDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Get worklog",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about work logs in the response. This parameter accepts\n\n`properties`, which returns worklog properties.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a worklog."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue is not found or the user does not have permission to view it.\n *  the worklog is not found or the user does not have permission to view it.\n *  time tracking is disabled.\n\n."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{id}",
    "method": "updateWorklog",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Update worklog",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "ID"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "Whether users watching the issue are notified by email.",
        "default": true
      },
      {
        "name": "adjustEstimate",
        "schema": "string",
        "description": "Defines how to update the issue's time estimate, the options are:\n\n *  `new` Sets the estimate to a specific value, defined in `newEstimate`.\n *  `leave` Leaves the estimate unchanged.\n *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`.",
        "default": "auto"
      },
      {
        "name": "newEstimate",
        "schema": "string",
        "description": "The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.",
        "default": ""
      },
      {
        "name": "overrideEditableFlag",
        "schema": "boolean",
        "description": "Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.",
        "default": false
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "started",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeSpent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeSpentSeconds",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "updateAuthor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a worklog."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.\n *  the user does not have permission to update the worklog.\n *  the request JSON is malformed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue is not found or user does not have permission to view the issue.\n *  the worklog is not found or the user does not have permission to view it.\n *  time tracking is disabled."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties",
    "method": "getPropertyKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklog properties",
    "typeScriptTag": "issueWorklogProperties",
    "description": "Get worklog property keys",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "worklogId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "WORKLOGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "400",
        "description": "Returned if the worklog ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue or worklog is not found.\n *  the user does not have permission to view the issue or worklog."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue worklog properties",
    "typeScriptTag": "issueWorklogProperties",
    "description": "Delete worklog property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "worklogId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "WORKLOGID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the worklog property is removed."
      },
      {
        "statusCode": "400",
        "description": "Returned if the worklog key or id is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to edit the worklog."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue, worklog, or property is not found.\n *  the user does not have permission to view the issue or worklog."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}",
    "method": "getWorklogProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklog properties",
    "typeScriptTag": "issueWorklogProperties",
    "description": "Get worklog property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "worklogId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "WORKLOGID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "400",
        "description": "Returned if the worklog ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue, worklog, or property is not found.\n *  the user does not have permission to view the issue or worklog."
      }
    ]
  },
  {
    "url": "/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}",
    "method": "setWorklogProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue worklog properties",
    "typeScriptTag": "issueWorklogProperties",
    "description": "Set worklog property",
    "parameters": [
      {
        "name": "issueIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the issue.",
        "example": "ISSUEIDORKEY"
      },
      {
        "name": "worklogId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worklog.",
        "example": "WORKLOGID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the issue property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if the worklog ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to edit the worklog."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue or worklog is not found.\n *  the user does not have permission to view the issue or worklog."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLink",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue links",
    "typeScriptTag": "issueLinks",
    "description": "Create issue link",
    "parameters": [
      {
        "name": "comment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "inwardIssue",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "outwardIssue",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "object",
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
        "description": "Returned if the comment is not created. The response contains an error message indicating why the comment wasn't created. The issue link is also not created."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the user cannot view one or both of the issues. For example, the user doesn't have *Browse project* project permission for a project containing one of the issues.\n *  the user does not have *link issues* project permission.\n *  either of the link issues are not found.\n *  the issue link type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLink/{linkId}",
    "method": "deleteLinkById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue links",
    "typeScriptTag": "issueLinks",
    "description": "Delete issue link",
    "parameters": [
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue link.",
        "example": "LINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 response"
      },
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue link ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link is not found.\n *  the user doesn't have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLink/{linkId}",
    "method": "getIssueLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue links",
    "typeScriptTag": "issueLinks",
    "description": "Get issue link",
    "parameters": [
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue link.",
        "example": "LINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a link between issues."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue link ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link is not found.\n *  the user doesn't have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLinkType",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue link types",
    "typeScriptTag": "issueLinkTypes",
    "description": "Get issue link types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of issue link type beans."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if issue linking is disabled."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLinkType",
    "method": "createLinkType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue link types",
    "typeScriptTag": "issueLinkTypes",
    "description": "Create issue link type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inward",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "outward",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object is used as follows:\n\n *  In the [issueLink](https://dac-static.atlassian.com) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](https://dac-static.atlassian.com).\n *  In the [issueLinkType](https://dac-static.atlassian.com) resource it defines and reports on issue link types."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link type name is in use.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLinkType/{issueLinkTypeId}",
    "method": "deleteType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue link types",
    "typeScriptTag": "issueLinkTypes",
    "description": "Delete issue link type",
    "parameters": [
      {
        "name": "issueLinkTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue link type.",
        "example": "ISSUELINKTYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue link type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLinkType/{issueLinkTypeId}",
    "method": "getLinkType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue link types",
    "typeScriptTag": "issueLinkTypes",
    "description": "Get issue link type",
    "parameters": [
      {
        "name": "issueLinkTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue link type.",
        "example": "ISSUELINKTYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used as follows:\n\n *  In the [issueLink](https://dac-static.atlassian.com) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](https://dac-static.atlassian.com).\n *  In the [issueLinkType](https://dac-static.atlassian.com) resource it defines and reports on issue link types."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue link type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issueLinkType/{issueLinkTypeId}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue link types",
    "typeScriptTag": "issueLinkTypes",
    "description": "Update issue link type",
    "parameters": [
      {
        "name": "issueLinkTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue link type.",
        "example": "ISSUELINKTYPEID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inward",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "outward",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used as follows:\n\n *  In the [issueLink](https://dac-static.atlassian.com) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](https://dac-static.atlassian.com).\n *  In the [issueLinkType](https://dac-static.atlassian.com) resource it defines and reports on issue link types."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue link type ID or the request body are invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  issue linking is disabled.\n *  the issue link type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issues/archive/export",
    "method": "exportArchivedIssues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Export archived issue(s)",
    "parameters": [
      {
        "name": "archivedBy",
        "schema": "array",
        "description": ""
      },
      {
        "name": "archivedDateRange",
        "schema": "object",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "projects",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reporters",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The response for status request for a running/completed export task."
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
        "statusCode": "412",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes",
    "method": "getSecuritySchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Get issue security schemes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of security schemes."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer issue security schemes."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes",
    "method": "createSecurityScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Create issue security scheme",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "levels",
        "schema": "array",
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
        "description": "The ID of the issue security scheme."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/level",
    "method": "getSecurityLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Get issue security levels",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: `id=10000&id=10001`."
      },
      {
        "name": "schemeId",
        "schema": "array",
        "description": "The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: `schemeId=10000&schemeId=10001`."
      },
      {
        "name": "onlyDefault",
        "schema": "boolean",
        "description": "When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/level/default",
    "method": "setDefaultLevels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Set default issue security levels",
    "parameters": [
      {
        "name": "defaultValues",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/level/member",
    "method": "getLevelMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Get issue security level members",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`."
      },
      {
        "name": "schemeId",
        "schema": "array",
        "description": "The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`."
      },
      {
        "name": "levelId",
        "schema": "array",
        "description": "The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about the custom field granted the permission\n *  `group` Returns information about the group that is granted the permission\n *  `projectRole` Returns information about the project role granted the permission\n *  `user` Returns information about the user who is granted the permission"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/project",
    "method": "getProjectSecuritySchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Get projects using issue security schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "issueSecuritySchemeId",
        "schema": "array",
        "description": "The list of security scheme IDs to be filtered out."
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The list of project IDs to be filtered out."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/project",
    "method": "associateSchemeToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Associate security scheme to project",
    "parameters": [
      {
        "name": "oldToNewSecurityLevelMappings",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "409",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/search",
    "method": "searchSecuritySchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Search issue security schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: `id=10000&id=10001`."
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: `projectId=10000&projectId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{id}",
    "method": "getSchemeSecurityLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Get issue security scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue security scheme. Use the [Get issue security schemes](https://dac-static.atlassian.com) operation to get a list of issue security scheme IDs.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a security scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the administrator permission and the scheme is not used in any project where the user has administrative permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{id}",
    "method": "updateSecurityScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Update issue security scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "ID"
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members",
    "method": "getLevelMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security level",
    "typeScriptTag": "issueSecurityLevel",
    "description": "Get issue security level members by issue security scheme",
    "parameters": [
      {
        "name": "issueSecuritySchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue security scheme. Use the [Get issue security schemes](https://dac-static.atlassian.com) operation to get a list of issue security scheme IDs.",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "issueSecurityLevelId",
        "schema": "array",
        "description": "The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if no issue security level members are found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}",
    "method": "deleteSecurityScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Delete issue security scheme",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "SCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}/level",
    "method": "addSecurityLevels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Add issue security levels",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "SCHEMEID"
      },
      {
        "name": "levels",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}",
    "method": "removeLevel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Remove issue security level",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "SCHEMEID"
      },
      {
        "name": "levelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level to remove.",
        "example": "LEVELID"
      },
      {
        "name": "replaceWith",
        "schema": "string",
        "description": "The ID of the issue security level that will replace the currently selected level."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "409",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}",
    "method": "updateSecurityLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Update issue security level",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme level belongs to.",
        "example": "SCHEMEID"
      },
      {
        "name": "levelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level to update.",
        "example": "LEVELID"
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member",
    "method": "addMembersToLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Add issue security level members",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "SCHEMEID"
      },
      {
        "name": "levelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level.",
        "example": "LEVELID"
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId}",
    "method": "removeSecurityLevelMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue security schemes",
    "typeScriptTag": "issueSecuritySchemes",
    "description": "Remove member from issue security level",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security scheme.",
        "example": "SCHEMEID"
      },
      {
        "name": "levelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level.",
        "example": "LEVELID"
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level member to be removed.",
        "example": "MEMBERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype",
    "method": "getAllForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Get all issue types for user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype",
    "method": "createIssueType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Create issue type",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hierarchyLevel",
        "schema": "integer",
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
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about an issue type."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid because:\n\n *  no content is sent.\n *  the issue type name exceeds 60 characters.\n *  a subtask issue type is requested on an instance where subtasks are disabled."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "409",
        "description": "Returned if the issue type name is in use."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/project",
    "method": "getProjectIssueTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Get issue types for project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project.",
        "example": 0
      },
      {
        "name": "level",
        "schema": "integer",
        "description": "The level of the issue type to filter by. Use:\n\n *  `-1` for Subtask.\n *  `0` for Base.\n *  `1` for Epic."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project is not found.\n *  the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Delete issue type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ID"
      },
      {
        "name": "alternativeIssueTypeId",
        "schema": "string",
        "description": "The ID of the replacement issue type."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if any issues cannot be updated with the alternative issue type."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue type is in use and an alternative issue type is not specified.\n *  the issue type or alternative issue type is not found."
      },
      {
        "statusCode": "409",
        "description": "Returned if the issue type is in use and:\n\n *  also specified as the alternative issue type.\n *  is a *standard* issue type and the alternative issue type is a *subtask*."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Get issue type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about an issue type."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{id}",
    "method": "updateIssueType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Update issue type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarId",
        "schema": "integer",
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
        "description": "Details about an issue type."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid because:\n\n *  no content is sent.\n *  the issue type name exceeds 60 characters.\n *  the avatar is not associated with this issue type."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue type is not found."
      },
      {
        "statusCode": "409",
        "description": "Returned if the issue type name is in use."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{id}/alternatives",
    "method": "listAlternativeIssueTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Get alternative issue types",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{id}/avatar2",
    "method": "loadIssueTypeAvatar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue types",
    "typeScriptTag": "issueTypes",
    "description": "Load issue type avatar",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ID"
      },
      {
        "name": "x",
        "schema": "integer",
        "description": "The X coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "y",
        "schema": "integer",
        "description": "The Y coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "The length of each side of the crop region.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of an avatar."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  an image isn't included in the request.\n *  the image type is unsupported.\n *  the crop parameters extend the crop area beyond the edge of the image.\n *  `cropSize` is missing.\n *  the issue type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{issueTypeId}/properties",
    "method": "getPropertyKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type properties",
    "typeScriptTag": "issueTypeProperties",
    "description": "Get issue type property keys",
    "parameters": [
      {
        "name": "issueTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue type ID is invalid."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue type is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}",
    "method": "deletePropertyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue type properties",
    "typeScriptTag": "issueTypeProperties",
    "description": "Delete issue type property",
    "parameters": [
      {
        "name": "issueTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPEID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property. Use [Get issue type property keys](https://dac-static.atlassian.com) to get a list of all issue type property keys.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the issue type property is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue type or property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}",
    "method": "getPropertyKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type properties",
    "typeScriptTag": "issueTypeProperties",
    "description": "Get issue type property",
    "parameters": [
      {
        "name": "issueTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPEID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property. Use [Get issue type property keys](https://dac-static.atlassian.com) to get a list of all issue type property keys.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "400",
        "description": "Returned if the issue type ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue type or property is not found or the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}",
    "method": "setProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type properties",
    "typeScriptTag": "issueTypeProperties",
    "description": "Set issue type property",
    "parameters": [
      {
        "name": "issueTypeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPEID"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the issue type property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if:\n\n *  the issue type ID is invalid.\n *  a property value is not provided.\n *  the property value JSON content is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to modify the issue type."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the issue type is not found.\n *  the user does not have the permission view the issue type."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescheme",
    "method": "getAllSchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Get all issue type schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `name` Sorts by issue type scheme name.\n *  `id` Sorts by issue type scheme ID.",
        "default": "id"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.\n *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have.",
        "default": ""
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with issue type scheme name.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescheme",
    "method": "createScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Create issue type scheme",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultIssueTypeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
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
        "description": "The ID of an issue type scheme."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/mapping",
    "method": "getSchemeMapping",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Get issue type scheme items",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "issueTypeSchemeId",
        "schema": "array",
        "description": "The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescheme/project",
    "method": "getIssueTypeSchemeForProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Get issue type schemes for projects",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "projectId",
        "schema": "array",
        "required": true,
        "description": "The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescheme/project",
    "method": "assignSchemeToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Assign issue type scheme to project",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ISSUETYPESCHEMEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}",
    "method": "deleteSchemeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Delete issue type scheme",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type scheme.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Update issue type scheme",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type scheme.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultIssueTypeId",
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype",
    "method": "addIssueTypesToScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Add issue types to issue type scheme",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type scheme.",
        "example": 0
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move",
    "method": "changeOrderOfIssueTypes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Change order of issue types",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type scheme.",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId}",
    "method": "removeIssueTypeSchemeMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue type schemes",
    "typeScriptTag": "issueTypeSchemes",
    "description": "Remove issue type from issue type scheme",
    "parameters": [
      {
        "name": "issueTypeSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type scheme.",
        "example": 0
      },
      {
        "name": "issueTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme",
    "method": "listScreenSchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Get issue type screen schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with issue type screen scheme name.",
        "default": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `name` Sorts by issue type screen scheme name.\n *  `id` Sorts by issue type screen scheme ID.",
        "default": "id"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescreenscheme",
    "method": "createScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Create issue type screen scheme",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeMappings",
        "schema": "array",
        "required": true,
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
        "description": "The ID of an issue type screen scheme."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme/mapping",
    "method": "listSchemeMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Get issue type screen scheme items",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "array",
        "description": "The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescreenscheme/project",
    "method": "getScreenSchemesForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Get issue type screen schemes for projects",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "projectId",
        "schema": "array",
        "required": true,
        "description": "The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescreenscheme/project",
    "method": "assignSchemeToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Assign issue type screen scheme to project",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}",
    "method": "deleteScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Delete issue type screen scheme",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": "ISSUETYPESCREENSCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}",
    "method": "updateScreenScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Update issue type screen scheme",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": "ISSUETYPESCREENSCHEMEID"
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping",
    "method": "appendMappingsToScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Append mappings to issue type screen scheme",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": "ISSUETYPESCREENSCHEMEID"
      },
      {
        "name": "issueTypeMappings",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
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
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default",
    "method": "updateDefaultScreenScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Update issue type screen scheme default screen scheme",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": "ISSUETYPESCREENSCHEMEID"
      },
      {
        "name": "screenSchemeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCREENSCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove",
    "method": "removeMappings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Remove mappings from issue type screen scheme",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": "ISSUETYPESCREENSCHEMEID"
      },
      {
        "name": "issueTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project",
    "method": "getScreenSchemeProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue type screen schemes",
    "typeScriptTag": "issueTypeScreenSchemes",
    "description": "Get issue type screen scheme projects",
    "parameters": [
      {
        "name": "issueTypeScreenSchemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the issue type screen scheme.",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "query",
        "schema": "string",
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/autocompletedata",
    "method": "getFieldReferenceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Get field reference data (GET)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lists of JQL reference data."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/autocompletedata",
    "method": "getFieldReferenceDataPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Get field reference data (POST)",
    "parameters": [
      {
        "name": "includeCollapsedFields",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lists of JQL reference data."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/autocompletedata/suggestions",
    "method": "getFieldAutoCompleteForQueryString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Get field auto complete suggestions",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "description": "The name of the field.",
        "example": "reporter"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "description": "The partial field item name entered by the user."
      },
      {
        "name": "predicateName",
        "schema": "string",
        "description": "The name of the [CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*."
      },
      {
        "name": "predicateValue",
        "schema": "string",
        "description": "The partial predicate item name entered by the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results from a JQL query."
      },
      {
        "statusCode": "400",
        "description": "Returned if an invalid combination of parameters is passed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/function/computation",
    "method": "getPrecomputations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JQL functions (apps)",
    "typeScriptTag": "jqlFunctionsApps",
    "description": "Get precomputations (apps)",
    "parameters": [
      {
        "name": "functionKey",
        "schema": "array",
        "description": "The function key in format:\n\n *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`\n *  Connect: `[App key]__[Module key]`"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `functionKey` Sorts by the functionKey.\n *  `used` Sorts by the used timestamp.\n *  `created` Sorts by the created timestamp.\n *  `updated` Sorts by the updated timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as the app that provided the function."
      },
      {
        "statusCode": "404",
        "description": "Returned if the function is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/function/computation",
    "method": "updatePrecomputationValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JQL functions (apps)",
    "typeScriptTag": "jqlFunctionsApps",
    "description": "Update precomputations (apps)",
    "parameters": [
      {
        "name": "values",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not authenticated as the app that provided the function."
      },
      {
        "statusCode": "404",
        "description": "Returned if the function is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/match",
    "method": "checkAgainstJql",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue search",
    "typeScriptTag": "issueSearch",
    "description": "Check issues against JQL",
    "parameters": [
      {
        "name": "issueIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "jqls",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of matched issues or errors for each JQL query, in the order the JQL queries were passed."
      },
      {
        "statusCode": "400",
        "description": "Returned if `jqls` exceeds the maximum number of JQL queries or `issueIds` exceeds the maximum number of issue IDs."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/parse",
    "method": "parseAndValidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Parse JQL query",
    "parameters": [
      {
        "name": "validation",
        "schema": "string",
        "required": true,
        "description": "How to validate the JQL query and treat the validation results. Validation options include:\n\n *  `strict` Returns all errors. If validation fails, the query structure is not returned.\n *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.\n *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned.",
        "example": "VALIDATION",
        "default": "strict"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of parsed JQL queries."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/jql/pdcleaner",
    "method": "convertUserIdentifiersToAccountIdsInJqlQueries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Convert user identifiers to account IDs in JQL queries",
    "parameters": [
      {
        "name": "queryStrings",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The converted JQL queries."
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
    "url": "/rest/api/3/jql/sanitize",
    "method": "sanitizeJqlQueries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JQL",
    "typeScriptTag": "jql",
    "description": "Sanitize JQL queries",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The sanitized JQL queries for the given account IDs."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/label",
    "method": "getAllLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Get all labels",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      }
    ]
  },
  {
    "url": "/rest/api/3/license/approximateLicenseCount",
    "method": "getApproximateLicenseCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "License metrics",
    "typeScriptTag": "licenseMetrics",
    "description": "Get approximate license count",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metric that provides insight into the active licence details"
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
    "url": "/rest/api/3/license/approximateLicenseCount/product/{applicationKey}",
    "method": "getApproxLicenseCountByAppKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "License metrics",
    "typeScriptTag": "licenseMetrics",
    "description": "Get approximate application license count",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The ID of the application, represents a specific version of Jira.",
        "example": "APPLICATIONKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metric that provides insight into the active licence details"
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypermissions",
    "method": "getUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permissions",
    "typeScriptTag": "permissions",
    "description": "Get my permissions",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The key of project. Ignored if `projectId` is provided."
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": "The ID of project."
      },
      {
        "name": "issueKey",
        "schema": "string",
        "description": "The key of the issue. Ignored if `issueId` is provided."
      },
      {
        "name": "issueId",
        "schema": "string",
        "description": "The ID of the issue."
      },
      {
        "name": "permissions",
        "schema": "string",
        "description": "A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](https://dac-static.atlassian.com).",
        "example": "BROWSE_PROJECTS,EDIT_ISSUES"
      },
      {
        "name": "projectUuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectConfigurationUuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "commentId",
        "schema": "string",
        "description": "The ID of the comment."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about permissions."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences",
    "method": "deleteUserPreference",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Delete preference",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the preference.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the key is not provided or not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences",
    "method": "getPreferenceValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Get preference",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the preference.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the key is not provided or not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences",
    "method": "updatePreferenceValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Set preference",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the preference. The maximum length is 255 characters.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the key or value is not provided or invalid."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences/locale",
    "method": "deleteUserLocale",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Delete locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences/locale",
    "method": "getUserLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Get locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a locale."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/mypreferences/locale",
    "method": "setUserLocale",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Set locale",
    "parameters": [
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/myself",
    "method": "getCurrentUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Myself",
    "typeScriptTag": "myself",
    "description": "Get current user",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `groups` Returns all groups, including nested groups, the user belongs to.\n *  `applicationRoles` Returns the application roles the user is assigned to."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:\n\n *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).\n *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.\n *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme",
    "method": "listNotificationSchemesPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Get notification schemes paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of notification schemes IDs to be filtered by"
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The list of projects IDs to be filtered by"
      },
      {
        "name": "onlyDefault",
        "schema": "boolean",
        "description": "When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false.",
        "default": false
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme",
    "method": "createNotificationScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Create notification scheme",
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
        "name": "notificationSchemeEvents",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The ID of a notification scheme."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/project",
    "method": "getProjectsUsingNotificationSchemesPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Get projects using notification schemes paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "notificationSchemeId",
        "schema": "array",
        "description": "The list of notifications scheme IDs to be filtered out"
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The list of project IDs to be filtered out"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Get notification scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the notification scheme. Use [Get notification schemes paginated](https://dac-static.atlassian.com) to get a list of notification scheme IDs.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a notification scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the notification scheme is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/{id}",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Update notification scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the notification scheme.",
        "example": "ID"
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/{id}/notification",
    "method": "addNotificationsToScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Add notifications to notification scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the notification scheme.",
        "example": "ID"
      },
      {
        "name": "notificationSchemeEvents",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/{notificationSchemeId}",
    "method": "removeScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Delete notification scheme",
    "parameters": [
      {
        "name": "notificationSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the notification scheme.",
        "example": "NOTIFICATIONSCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId}",
    "method": "deleteNotificationFromScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue notification schemes",
    "typeScriptTag": "issueNotificationSchemes",
    "description": "Remove notification from notification scheme",
    "parameters": [
      {
        "name": "notificationSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the notification scheme.",
        "example": "NOTIFICATIONSCHEMEID"
      },
      {
        "name": "notificationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the notification.",
        "example": "NOTIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissions",
    "method": "getAllPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permissions",
    "typeScriptTag": "permissions",
    "description": "Get all permissions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about permissions."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissions/check",
    "method": "getBulkPermissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Permissions",
    "typeScriptTag": "permissions",
    "description": "Get bulk permissions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "globalPermissions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "projectPermissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of global and project permissions granted to the user."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissions/project",
    "method": "getPermittedProjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Permissions",
    "typeScriptTag": "permissions",
    "description": "Get permitted projects",
    "parameters": [
      {
        "name": "permissions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of projects in which a user is granted permissions."
      },
      {
        "statusCode": "400",
        "description": "Returned if a project permission is not found."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Get all permission schemes",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of all permission schemes."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme",
    "method": "createScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Create permission scheme",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expand",
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
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of a permission scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or the feature is not available in the Jira plan."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}",
    "method": "deleteScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Delete permission scheme",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme being deleted.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the permission scheme is deleted."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the permission scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}",
    "method": "getScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Get permission scheme",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme to return.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a permission scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the permission scheme is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Update permission scheme",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme to update.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expand",
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
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a permission scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if:\n\n *  the user does not have the necessary permission to update permission schemes.\n *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be updated on free plans."
      },
      {
        "statusCode": "404",
        "description": "Returned if the permission scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}/permission",
    "method": "getAllGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Get permission scheme grants",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `user` Returns information about the user who is granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `field` Returns information about the custom field granted the permission.\n *  `all` Returns all expandable information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of permission grants."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the permission schemes is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}/permission",
    "method": "createPermissionGrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Create permission grant",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme in which to create a new permission grant.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `user` Returns information about the user who is granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `field` Returns information about the custom field granted the permission.\n *  `all` Returns all expandable information."
      },
      {
        "name": "holder",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "permission",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a permission granted to a user or group."
      },
      {
        "statusCode": "400",
        "description": "Returned if the value for expand is invalid or the same permission grant is present."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}",
    "method": "deletePermissionGrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Delete permission scheme grant",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme to delete the permission grant from.",
        "example": 0
      },
      {
        "name": "permissionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission grant to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the permission grant is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if permission grant with the provided ID is not found."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}",
    "method": "getPermissionSchemeGrant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission schemes",
    "typeScriptTag": "permissionSchemes",
    "description": "Get permission scheme grant",
    "parameters": [
      {
        "name": "schemeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission scheme.",
        "example": 0
      },
      {
        "name": "permissionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the permission grant.",
        "example": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a permission granted to a user or group."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the permission scheme or permission grant is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Get priorities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority",
    "method": "createIssuePriority",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Create priority",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "iconUrl",
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
        "name": "statusColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUSCOLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The ID of an issue priority."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/default",
    "method": "setDefaultPriority",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Set default priority",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/move",
    "method": "changeOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Move priorities",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Search priorities",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`."
      },
      {
        "name": "projectId",
        "schema": "array",
        "description": "The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`."
      },
      {
        "name": "priorityName",
        "schema": "string",
        "description": "The name of priority to search for.",
        "default": ""
      },
      {
        "name": "onlyDefault",
        "schema": "boolean",
        "description": "Whether only the default priority is returned.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/{id}",
    "method": "deleteIssuePriority",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Delete priority",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue priority.",
        "example": "ID"
      },
      {
        "name": "replaceWith",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue priority that will replace the currently selected resolution.",
        "example": "REPLACEWITH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "409",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/{id}",
    "method": "getPriorityById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Get priority",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue priority.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An issue priority."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue priority isn't found."
      }
    ]
  },
  {
    "url": "/rest/api/3/priority/{id}",
    "method": "updateIssuePriority",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue priorities",
    "typeScriptTag": "issuePriorities",
    "description": "Update priority",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue priority.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusColor",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/project",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all projects",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `lead` Returns information about the project lead.\n *  `projectKeys` Returns all project keys associated with the project."
      },
      {
        "name": "recent",
        "schema": "integer",
        "description": "Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "A list of project properties to return for the project. This parameter accepts a comma-separated list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/project",
    "method": "createProjectBasedOnTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assigneeType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldConfigurationScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "issueSecurityScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "issueTypeScreenScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "lead",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "leadAccountId",
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
        "name": "notificationScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "permissionScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "projectTemplateKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectTypeKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowScheme",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Identifiers for a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid and the project could not be created."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to create projects."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/recent",
    "method": "listRecentProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get recent projects",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `projectKeys` Returns all project keys associated with a project.\n *  `lead` Returns information about the project lead.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `url` Returns the URL associated with the project.\n *  `permissions` Returns the permissions associated with the project.\n *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.\n *  `*` Returns the project with all available expand options."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/search",
    "method": "listVisibleProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get projects paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field.\n\n *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](https://dac-static.atlassian.com).\n *  `issueCount` Sorts by the total number of issues in each project.\n *  `key` Sorts by project key.\n *  `lastIssueUpdatedTime` Sorts by the last issue update time.\n *  `name` Sorts by project name.\n *  `owner` Sorts by project lead.\n *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.\n *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date.",
        "default": "key"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Up to 50 project IDs can be provided."
      },
      {
        "name": "keys",
        "schema": "array",
        "description": "The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, `keys=PA&keys=PB`. Up to 50 project keys can be provided."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive)."
      },
      {
        "name": "typeKey",
        "schema": "string",
        "description": "Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`."
      },
      {
        "name": "categoryId",
        "schema": "integer",
        "description": "The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](https://dac-static.atlassian.com) operation."
      },
      {
        "name": "action",
        "schema": "string",
        "description": "Filter results by projects for which the user can:\n\n *  `view` the project, meaning that they have one of the following permissions:\n    \n     *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n *  `edit` the project, meaning that they have one of the following permissions:\n    \n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  `create` the project, meaning that they have the *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue is created.",
        "default": "view"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `projectKeys` Returns all project keys associated with a project.\n *  `lead` Returns information about the project lead.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `url` Returns the URL associated with the project.\n *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project."
      },
      {
        "name": "status",
        "schema": "array",
        "description": "EXPERIMENTAL. Filter results by project status:\n\n *  `live` Search live projects.\n *  `archived` Search archived projects.\n *  `deleted` Search deleted projects, those in the recycle bin."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list."
      },
      {
        "name": "propertyQuery",
        "schema": "string",
        "description": "EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `[thepropertykey].something.nested=1`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that `thepropertykey` is only returned when included in `properties`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if no projects matching the search criteria are found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/type",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project types",
    "typeScriptTag": "projectTypes",
    "description": "Get all project types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/type/accessible",
    "method": "getLicensedTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project types",
    "typeScriptTag": "projectTypes",
    "description": "Get licensed project types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/project/type/{projectTypeKey}",
    "method": "getByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project types",
    "typeScriptTag": "projectTypes",
    "description": "Get project type by key",
    "parameters": [
      {
        "name": "projectTypeKey",
        "schema": "string",
        "required": true,
        "description": "The key of the project type.",
        "example": "PROJECTTYPEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project type."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/type/{projectTypeKey}/accessible",
    "method": "getAccessibleByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project types",
    "typeScriptTag": "projectTypes",
    "description": "Get accessible project type by key",
    "parameters": [
      {
        "name": "projectTypeKey",
        "schema": "string",
        "required": true,
        "description": "The key of the project type.",
        "example": "PROJECTTYPEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project type."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project type is not accessible to the user."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}",
    "method": "deleteProjectByIdOrKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "10001"
      },
      {
        "name": "enableUndo",
        "schema": "boolean",
        "description": "Whether this project is placed in the Jira recycle bin where it will be available for restoration.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the project is deleted."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to delete it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}",
    "method": "getProjectDetailsByIdOrKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  `description` The project description.\n *  `issueTypes` The issue types associated with the project.\n *  `lead` The project lead.\n *  `projectKeys` All project keys associated with the project.\n *  `issueTypeHierarchy` The project issue type hierarchy."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "A list of project properties to return for the project. This parameter accepts a comma-separated list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}",
    "method": "updateProjectDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "10001"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  `description` The project description.\n *  `issueTypes` The issue types associated with the project.\n *  `lead` The project lead.\n *  `projectKeys` All project keys associated with the project."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assigneeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "issueSecurityScheme",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lead",
        "schema": "string",
        "description": ""
      },
      {
        "name": "leadAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationScheme",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "permissionScheme",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if:\n\n *  the user does not have the necessary permission to update project details.\n *  the permission scheme is being changed and the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be changed on free plans."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/archive",
    "method": "archiveProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Archive project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/avatar",
    "method": "setAvatar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project avatars",
    "typeScriptTag": "projectAvatars",
    "description": "Set project avatar",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or (case-sensitive) key of the project.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "isDeletable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isSelected",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isSystemAvatar",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "urls",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or avatar is not found or the user does not have permission to view the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/avatar/{id}",
    "method": "deleteAvatar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project avatars",
    "typeScriptTag": "projectAvatars",
    "description": "Delete project avatar",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or (case-sensitive) key.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the avatar.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the avatar is a system avatar or the user does not have permission to administer the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or avatar is not found or the user does not have permission to view the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/avatar2",
    "method": "setAvatar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project avatars",
    "typeScriptTag": "projectAvatars",
    "description": "Load project avatar",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or (case-sensitive) key of the project.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "x",
        "schema": "integer",
        "description": "The X coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "y",
        "schema": "integer",
        "description": "The Y coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The length of each side of the crop region.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of an avatar."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  an image isn't included in the request.\n *  the image type is unsupported.\n *  the crop parameters extend the crop area beyond the edge of the image."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer the project or an anonymous call is made to the operation."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/avatars",
    "method": "getAllAvatars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project avatars",
    "typeScriptTag": "projectAvatars",
    "description": "Get all project avatars",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or (case-sensitive) key of the project.",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of project avatars."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/classification-level/default",
    "method": "removeDefaultDataClassificationLevelFromProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project classification levels",
    "typeScriptTag": "projectClassificationLevels",
    "description": "Remove the default data classification level from a project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case-sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/classification-level/default",
    "method": "getDefaultDataClassificationLevelFromProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project classification levels",
    "typeScriptTag": "projectClassificationLevels",
    "description": "Get the default data classification level of a project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case-sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/classification-level/default",
    "method": "updateDefaultDataClassificationLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project classification levels",
    "typeScriptTag": "projectClassificationLevels",
    "description": "Update the default data classification level of a project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case-sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/component",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Get project components paginated",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `issueCount` Sorts by the count of issues associated with the component.\n *  `lead` Sorts by the user key of the component's project lead.\n *  `name` Sorts by component name."
      },
      {
        "name": "componentSource",
        "schema": "string",
        "description": "The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.",
        "default": "jira"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/components",
    "method": "listComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project components",
    "typeScriptTag": "projectComponents",
    "description": "Get project components",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "componentSource",
        "schema": "string",
        "description": "The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.",
        "default": "jira"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/delete",
    "method": "deleteProjectAsync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete project asynchronously",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/features",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project features",
    "typeScriptTag": "projectFeatures",
    "description": "Get project features",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or (case-sensitive) key of the project.",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of features on a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/features/{featureKey}",
    "method": "setFeatureState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project features",
    "typeScriptTag": "projectFeatures",
    "description": "Set project feature state",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or (case-sensitive) key of the project.",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "featureKey",
        "schema": "string",
        "required": true,
        "description": "The key of the feature.",
        "example": "FEATUREKEY"
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of features on a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or project feature is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/properties",
    "method": "getPropertyKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project properties",
    "typeScriptTag": "projectProperties",
    "description": "Get project property keys",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to view the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project properties",
    "typeScriptTag": "projectProperties",
    "description": "Delete project property",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The project property key. Use [Get project property keys](https://dac-static.atlassian.com) to get a list of all project property keys.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the project property is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}",
    "method": "getByKeyAndProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project properties",
    "typeScriptTag": "projectProperties",
    "description": "Get project property",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The project property key. Use [Get project property keys](https://dac-static.atlassian.com) to get a list of all project property keys.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to view the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}",
    "method": "setProjectProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project properties",
    "typeScriptTag": "projectProperties",
    "description": "Set project property",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the project property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if the project key or id is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/restore",
    "method": "restoreProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Restore deleted or archived project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/role",
    "method": "getProjectRoleList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Get project roles for project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing or if the user lacks administrative permissions for the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or or if the user does not have administrative permissions for the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/role/{id}",
    "method": "removeActorsFromRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Delete actors from project role",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "user",
        "schema": "string",
        "description": "The user account ID of the user to remove from the project role.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "group",
        "schema": "string",
        "description": "The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project or project role is not found.\n *  the calling user does not have administrative permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/role/{id}",
    "method": "getProjectRoleDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Get project role for project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "excludeInactiveUsers",
        "schema": "boolean",
        "description": "Exclude inactive users.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project or project role is not found.\n *  the user does not have administrative permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/role/{id}",
    "method": "addActorsToRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Add actors to project role",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "group",
        "schema": "array",
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project is not found.\n *  the user or group is not found.\n *  the group or user is not active."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/role/{id}",
    "method": "setActorsForRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Set actors for project role",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "categorisedActors",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project is not found.\n *  a user or group is not found.\n *  a group or user is not active."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/roledetails",
    "method": "getRoleDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Get project role details",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "currentMember",
        "schema": "boolean",
        "description": "Whether the roles should be filtered to include only those the user is assigned to.",
        "default": false
      },
      {
        "name": "excludeConnectAddons",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or if the user does not have the necessary permissions for the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/statuses",
    "method": "getStatusesForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all statuses for project",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/version",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get project versions paginated",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `description` Sorts by version description.\n *  `name` Sorts by version name.\n *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.\n *  `sequence` Sorts by the order of appearance in the user interface.\n *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive)."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `issuesstatus` Returns the number of issues in each status category for each version.\n *  `operations` Returns actions that can be performed on the specified version.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing the approvers for this version."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectIdOrKey}/versions",
    "method": "getAllProjectVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get project versions",
    "parameters": [
      {
        "name": "projectIdOrKey",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTIDORKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectId}/email",
    "method": "getSenderEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project email",
    "typeScriptTag": "projectEmail",
    "description": "Get project's sender email",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The project ID.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A project's sender email address."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to read project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or project's sender email address is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectId}/email",
    "method": "setSenderEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project email",
    "typeScriptTag": "projectEmail",
    "description": "Set project's sender email",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "The project ID.",
        "example": 0
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailAddressStatus",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid, if the email address is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to administer the project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectId}/hierarchy",
    "method": "getIssueTypeHierarchy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project issue type hierarchy",
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
        "description": "The hierarchy of issue types within a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme",
    "method": "getIssueSecurityScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project permission schemes",
    "typeScriptTag": "projectPermissionSchemes",
    "description": "Get project issue security scheme",
    "parameters": [
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTKEYORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a security scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the project is visible to the user but the user doesn't have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectKeyOrId}/notificationscheme",
    "method": "getNotificationScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project notification scheme",
    "parameters": [
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTKEYORID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a notification scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user is not an administrator."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectKeyOrId}/permissionscheme",
    "method": "getAssignedPermissionScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project permission schemes",
    "typeScriptTag": "projectPermissionSchemes",
    "description": "Get assigned permission scheme",
    "parameters": [
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTKEYORID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a permission scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to view the project's configuration."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view the project."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectKeyOrId}/permissionscheme",
    "method": "assignSchemeToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project permission schemes",
    "typeScriptTag": "projectPermissionSchemes",
    "description": "Assign permission scheme",
    "parameters": [
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTKEYORID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission."
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of a permission scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if:\n\n *  the user does not have the necessary permission to edit the project's configuration.\n *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be assigned to projects on free plans."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project or permission scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/project/{projectKeyOrId}/securitylevel",
    "method": "getIssueSecurityLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project permission schemes",
    "typeScriptTag": "projectPermissionSchemes",
    "description": "Get project issue security levels",
    "parameters": [
      {
        "name": "projectKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The project ID or project key (case sensitive).",
        "example": "PROJECTKEYORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of issue level security items in a project."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project is not found or the user does not have permission to view it."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectCategory",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project categories",
    "typeScriptTag": "projectCategories",
    "description": "Get all project categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectCategory",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project categories",
    "typeScriptTag": "projectCategories",
    "description": "Create project category",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A project category."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `name` is not provided or exceeds 255 characters.\n *  `description` exceeds 1000 characters."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "409",
        "description": "Returned if the project category name is in use."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectCategory/{id}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project categories",
    "typeScriptTag": "projectCategories",
    "description": "Delete project category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the project category to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project category is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectCategory/{id}",
    "method": "getCategoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project categories",
    "typeScriptTag": "projectCategories",
    "description": "Get project category by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project category.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A project category."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project category is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectCategory/{id}",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project categories",
    "typeScriptTag": "projectCategories",
    "description": "Update project category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A project category."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `name` has been modified and exceeds 255 characters.\n *  `description` has been modified and exceeds 1000 characters."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project category is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectvalidate/key",
    "method": "validateKeyString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project key and name validation",
    "typeScriptTag": "projectKeyAndNameValidation",
    "description": "Validate project key",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "description": "The project key.",
        "example": "HSP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectvalidate/validProjectKey",
    "method": "generateValidKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project key and name validation",
    "typeScriptTag": "projectKeyAndNameValidation",
    "description": "Get valid project key",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "description": "The project key.",
        "example": "HSP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/projectvalidate/validProjectName",
    "method": "getValidProjectName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project key and name validation",
    "typeScriptTag": "projectKeyAndNameValidation",
    "description": "Get valid project name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The project name.",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if a valid project name cannot be generated."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution",
    "method": "listAllValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Get resolutions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution",
    "method": "createIssueResolution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Create resolution",
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
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The ID of an issue resolution."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/default",
    "method": "setDefaultResolution",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Set default resolution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/move",
    "method": "changeOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Move resolutions",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Search resolutions",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": "0"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "description": "The maximum number of items to return per page.",
        "default": "50"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of resolutions IDs to be filtered out"
      },
      {
        "name": "onlyDefault",
        "schema": "boolean",
        "description": "When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/{id}",
    "method": "deleteIssueResolution",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Delete resolution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue resolution.",
        "example": "ID"
      },
      {
        "name": "replaceWith",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue resolution that will replace the currently selected resolution.",
        "example": "REPLACEWITH",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "409",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Get resolution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue resolution value.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an issue resolution."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue resolution value is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/resolution/{id}",
    "method": "updateResolution",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue resolutions",
    "typeScriptTag": "issueResolutions",
    "description": "Update resolution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue resolution.",
        "example": "ID"
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
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/role",
    "method": "listProjectRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Get all project roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/role",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Create project role",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid. The `name` cannot be empty or start or end with whitespace."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "409",
        "description": "Returned if a project role with the provided name already exists."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}",
    "method": "deleteRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Delete project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role to delete. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "swap",
        "schema": "integer",
        "description": "The ID of the project role that will replace the one being deleted."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid or if the replacement project role is not found."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role being deleted is not found."
      },
      {
        "statusCode": "409",
        "description": "Returned if the project role being deleted is in use and a replacement project role is not specified in the request."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}",
    "method": "getRoleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Get project role by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}",
    "method": "partiallyUpdateRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Partial update project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
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
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}",
    "method": "updateRoleProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project roles",
    "typeScriptTag": "projectRoles",
    "description": "Fully update project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
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
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid. The `name` cannot be empty or start or end with whitespace."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}/actors",
    "method": "removeDefaultActors",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Delete default actors from project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "user",
        "schema": "string",
        "description": "The user account ID of the user to remove as a default actor.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The group ID of the group to be removed as a default actor. This parameter cannot be used with the `group` parameter."
      },
      {
        "name": "group",
        "schema": "string",
        "description": "The group name of the group to be removed as a default actor.This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}/actors",
    "method": "getDefaultActorsForRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Get default actors for project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/role/{id}/actors",
    "method": "addDefaultActorsToRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project role actors",
    "typeScriptTag": "projectRoleActors",
    "description": "Add default actors to project role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project role. Use [Get all project roles](https://dac-static.atlassian.com) to get a list of project role IDs.",
        "example": 0
      },
      {
        "name": "group",
        "schema": "array",
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the roles in a project."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have administrative permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project role is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Get screens",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with screen name.",
        "default": ""
      },
      {
        "name": "scope",
        "schema": "array",
        "description": "The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `id` Sorts by screen ID.\n *  `name` Sorts by screen name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens",
    "method": "createDefaultFieldTab",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Create screen",
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
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A screen."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/addToDefault/{fieldId}",
    "method": "addFieldToDefaultScreen",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Add field to default screen",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the field.",
        "example": "FIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the field it not found or the field is already present."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/tabs",
    "method": "listBulkScreenTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Get bulk screen tabs",
    "parameters": [
      {
        "name": "screenId",
        "schema": "array",
        "description": "The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`."
      },
      {
        "name": "tabId",
        "schema": "array",
        "description": "The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResult",
        "schema": "integer",
        "description": "The maximum number of items to return per page. The maximum number is 100,",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the screen ID or the tab ID is empty."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}",
    "method": "deleteScreen",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Delete screen",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/screens/{screenId}",
    "method": "updateScreen",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Update screen",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
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
        "description": "A screen."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/screens/{screenId}/availableFields",
    "method": "listAvailableFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screens",
    "typeScriptTag": "screens",
    "description": "Get available screen fields",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
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
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs",
    "method": "getAllTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Get all screen tabs",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The key of the project."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the screen ID is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs",
    "method": "createTab",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Create screen tab",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
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
        "statusCode": "200",
        "description": "A screen tab."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}",
    "method": "deleteTab",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Delete screen tab",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen or screen tab is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}",
    "method": "updateTabName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Update screen tab",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
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
        "statusCode": "200",
        "description": "A screen tab."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen or screen tab is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}/fields",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screen tab fields",
    "typeScriptTag": "screenTabFields",
    "description": "Get all screen tab fields",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The key of the project."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen or screen tab is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}/fields",
    "method": "addFieldToTab",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screen tab fields",
    "typeScriptTag": "screenTabFields",
    "description": "Add screen tab field",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A screen tab field."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen, screen tab, or field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}",
    "method": "removeFieldFromTab",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Screen tab fields",
    "typeScriptTag": "screenTabFields",
    "description": "Remove screen tab field",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the field.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen, screen tab, or field is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move",
    "method": "moveField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screen tab fields",
    "typeScriptTag": "screenTabFields",
    "description": "Move screen tab field",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the field.",
        "example": "ID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen, screen tab, or field is not found or the field can't be moved to the requested position."
      }
    ]
  },
  {
    "url": "/rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos}",
    "method": "moveTabPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screen tabs",
    "typeScriptTag": "screenTabs",
    "description": "Move screen tab",
    "parameters": [
      {
        "name": "screenId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen.",
        "example": 0
      },
      {
        "name": "tabId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the screen tab.",
        "example": 0
      },
      {
        "name": "pos",
        "schema": "integer",
        "required": true,
        "description": "The position of tab. The base index is 0.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the screen or screen tab is not found or the position is invalid."
      }
    ]
  },
  {
    "url": "/rest/api/3/screenscheme",
    "method": "listScreenSchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screen schemes",
    "typeScriptTag": "screenSchemes",
    "description": "Get screen schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 25
      },
      {
        "name": "id",
        "schema": "array",
        "description": "The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to.",
        "default": ""
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with screen scheme name.",
        "default": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `id` Sorts by screen scheme ID.\n *  `name` Sorts by screen scheme name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/screenscheme",
    "method": "createScreenScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screen schemes",
    "typeScriptTag": "screenSchemes",
    "description": "Create screen scheme",
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
        "name": "screens",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The ID of a screen scheme."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/screenscheme/{screenSchemeId}",
    "method": "deleteSchemeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Screen schemes",
    "typeScriptTag": "screenSchemes",
    "description": "Delete screen scheme",
    "parameters": [
      {
        "name": "screenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the screen scheme.",
        "example": "SCREENSCHEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the screen scheme is deleted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/screenscheme/{screenSchemeId}",
    "method": "updateSchemeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Screen schemes",
    "typeScriptTag": "screenSchemes",
    "description": "Update screen scheme",
    "parameters": [
      {
        "name": "screenSchemeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the screen scheme.",
        "example": "SCREENSCHEMEID"
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
        "name": "screens",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/search",
    "method": "jqlGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue search",
    "typeScriptTag": "issueSearch",
    "description": "Search for issues using JQL (GET)",
    "parameters": [
      {
        "name": "jql",
        "schema": "string",
        "description": "The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:\n\n *  If no JQL expression is provided, all issues are returned.\n *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.\n *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.",
        "example": "project = HSP"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only.",
        "default": 50
      },
      {
        "name": "validateQuery",
        "schema": "string",
        "description": "Determines how to validate the JQL query and treat the validation results. Supported values are:\n\n *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).\n *  `warn` Returns all errors as warnings.\n *  `none` No validation is performed.\n *  `true` *Deprecated* A legacy synonym for `strict`.\n *  `false` *Deprecated* A legacy synonym for `warn`.\n\nNote: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.",
        "default": "strict"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  `summary,comment` Returns only the summary and comments fields.\n *  `-description` Returns all navigable (default) fields except description.\n *  `*all,-comment` Returns all fields except comments.\n\nThis parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](https://dac-static.atlassian.com) where the default is all fields."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `operations` Returns all possible operations for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version."
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified."
      },
      {
        "name": "fieldsByKeys",
        "schema": "boolean",
        "description": "Reference fields by their key (rather than ID).",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The result of a JQL search."
      },
      {
        "statusCode": "400",
        "description": "Returned if the JQL query is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/search",
    "method": "usingJqlPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue search",
    "typeScriptTag": "issueSearch",
    "description": "Search for issues using JQL (POST)",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fieldsByKeys",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "jql",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "",
        "default": 50
      },
      {
        "name": "properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "validateQuery",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The result of a JQL search."
      },
      {
        "statusCode": "400",
        "description": "Returned if the JQL query is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/search/id",
    "method": "searchIssueIdsUsingJqlPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue search",
    "typeScriptTag": "issueSearch",
    "description": "Search issue IDs using JQL",
    "parameters": [
      {
        "name": "jql",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "",
        "default": 1000
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of your JQL search. Returns a list of issue IDs and a token to fetch the next page if one exists."
      },
      {
        "statusCode": "400",
        "description": "Returned if the JQL query is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/securitylevel/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue security level",
    "typeScriptTag": "issueSecurityLevel",
    "description": "Get issue security level",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue security level.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of an issue level security item."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue security level is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/serverInfo",
    "method": "getInstanceInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server info",
    "typeScriptTag": "serverInfo",
    "description": "Get Jira instance info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the Jira instance."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      }
    ]
  },
  {
    "url": "/rest/api/3/settings/columns",
    "method": "getDefaultColumns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue navigator settings",
    "typeScriptTag": "issueNavigatorSettings",
    "description": "Get issue navigator default columns",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/settings/columns",
    "method": "setIssueNavigatorDefaultColumns",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue navigator settings",
    "typeScriptTag": "issueNavigatorSettings",
    "description": "Set issue navigator default columns",
    "parameters": [
      {
        "name": "columns",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if invalid parameters are passed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if a navigable field value is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/status",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow statuses",
    "typeScriptTag": "workflowStatuses",
    "description": "Get all statuses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/status/{idOrName}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow statuses",
    "typeScriptTag": "workflowStatuses",
    "description": "Get status",
    "parameters": [
      {
        "name": "idOrName",
        "schema": "string",
        "required": true,
        "description": "The ID or name of the status.",
        "example": "IDORNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A status."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the status is not found.\n *  the status is not associated with a workflow.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuscategory",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow status categories",
    "typeScriptTag": "workflowStatusCategories",
    "description": "Get all status categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuscategory/{idOrKey}",
    "method": "getByIdOrKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow status categories",
    "typeScriptTag": "workflowStatusCategories",
    "description": "Get status category",
    "parameters": [
      {
        "name": "idOrKey",
        "schema": "string",
        "required": true,
        "description": "The ID or key of the status category.",
        "example": "IDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A status category."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the status category is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuses",
    "method": "bulkDeleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Bulk delete Statuses",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items `1`, Max items `50`"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuses",
    "method": "bulkGetStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Bulk get statuses",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `usages` Returns the project and issue types that use the status in their workflow.\n *  `workflowUsages` Returns the workflows that use the status."
      },
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items `1`, Max items `50`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuses",
    "method": "bulkCreateStatuses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Bulk create statuses",
    "parameters": [
      {
        "name": "scope",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "statuses",
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
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      },
      {
        "statusCode": "409",
        "description": "Returned if another workflow configuration update task is ongoing."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuses",
    "method": "bulkUpdateStatusesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Bulk update statuses",
    "parameters": [
      {
        "name": "statuses",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      },
      {
        "statusCode": "409",
        "description": "Returned if another workflow configuration update task is ongoing."
      }
    ]
  },
  {
    "url": "/rest/api/3/statuses/search",
    "method": "searchPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Search statuses paginated",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `usages` Returns the project and issue types that use the status in their workflow.\n *  `workflowUsages` Returns the workflows that use the status."
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": "The project the status is part of or null for global statuses."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 200
      },
      {
        "name": "searchString",
        "schema": "string",
        "description": "Term to match status names against or null to search for all statuses in the search scope."
      },
      {
        "name": "statusCategory",
        "schema": "string",
        "description": "Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/task/{taskId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a task."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the task is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/task/{taskId}/cancel",
    "method": "cancelTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Cancel task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "TASKID"
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
    "url": "/rest/api/3/uiModifications",
    "method": "getModifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UI modifications (apps)",
    "typeScriptTag": "uiModificationsApps",
    "description": "Get UI modifications",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `data` Returns UI modification data.\n *  `contexts` Returns UI modification contexts."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not from a Forge app."
      }
    ]
  },
  {
    "url": "/rest/api/3/uiModifications",
    "method": "createModification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UI modifications (apps)",
    "typeScriptTag": "uiModificationsApps",
    "description": "Create UI modification",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contexts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
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
        "description": "Identifiers for a UI modification."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not from a Forge app."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/uiModifications/{uiModificationId}",
    "method": "deleteModification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UI modifications (apps)",
    "typeScriptTag": "uiModificationsApps",
    "description": "Delete UI modification",
    "parameters": [
      {
        "name": "uiModificationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the UI modification.",
        "example": "UIMODIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not from a Forge app."
      },
      {
        "statusCode": "404",
        "description": "Returned if the UI modification is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/uiModifications/{uiModificationId}",
    "method": "updateModificationById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UI modifications (apps)",
    "typeScriptTag": "uiModificationsApps",
    "description": "Update UI modification",
    "parameters": [
      {
        "name": "uiModificationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the UI modification.",
        "example": "UIMODIFICATIONID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contexts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "data",
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the request is not from a Forge app."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/type/{type}/owner/{entityId}",
    "method": "getSystemAndCustomAvatarsByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Get avatars",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The avatar type.",
        "example": "TYPE"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The ID of the item the avatar is associated with.",
        "example": "ENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about system and custom avatars."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/type/{type}/owner/{entityId}",
    "method": "loadCustomAvatarForProjectOrIssueType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Load avatar",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The avatar type.",
        "example": "TYPE"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The ID of the item the avatar is associated with.",
        "example": "ENTITYID"
      },
      {
        "name": "x",
        "schema": "integer",
        "description": "The X coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "y",
        "schema": "integer",
        "description": "The Y coordinate of the top-left corner of the crop region.",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "The length of each side of the crop region.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details of an avatar."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  an image isn't included in the request.\n *  the image type is unsupported.\n *  the crop parameters extend the crop area beyond the edge of the image."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}",
    "method": "deleteAvatar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Delete avatar",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The avatar type.",
        "example": "TYPE"
      },
      {
        "name": "owningObjectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the item the avatar is associated with.",
        "example": "OWNINGOBJECTID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the avatar.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have permission to delete the avatar, the avatar is not deletable."
      },
      {
        "statusCode": "404",
        "description": "Returned if the avatar type, associated item ID, or avatar ID is invalid."
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/view/type/{type}",
    "method": "getDefaultAvatarImageByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Get avatar image by type",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The icon type of the avatar.",
        "example": "TYPE"
      },
      {
        "name": "size",
        "schema": "string",
        "description": "The size of the avatar image. If not provided the default size is returned."
      },
      {
        "name": "format",
        "schema": "string",
        "description": "The format to return the avatar image in. If not provided the original content format is returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/view/type/{type}/avatar/{id}",
    "method": "getAvatarImageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Get avatar image by ID",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The icon type of the avatar.",
        "example": "TYPE"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the avatar.",
        "example": 0
      },
      {
        "name": "size",
        "schema": "string",
        "description": "The size of the avatar image. If not provided the default size is returned."
      },
      {
        "name": "format",
        "schema": "string",
        "description": "The format to return the avatar image in. If not provided the original content format is returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}",
    "method": "getAvatarImageByOwner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Avatars",
    "typeScriptTag": "avatars",
    "description": "Get avatar image by owner",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The icon type of the avatar.",
        "example": "TYPE"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The ID of the project or issue type the avatar belongs to.",
        "example": "ENTITYID"
      },
      {
        "name": "size",
        "schema": "string",
        "description": "The size of the avatar image. If not provided the default size is returned."
      },
      {
        "name": "format",
        "schema": "string",
        "description": "The format to return the avatar image in. If not provided the original content format is returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/user",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "key",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the user cannot be removed."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details."
      },
      {
        "name": "key",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `groups` includes all groups and nested groups to which the user belongs.\n *  `applicationRoles` includes details of all the applications to which the user has access."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:\n\n *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).\n *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.\n *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the calling user does not have the *Browse users and groups* global permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user",
    "method": "createLegacyUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "applicationKeys",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAILADDRESS"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:\n\n *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).\n *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.\n *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid or the number of licensed users is exceeded."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/assignable/multiProjectSearch",
    "method": "findAssignableUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users assignable to projects",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.",
        "example": "query"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "A query string that is matched exactly against user `accountId`. Required, unless `query` is specified."
      },
      {
        "name": "projectKeys",
        "schema": "string",
        "required": true,
        "description": "A list of project keys (case sensitive). This parameter accepts a comma-separated list.",
        "example": "PROJECTKEYS"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `projectKeys` is missing.\n *  `query` or `accountId` is missing.\n *  `query` and `accountId` are provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if one or more of the projects is not found."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/assignable/search",
    "method": "findAssignableUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users assignable to issues",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified.",
        "example": "query"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The sessionId of this request. SessionId is the same until the assignee is set."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "A query string that is matched exactly against user `accountId`. Required, unless `query` is specified."
      },
      {
        "name": "project",
        "schema": "string",
        "description": "The project ID or project key (case sensitive). Required, unless `issueKey` is specified."
      },
      {
        "name": "issueKey",
        "schema": "string",
        "description": "The key of the issue. Required, unless `project` is specified."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue.",
        "default": 50
      },
      {
        "name": "actionDescriptorId",
        "schema": "integer",
        "description": "The ID of the transition."
      },
      {
        "name": "recommend",
        "schema": "boolean",
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
        "statusCode": "400",
        "description": "Returned if:\n\n *  `issueKey` or `project` is missing.\n *  `query` or `accountId` is missing.\n *  `query` and `accountId` are provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the project, issue, or transition is not found."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/bulk",
    "method": "bulkGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Bulk get users",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 10
      },
      {
        "name": "username",
        "schema": "array",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "key",
        "schema": "array",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "array",
        "required": true,
        "description": "The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Returned if `accountID` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/bulk/migration",
    "method": "getAccountIdsForUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get account IDs for users",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 10
      },
      {
        "name": "username",
        "schema": "array",
        "description": "Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present."
      },
      {
        "name": "key",
        "schema": "array",
        "description": "Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if `key` or `username`"
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/columns",
    "method": "resetDefaultColumns",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Reset user default columns",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/columns",
    "method": "getDefaultColumns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user default columns",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the requested user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/columns",
    "method": "setDefaultColumns",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Set user default columns",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "columns",
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
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the requested user is not found."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      },
      {
        "statusCode": "500",
        "description": "Returned if an invalid issue table column ID is sent."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/email",
    "method": "getUserEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user email",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the calling app is not approved to use this API."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing from the request (for example if a user is trying to access this API)."
      },
      {
        "statusCode": "404",
        "description": "Returned if a user with the given `accountId` doesn't exist"
      },
      {
        "statusCode": "503",
        "description": "Indicates the API is not currently enabled"
      }
    ]
  },
  {
    "url": "/rest/api/3/user/email/bulk",
    "method": "getUserEmailBulk",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user email bulk",
    "parameters": [
      {
        "name": "accountId",
        "schema": "array",
        "required": true,
        "description": "The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the calling app is not approved to use this API."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect, or missing from the request (for example if a user is trying to access this API)."
      },
      {
        "statusCode": "503",
        "description": "Indicates the API is not currently enabled."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/groups",
    "method": "getUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user groups",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "key",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the calling user does not have the *Browse users and groups* global permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/permission/search",
    "method": "findUsersWithPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users with permissions",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.",
        "example": "query"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "A query string that is matched exactly against user `accountId`. Required, unless `query` is specified."
      },
      {
        "name": "permissions",
        "schema": "string",
        "required": true,
        "description": "A comma separated list of permissions. Permissions can be specified as any:\n\n *  permission returned by [Get all permissions](https://dac-static.atlassian.com).\n *  custom project permission added by Connect apps.\n *  (deprecated) one of the following:\n    \n     *  ASSIGNABLE\\_USER\n     *  ASSIGN\\_ISSUE\n     *  ATTACHMENT\\_DELETE\\_ALL\n     *  ATTACHMENT\\_DELETE\\_OWN\n     *  BROWSE\n     *  CLOSE\\_ISSUE\n     *  COMMENT\\_DELETE\\_ALL\n     *  COMMENT\\_DELETE\\_OWN\n     *  COMMENT\\_EDIT\\_ALL\n     *  COMMENT\\_EDIT\\_OWN\n     *  COMMENT\\_ISSUE\n     *  CREATE\\_ATTACHMENT\n     *  CREATE\\_ISSUE\n     *  DELETE\\_ISSUE\n     *  EDIT\\_ISSUE\n     *  LINK\\_ISSUE\n     *  MANAGE\\_WATCHER\\_LIST\n     *  MODIFY\\_REPORTER\n     *  MOVE\\_ISSUE\n     *  PROJECT\\_ADMIN\n     *  RESOLVE\\_ISSUE\n     *  SCHEDULE\\_ISSUE\n     *  SET\\_ISSUE\\_SECURITY\n     *  TRANSITION\\_ISSUE\n     *  VIEW\\_VERSION\\_CONTROL\n     *  VIEW\\_VOTERS\\_AND\\_WATCHERS\n     *  VIEW\\_WORKFLOW\\_READONLY\n     *  WORKLOG\\_DELETE\\_ALL\n     *  WORKLOG\\_DELETE\\_OWN\n     *  WORKLOG\\_EDIT\\_ALL\n     *  WORKLOG\\_EDIT\\_OWN\n     *  WORK\\_ISSUE",
        "example": "PERMISSIONS"
      },
      {
        "name": "issueKey",
        "schema": "string",
        "description": "The issue key for the issue."
      },
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The project key for the project (case sensitive)."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `issueKey` or `projectKey` is missing.\n *  `query` or `accountId` is missing.\n *  `query` and `accountId` are provided.\n *  `permissions` is empty or contains an invalid entry."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or project is not found."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/picker",
    "method": "findUsersForPicker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users for picker",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*.",
        "example": "QUERY"
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return. The total number of matched users is returned in `total`.",
        "default": 50
      },
      {
        "name": "showAvatar",
        "schema": "boolean",
        "description": "Include the URI to the user's avatar.",
        "default": false
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "excludeAccountIds",
        "schema": "array",
        "description": "A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`."
      },
      {
        "name": "avatarSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "excludeConnectUsers",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users."
      },
      {
        "statusCode": "400",
        "description": "Returned if `exclude` and `excludeAccountIds` are provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/properties",
    "method": "getPropertyKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User properties",
    "typeScriptTag": "userProperties",
    "description": "Get user property keys",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "userKey",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "400",
        "description": "Returned if `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/properties/{propertyKey}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User properties",
    "typeScriptTag": "userProperties",
    "description": "Delete user property",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "userKey",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the user's property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the user property is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user or the property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/properties/{propertyKey}",
    "method": "getProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User properties",
    "typeScriptTag": "userProperties",
    "description": "Get user property",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "userKey",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the user's property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
      },
      {
        "statusCode": "400",
        "description": "Returned if `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/properties/{propertyKey}",
    "method": "setUserProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User properties",
    "typeScriptTag": "userProperties",
    "description": "Set user property",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.",
        "example": "5b10ac8d82e05b22cc7d4ef5"
      },
      {
        "name": "userKey",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the user's property. The maximum length is 255 characters.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if `accountId` is missing."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission or is not accessing their user record."
      },
      {
        "statusCode": "404",
        "description": "Returned if the user is not found."
      },
      {
        "statusCode": "405",
        "description": "Returned if the property key is not specified."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/search",
    "method": "findUsersByPropertyAndString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified.",
        "example": "query"
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of filtered results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "property",
        "schema": "string",
        "description": "A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `accountId`, `query` or `property` is missing.\n *  `query` and `accountId` are provided.\n *  `property` parameter is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/search/query",
    "method": "findUsersByQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users by query",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query.",
        "example": "QUERY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "408",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/search/query/key",
    "method": "findUsersByQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find user keys by query",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query.",
        "example": "QUERY"
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResult",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "401",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "408",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/user/viewissue/search",
    "method": "findUsersWithBrowsePermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User search",
    "typeScriptTag": "userSearch",
    "description": "Find users with browse permission",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.",
        "example": "query"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "A query string that is matched exactly against user `accountId`. Required, unless `query` is specified."
      },
      {
        "name": "issueKey",
        "schema": "string",
        "description": "The issue key for the issue. Required, unless `projectKey` is specified."
      },
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The project key for the project (case sensitive). Required, unless `issueKey` is specified."
      },
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  `issueKey` or `projectKey` is missing.\n *  `query` or `accountId` is missing.\n *  `query` and `accountId` are provided."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the issue or project is not found."
      },
      {
        "statusCode": "429",
        "description": "Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header."
      }
    ]
  },
  {
    "url": "/rest/api/3/users",
    "method": "listAllUsersDefault",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get all users default",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return.",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user doesn't have the necessary permission."
      },
      {
        "statusCode": "409",
        "description": "Returned if the request takes longer than 10 seconds or is interrupted."
      }
    ]
  },
  {
    "url": "/rest/api/3/users/search",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get all users",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return.",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user doesn't have the necessary permission."
      },
      {
        "statusCode": "409",
        "description": "Returned if the request takes longer than 10 seconds or is interrupted."
      }
    ]
  },
  {
    "url": "/rest/api/3/version",
    "method": "createProjectVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Create version",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "driver",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuesStatusForFixVersion",
        "schema": "object",
        "description": ""
      },
      {
        "name": "moveUnfixedIssuesTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "overdue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "project",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "releaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "released",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userReleaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userStartDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a project version."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the project is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}",
    "method": "deleteProjectVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Delete version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      },
      {
        "name": "moveFixIssuesTo",
        "schema": "string",
        "description": "The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted."
      },
      {
        "name": "moveAffectedIssuesTo",
        "schema": "string",
        "description": "The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the version is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if:\n\n *  the authentication credentials are incorrect.\n *  the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}",
    "method": "getProjectVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `operations` Returns the list of operations available for this version.\n *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing the Atlassian account IDs of approvers for this version."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project version."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version is not found or the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}",
    "method": "updateVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Update version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "driver",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuesStatusForFixVersion",
        "schema": "object",
        "description": ""
      },
      {
        "name": "moveUnfixedIssuesTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "overdue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "project",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "releaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "released",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userReleaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userStartDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project version."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  the request is invalid.\n *  the user does not have the required permissions."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/mergeto/{moveIssuesTo}",
    "method": "mergeVersions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Merge versions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version to delete.",
        "example": "ID"
      },
      {
        "name": "moveIssuesTo",
        "schema": "string",
        "required": true,
        "description": "The ID of the version to merge into.",
        "example": "MOVEISSUESTO"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if:\n\n *  the authentication credentials are incorrect or missing.\n *  the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version to be deleted or the version to merge to are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/move",
    "method": "updateSequenceWithinProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Move version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version to be moved.",
        "example": "ID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a project version."
      },
      {
        "statusCode": "400",
        "description": "Returned if:\n\n *  no body parameters are provided.\n *  `after` and `position` are provided.\n *  `position` is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if:\n\n *  the authentication credentials are incorrect or missing\n *  the user does not have the required commissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version or move after version are not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/relatedIssueCounts",
    "method": "getRelatedIssueCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get version's related issues count",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Various counts of issues within a version."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the version is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/relatedwork",
    "method": "getRelatedWorkItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get related work",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version is not found or the user does not have the necessary permission."
      },
      {
        "statusCode": "500",
        "description": "Returned if reading related work fails"
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/relatedwork",
    "method": "createRelatedWork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Create related work",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "issueId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "relatedWorkId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Associated related work to a version"
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/relatedwork",
    "method": "updateRelatedWork",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Update related work",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version to update the related work on. For the related work id, pass it to the input JSON.",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "issueId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "relatedWorkId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Associated related work to a version"
      },
      {
        "statusCode": "400",
        "description": "Returned if the request data is invalid"
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version or the related work is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/removeAndSwap",
    "method": "deleteAndReplaceVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Delete and replace version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      },
      {
        "name": "customFieldReplacementList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "moveAffectedIssuesTo",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "moveFixIssuesTo",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the version to delete is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{id}/unresolvedIssueCount",
    "method": "getUnresolvedIssueCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Get version's unresolved issues count",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the version.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Count of a version's unresolved issues."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the version is not found.\n *  the user does not have the required permissions."
      }
    ]
  },
  {
    "url": "/rest/api/3/version/{versionId}/relatedwork/{relatedWorkId}",
    "method": "deleteRelatedWork",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project versions",
    "typeScriptTag": "projectVersions",
    "description": "Delete related work",
    "parameters": [
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the version that the target related work belongs to.",
        "example": "VERSIONID"
      },
      {
        "name": "relatedWorkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the related work to delete.",
        "example": "RELATEDWORKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the related work is deleted."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if\n\nthe authentication credentials are incorrect."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the required permissions."
      },
      {
        "statusCode": "404",
        "description": "Returned if the version/related work is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/webhook",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete webhooks by ID",
    "parameters": [
      {
        "name": "webhookIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/webhook",
    "method": "listDynamicWebhooksForApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get dynamic webhooks for app",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/webhook",
    "method": "registerDynamicWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Register dynamic webhooks",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "webhooks",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Container for a list of registered webhooks. Webhook details are returned in the same order as the request."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/webhook/failed",
    "method": "listFailedWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get failed webhooks",
    "parameters": [
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page."
      },
      {
        "name": "after",
        "schema": "integer",
        "description": "The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of failed webhooks."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/webhook/refresh",
    "method": "extendWebhookLife",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Extend webhook life",
    "parameters": [
      {
        "name": "webhookIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The date the refreshed webhooks expire."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get all workflows",
    "parameters": [
      {
        "name": "workflowName",
        "schema": "string",
        "description": "The name of the workflow to be returned. Only one workflow can be specified."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow",
    "method": "createWorkflowTransitionRuleConfigurations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Create workflow",
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
        "name": "statuses",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "transitions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The classic workflow identifiers."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/workflow/rule/config",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow transition rules",
    "typeScriptTag": "workflowTransitionRules",
    "description": "Get workflow transition rule configurations",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 10
      },
      {
        "name": "types",
        "schema": "array",
        "required": true,
        "description": "The types of the transition rules to return."
      },
      {
        "name": "keys",
        "schema": "array",
        "description": "The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return."
      },
      {
        "name": "workflowNames",
        "schema": "array",
        "description": "The list of workflow names to filter by."
      },
      {
        "name": "withTags",
        "schema": "array",
        "description": "The list of `tags` to filter by."
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": "Whether draft or published workflows are returned. If not provided, both workflow types are returned."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "404",
        "description": "Returned if any transition rule type is not supported."
      },
      {
        "statusCode": "503",
        "description": "Returned if we encounter a problem while trying to access the required data."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/rule/config",
    "method": "updateTransitionRuleConfigurations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow transition rules",
    "typeScriptTag": "workflowTransitionRules",
    "description": "Update workflow transition rule configurations",
    "parameters": [
      {
        "name": "workflows",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of any errors encountered while updating workflow transition rules."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "503",
        "description": "Returned if we encounter a problem while trying to access the required data."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/rule/config/delete",
    "method": "deleteTransitionConfigurations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow transition rules",
    "typeScriptTag": "workflowTransitionRules",
    "description": "Delete workflow transition rule configurations",
    "parameters": [
      {
        "name": "workflows",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of any errors encountered while updating workflow transition rules."
      },
      {
        "statusCode": "400",
        "description": "Error messages from an operation."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/search",
    "method": "getPaginatedWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows paginated",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      },
      {
        "name": "workflowName",
        "schema": "array",
        "description": "The name of a workflow to return. To include multiple workflows, provide an ampersand-separated list. For example, `workflowName=name1&workflowName=name2`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `transitions` For each workflow, returns information about the transitions inside the workflow.\n *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.\n *  `transitions.properties` For each workflow transition, returns information about its properties. Transitions are included automatically if this expand is requested.\n *  `statuses` For each workflow, returns information about the statuses inside the workflow.\n *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.\n *  `default` For each workflow, returns information about whether this is the default workflow.\n *  `schemes` For each workflow, returns information about the workflow schemes the workflow is assigned to.\n *  `projects` For each workflow, returns information about the projects the workflow is assigned to, through workflow schemes.\n *  `hasDraftWorkflow` For each workflow, returns information about whether the workflow has a draft version.\n *  `operations` For each workflow, returns information about the actions that can be undertaken on the workflow."
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "String used to perform a case-insensitive partial match with workflow name."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "[Order](https://dac-static.atlassian.com) the results by a field:\n\n *  `name` Sorts by workflow name.\n *  `created` Sorts by create time.\n *  `updated` Sorts by update time."
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "Filters active and inactive workflows."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Error messages from an operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/transitions/{transitionId}/properties",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow transition properties",
    "typeScriptTag": "workflowTransitionProperties",
    "description": "Delete workflow transition property",
    "parameters": [
      {
        "name": "transitionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.",
        "example": 0
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The name of the transition property to delete, also known as the name of the property.",
        "example": "KEY"
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow that the transition belongs to.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "workflowMode",
        "schema": "string",
        "description": "The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 response"
      },
      {
        "statusCode": "304",
        "description": "Returned if no changes were made by the request. For example, trying to delete a property that cannot be found."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow transition is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/transitions/{transitionId}/properties",
    "method": "getPropertyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow transition properties",
    "typeScriptTag": "workflowTransitionProperties",
    "description": "Get workflow transition properties",
    "parameters": [
      {
        "name": "transitionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.",
        "example": 0
      },
      {
        "name": "includeReservedKeys",
        "schema": "boolean",
        "description": "Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.",
        "default": false
      },
      {
        "name": "key",
        "schema": "string",
        "description": "The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow that the transition belongs to.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "workflowMode",
        "schema": "string",
        "description": "The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.",
        "default": "live"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the server Jira is running on."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have admin permission"
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow transition or property is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/transitions/{transitionId}/properties",
    "method": "createTransitionProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow transition properties",
    "typeScriptTag": "workflowTransitionProperties",
    "description": "Create workflow transition property",
    "parameters": [
      {
        "name": "transitionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.",
        "example": 0
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.",
        "example": "KEY"
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow that the transition belongs to.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "workflowMode",
        "schema": "string",
        "description": "The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.",
        "default": "live"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
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
        "description": "Details about the server Jira is running on."
      },
      {
        "statusCode": "400",
        "description": "Returned if a workflow property with the same key is present on the transition."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow transition is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/transitions/{transitionId}/properties",
    "method": "updateProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow transition properties",
    "typeScriptTag": "workflowTransitionProperties",
    "description": "Update workflow transition property",
    "parameters": [
      {
        "name": "transitionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.",
        "example": 0
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.",
        "example": "KEY"
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow that the transition belongs to.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "workflowMode",
        "schema": "string",
        "description": "The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
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
        "description": "Details about the server Jira is running on."
      },
      {
        "statusCode": "304",
        "description": "Returned if no changes were made by the request. For example, attempting to update a property with its current value."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow transition is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflow/{entityId}",
    "method": "deleteInactiveWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Delete inactive workflow",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The entity ID of the workflow.",
        "example": "ENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the workflow is deleted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/workflows",
    "method": "bulkGetWorkflows",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Bulk get workflows",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow is associated with.\n *  `statuses.usages` Returns the project and issue types that each status is associated with."
      },
      {
        "name": "projectAndIssueTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workflowIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workflowNames",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of workflows and related statuses."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflows/capabilities",
    "method": "getWorkflowCapabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get available workflow capabilities",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issueTypeId",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflows/create",
    "method": "bulkCreateWorkflows",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Bulk create workflows",
    "parameters": [
      {
        "name": "scope",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of the created workflows and statuses."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflows/create/validation",
    "method": "validatePayloadBulkCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Validate create workflows",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "validationOptions",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflows/update",
    "method": "bulkUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Bulk update workflows",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow is associated with.\n *  `statuses.usages` Returns the project and issue types that each status is associated with."
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "workflows",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflows/update/validation",
    "method": "validateUpdateWorkflows",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Validate update workflows",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "validationOptions",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get all workflow schemes",
    "parameters": [
      {
        "name": "startAt",
        "schema": "integer",
        "description": "The index of the first item to return in a page of results (page offset).",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "The maximum number of items to return per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of items."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme",
    "method": "createScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Create workflow scheme",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "issueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalDefaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalIssueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/project",
    "method": "listProjectAssociations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow scheme project associations",
    "typeScriptTag": "workflowSchemeProjectAssociations",
    "description": "Get workflow scheme project associations",
    "parameters": [
      {
        "name": "projectId",
        "schema": "array",
        "required": true,
        "description": "The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A container for a list of workflow schemes together with the projects they are associated with."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/project",
    "method": "assignToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow scheme project associations",
    "typeScriptTag": "workflowSchemeProjectAssociations",
    "description": "Assign workflow scheme to project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "workflowSchemeId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/api/3/workflowscheme/read",
    "method": "bulkGetWorkflowSchemes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Bulk get workflow schemes",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow in the workflow scheme is associated with."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workflowSchemeIds",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/update",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Update workflow scheme",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "version",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "defaultWorkflowId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "statusMappingsByIssueTypeOverride",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "statusMappingsByWorkflows",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowsForIssueTypes",
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
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/update/mappings",
    "method": "getRequiredStatusMappings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get required status mappings for workflow scheme update",
    "parameters": [
      {
        "name": "defaultWorkflowId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "workflowsForIssueTypes",
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
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}",
    "method": "deleteScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Delete workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the scheme is active."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}",
    "method": "getSchemeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.",
        "example": 0
      },
      {
        "name": "returnDraftIfExists",
        "schema": "boolean",
        "description": "Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}",
    "method": "updateScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Classic update workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "issueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalDefaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalIssueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/createdraft",
    "method": "createDraftWorkflowScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Create draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the active workflow scheme that the draft is created from.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/default",
    "method": "resetDefaultWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Delete default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": "Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the workflow scheme cannot be edited and `updateDraftIfNeeded` is not `true`."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/default",
    "method": "getDefaultWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "returnDraftIfExists",
        "schema": "boolean",
        "description": "Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the default workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/default",
    "method": "updateDefaultWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Update default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the workflow scheme cannot be edited and `updateDraftIfNeeded` is not `true`."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft",
    "method": "deleteSchemeDraft",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Delete draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the active workflow scheme that the draft was created from.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission.."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the original active workflow scheme is not found.\n *  the original active workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft",
    "method": "getDraftWorkflowScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Get draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the active workflow scheme that the draft was created from.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the original active workflow scheme is not found.\n *  the original active workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft",
    "method": "updateDraftWorkflowScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Update draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the active workflow scheme that the draft was created from.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "issueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalDefaultWorkflow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "originalIssueTypeMappings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "self",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if:\n\n *  the original active workflow scheme is not found.\n *  the original active workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/default",
    "method": "resetDefaultWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Delete draft default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/default",
    "method": "getDefaultWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Get draft default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the default workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission.."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/default",
    "method": "updateDefaultWorkflowScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Update draft default workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow scheme does not have a draft."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}",
    "method": "deleteIssueTypeWorkflowMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Delete workflow for issue type in draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}",
    "method": "getIssueTypeWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Get workflow for issue type in draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the mapping between an issue type and a workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}",
    "method": "setIssueTypeWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Set workflow for issue type in draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      },
      {
        "name": "issueType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/publish",
    "method": "publishDraftWorkflowScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Publish draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "validateOnly",
        "schema": "boolean",
        "description": "Whether the request only performs a validation.",
        "default": false
      },
      {
        "name": "statusMappings",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is only for validation and is successful."
      },
      {
        "statusCode": "303",
        "description": "Details about a task."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/workflow",
    "method": "deleteIssueTypesForWorkflowInScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Delete issue types for workflow in draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow.",
        "example": "WORKFLOWNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow scheme does not have a draft.\n *  The workflow is not found.\n *  The workflow is not specified."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/workflow",
    "method": "getIssueTypeMappingsForWorkflowInSchemeDraft",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Get issue types for workflows in draft workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "description": "The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the mapping between issue types and a workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if either the workflow scheme or workflow (if specified) is not found. session."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/draft/workflow",
    "method": "setIssueTypesForWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow scheme drafts",
    "typeScriptTag": "workflowSchemeDrafts",
    "description": "Set issue types for workflow in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme that the draft belongs to.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "defaultMapping",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow scheme does not have a draft.\n *  The workflow is not found.\n *  The workflow is not specified."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/issuetype/{issueType}",
    "method": "deleteIssueTypeWorkflowMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Delete workflow for issue type in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": "Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the workflow cannot be edited and `updateDraftIfNeeded` is false."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/issuetype/{issueType}",
    "method": "getIssueTypeWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get workflow for issue type in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      },
      {
        "name": "returnDraftIfExists",
        "schema": "boolean",
        "description": "Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the mapping between an issue type and a workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/issuetype/{issueType}",
    "method": "setIssueTypeWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Set workflow for issue type in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "issueType",
        "schema": "string",
        "required": true,
        "description": "The ID of the issue type.",
        "example": "ISSUETYPE"
      },
      {
        "name": "issueType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the workflow cannot be edited and `updateDraftIfNeeded` is false."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if the workflow scheme or issue type is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/workflow",
    "method": "deleteIssueTypesForWorkflowInScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Delete issue types for workflow in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": "Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the workflow cannot be edited and `updateDraftIfNeeded` is not true."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow is not found.\n *  The workflow is not specified."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/workflow",
    "method": "getIssueTypesForWorkflowsInScheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Get issue types for workflows in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "description": "The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow."
      },
      {
        "name": "returnDraftIfExists",
        "schema": "boolean",
        "description": "Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the mapping between issue types and a workflow."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if either the workflow scheme or workflow is not found."
      }
    ]
  },
  {
    "url": "/rest/api/3/workflowscheme/{id}/workflow",
    "method": "setIssueTypesForWorkflowInScheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow schemes",
    "typeScriptTag": "workflowSchemes",
    "description": "Set issue types for workflow in workflow scheme",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the workflow scheme.",
        "example": 0
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow.",
        "example": "WORKFLOWNAME"
      },
      {
        "name": "defaultMapping",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issueTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updateDraftIfNeeded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about a workflow scheme."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": "Returned if the user does not have the necessary permission."
      },
      {
        "statusCode": "404",
        "description": "Returned if any of the following is true:\n\n *  The workflow scheme is not found.\n *  The workflow is not found.\n *  The workflow is not specified."
      }
    ]
  },
  {
    "url": "/rest/api/3/worklog/deleted",
    "method": "listDeletedWorklogIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Get IDs of deleted worklogs",
    "parameters": [
      {
        "name": "since",
        "schema": "integer",
        "description": "The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of changed worklogs."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/worklog/list",
    "method": "getWorklogDetailsForList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Get worklogs",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.",
        "default": ""
      },
      {
        "name": "ids",
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
        "description": "Returned if the request contains more than 1000 worklog IDs or is empty."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/api/3/worklog/updated",
    "method": "getUpdatedWorklogIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue worklogs",
    "typeScriptTag": "issueWorklogs",
    "description": "Get IDs of updated worklogs",
    "parameters": [
      {
        "name": "since",
        "schema": "integer",
        "description": "The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.",
        "default": 0
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Use [expand](https://dac-static.atlassian.com) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of changed worklogs."
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/addons/{addonKey}/properties",
    "method": "getAllProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Get app properties",
    "parameters": [
      {
        "name": "addonKey",
        "schema": "string",
        "required": true,
        "description": "The key of the app, as defined in its descriptor.",
        "example": "ADDONKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of property keys."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Delete app property",
    "parameters": [
      {
        "name": "addonKey",
        "schema": "string",
        "required": true,
        "description": "The key of the app, as defined in its descriptor.",
        "example": "ADDONKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
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
    "url": "/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}",
    "method": "getByKeyAndValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Get app property",
    "parameters": [
      {
        "name": "addonKey",
        "schema": "string",
        "required": true,
        "description": "The key of the app, as defined in its descriptor.",
        "example": "ADDONKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/)."
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
    "url": "/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}",
    "method": "setAppProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Set app property",
    "parameters": [
      {
        "name": "addonKey",
        "schema": "string",
        "required": true,
        "description": "The key of the app, as defined in its descriptor.",
        "example": "ADDONKEY"
      },
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
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
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/app/module/dynamic",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dynamic modules",
    "typeScriptTag": "dynamicModules",
    "description": "Remove modules",
    "parameters": [
      {
        "name": "moduleKey",
        "schema": "array",
        "required": false,
        "description": "The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.\nFor example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.\nNonexistent keys are ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/app/module/dynamic",
    "method": "getAllRegisteredModules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic modules",
    "typeScriptTag": "dynamicModules",
    "description": "Get modules",
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
    "url": "/rest/atlassian-connect/1/app/module/dynamic",
    "method": "registerModules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dynamic modules",
    "typeScriptTag": "dynamicModules",
    "description": "Register modules",
    "parameters": [
      {
        "name": "modules",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
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
    "url": "/rest/atlassian-connect/1/migration/field",
    "method": "updateCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App migration",
    "typeScriptTag": "appMigration",
    "description": "Bulk update custom field value",
    "parameters": [
      {
        "name": "atlassianTransferId",
        "schema": "string",
        "required": true,
        "description": "The ID of the transfer.",
        "example": "ATLASSIAN-TRANSFER-ID"
      },
      {
        "name": "updateValueList",
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
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "403",
        "description": "Returned if:\n* the transfer ID is not found.\n* the authorisation credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/migration/properties/{entityType}",
    "method": "bulkUpdateEntityProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App migration",
    "typeScriptTag": "appMigration",
    "description": "Bulk update entity properties",
    "parameters": [
      {
        "name": "atlassianTransferId",
        "schema": "string",
        "required": true,
        "description": "The app migration transfer ID.",
        "example": "ATLASSIAN-TRANSFER-ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "The type indicating the object that contains the entity properties.",
        "example": "ENTITYTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the authorisation credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/migration/workflow/rule/search",
    "method": "workflowTransitionRuleConfigurations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "App migration",
    "typeScriptTag": "appMigration",
    "description": "Get workflow transition rule configurations",
    "parameters": [
      {
        "name": "atlassianTransferId",
        "schema": "string",
        "required": true,
        "description": "The app migration transfer ID.",
        "example": "ATLASSIAN-TRANSFER-ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "transition"
      },
      {
        "name": "ruleIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "workflowEntityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a498d711-685d-428d-8c3e-bc03bb450ea7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details of workflow transition rules."
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is not valid."
      },
      {
        "statusCode": "403",
        "description": "Returned if the authorisation credentials are incorrect or missing."
      }
    ]
  },
  {
    "url": "/rest/atlassian-connect/1/service-registry",
    "method": "getAttributesOfServiceRegistries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Registry",
    "typeScriptTag": "serviceRegistry",
    "description": "Retrieve the attributes of service registries",
    "parameters": [
      {
        "name": "serviceIds",
        "schema": "array",
        "required": true,
        "description": "The ID of the services (the strings starting with \"b:\" need to be decoded in Base64).",
        "example": "[\"ari:cloud:graph::service/ca075ed7-6ea7-4563-acb3-000000000000/f51d7252-61e0-11ee-b94d-000000000000\", \"ari:cloud:graph::service/ca075ed7-6ea7-4563-acb3-000000000000/f51d7252-61e0-11ee-b94d-000000000001\"]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Returned if the request is invalid."
      },
      {
        "statusCode": "401",
        "description": "The request needs to be authenticated."
      },
      {
        "statusCode": "403",
        "description": "The request isn't authorized."
      },
      {
        "statusCode": "500",
        "description": "The endpoint failed internally."
      },
      {
        "statusCode": "501",
        "description": "The endpoint isn't ready for receiving requests."
      },
      {
        "statusCode": "504",
        "description": "The upstream service is busy."
      }
    ]
  },
  {
    "url": "/rest/forge/1/app/properties/{propertyKey}",
    "method": "deleteForgeProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Delete app property (Forge)",
    "parameters": [
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned if the request is successful."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Returned if the authentication credentials are incorrect or missing."
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
    "url": "/rest/forge/1/app/properties/{propertyKey}",
    "method": "setForgeProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App properties",
    "typeScriptTag": "appProperties",
    "description": "Set app property (Forge)",
    "parameters": [
      {
        "name": "propertyKey",
        "schema": "string",
        "required": true,
        "description": "The key of the property.",
        "example": "PROPERTYKEY"
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
        "description": "Returned if the authentication credentials are incorrect or missing."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="The Jira Cloud platform REST API"
      apiBaseUrl="https://your-domain.atlassian.net"
      apiVersion="1001.0.0-SNAPSHOT-9aad01a33a3dae75a5b6aedf98c77d2cbd2f865d"
      endpoints={352}
      sdkMethods={532}
      schemas={1033}
      parameters={1705}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/atlassian/jira/openapi.yaml"
      developerDocumentation="developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about"
    />
  );
}
  