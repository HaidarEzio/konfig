import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ClerkBackendTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="clerk-backend-typescript-sdk"
      metaDescription={`Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.`}
      company="Clerk"
      serviceName="Backend"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/logo.png"
      companyKebabCase="clerk"
      clientNameCamelCase="clerkBackend"
      homepage="clerk.com"
      lastUpdated={new Date("2024-03-29T17:12:48.443Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/favicon.png"
      contactUrl="https://clerk.com/support"
      contactEmail="support@clerk.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","authentication","user_management"]}
      methods={[
  {
    "url": "/public/interstitial",
    "method": "getInterstitialMarkup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Miscellaneous",
    "typeScriptTag": "miscellaneous",
    "description": "Returns the markup for the interstitial page",
    "parameters": [
      {
        "name": "frontendApi",
        "schema": "string",
        "required": false,
        "description": "The Frontend API key of your instance"
      },
      {
        "name": "publishableKey",
        "schema": "string",
        "required": false,
        "description": "The publishable key of your instance"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The interstitial page markup"
      },
      {
        "statusCode": "400",
        "description": "A required query parameter is missing"
      },
      {
        "statusCode": "500",
        "description": "An infinite redirect loop was detected"
      }
    ]
  },
  {
    "url": "/jwks",
    "method": "getJsonWebKeySet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JWKS",
    "typeScriptTag": "jwks",
    "description": "Retrieve the JSON Web Key Set of the instance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The JSON Web Key Set"
      }
    ]
  },
  {
    "url": "/clients",
    "method": "listSortedByCreationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "List all clients",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
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
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/verify",
    "method": "verifyClientToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Verify a client",
    "parameters": [
      {
        "name": "token",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/{client_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Get a client",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID.",
        "example": "CLIENT_ID"
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
    "url": "/email_addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Addresses",
    "typeScriptTag": "emailAddresses",
    "description": "Create an email address",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/email_addresses/{email_address_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Email Addresses",
    "typeScriptTag": "emailAddresses",
    "description": "Delete an email address",
    "parameters": [
      {
        "name": "emailAddressId",
        "schema": "string",
        "required": true,
        "description": "The ID of the email address to delete",
        "example": "EMAIL_ADDRESS_ID"
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
      }
    ]
  },
  {
    "url": "/email_addresses/{email_address_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Addresses",
    "typeScriptTag": "emailAddresses",
    "description": "Retrieve an email address",
    "parameters": [
      {
        "name": "emailAddressId",
        "schema": "string",
        "required": true,
        "description": "The ID of the email address to retrieve",
        "example": "EMAIL_ADDRESS_ID"
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
      }
    ]
  },
  {
    "url": "/email_addresses/{email_address_id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Email Addresses",
    "typeScriptTag": "emailAddresses",
    "description": "Update an email address",
    "parameters": [
      {
        "name": "emailAddressId",
        "schema": "string",
        "required": true,
        "description": "The ID of the email address to update",
        "example": "EMAIL_ADDRESS_ID"
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "boolean",
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
    "url": "/phone_numbers",
    "method": "createNewPhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Phone Numbers",
    "typeScriptTag": "phoneNumbers",
    "description": "Create a phone number",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reserved_for_second_factor",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/phone_numbers/{phone_number_id}",
    "method": "deletePhoneNumberById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Phone Numbers",
    "typeScriptTag": "phoneNumbers",
    "description": "Delete a phone number",
    "parameters": [
      {
        "name": "phoneNumberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the phone number to delete",
        "example": "PHONE_NUMBER_ID"
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
      }
    ]
  },
  {
    "url": "/phone_numbers/{phone_number_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Phone Numbers",
    "typeScriptTag": "phoneNumbers",
    "description": "Retrieve a phone number",
    "parameters": [
      {
        "name": "phoneNumberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the phone number to retrieve",
        "example": "PHONE_NUMBER_ID"
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
      }
    ]
  },
  {
    "url": "/phone_numbers/{phone_number_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Phone Numbers",
    "typeScriptTag": "phoneNumbers",
    "description": "Update a phone number",
    "parameters": [
      {
        "name": "phoneNumberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the phone number to update",
        "example": "PHONE_NUMBER_ID"
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reserved_for_second_factor",
        "schema": "boolean",
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
    "url": "/sessions",
    "method": "listSortedByCreationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "List all sessions",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": "List sessions for the given client"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "List sessions for the given user"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter sessions by the provided status"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{session_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Retrieve a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the session",
        "example": "SESSION_ID"
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
    "url": "/sessions/{session_id}/revoke",
    "method": "revokeSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Revoke a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the session",
        "example": "SESSION_ID"
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
    "url": "/sessions/{session_id}/verify",
    "method": "verifySession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Verify a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the session",
        "example": "SESSION_ID"
      },
      {
        "name": "token",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{session_id}/tokens/{template_name}",
    "method": "createSessionTokenFromTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Create a session token from a jwt template",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the session",
        "example": "SESSION_ID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "The name of the JWT Template defined in your instance (e.g. `custom_hasura`).",
        "example": "TEMPLATE_NAME"
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
    "url": "/templates/{template_type}",
    "method": "listSortedByPosition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "List all templates",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of templates to list (email or SMS)",
        "example": "TEMPLATE_TYPE"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_type}/{slug}",
    "method": "getTemplateDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "Retrieve a template",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of templates to retrieve (email or SMS)",
        "example": "TEMPLATE_TYPE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug (i.e. machine-friendly name) of the template to retrieve",
        "example": "SLUG"
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
    "url": "/templates/{template_type}/{slug}",
    "method": "updateTemplateByTypeAndSlug",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "Update a template for a given type and slug",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of template to update",
        "example": "TEMPLATE_TYPE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the template to update",
        "example": "SLUG"
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
        "name": "markup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivered_by_clerk",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "from_email_name",
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
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_type}/{slug}/revert",
    "method": "revertTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "Revert a template",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of template to revert",
        "example": "TEMPLATE_TYPE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the template to revert",
        "example": "SLUG"
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_type}/{slug}/preview",
    "method": "previewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "Preview changes to a template",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of template to preview",
        "example": "TEMPLATE_TYPE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the template to preview",
        "example": "SLUG"
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
        "name": "from_email_name",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_type}/{slug}/toggle_delivery",
    "method": "toggleDeliveryByTypeAndSlug",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email & SMS Templates",
    "typeScriptTag": "email &SmsTemplates",
    "description": "Toggle the delivery by Clerk for a template of a given type and slug",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": "The type of template to toggle delivery for",
        "example": "TEMPLATE_TYPE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the template for which to toggle delivery",
        "example": "SLUG"
      },
      {
        "name": "delivered_by_clerk",
        "schema": "boolean",
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
    "method": "listSortedByCreationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List all users",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "array",
        "required": false,
        "description": "Returns users with the specified email addresses.\nAccepts up to 100 email addresses.\nAny email addresses not found are ignored."
      },
      {
        "name": "phoneNumber",
        "schema": "array",
        "required": false,
        "description": "Returns users with the specified phone numbers.\nAccepts up to 100 phone numbers.\nAny phone numbers not found are ignored."
      },
      {
        "name": "externalId",
        "schema": "array",
        "required": false,
        "description": "Returns users with the specified external ids.\nFor each external id, the `+` and `-` can be\nprepended to the id, which denote whether the\nrespective external id should be included or\nexcluded from the result set.\nAccepts up to 100 external ids.\nAny external ids not found are ignored."
      },
      {
        "name": "username",
        "schema": "array",
        "required": false,
        "description": "Returns users with the specified usernames.\nAccepts up to 100 usernames.\nAny usernames not found are ignored."
      },
      {
        "name": "web3Wallet",
        "schema": "array",
        "required": false,
        "description": "Returns users with the specified web3 wallet addresses.\nAccepts up to 100 web3 wallet addresses.\nAny web3 wallet addressed not found are ignored."
      },
      {
        "name": "userId",
        "schema": "array",
        "required": false,
        "description": "Returns users with the user ids specified.\nFor each user id, the `+` and `-` can be\nprepended to the id, which denote whether the\nrespective user id should be included or\nexcluded from the result set.\nAccepts up to 100 user ids.\nAny user ids not found are ignored."
      },
      {
        "name": "organizationId",
        "schema": "array",
        "required": false,
        "description": "Returns users that have memberships to the\ngiven organizations.\nFor each organization id, the `+` and `-` can be\nprepended to the id, which denote whether the\nrespective organization should be included or\nexcluded from the result set.\nAccepts up to 100 organization ids."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Returns users that match the given query.\nFor possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user ids, first and last names.\nThe query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well."
      },
      {
        "name": "lastActiveAtSince",
        "schema": "integer",
        "description": "Returns users that had session activity since the given date, with day precision.\nProviding a value with higher precision than day will result in an error.\nExample: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.",
        "example": 1700690400000
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Allows to return users in a particular order.\nAt the moment, you can order the returned users by their `created_at`,`updated_at`,`email_address`,`web3wallet`,`first_name`,`last_name`,`phone_number`,`username`,`last_active_at`,`last_sign_in_at`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want users to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,\nif you pass `order_by=username&order_by=created_at`, we will consider only the first `order_by` parameter, which is `username`. The `created_at` parameter will be ignored in this case.",
        "default": "-created_at"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a new user",
    "parameters": [
      {
        "name": "external_id",
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
        "name": "email_address",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "array",
        "description": ""
      },
      {
        "name": "web3_wallet",
        "schema": "array",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password_digest",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password_hasher",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_password_checks",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "skip_password_requirement",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totp_secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backup_codes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unsafe_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created_at",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/count",
    "method": "getTotalCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Count users",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "array",
        "required": false,
        "description": "Counts users with the specified email addresses.\nAccepts up to 100 email addresses.\nAny email addresses not found are ignored."
      },
      {
        "name": "phoneNumber",
        "schema": "array",
        "required": false,
        "description": "Counts users with the specified phone numbers.\nAccepts up to 100 phone numbers.\nAny phone numbers not found are ignored."
      },
      {
        "name": "externalId",
        "schema": "array",
        "required": false,
        "description": "Counts users with the specified external ids.\nAccepts up to 100 external ids.\nAny external ids not found are ignored."
      },
      {
        "name": "username",
        "schema": "array",
        "required": false,
        "description": "Counts users with the specified usernames.\nAccepts up to 100 usernames.\nAny usernames not found are ignored."
      },
      {
        "name": "web3Wallet",
        "schema": "array",
        "required": false,
        "description": "Counts users with the specified web3 wallet addresses.\nAccepts up to 100 web3 wallet addresses.\nAny web3 wallet addressed not found are ignored."
      },
      {
        "name": "userId",
        "schema": "array",
        "required": false,
        "description": "Counts users with the user ids specified.\nAccepts up to 100 user ids.\nAny user ids not found are ignored."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Counts users that match the given query.\nFor possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user ids, first and last names.\nThe query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well."
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
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "deleteUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to delete",
        "example": "USER_ID"
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
    "url": "/users/{user_id}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to retrieve",
        "example": "USER_ID"
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
    "url": "/users/{user_id}",
    "method": "updateUserAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to update",
        "example": "USER_ID"
      },
      {
        "name": "external_id",
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
        "name": "primary_email_address_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notify_primary_email_address_changed",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "primary_phone_number_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primary_web3_wallet_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile_image_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password_digest",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password_hasher",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_password_checks",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sign_out_of_other_sessions",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totp_secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backup_codes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unsafe_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "delete_self_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "create_organization_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/ban",
    "method": "markBanned",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Ban a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to ban",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/unban",
    "method": "removeBanFromUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unban a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to unban",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/lock",
    "method": "lockUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Lock a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to lock",
        "example": "USER_ID"
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/unlock",
    "method": "removeLock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unlock a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to unlock",
        "example": "USER_ID"
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/profile_image",
    "method": "deleteProfileImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete user profile image",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to delete the profile image for",
        "example": "USER_ID"
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/profile_image",
    "method": "setProfileImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Set user profile image",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to update the profile image for",
        "example": "USER_ID"
      },
      {
        "name": "file",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/metadata",
    "method": "mergeUserMetadataAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Merge and update a user's metadata",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user whose metadata will be updated and merged",
        "example": "USER_ID"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unsafe_metadata",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/oauth_access_tokens/{provider}",
    "method": "getOAuthAccessToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve the OAuth access token of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user for which to retrieve the OAuth access token",
        "example": "USER_ID"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The ID of the OAuth provider (e.g. `oauth_google`)",
        "example": "PROVIDER"
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/organization_memberships",
    "method": "getOrganizationMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve all memberships for a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user whose organization memberships we want to retrieve",
        "example": "USER_ID"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/verify_password",
    "method": "verifyPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Verify the password of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user for whom to verify the password",
        "example": "USER_ID"
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
        "description": "The user does not have a password set."
      },
      {
        "statusCode": "404",
        "description": "The user does not exist."
      },
      {
        "statusCode": "422",
        "description": "The provided password was incorrect."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/verify_totp",
    "method": "verifyTotp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Verify a TOTP or backup code for a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user for whom to verify the TOTP",
        "example": "USER_ID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The user does not have TOTP configured for their account."
      },
      {
        "statusCode": "404",
        "description": "The user does not exist."
      },
      {
        "statusCode": "422",
        "description": "The provided TOTP or backup code was incorrect."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/mfa",
    "method": "disableMfa",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Disable a user's MFA methods",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user whose MFA methods are to be disabled",
        "example": "USER_ID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/invitations",
    "method": "listAllNonRevoked",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "List all invitations",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter invitations based on their status"
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
    "url": "/invitations",
    "method": "createNewInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Create an invitation",
    "parameters": [
      {
        "name": "email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "ignore_existing",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/invitations/{invitation_id}/revoke",
    "method": "revokeInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Revokes an invitation",
    "parameters": [
      {
        "name": "invitationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the invitation to be revoked",
        "example": "INVITATION_ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/allowlist_identifiers",
    "method": "listAllowedIdentifiers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "List all identifiers on the allow-list",
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
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/allowlist_identifiers",
    "method": "addIdentifierToAllowList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "Add identifier to the allow-list",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "notify",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/allowlist_identifiers/{identifier_id}",
    "method": "deleteIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "Delete identifier from allow-list",
    "parameters": [
      {
        "name": "identifierId",
        "schema": "string",
        "required": true,
        "description": "The ID of the identifier to delete from the allow-list",
        "example": "IDENTIFIER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/blocklist_identifiers",
    "method": "listBlockedIdentifiers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "List all identifiers on the block-list",
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
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/blocklist_identifiers",
    "method": "addIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "Add identifier to the block-list",
    "parameters": [
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/blocklist_identifiers/{identifier_id}",
    "method": "deleteIdentifierFromBlocklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Allow-list / Block-list",
    "typeScriptTag": "allowListBlockList",
    "description": "Delete identifier from block-list",
    "parameters": [
      {
        "name": "identifierId",
        "schema": "string",
        "required": true,
        "description": "The ID of the identifier to delete from the block-list",
        "example": "IDENTIFIER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/beta_features/instance_settings",
    "method": "updateInstanceSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Beta Features",
    "typeScriptTag": "betaFeatures",
    "description": "Update instance settings",
    "parameters": [
      {
        "name": "restricted_to_allowlist",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "from_email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "progressive_sign_up",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "session_token_template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enhanced_email_deliverability",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/beta_features/domain",
    "method": "updateProductionInstanceDomain",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Beta Features",
    "typeScriptTag": "betaFeatures",
    "description": "Update production instance domain",
    "parameters": [
      {
        "name": "home_url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/actor_tokens",
    "method": "createToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actor Tokens",
    "typeScriptTag": "actorTokens",
    "description": "Create actor token",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "actor",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "sub": "user_2OEpKhcCN1Lat9NQ0G6puh7q5Rb"
        }
      },
      {
        "name": "expires_in_seconds",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 3600
      },
      {
        "name": "session_max_duration_in_seconds",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1800
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/actor_tokens/{actor_token_id}/revoke",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actor Tokens",
    "typeScriptTag": "actorTokens",
    "description": "Revoke actor token",
    "parameters": [
      {
        "name": "actorTokenId",
        "schema": "string",
        "required": true,
        "description": "The ID of the actor token to be revoked.",
        "example": "ACTOR_TOKEN_ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/domains",
    "method": "getAllDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "List all instance domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/domains",
    "method": "addSatelliteDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Add a domain",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "is_satellite",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "proxy_url",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/domains/{domain_id}",
    "method": "deleteSatelliteDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Delete a satellite domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "The ID of the domain that will be deleted. Must be a satellite domain.",
        "example": "DOMAIN_ID"
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
      }
    ]
  },
  {
    "url": "/domains/{domain_id}",
    "method": "updateDomain",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Update a domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "The ID of the domain that will be updated.",
        "example": "DOMAIN_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "proxy_url",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance",
    "method": "updateInstanceSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Instance Settings",
    "typeScriptTag": "instanceSettings",
    "description": "Update instance settings",
    "parameters": [
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hibp",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enhanced_email_deliverability",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "support_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clerk_js_version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "development_origin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowed_origins",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cookieless_dev",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "url_based_session_syncing",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Accepted"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance/restrictions",
    "method": "updateRestrictions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Instance Settings",
    "typeScriptTag": "instanceSettings",
    "description": "Update instance restrictions",
    "parameters": [
      {
        "name": "allowlist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "blocklist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "block_email_subaddresses",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "block_disposable_email_domains",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance/change_domain",
    "method": "updateInstanceDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beta Features",
    "typeScriptTag": "betaFeatures",
    "description": "Update production instance domain",
    "parameters": [
      {
        "name": "home_url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance/organization_settings",
    "method": "updateOrganizationSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Instance Settings",
    "typeScriptTag": "instanceSettings",
    "description": "Update instance organization settings",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "max_allowed_memberships",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "admin_delete_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "domains_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "domains_enrollment_modes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creator_role_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domains_default_role_id",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/svix",
    "method": "deleteSvixApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a Svix app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Svix app was successfully deleted"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/svix",
    "method": "createSvixApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a Svix app",
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
    "url": "/webhooks/svix_url",
    "method": "generateSvixDashboardUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a Svix Dashboard URL",
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
    "url": "/jwt_templates",
    "method": "listAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JWT Templates",
    "typeScriptTag": "jwtTemplates",
    "description": "List all templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/jwt_templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JWT Templates",
    "typeScriptTag": "jwtTemplates",
    "description": "Create a JWT template",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claims",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lifetime",
        "schema": "number",
        "description": ""
      },
      {
        "name": "allowed_clock_skew",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom_signing_key",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "signing_algorithm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signing_key",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jwt_templates/{template_id}",
    "method": "deleteTemplateById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "JWT Templates",
    "typeScriptTag": "jwtTemplates",
    "description": "Delete a Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "JWT Template ID",
        "example": "TEMPLATE_ID"
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
      }
    ]
  },
  {
    "url": "/jwt_templates/{template_id}",
    "method": "getTemplateDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JWT Templates",
    "typeScriptTag": "jwtTemplates",
    "description": "Retrieve a template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "JWT Template ID",
        "example": "TEMPLATE_ID"
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
      }
    ]
  },
  {
    "url": "/jwt_templates/{template_id}",
    "method": "updateTemplateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "JWT Templates",
    "typeScriptTag": "jwtTemplates",
    "description": "Update a JWT template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the JWT template to update",
        "example": "TEMPLATE_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claims",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lifetime",
        "schema": "number",
        "description": ""
      },
      {
        "name": "allowed_clock_skew",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom_signing_key",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "signing_algorithm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signing_key",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "listSortedByCreationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get a list of organizations for an instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      },
      {
        "name": "includeMembersCount",
        "schema": "boolean",
        "required": false,
        "description": "Flag to denote whether the member counts of each organization should be included in the response or not."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Returns organizations with ID, name, or slug that match the given query.\nUses exact match for organization ID and partial match for name and slug."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Allows to return organizations in a particular order.\nAt the moment, you can order the returned organizations either by their `name`, `created_at` or `members_count`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want organizations to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
        "default": "-created_at"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "createNewOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create an organization",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "created_by",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_BY"
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max_allowed_memberships",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}",
    "method": "deleteOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization to delete",
        "example": "ORGANIZATION_ID"
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
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}",
    "method": "getByIdOrSlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve an organization by ID or slug",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID or slug of the organization",
        "example": "ORGANIZATION_ID"
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
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}",
    "method": "updateOrganization",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Update an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization to update",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_allowed_memberships",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "admin_delete_enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/metadata",
    "method": "mergeOrganizationMetadata",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Merge and update metadata for an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization for which metadata will be merged or updated",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/logo",
    "method": "removeLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete the organization's logo.",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization for which the logo will be deleted.",
        "example": "ORGANIZATION_ID"
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
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/logo",
    "method": "updateOrganizationLogo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Upload a logo for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization for which to upload a logo",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "uploader_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOADER_USER_ID"
      },
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
        "statusCode": "400",
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
        "statusCode": "413",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/invitations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Get a list of organization invitations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter organization invitations based on their status"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/invitations",
    "method": "createAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Create and send an organization invitation",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization for which to send the invitation",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "inviter_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVITER_USER_ID"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An organization invitation"
      },
      {
        "statusCode": "400",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/invitations/bulk",
    "method": "bulkCreateAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Bulk create and send organization invitations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/invitations/pending",
    "method": "listPending",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Get a list of pending organization invitations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/invitations/{invitation_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Retrieve an organization invitation by ID",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "invitationId",
        "schema": "string",
        "required": true,
        "description": "The organization invitation ID.",
        "example": "INVITATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An organization invitation"
      },
      {
        "statusCode": "400",
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
    "url": "/organizations/{organization_id}/invitations/{invitation_id}/revoke",
    "method": "revokeInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Invitations",
    "typeScriptTag": "organizationInvitations",
    "description": "Revoke a pending organization invitation",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "invitationId",
        "schema": "string",
        "required": true,
        "description": "The organization invitation ID.",
        "example": "INVITATION_ID"
      },
      {
        "name": "requesting_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTING_USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An organization invitation"
      },
      {
        "statusCode": "400",
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
    "url": "/organizations/{organization_id}/memberships",
    "method": "getAllMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Get a list of all members of an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization ID.",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.\nBy prepending one of those values with + or -,\nwe can choose to sort in ascending (https://clerk.com/docs/reference/backend-api or descending (https://clerk.com/docs/reference/backend-api order.\""
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/memberships",
    "method": "addUserToOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Create a new organization membership",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization where the new membership will be created",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Hello world"
      },
      {
        "statusCode": "400",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/memberships/{user_id}",
    "method": "removeUserFromOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Remove a member from an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization the membership belongs to",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user that this membership belongs to",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Hello world"
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
    "url": "/organizations/{organization_id}/memberships/{user_id}",
    "method": "updateMembershipProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Update an organization membership",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization the membership belongs to",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user that this membership belongs to",
        "example": "USER_ID"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Hello world"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{organization_id}/memberships/{user_id}/metadata",
    "method": "updateMembershipMetadata",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Merge and update organization membership metadata",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization the membership belongs to",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user that this membership belongs to",
        "example": "USER_ID"
      },
      {
        "name": "public_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "private_metadata",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Hello world"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/proxy_checks",
    "method": "verifyProxyConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Proxy checks",
    "typeScriptTag": "proxyChecks",
    "description": "Verify the proxy configuration for your domain",
    "parameters": [
      {
        "name": "domain_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "proxy_url",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/redirect_urls",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirect URLs",
    "typeScriptTag": "redirectUrLs",
    "description": "List all redirect URLs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/redirect_urls",
    "method": "createNewUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Redirect URLs",
    "typeScriptTag": "redirectUrLs",
    "description": "Create a redirect URL",
    "parameters": [
      {
        "name": "url",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/redirect_urls/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Redirect URLs",
    "typeScriptTag": "redirectUrLs",
    "description": "Delete a redirect URL",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the redirect URL",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/redirect_urls/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirect URLs",
    "typeScriptTag": "redirectUrLs",
    "description": "Retrieve a redirect URL",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the redirect URL",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/sign_in_tokens",
    "method": "createToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sign-in Tokens",
    "typeScriptTag": "signInTokens",
    "description": "Create sign-in token",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expires_in_seconds",
        "schema": "integer",
        "description": "",
        "default": 2592000
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/sign_in_tokens/{sign_in_token_id}/revoke",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sign-in Tokens",
    "typeScriptTag": "signInTokens",
    "description": "Revoke the given sign-in token",
    "parameters": [
      {
        "name": "signInTokenId",
        "schema": "string",
        "required": true,
        "description": "The ID of the sign-in token to be revoked",
        "example": "SIGN_IN_TOKEN_ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sign_ups/{id}",
    "method": "updateSignUpById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sign-ups",
    "typeScriptTag": "signUps",
    "description": "Update a sign-up",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the sign-up to update",
        "example": "ID"
      },
      {
        "name": "custom_action",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "external_id",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth_applications",
    "method": "listSortedByDescendingCreationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Get a list of OAuth applications for an instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth_applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Create an OAuth application",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "callback_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACK_URL"
      },
      {
        "name": "scopes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "profile email public_metadata",
        "default": "profile email"
      },
      {
        "name": "public",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth_applications/{oauth_application_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Delete an OAuth application",
    "parameters": [
      {
        "name": "oauthApplicationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the OAuth application to delete",
        "example": "OAUTH_APPLICATION_ID"
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
      }
    ]
  },
  {
    "url": "/oauth_applications/{oauth_application_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Retrieve an OAuth application by ID",
    "parameters": [
      {
        "name": "oauthApplicationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the OAuth application",
        "example": "OAUTH_APPLICATION_ID"
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
      }
    ]
  },
  {
    "url": "/oauth_applications/{oauth_application_id}",
    "method": "updateApplication",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Update an OAuth application",
    "parameters": [
      {
        "name": "oauthApplicationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the OAuth application to update",
        "example": "OAUTH_APPLICATION_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callback_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "string",
        "description": "",
        "example": "profile email public_metadata private_metadata",
        "default": "profile email"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth_applications/{oauth_application_id}/rotate_secret",
    "method": "rotateSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth Applications",
    "typeScriptTag": "oAuthApplications",
    "description": "Rotate the client secret of the given OAuth application",
    "parameters": [
      {
        "name": "oauthApplicationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the OAuth application for which to rotate the client secret",
        "example": "OAUTH_APPLICATION_ID"
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
      }
    ]
  },
  {
    "url": "/saml_connections",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SAML Connections (https://clerk.com/docs/reference/backend-api",
    "typeScriptTag": "samlConnectionsHttps:ClerkComDocsReferenceBackendApi",
    "description": "Get a list of SAML Connections for an instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.\nMust be an integer greater than zero and less than 500.\nBy default, if not supplied, a limit of 10 is used.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/saml_connections",
    "method": "createNewConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SAML Connections (https://clerk.com/docs/reference/backend-api",
    "typeScriptTag": "samlConnectionsHttps:ClerkComDocsReferenceBackendApi",
    "description": "Create a SAML Connection",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER"
      },
      {
        "name": "idp_entity_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idp_sso_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idp_certificate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idp_metadata_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idp_metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attribute_mapping",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/saml_connections/{saml_connection_id}",
    "method": "deleteConnectionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SAML Connections (https://clerk.com/docs/reference/backend-api",
    "typeScriptTag": "samlConnectionsHttps:ClerkComDocsReferenceBackendApi",
    "description": "Delete a SAML Connection",
    "parameters": [
      {
        "name": "samlConnectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the SAML Connection to delete",
        "example": "SAML_CONNECTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
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
    "url": "/saml_connections/{saml_connection_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SAML Connections (https://clerk.com/docs/reference/backend-api",
    "typeScriptTag": "samlConnectionsHttps:ClerkComDocsReferenceBackendApi",
    "description": "Retrieve a SAML Connection by ID",
    "parameters": [
      {
        "name": "samlConnectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the SAML Connection",
        "example": "SAML_CONNECTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
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
    "url": "/saml_connections/{saml_connection_id}",
    "method": "updateConnectionById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SAML Connections (https://clerk.com/docs/reference/backend-api",
    "typeScriptTag": "samlConnectionsHttps:ClerkComDocsReferenceBackendApi",
    "description": "Update a SAML Connection",
    "parameters": [
      {
        "name": "samlConnectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the SAML Connection to update",
        "example": "SAML_CONNECTION_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idp_entity_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idp_sso_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idp_certificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idp_metadata_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idp_metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attribute_mapping",
        "schema": "object",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sync_user_attributes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_subdomains",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_idp_initiated",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "402",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Clerk Backend API"
      apiBaseUrl="https://api.clerk.com/v1"
      apiVersion="v1"
      endpoints={76}
      sdkMethods={109}
      schemas={112}
      parameters={325}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clerk/backend/openapi.yaml"
      developerDocumentation="clerk.com/docs/reference/backend-api"
    />
  );
}
  