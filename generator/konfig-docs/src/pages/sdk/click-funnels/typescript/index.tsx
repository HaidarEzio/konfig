import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ClickFunnelsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="click-funnels-typescript-sdk"
      metaDescription={`With ClickFunnels, you are just a few simple clicks away from a beautifully-designed website marketing funnel. Because we believe that's how it should be!`}
      company="ClickFunnels"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/logo.png"
      companyKebabCase="click-funnels"
      clientNameCamelCase="clickFunnels"
      homepage="www.clickfunnels.com/"
      lastUpdated={new Date("2024-03-25T21:37:17.124Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/favicon.png"
      contactUrl="https://developers.myclickfunnels.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["marketing","workspace"]}
      methods={[
  {
    "url": "/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "List Teams",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/teams/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Fetch Team",
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
        "statusCode": "200",
        "description": "Teams"
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
    "url": "/teams/{id}",
    "method": "updateTeamById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Update Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Team",
          "time_zone": "Pacific Time (US & Canada)",
          "locale": "en"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Teams"
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
    "url": "/users",
    "method": "listCurrentAccountUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List Users",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/users/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Fetch User",
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
        "statusCode": "200",
        "description": "Profile"
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
    "url": "/users/{id}",
    "method": "updateSingleUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "user",
        "schema": "object",
        "description": "",
        "example": {
          "email": "huong@stroman-kuhlman.co",
          "first_name": "Louis",
          "last_name": "Von",
          "time_zone": "Pacific Time (US & Canada)",
          "locale": "en"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Profile"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{team_id}/workspaces",
    "method": "listWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "List Workspaces",
    "parameters": [
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/teams/{team_id}/workspaces",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Create Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "workspace",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Workspace",
          "subdomain": "example"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Workspaces"
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
    "url": "/workspaces/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Fetch Workspace",
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
        "statusCode": "200",
        "description": "Workspaces"
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
    "url": "/workspaces/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Update Workspace",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "workspace",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Workspace",
          "subdomain": "example"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workspaces"
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
    "url": "/workspaces/{workspace_id}/contacts",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "List Contacts",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": "Filtering\n\n- Keep in mind that depending on the tools that you use, you might run into different situations where additional encoding is needed. For example:\n    - You might need to encode `filter[id]=1` as `filter%5Bid%5D=1` or use special options in your tools of choice to do it for you (like `g` in CURL).\n    -  Special URL characters like `%`, `+`, or unicode characters in emails (like Chinese characters) will need additional encoding.\n "
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
    "url": "/workspaces/{workspace_id}/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create Contact",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contact",
        "schema": "object",
        "description": "",
        "example": {
          "email_address": "test-1d4db4ce8f9f3c561a5e@example.com",
          "first_name": "Solomon",
          "last_name": "Little",
          "phone_number": "(652) 729-2659",
          "time_zone": "Pacific Time (US & Canada)",
          "fb_url": "https://www.facebook.com/example",
          "twitter_url": "https://twitter.com/example",
          "linkedin_url": "https://www.linkedin.com/in/example",
          "website_url": "https://example.com"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contacts"
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
    "url": "/contacts/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove Contact",
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
        "description": "No Content"
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
    "url": "/contacts/{id}",
    "method": "getContactById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Fetch Contact",
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
        "statusCode": "200",
        "description": "Contacts"
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
    "url": "/contacts/{id}",
    "method": "updateContactById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Update Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "contact",
        "schema": "object",
        "description": "",
        "example": {
          "email_address": "test-1d4db4ce8f9f3c561a5e@example.com",
          "first_name": "Solomon",
          "last_name": "Little",
          "phone_number": "(652) 729-2659",
          "time_zone": "Pacific Time (US & Canada)",
          "fb_url": "https://www.facebook.com/example",
          "twitter_url": "https://twitter.com/example",
          "linkedin_url": "https://www.linkedin.com/in/example",
          "website_url": "https://example.com"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contacts"
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
    "url": "/contacts/{id}/gdpr_destroy",
    "method": "redactPersonallyIdentifiable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Redact personally identifiable information of a Contact",
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
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_id}/contacts/upsert",
    "method": "upsert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Upsert a Contact",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_ID"
      },
      {
        "name": "contact",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/applied_tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts::AppliedTag",
    "typeScriptTag": "contacts::appliedTag",
    "description": "List Applied Tags",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/contacts/{contact_id}/applied_tags",
    "method": "createAppliedTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts::AppliedTag",
    "typeScriptTag": "contacts::appliedTag",
    "description": "Create Applied Tag",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contacts_applied_tag",
        "schema": "object",
        "description": "",
        "example": {
          "tag_id": 3
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contacts Applied Tags"
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
    "url": "/contacts/applied_tags/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts::AppliedTag",
    "typeScriptTag": "contacts::appliedTag",
    "description": "Remove Applied Tag",
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
        "description": "No Content"
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
    "url": "/contacts/applied_tags/{id}",
    "method": "getForContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts::AppliedTag",
    "typeScriptTag": "contacts::appliedTag",
    "description": "Fetch Applied Tag",
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
        "statusCode": "200",
        "description": "Contacts Applied Tags"
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
    "url": "/workspaces/{workspace_id}/contacts/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts::Tag",
    "typeScriptTag": "contacts::tag",
    "description": "List Tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/contacts/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts::Tag",
    "typeScriptTag": "contacts::tag",
    "description": "Create Tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contacts_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "#044662"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contact Tags"
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
    "url": "/contacts/tags/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts::Tag",
    "typeScriptTag": "contacts::tag",
    "description": "Remove Tag",
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
        "description": "No Content"
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
    "url": "/contacts/tags/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts::Tag",
    "typeScriptTag": "contacts::tag",
    "description": "Fetch Tag",
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
        "statusCode": "200",
        "description": "Contact Tags"
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
    "url": "/contacts/tags/{id}",
    "method": "updateSpecificTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts::Tag",
    "typeScriptTag": "contacts::tag",
    "description": "Update Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "contacts_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "#044662"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact Tags"
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
    "url": "/workspaces/{workspace_id}/courses",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Course",
    "typeScriptTag": "course",
    "description": "List Courses",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/courses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Course",
    "typeScriptTag": "course",
    "description": "Fetch Course",
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
        "statusCode": "200",
        "description": "Courses"
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
    "url": "/courses/{course_id}/enrollments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Enrollment",
    "typeScriptTag": "courses::enrollment",
    "description": "List Enrollments",
    "parameters": [
      {
        "name": "courseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/courses/{course_id}/enrollments",
    "method": "createNewEnrollment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Courses::Enrollment",
    "typeScriptTag": "courses::enrollment",
    "description": "Create Enrollment",
    "parameters": [
      {
        "name": "courseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "courses_enrollment",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 3,
          "suspension_reason": "Call in to reapply after robot incident"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Enrollments"
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
    "url": "/courses/enrollments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Enrollment",
    "typeScriptTag": "courses::enrollment",
    "description": "Fetch Enrollment",
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
        "statusCode": "200",
        "description": "Enrollments"
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
    "url": "/courses/enrollments/{id}",
    "method": "updateSpecificEnrollment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Courses::Enrollment",
    "typeScriptTag": "courses::enrollment",
    "description": "Update Enrollment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "courses_enrollment",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 3,
          "suspension_reason": "Call in to reapply after robot incident"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Enrollments"
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
    "url": "/courses/{course_id}/sections",
    "method": "listSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Section",
    "typeScriptTag": "courses::section",
    "description": "List Sections",
    "parameters": [
      {
        "name": "courseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/courses/sections/{id}",
    "method": "getSection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Section",
    "typeScriptTag": "courses::section",
    "description": "Fetch Section",
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
        "statusCode": "200",
        "description": "Modules"
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
    "url": "/courses/sections/{id}",
    "method": "updateSectionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Courses::Section",
    "typeScriptTag": "courses::section",
    "description": "Update Section",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "courses_section",
        "schema": "object",
        "description": "",
        "example": {
          "title": "Module 1",
          "is_hidden_from_non_members": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Modules"
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
    "url": "/courses/sections/{section_id}/lessons",
    "method": "listLessons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Lesson",
    "typeScriptTag": "courses::lesson",
    "description": "List Lessons",
    "parameters": [
      {
        "name": "sectionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/courses/lessons/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses::Lesson",
    "typeScriptTag": "courses::lesson",
    "description": "Fetch Lesson",
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
        "statusCode": "200",
        "description": "Lessons"
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
    "url": "/courses/lessons/{id}",
    "method": "updateLessonById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Courses::Lesson",
    "typeScriptTag": "courses::lesson",
    "description": "Update Lesson",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "courses_lesson",
        "schema": "object",
        "description": "",
        "example": {
          "title": "Lesson 1"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lessons"
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
    "url": "/workspaces/{workspace_id}/forms",
    "method": "listWorkspaceForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "List Forms",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/forms",
    "method": "createNewForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Create Form",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "form",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Form"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Forms"
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
    "url": "/forms/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Remove Form",
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
        "description": "No Content"
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
    "url": "/forms/{id}",
    "method": "getForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Fetch Form",
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
        "statusCode": "200",
        "description": "Forms"
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
    "url": "/forms/{id}",
    "method": "updateFormById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Update Form",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "form",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Form"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Forms"
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
    "url": "/forms/{form_id}/field_sets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::FieldSet",
    "typeScriptTag": "forms::fieldSet",
    "description": "List Field Sets",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/forms/{form_id}/field_sets",
    "method": "createNewFieldSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms::FieldSet",
    "typeScriptTag": "forms::fieldSet",
    "description": "Create Field Set",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "forms_field_set",
        "schema": "object",
        "description": "",
        "example": {
          "title": "Example Field Set"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Field sets"
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
    "url": "/forms/field_sets/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms::FieldSet",
    "typeScriptTag": "forms::fieldSet",
    "description": "Remove Field Set",
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
        "description": "No Content"
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
    "url": "/forms/field_sets/{id}",
    "method": "getFieldSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::FieldSet",
    "typeScriptTag": "forms::fieldSet",
    "description": "Fetch Field Set",
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
        "statusCode": "200",
        "description": "Field sets"
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
    "url": "/forms/field_sets/{id}",
    "method": "updateFieldSetById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms::FieldSet",
    "typeScriptTag": "forms::fieldSet",
    "description": "Update Field Set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forms_field_set",
        "schema": "object",
        "description": "",
        "example": {
          "title": "Example Field Set"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Field sets"
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
    "url": "/forms/field_sets/{field_set_id}/fields",
    "method": "listFieldsForFieldSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Field",
    "typeScriptTag": "forms::field",
    "description": "List Fields",
    "parameters": [
      {
        "name": "fieldSetId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/forms/field_sets/{field_set_id}/fields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms::Field",
    "typeScriptTag": "forms::field",
    "description": "Create Field",
    "parameters": [
      {
        "name": "fieldSetId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "forms_field",
        "schema": "object",
        "description": "",
        "example": {
          "label": "MyString",
          "field_type": "MyString"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Fields"
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
    "url": "/forms/fields/{id}",
    "method": "removeField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms::Field",
    "typeScriptTag": "forms::field",
    "description": "Remove Field",
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
        "description": "No Content"
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
    "url": "/forms/fields/{id}",
    "method": "getField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Field",
    "typeScriptTag": "forms::field",
    "description": "Fetch Field",
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
        "statusCode": "200",
        "description": "Fields"
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
    "url": "/forms/fields/{id}",
    "method": "updateFieldById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms::Field",
    "typeScriptTag": "forms::field",
    "description": "Update Field",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forms_field",
        "schema": "object",
        "description": "",
        "example": {
          "label": "MyString",
          "field_type": "MyString"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Fields"
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
    "url": "/forms/fields/{field_id}/options",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Fields::Option",
    "typeScriptTag": "forms::fields::option",
    "description": "List Options",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/forms/fields/{field_id}/options",
    "method": "createNewFieldOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms::Fields::Option",
    "typeScriptTag": "forms::fields::option",
    "description": "Create Option",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "forms_fields_option",
        "schema": "object",
        "description": "",
        "example": {
          "label": "accusamus"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Options"
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
    "url": "/forms/fields/options/{id}",
    "method": "deleteOptionForField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms::Fields::Option",
    "typeScriptTag": "forms::fields::option",
    "description": "Remove Option",
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
        "description": "No Content"
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
    "url": "/forms/fields/options/{id}",
    "method": "getFieldOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Fields::Option",
    "typeScriptTag": "forms::fields::option",
    "description": "Fetch Option",
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
        "statusCode": "200",
        "description": "Options"
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
    "url": "/forms/fields/options/{id}",
    "method": "updateFieldOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms::Fields::Option",
    "typeScriptTag": "forms::fields::option",
    "description": "Update Option",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forms_fields_option",
        "schema": "object",
        "description": "",
        "example": {
          "label": "accusamus"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Options"
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
    "url": "/forms/{form_id}/submissions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Submission",
    "typeScriptTag": "forms::submission",
    "description": "List Submissions",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/forms/{form_id}/submissions",
    "method": "createNewSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms::Submission",
    "typeScriptTag": "forms::submission",
    "description": "Create Submission",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "forms_submission",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 4
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Submissions"
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
    "url": "/forms/submissions/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms::Submission",
    "typeScriptTag": "forms::submission",
    "description": "Remove Submission",
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
        "description": "No Content"
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
    "url": "/forms/submissions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Submission",
    "typeScriptTag": "forms::submission",
    "description": "Fetch Submission",
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
        "statusCode": "200",
        "description": "Submissions"
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
    "url": "/forms/submissions/{id}",
    "method": "updateSubmission",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms::Submission",
    "typeScriptTag": "forms::submission",
    "description": "Update Submission",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forms_submission",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 4
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Submissions"
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
    "url": "/forms/submissions/{submission_id}/answers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Submissions::Answer",
    "typeScriptTag": "forms::submissions::answer",
    "description": "List Answers",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/forms/submissions/{submission_id}/answers",
    "method": "addNewAnswer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms::Submissions::Answer",
    "typeScriptTag": "forms::submissions::answer",
    "description": "Create Answer",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "forms_submissions_answer",
        "schema": "object",
        "description": "",
        "example": {
          "field_id": 3,
          "fields_option_id": 8,
          "entry": "MyText"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Answers"
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
    "url": "/forms/submissions/answers/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms::Submissions::Answer",
    "typeScriptTag": "forms::submissions::answer",
    "description": "Remove Answer",
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
        "description": "No Content"
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
    "url": "/forms/submissions/answers/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms::Submissions::Answer",
    "typeScriptTag": "forms::submissions::answer",
    "description": "Fetch Answer",
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
        "statusCode": "200",
        "description": "Answers"
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
    "url": "/forms/submissions/answers/{id}",
    "method": "updateAnswer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms::Submissions::Answer",
    "typeScriptTag": "forms::submissions::answer",
    "description": "Update Answer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forms_submissions_answer",
        "schema": "object",
        "description": "",
        "example": {
          "field_id": 3,
          "fields_option_id": 8,
          "entry": "MyText"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Answers"
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
    "url": "/workspaces/{workspace_id}/fulfillments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "List Fulfillments",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/fulfillments",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Create Fulfillment",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "fulfillment",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 6,
          "tracking_url": "https://usps.com/track/1234567890",
          "shipping_provider": "USPS",
          "tracking_code": "1234567890",
          "location_id": 1
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Fulfillments"
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
    "url": "/fulfillments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Fetch Fulfillment",
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
        "statusCode": "200",
        "description": "Fulfillments"
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
    "url": "/fulfillments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Update Fulfillment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "fulfillment",
        "schema": "object",
        "description": "",
        "example": {
          "contact_id": 6,
          "tracking_url": "https://usps.com/track/1234567890",
          "shipping_provider": "USPS",
          "tracking_code": "1234567890",
          "location_id": 1
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Fulfillments"
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
    "url": "/fulfillments/{id}/cancel",
    "method": "cancelFulfillment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Cancel a Fulfillment",
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
        "statusCode": "200",
        "description": "Fulfillments"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict - occurs if product is already cancelled."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_id}/fulfillments/locations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillments::Location",
    "typeScriptTag": "fulfillments::location",
    "description": "List Locations",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/fulfillments/locations",
    "method": "createNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillments::Location",
    "typeScriptTag": "fulfillments::location",
    "description": "Create Location",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "fulfillments_location",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Location",
          "address_name": "Example Address",
          "email_address": "myemail1710866918@example.com",
          "phone_number": "(123)-555-4567"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Locations"
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
    "url": "/fulfillments/locations/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Fulfillments::Location",
    "typeScriptTag": "fulfillments::location",
    "description": "Remove Location",
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
        "description": "No Content"
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
    "url": "/fulfillments/locations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillments::Location",
    "typeScriptTag": "fulfillments::location",
    "description": "Fetch Location",
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
        "statusCode": "200",
        "description": "Locations"
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
    "url": "/fulfillments/locations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Fulfillments::Location",
    "typeScriptTag": "fulfillments::location",
    "description": "Update Location",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "fulfillments_location",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Location",
          "address_name": "Example Address",
          "email_address": "myemail1710866918@example.com",
          "phone_number": "(123)-555-4567"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Locations"
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
    "url": "/workspaces/{workspace_id}/images",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "List Images",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/images",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Create Image",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "image",
        "schema": "object",
        "description": "",
        "example": {
          "alt_text": "Alt text of the image",
          "name": "Amazing Shot",
          "upload_source_url": "https://image-hosting-x.com/cdn/123"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Images"
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
    "url": "/images/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Remove Image",
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
        "description": "No Content"
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
    "url": "/images/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Fetch Image",
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
        "statusCode": "200",
        "description": "Images"
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
    "url": "/images/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Update Image",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "image",
        "schema": "object",
        "description": "",
        "example": {
          "alt_text": "Alt text of the image",
          "name": "Amazing Shot",
          "upload_source_url": "https://image-hosting-x.com/cdn/123"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Images"
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
    "url": "/workspaces/{workspace_id}/orders",
    "method": "listOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "List Orders",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": "Filtering\n\n- Keep in mind that depending on the tools that you use, you might run into different situations where additional encoding is needed. For example:\n    - You might need to encode `filter[id]=1` as `filter%5Bid%5D=1` or use special options in your tools of choice to do it for you (like `g` in CURL).\n    -  Special URL characters like `%`, `+`, or unicode characters in emails (like Chinese characters) will need additional encoding.\n "
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
    "url": "/orders/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Fetch Order",
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
        "statusCode": "200",
        "description": "Orders"
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
    "url": "/orders/{id}",
    "method": "updateSpecific",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Update Order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "order",
        "schema": "object",
        "description": "",
        "example": {
          "notes": "Recusandae et dolores autem."
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Orders"
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
    "url": "/workspaces/{workspace_id}/orders/invoices/restocks",
    "method": "listRestocks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Invoices::Restock",
    "typeScriptTag": "orders::invoices::restock",
    "description": "List Restocks",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/orders/invoices/restocks/{id}",
    "method": "getRestock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Invoices::Restock",
    "typeScriptTag": "orders::invoices::restock",
    "description": "Fetch Restock",
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
        "statusCode": "200",
        "description": "Restock"
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
    "url": "/orders/{order_id}/applied_tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::AppliedTag",
    "typeScriptTag": "orders::appliedTag",
    "description": "List Applied Tags",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/orders/{order_id}/applied_tags",
    "method": "createAppliedTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders::AppliedTag",
    "typeScriptTag": "orders::appliedTag",
    "description": "Create Applied Tag",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "orders_applied_tag",
        "schema": "object",
        "description": "",
        "example": {
          "tag_id": 4
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Orders Applied Tags"
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
    "url": "/orders/applied_tags/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders::AppliedTag",
    "typeScriptTag": "orders::appliedTag",
    "description": "Remove Applied Tag",
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
        "description": "No Content"
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
    "url": "/orders/applied_tags/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::AppliedTag",
    "typeScriptTag": "orders::appliedTag",
    "description": "Fetch Applied Tag",
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
        "statusCode": "200",
        "description": "Orders Applied Tags"
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
    "url": "/orders/{order_id}/invoices",
    "method": "listForOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Invoice",
    "typeScriptTag": "orders::invoice",
    "description": "List Invoices",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/orders/invoices/{id}",
    "method": "getForOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Invoice",
    "typeScriptTag": "orders::invoice",
    "description": "Fetch Invoice",
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
        "statusCode": "200",
        "description": "Invoices"
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
    "url": "/orders/{order_id}/transactions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Transaction",
    "typeScriptTag": "orders::transaction",
    "description": "List Transactions",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/orders/transactions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Transaction",
    "typeScriptTag": "orders::transaction",
    "description": "Fetch Transaction",
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
        "statusCode": "200",
        "description": "Payments"
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
    "url": "/workspaces/{workspace_id}/orders/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Tag",
    "typeScriptTag": "orders::tag",
    "description": "List Tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/orders/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders::Tag",
    "typeScriptTag": "orders::tag",
    "description": "Create Tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "orders_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "#4f4ca7"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Order Tags"
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
    "url": "/orders/tags/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders::Tag",
    "typeScriptTag": "orders::tag",
    "description": "Remove Tag",
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
        "description": "No Content"
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
    "url": "/orders/tags/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders::Tag",
    "typeScriptTag": "orders::tag",
    "description": "Fetch Tag",
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
        "statusCode": "200",
        "description": "Order Tags"
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
    "url": "/orders/tags/{id}",
    "method": "updateSpecificOrderTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Orders::Tag",
    "typeScriptTag": "orders::tag",
    "description": "Update Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "orders_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "#4f4ca7"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order Tags"
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
    "url": "/workspaces/{workspace_id}/products",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "List Products",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/products",
    "method": "addNewToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create Product",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "product",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Small Steel Bottle 41972f",
          "visible_in_store": true,
          "visible_in_customer_center": true,
          "seo_title": "Totam et dolores rerum.",
          "seo_description": "Nostrum laborum provident et.",
          "commissionable": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Products"
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
    "url": "/products/{id}",
    "method": "getForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Fetch Product",
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
        "statusCode": "200",
        "description": "Products"
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
    "url": "/products/{id}",
    "method": "updateForWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update Product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "product",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Small Steel Bottle 41972f",
          "visible_in_store": true,
          "visible_in_customer_center": true,
          "seo_title": "Totam et dolores rerum.",
          "seo_description": "Nostrum laborum provident et.",
          "commissionable": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Products"
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
    "url": "/products/{id}/archive",
    "method": "archiveProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Archive a Product",
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
        "statusCode": "200",
        "description": "Products"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict - occurs if product is already archived."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/products/{id}/unarchive",
    "method": "unarchiveById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Unarchive a Product",
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
        "statusCode": "200",
        "description": "Products"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict - occurs if product is not archived."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/products/{product_id}/prices",
    "method": "listForVariant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Price",
    "typeScriptTag": "products::price",
    "description": "List Prices",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/products/{product_id}/prices",
    "method": "createVariantPrice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products::Price",
    "typeScriptTag": "products::price",
    "description": "Create Price",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "products_price",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Price",
          "amount": "100.00",
          "cost": "0.00",
          "currency": "USD",
          "duration": 1,
          "interval": "months",
          "trial_amount": "0.00",
          "self_cancel": true,
          "self_upgrade": true,
          "self_downgrade": true,
          "self_reactivate": true,
          "interval_count": 1,
          "visible": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Prices"
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
    "url": "/products/prices/{id}",
    "method": "getSinglePrice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Price",
    "typeScriptTag": "products::price",
    "description": "Fetch Price",
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
        "statusCode": "200",
        "description": "Prices"
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
    "url": "/products/prices/{id}",
    "method": "updateSinglePrice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products::Price",
    "typeScriptTag": "products::price",
    "description": "Update Price",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "products_price",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Price",
          "amount": "100.00",
          "cost": "0.00",
          "currency": "USD",
          "duration": 1,
          "interval": "months",
          "trial_amount": "0.00",
          "self_cancel": true,
          "self_upgrade": true,
          "self_downgrade": true,
          "self_reactivate": true,
          "interval_count": 1,
          "visible": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Prices"
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
    "url": "/products/{product_id}/variants",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Variant",
    "typeScriptTag": "products::variant",
    "description": "List Variants",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/products/{product_id}/variants",
    "method": "createNewVariant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products::Variant",
    "typeScriptTag": "products::variant",
    "description": "Create Variant",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "products_variant",
        "schema": "object",
        "description": "",
        "example": {
          "description": "Dolores asperiores eveniet expedita.",
          "name": "Lightweight Bronze Clock variant e702",
          "sku": "AhMTx0yMQkbdFNVr",
          "product_type": "physical",
          "weight": "20.0",
          "weight_unit": "lb",
          "height": "46.0",
          "width": "805.0",
          "length": "47.0",
          "dimensions_unit": "inches",
          "visible": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Variants"
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
    "url": "/products/variants/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Variant",
    "typeScriptTag": "products::variant",
    "description": "Fetch Variant",
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
        "statusCode": "200",
        "description": "Variants"
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
    "url": "/products/variants/{id}",
    "method": "updateSingle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products::Variant",
    "typeScriptTag": "products::variant",
    "description": "Update Variant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "products_variant",
        "schema": "object",
        "description": "",
        "example": {
          "description": "Dolores asperiores eveniet expedita.",
          "name": "Lightweight Bronze Clock variant e702",
          "sku": "AhMTx0yMQkbdFNVr",
          "product_type": "physical",
          "weight": "20.0",
          "weight_unit": "lb",
          "height": "46.0",
          "width": "805.0",
          "length": "47.0",
          "dimensions_unit": "inches",
          "visible": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variants"
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
    "url": "/workspaces/{workspace_id}/products/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Tag",
    "typeScriptTag": "products::tag",
    "description": "List Tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/products/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products::Tag",
    "typeScriptTag": "products::tag",
    "description": "Create Tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "products_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "emerald"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Product Tags"
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
    "url": "/products/tags/{id}",
    "method": "deleteTagById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products::Tag",
    "typeScriptTag": "products::tag",
    "description": "Remove Tag",
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
        "description": "No Content"
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
    "url": "/products/tags/{id}",
    "method": "getTagById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products::Tag",
    "typeScriptTag": "products::tag",
    "description": "Fetch Tag",
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
        "statusCode": "200",
        "description": "Product Tags"
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
    "url": "/products/tags/{id}",
    "method": "updateTagById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products::Tag",
    "typeScriptTag": "products::tag",
    "description": "Update Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "products_tag",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Tag",
          "color": "emerald"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Product Tags"
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
    "url": "/shipping/profiles/{profile_id}/location_groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::LocationGroup",
    "typeScriptTag": "shipping::locationGroup",
    "description": "List Location Groups",
    "parameters": [
      {
        "name": "profileId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/shipping/location_groups/{id}",
    "method": "getProfileLocationGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::LocationGroup",
    "typeScriptTag": "shipping::locationGroup",
    "description": "Fetch Location Group",
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
        "statusCode": "200",
        "description": "Location groups"
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
    "url": "/workspaces/{workspace_id}/shipping/packages",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Package",
    "typeScriptTag": "shipping::package",
    "description": "List Packages",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/shipping/packages",
    "method": "addToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipping::Package",
    "typeScriptTag": "shipping::package",
    "description": "Create Package",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shipping_package",
        "schema": "object",
        "description": "",
        "example": {
          "package_type": "box",
          "height": "4.0",
          "width": "2.0",
          "length": "2.0",
          "distance_unit": "in",
          "weight": "0.0",
          "weight_unit": "lb",
          "name": "Example Package"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Packages"
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
    "url": "/shipping/packages/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shipping::Package",
    "typeScriptTag": "shipping::package",
    "description": "Remove Package",
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
        "description": "No Content"
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
    "url": "/shipping/packages/{id}",
    "method": "getForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Package",
    "typeScriptTag": "shipping::package",
    "description": "Fetch Package",
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
        "statusCode": "200",
        "description": "Packages"
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
    "url": "/shipping/packages/{id}",
    "method": "updateForWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipping::Package",
    "typeScriptTag": "shipping::package",
    "description": "Update Package",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "shipping_package",
        "schema": "object",
        "description": "",
        "example": {
          "package_type": "box",
          "height": "4.0",
          "width": "2.0",
          "length": "2.0",
          "distance_unit": "in",
          "weight": "0.0",
          "weight_unit": "lb",
          "name": "Example Package"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Packages"
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
    "url": "/workspaces/{workspace_id}/shipping/profiles",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Profile",
    "typeScriptTag": "shipping::profile",
    "description": "List Profiles",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/shipping/profiles",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipping::Profile",
    "typeScriptTag": "shipping::profile",
    "description": "Create Profile",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shipping_profile",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Shipping Profile"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Profiles"
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
    "url": "/shipping/profiles/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shipping::Profile",
    "typeScriptTag": "shipping::profile",
    "description": "Remove Profile",
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
        "description": "No Content"
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
    "url": "/shipping/profiles/{id}",
    "method": "getWorkspaceProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Profile",
    "typeScriptTag": "shipping::profile",
    "description": "Fetch Profile",
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
        "statusCode": "200",
        "description": "Profiles"
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
    "url": "/shipping/profiles/{id}",
    "method": "updateForWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipping::Profile",
    "typeScriptTag": "shipping::profile",
    "description": "Update Profile",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "shipping_profile",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Shipping Profile"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Profiles"
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
    "url": "/shipping/zones/{zone_id}/rates",
    "method": "listForZone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Rate",
    "typeScriptTag": "shipping::rate",
    "description": "List Rates",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/shipping/zones/{zone_id}/rates",
    "method": "createRateForZone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipping::Rate",
    "typeScriptTag": "shipping::rate",
    "description": "Create Rate",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shipping_rate",
        "schema": "object",
        "description": "",
        "example": {
          "provider_name": "Gov. Shanda Dach",
          "price": "10.00",
          "price_currency": "USD",
          "rates_name_id": 1
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Rates"
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
    "url": "/shipping/rates/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shipping::Rate",
    "typeScriptTag": "shipping::rate",
    "description": "Remove Rate",
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
        "description": "No Content"
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
    "url": "/shipping/rates/{id}",
    "method": "getRateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Rate",
    "typeScriptTag": "shipping::rate",
    "description": "Fetch Rate",
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
        "statusCode": "200",
        "description": "Rates"
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
    "url": "/shipping/rates/{id}",
    "method": "updateRateForZone",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipping::Rate",
    "typeScriptTag": "shipping::rate",
    "description": "Update Rate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "shipping_rate",
        "schema": "object",
        "description": "",
        "example": {
          "provider_name": "Gov. Shanda Dach",
          "price": "10.00",
          "price_currency": "USD",
          "rates_name_id": 1
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rates"
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
    "url": "/shipping/location_groups/{location_group_id}/zones",
    "method": "listZones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Zone",
    "typeScriptTag": "shipping::zone",
    "description": "List Zones",
    "parameters": [
      {
        "name": "locationGroupId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/shipping/location_groups/{location_group_id}/zones",
    "method": "addNewZone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipping::Zone",
    "typeScriptTag": "shipping::zone",
    "description": "Create Zone",
    "parameters": [
      {
        "name": "locationGroupId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shipping_zone",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Bruce Marquardt"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Zones"
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
    "url": "/shipping/zones/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shipping::Zone",
    "typeScriptTag": "shipping::zone",
    "description": "Remove Zone",
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
        "description": "No Content"
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
    "url": "/shipping/zones/{id}",
    "method": "getZoneById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Zone",
    "typeScriptTag": "shipping::zone",
    "description": "Fetch Zone",
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
        "statusCode": "200",
        "description": "Zones"
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
    "url": "/shipping/zones/{id}",
    "method": "updateZoneById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipping::Zone",
    "typeScriptTag": "shipping::zone",
    "description": "Update Zone",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "shipping_zone",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Bruce Marquardt"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Zones"
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
    "url": "/workspaces/{workspace_id}/shipping/rates/names",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Rates::Name",
    "typeScriptTag": "shipping::rates::name",
    "description": "List Names",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/shipping/rates/names",
    "method": "createNewRateName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipping::Rates::Name",
    "typeScriptTag": "shipping::rates::name",
    "description": "Create Name",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shipping_rates_name",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Shipping Rates Name"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Rate Names"
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
    "url": "/shipping/rates/names/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shipping::Rates::Name",
    "typeScriptTag": "shipping::rates::name",
    "description": "Remove Name",
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
        "description": "No Content"
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
    "url": "/shipping/rates/names/{id}",
    "method": "getRateName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipping::Rates::Name",
    "typeScriptTag": "shipping::rates::name",
    "description": "Fetch Name",
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
        "statusCode": "200",
        "description": "Rate Names"
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
    "url": "/shipping/rates/names/{id}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipping::Rates::Name",
    "typeScriptTag": "shipping::rates::name",
    "description": "Update Name",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "shipping_rates_name",
        "schema": "object",
        "description": "",
        "example": {
          "name": "Example Shipping Rates Name"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rate Names"
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
    "url": "/workspaces/{workspace_id}/webhooks/outgoing/endpoints",
    "method": "listEndpoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks::Outgoing::Endpoint",
    "typeScriptTag": "webhooks::outgoing::endpoint",
    "description": "List Endpoints",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/workspaces/{workspace_id}/webhooks/outgoing/endpoints",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks::Outgoing::Endpoint",
    "typeScriptTag": "webhooks::outgoing::endpoint",
    "description": "Create Endpoint",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "webhooks_outgoing_endpoint",
        "schema": "object",
        "description": "",
        "example": {
          "url": "https://example.com/some-endpoint-url",
          "name": "Example Endpoint"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webhooks"
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
    "url": "/webhooks/outgoing/endpoints/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks::Outgoing::Endpoint",
    "typeScriptTag": "webhooks::outgoing::endpoint",
    "description": "Fetch Endpoint",
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
        "statusCode": "200",
        "description": "Webhooks"
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
    "url": "/webhooks/outgoing/endpoints/{id}",
    "method": "updateEndpoint",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks::Outgoing::Endpoint",
    "typeScriptTag": "webhooks::outgoing::endpoint",
    "description": "Update Endpoint",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "webhooks_outgoing_endpoint",
        "schema": "object",
        "description": "",
        "example": {
          "url": "https://example.com/some-endpoint-url",
          "name": "Example Endpoint"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhooks"
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
    "url": "/workspaces/{workspace_id}/webhooks/outgoing/events",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks::Outgoing::Event",
    "typeScriptTag": "webhooks::outgoing::event",
    "description": "List Events",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "ID of item after which the collection should be returned"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order."
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
    "url": "/webhooks/outgoing/events/{id}",
    "method": "getForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks::Outgoing::Event",
    "typeScriptTag": "webhooks::outgoing::event",
    "description": "Fetch Event",
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
        "statusCode": "200",
        "description": "Webhooks Events"
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
  }
]
    }
      language="TypeScript"
      apiTitle="ClickFunnels API"
      apiBaseUrl="https://{subdomain}.myclickfunnels.com/api/v2"
      apiVersion="V2"
      endpoints={79}
      sdkMethods={153}
      schemas={492}
      parameters={283}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickfunnels/openapi.yaml"
      developerDocumentation="developers.myclickfunnels.com/"
    />
  );
}
  