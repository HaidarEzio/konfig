import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GetResponseTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="get-response-typescript-sdk"
      metaDescription={`GetResponse is a comprehensive email marketing platform that provides small businesses, solopreneurs, coaches, and marketers with powerful and affordable tools to grow their audience, engage with their subscribers, and turn subscribers into paying customers. With over 25 years of expertise, our customers choose GetResponse for our user-friendly solution, award-winning 24/7 customer support, and powerful tools that go beyond email marketing  – with automation, list growth, and additional communication tools like webinars and live chats to help businesses build their personal brand, sell their products and services, and build a community.

GetResponse's powerful email marketing software includes AI-enhanced content creation tools, professional templates, easy-to-use design tools, and proven deliverability. Our customers are empowered with tools to build a website and unlimited landing pages, and create engaging pop-ups and signup forms. The marketing automation builder brings your ideal automated communication scenario to life with a visual builder that can grow with your needs.

With our easy-to-use platform, proven expertise, and focus on user-friendly solutions, GetResponse is the ideal tool for small businesses, solopreneurs, coaches, and marketers looking to grow their audience, sell their products and services, and engage with their subscribers in a meaningful way.`}
      company="GetResponse"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/getresponse/logo.png"
      companyKebabCase="get-response"
      clientNameCamelCase="getResponse"
      homepage="getresponse.com"
      lastUpdated={new Date("2024-03-28T22:38:39.499Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/getresponse/favicon.jpg"
      contactUrl="https://app.getresponse.com/feedback.html?devzone=yes"
      contactEmail="getresponse-devzone@cs.getresponse.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/getresponse/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["email","marketing","email_marketing","marketing_automation","webinar_funnels"]}
      methods={[
  {
    "url": "/webinars/{webinarId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact by contact ID",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": false,
        "description": ">\nThe ID of a message (such as a newsletter, an autoresponder, or an RSS-newsletter).\nWhen passed, this method will simulate the unsubscribe process, as if the contact clicked the unsubscribe link in a given message."
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "description": "This makes it possible to pass the IP from which the contact unsubscribed. Used only if the `messageId` was send."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty response."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact details by contact ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update contact details",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/activities",
    "method": "getListOfActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a list of contact activities",
    "parameters": [
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaignId}/contacts",
    "method": "getSingleCampaignContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contacts from a single campaign",
    "parameters": [
      {
        "name": "query[email]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by email"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by name"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "sort[email]",
        "schema": "string",
        "required": false,
        "description": "Sort contacts by email"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort contacts by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort contacts by creation date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/custom-fields",
    "method": "upsertCustomFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Upsert the custom fields of a contact",
    "parameters": [
      {
        "name": "customFieldValues",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/tags",
    "method": "upsertContactTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Upsert the tags of a contact",
    "parameters": [
      {
        "name": "tags",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/{searchContactId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Delete search contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete search contacts."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/{searchContactId}",
    "method": "byContactId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Get search contacts by contact ID.",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Search contact details."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/{searchContactId}",
    "method": "updateSpecifiedContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Update search contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Search contact details."
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/{searchContactId}/contacts",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Get contacts by search contacts ID",
    "parameters": [
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name",
        "example": "desc"
      },
      {
        "name": "sort[email]",
        "schema": "string",
        "required": false,
        "description": "Sort by email",
        "example": "desc"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by creation date",
        "example": "asc"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/{searchContactId}/custom-fields",
    "method": "upsertCustomFieldsByContactId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Upsert custom fields by search contacts",
    "parameters": [
      {
        "name": "customFieldValues",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Upsert custom fields by searchContactId."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/templates/{transactionalTemplateId}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional Emails Templates",
    "typeScriptTag": "transactionalEmailsTemplates",
    "description": "Delete transactional email template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete transactional email template"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/templates/{transactionalTemplateId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Emails Templates",
    "typeScriptTag": "transactionalEmailsTemplates",
    "description": "Get a single template by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/templates/{transactionalTemplateId}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Emails Templates",
    "typeScriptTag": "transactionalEmailsTemplates",
    "description": "Update transactional email template",
    "parameters": [
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Order Confirmation - Example Shop"
      },
      {
        "name": "content",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/{transactionalEmailId}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get transactional email details by transactional email ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from-fields/{fromFieldId}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "From Fields",
    "typeScriptTag": "fromFields",
    "description": "Delete 'From' address",
    "parameters": [
      {
        "name": "fromFieldIdToReplaceWith",
        "schema": "string",
        "required": false,
        "description": "The 'From' address ID that should replace the deleted 'From' address"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete 'From' address."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from-fields/{fromFieldId}",
    "method": "getSingleAddressById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "From Fields",
    "typeScriptTag": "fromFields",
    "description": "Get a single 'From' address by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from-fields/{fromFieldId}/default",
    "method": "setFromAddressAsDefault",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "From Fields",
    "typeScriptTag": "fromFields",
    "description": "Set a 'From' address as default",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Set a 'From' address as default."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters/{rssNewsletterId}",
    "method": "deleteNewsletter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Delete RSS newsletter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete RSS newsletter."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters/{rssNewsletterId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Get RSS newsletter by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters/{rssNewsletterId}",
    "method": "updateNewsletter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Update RSS newsletter",
    "parameters": [
      {
        "name": "rssNewsletterId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dGer"
      },
      {
        "name": "href",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.getresponse.com/v3/rss-newsletters/dGer"
      },
      {
        "name": "rssFeedUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://blog.getresponse.com"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My rss to newsletters"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "rsstest0"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromField",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sendSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdOn",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters/{rssNewsletterId}/statistics",
    "method": "getStatisticsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Get RSS newsletter statistics by ID",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/taxes",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Get a list of taxes",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search tax by name"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search tax created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search tax created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/taxes",
    "method": "createNewTax",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Create tax",
    "parameters": [
      {
        "name": "taxId",
        "schema": "string",
        "description": "",
        "example": "Sk"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/taxes/Sk"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "VAT"
      },
      {
        "name": "rate",
        "schema": "number",
        "description": "",
        "example": 23
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/taxes/{taxId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Delete tax by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete tax"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/taxes/{taxId}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Get a single tax by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/taxes/{taxId}",
    "method": "updateShopTax",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Update tax",
    "parameters": [
      {
        "name": "taxId",
        "schema": "string",
        "description": "",
        "example": "Sk"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/taxes/Sk"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "VAT"
      },
      {
        "name": "rate",
        "schema": "number",
        "description": "",
        "example": 23
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events/{customEventId}",
    "method": "deleteEventById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Delete a custom event by custom event ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete custom event"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events/{customEventId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Get custom events by custom event ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events/{customEventId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Update custom event details",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sample_custom_event"
      },
      {
        "name": "attributes",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/forms/{formId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get form by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/forms/{formId}/variants",
    "method": "getListOfVariants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get the list of form variants (A/B tests)",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/landing-pages/{landingPageId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legacy Landing Pages",
    "typeScriptTag": "legacyLandingPages",
    "description": "Get single landing page by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/imports/{importId}",
    "method": "getImportDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Get import details by ID.",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/sms/{smsId}",
    "method": "getMessageStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sms",
    "typeScriptTag": "sms",
    "description": "Get details for the SMS message statistics",
    "parameters": [
      {
        "name": "query[createdOn][from]",
        "schema": "string",
        "description": "Get statistics for a single SMS from this date",
        "example": "2023-01-20"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "string",
        "description": "Get statistics for a single SMS to this date",
        "example": "2023-01-20"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/predefined-fields/{predefinedFieldId}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Predefined Fields",
    "typeScriptTag": "predefinedFields",
    "description": "Delete a predefined field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete a predefined field."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/predefined-fields/{predefinedFieldId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Predefined Fields",
    "typeScriptTag": "predefinedFields",
    "description": "Get a predefined field by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/predefined-fields/{predefinedFieldId}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Predefined Fields",
    "typeScriptTag": "predefinedFields",
    "description": "Update a predefined field",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my_new_value"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/categories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get the shop categories list",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search category by name"
      },
      {
        "name": "query[parentId]",
        "schema": "string",
        "required": false,
        "description": "Search categories by their parent"
      },
      {
        "name": "query[externalId]",
        "schema": "string",
        "required": false,
        "description": "Search categories by external ID"
      },
      {
        "name": "search[createdAt][from]",
        "schema": "string",
        "required": false,
        "description": "Show categories starting from this date"
      },
      {
        "name": "search[createdAt][to]",
        "schema": "string",
        "required": false,
        "description": "Show categories starting to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdAt]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/categories",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Create category",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/categories/{categoryId}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Delete category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete category"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/categories/{categoryId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get a single category by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/categories/{categoryId}",
    "method": "updateCategoryProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Update category",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppressions/{suppressionId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suppressions",
    "typeScriptTag": "suppressions",
    "description": "Deletes a given suppression list by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Suppression list deleted successfully."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppressions/{suppressionId}",
    "method": "getSuppressionListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions",
    "typeScriptTag": "suppressions",
    "description": "Get a suppression list by ID",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppressions/{suppressionId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions",
    "typeScriptTag": "suppressions",
    "description": "Update a suppression list by ID",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "suppression-name"
      },
      {
        "name": "masks",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/orders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get the list of orders",
    "parameters": [
      {
        "name": "query[description]",
        "schema": "string",
        "required": false,
        "description": "Search order by description"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search order by status"
      },
      {
        "name": "query[externalId]",
        "schema": "string",
        "required": false,
        "description": "Search order by external ID"
      },
      {
        "name": "query[processedAt][from]",
        "schema": "string",
        "required": false,
        "description": "Show orders processed from this date"
      },
      {
        "name": "query[processedAt][to]",
        "schema": "string",
        "required": false,
        "description": "Show orders processed to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create order",
    "parameters": [
      {
        "name": "additionalFlags",
        "schema": "string",
        "required": false,
        "description": "The additional flags parameter with the value `skipAutomation` will skip the triggering `Make a purchase` element in an automated workflow",
        "example": "skipAutomation"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "More information about order."
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": "",
        "example": "fOh"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/orders/fOh"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "k8u"
      },
      {
        "name": "orderUrl",
        "schema": "string",
        "description": "",
        "example": "https://somedomain.com/orders/order446"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "DH71239"
      },
      {
        "name": "totalPrice",
        "schema": "number",
        "description": "",
        "example": 716
      },
      {
        "name": "totalPriceTax",
        "schema": "number",
        "description": "",
        "example": 358.67
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "PLN"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "NEW"
      },
      {
        "name": "cartId",
        "schema": "string",
        "description": "",
        "example": "QBNgBR"
      },
      {
        "name": "shippingPrice",
        "schema": "number",
        "description": "",
        "example": 23
      },
      {
        "name": "shippingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingStatus",
        "schema": "string",
        "description": "",
        "example": "PENDING"
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "processedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaFields",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/orders/{orderId}",
    "method": "deleteOrder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Delete order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete order"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/orders/{orderId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get a single order by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/orders/{orderId}",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update order",
    "parameters": [
      {
        "name": "additionalFlags",
        "schema": "string",
        "required": false,
        "description": "The additional flags parameter with the value `skipAutomation` will skip the triggering `Make a purchase` element in an automated workflow",
        "example": "skipAutomation"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "More information about order."
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": "",
        "example": "fOh"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/orders/fOh"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "k8u"
      },
      {
        "name": "orderUrl",
        "schema": "string",
        "description": "",
        "example": "https://somedomain.com/orders/order446"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "DH71239"
      },
      {
        "name": "totalPrice",
        "schema": "number",
        "description": "",
        "example": 716
      },
      {
        "name": "totalPriceTax",
        "schema": "number",
        "description": "",
        "example": 358.67
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "PLN"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "NEW"
      },
      {
        "name": "cartId",
        "schema": "string",
        "description": "",
        "example": "QBNgBR"
      },
      {
        "name": "shippingPrice",
        "schema": "number",
        "description": "",
        "example": 23
      },
      {
        "name": "shippingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingStatus",
        "schema": "string",
        "description": "",
        "example": "PENDING"
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "processedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaFields",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product list.",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search products by name"
      },
      {
        "name": "query[vendor]",
        "schema": "string",
        "required": false,
        "description": "Search products by vendor"
      },
      {
        "name": "query[category]",
        "schema": "string",
        "required": false,
        "description": "Search products by category name"
      },
      {
        "name": "query[categoryId]",
        "schema": "string",
        "required": false,
        "description": "Search products by category ID"
      },
      {
        "name": "query[externalId]",
        "schema": "string",
        "required": false,
        "description": "Search products by external ID"
      },
      {
        "name": "query[variantName]",
        "schema": "string",
        "required": false,
        "description": "Search products by product variant name"
      },
      {
        "name": "query[metaFieldNames]",
        "schema": "string",
        "required": false,
        "description": "Search products by meta field name (the list of names must be separated by a comma [,])"
      },
      {
        "name": "query[metaFieldValues]",
        "schema": "string",
        "required": false,
        "description": "Search products by meta field value (the list of values must be separated by a comma [,])"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search products created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search products created to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Create product",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}",
    "method": "deleteProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete product",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete product"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}",
    "method": "getByShopIdAndProductId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a single product by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Update product",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/categories",
    "method": "upsertCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Upsert product categories",
    "parameters": [
      {
        "name": "categories",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/meta-fields",
    "method": "upsertMetaFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Upsert product meta fields",
    "parameters": [
      {
        "name": "metaFields",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}",
    "method": "deleteShop",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shops",
    "typeScriptTag": "shops",
    "description": "Delete shop",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete a shop"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shops",
    "typeScriptTag": "shops",
    "description": "Get a single shop by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}",
    "method": "updatePreferences",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shops",
    "typeScriptTag": "shops",
    "description": "Update shop",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/popups/{popupId}",
    "method": "getFormOrPopupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms and Popups",
    "typeScriptTag": "formsAndPopups",
    "description": "Get a single form or popup by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/popups/{popupId}/performance",
    "method": "getPerformanceStatsSinglePopup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form and Popup",
    "typeScriptTag": "formAndPopup",
    "description": "Get statistics for a single form or popup",
    "parameters": [
      {
        "name": "query[date][from]",
        "schema": "string",
        "required": false,
        "description": "Get statistics for a single form or popup from this date",
        "example": "2023-01-10"
      },
      {
        "name": "query[date][to]",
        "schema": "string",
        "required": false,
        "description": "Get statistics for a single form or popup to this date",
        "example": "2023-01-20"
      },
      {
        "name": "query[location]",
        "schema": "string",
        "required": false,
        "description": "Form or popup statistics by location"
      },
      {
        "name": "query[device]",
        "schema": "string",
        "required": false,
        "description": "Form or popup statistics by device"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/splittests/{splittestId}",
    "method": "getSingleAbTestById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "A/B tests",
    "typeScriptTag": "aBTests",
    "description": "Get a single A/B test.",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/carts",
    "method": "getShopCarts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carts",
    "typeScriptTag": "carts",
    "description": "Get shop carts",
    "parameters": [
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search carts created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search carts created to this date"
      },
      {
        "name": "query[externalId]",
        "schema": "string",
        "required": false,
        "description": "Search cart by external ID"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/carts",
    "method": "createNewCart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Carts",
    "typeScriptTag": "carts",
    "description": "Create cart",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/carts/{cartId}",
    "method": "deleteCart",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Carts",
    "typeScriptTag": "carts",
    "description": "Delete cart",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete cart"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/carts/{cartId}",
    "method": "getByIdInShopContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carts",
    "typeScriptTag": "carts",
    "description": "Get cart by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/carts/{cartId}",
    "method": "updateCartProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Carts",
    "typeScriptTag": "carts",
    "description": "Update cart",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/files/{fileId}",
    "method": "deleteFileById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Delete file by file ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete file"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/files/{fileId}",
    "method": "getFileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Get file by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/folders/{folderId}",
    "method": "deleteFolderById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Delete folder by folder ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete folder"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/ab-tests/subject/{abTestId}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "A/B tests - subject",
    "typeScriptTag": "aBTestsSubject",
    "description": "Get a single A/B test by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/ab-tests/subject/{abTestId}/winner",
    "method": "chooseWinner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "A/B tests - subject",
    "typeScriptTag": "aBTestsSubject",
    "description": "Choose A/B test winner",
    "parameters": [
      {
        "name": "variantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VpKJdr"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Choose A/B test winner"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/click-tracks/{clickTrackId}",
    "method": "getLinkDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Click Tracks",
    "typeScriptTag": "clickTracks",
    "description": "Get click tracked link details by click track ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}",
    "method": "deleteNewsletter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Delete newsletter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete newsletter."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get a single newsletter by its ID.",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}/activities",
    "method": "getActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter activities",
    "parameters": [
      {
        "name": "query[activity]",
        "schema": "string",
        "required": false,
        "description": "Search newsletter activities by activity type"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search newsletter activities from this date. Default value is 14 days earlier. You can get activities for last 30 days only."
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search newsletter activities to this date. Default value is now"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}/cancel",
    "method": "cancelSending",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Cancel sending the newsletter",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}/thumbnail",
    "method": "getThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter thumbnail",
    "parameters": [
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "The size of the thumbnail",
        "default": "default"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{newsletterId}/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "The statistics of single newsletter",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tagId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete tag by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Tag deleted successfully."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tagId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tag by ID",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag ID",
        "example": "TAGID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tagId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update tag by ID",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My_Tag"
      },
      {
        "name": "color",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{addressId}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Delete address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{addressId}",
    "method": "getAddressById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Get an address by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{addressId}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Update address",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaignId}/blocklists",
    "method": "getBlocklistMasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Returns campaign blocklist masks",
    "parameters": [
      {
        "name": "query[mask]",
        "schema": "string",
        "required": false,
        "description": "Blocklist mask to search for",
        "example": "@somedomain.com"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaignId}/blocklists",
    "method": "updateBlocklistMasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Updates campaign blocklist masks",
    "parameters": [
      {
        "name": "additionalFlags",
        "schema": "string",
        "required": false,
        "description": "The flag value `add` adds the masks provided in the request body to your blocklist. The flag value `delete` deletes the masks. The masks are replaced if there are no flag values in the request body. \n\n For better performance, use the flag value `noResponse`. It removes the response body and can be used alone or combined with other flags. If multiple flags are used,  separate them by a comma, like this: `additionalFlags=noResponse` or `additionalFlags=add,noResponse`."
      },
      {
        "name": "masks",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-fields/{customFieldId}",
    "method": "deleteSingleCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete a single custom field definition",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete a custom field."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-fields/{customFieldId}",
    "method": "getDefinitionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get a single custom field definition by the custom field ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-fields/{customFieldId}",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update the custom field definition",
    "parameters": [
      {
        "name": "hidden",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIDDEN"
      },
      {
        "name": "values",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/lps/{lpsId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Landing Pages",
    "typeScriptTag": "landingPages",
    "description": "Get a single landing page by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/lps/{lpsId}/performance",
    "method": "getPerformanceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Landing Page",
    "typeScriptTag": "landingPage",
    "description": "Get details for landing page statistics",
    "parameters": [
      {
        "name": "query[date][from]",
        "schema": "undefined",
        "required": false,
        "description": "Show a single landing page statistics from this date"
      },
      {
        "name": "query[date][to]",
        "schema": "undefined",
        "required": false,
        "description": "Show a single landing page statistics to this date"
      },
      {
        "name": "query[location]",
        "schema": "string",
        "required": false,
        "description": "Landing page statistics by location"
      },
      {
        "name": "query[device]",
        "schema": "string",
        "required": false,
        "description": "Landing page statistics by device"
      },
      {
        "name": "query[page]",
        "schema": "string",
        "required": false,
        "description": "Landing page statistics by page UUID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/variants",
    "method": "getProductVariantsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Variants",
    "typeScriptTag": "productVariants",
    "description": "Get a list of product variants",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search variant by name"
      },
      {
        "name": "query[sku]",
        "schema": "string",
        "required": false,
        "description": "Search variant by SKU"
      },
      {
        "name": "query[description]",
        "schema": "string",
        "required": false,
        "description": "Search variant by description"
      },
      {
        "name": "query[externalId]",
        "schema": "string",
        "required": false,
        "description": "Search variant by external ID"
      },
      {
        "name": "query[createdAt][from]",
        "schema": "string",
        "required": false,
        "description": "Show variants starting from this date"
      },
      {
        "name": "query[createdAt][to]",
        "schema": "string",
        "required": false,
        "description": "Show variants starting to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/variants",
    "method": "createNewVariant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Variants",
    "typeScriptTag": "productVariants",
    "description": "Create product variant",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Red Cap with GetResponse Monster print"
      },
      {
        "name": "variantId",
        "schema": "string",
        "description": "",
        "example": "VTB"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/products/9I/variants/VTB"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Red Monster Cap"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "https://somedomain.com/products-variants/986"
      },
      {
        "name": "sku",
        "schema": "string",
        "description": "",
        "example": "SKU-1254-56-457-5689"
      },
      {
        "name": "price",
        "schema": "number",
        "description": "",
        "example": 20
      },
      {
        "name": "priceTax",
        "schema": "number",
        "description": "",
        "example": 27.5
      },
      {
        "name": "previousPrice",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "previousPriceTax",
        "schema": "number",
        "description": "",
        "example": 33.6
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "position",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "barcode",
        "schema": "string",
        "description": "",
        "example": "12455687"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "ext1456"
      },
      {
        "name": "images",
        "schema": "array",
        "description": ""
      },
      {
        "name": "metaFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "taxes",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/variants/{variantId}",
    "method": "deleteVariant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product Variants",
    "typeScriptTag": "productVariants",
    "description": "Delete product variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete product variant"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/variants/{variantId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Variants",
    "typeScriptTag": "productVariants",
    "description": "Get a single product variant by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/products/{productId}/variants/{variantId}",
    "method": "updateVariantProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Variants",
    "typeScriptTag": "productVariants",
    "description": "Update product variant",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaignId}",
    "method": "getSingleCampaign",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get a single campaign by the campaign ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaignId}",
    "method": "updateCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Update a campaign",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/meta-fields",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meta Fields",
    "typeScriptTag": "metaFields",
    "description": "Get the shop meta fields",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search meta fields by name"
      },
      {
        "name": "query[description]",
        "schema": "string",
        "required": false,
        "description": "Search meta fields by description"
      },
      {
        "name": "query[value]",
        "schema": "string",
        "required": false,
        "description": "Search meta fields by value"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search meta fields created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search meta fields created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/meta-fields",
    "method": "createNewMetaField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meta Fields",
    "typeScriptTag": "metaFields",
    "description": "Create meta field",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Description of this meta field"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/shops/pf3/meta-fields/NoF"
      },
      {
        "name": "metaFieldId",
        "schema": "string",
        "description": "",
        "example": "NoF"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Shoe size"
      },
      {
        "name": "value",
        "schema": "string",
        "description": "",
        "example": "11"
      },
      {
        "name": "valueType",
        "schema": "string",
        "description": "",
        "example": "integer"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/meta-fields/{metaFieldId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meta Fields",
    "typeScriptTag": "metaFields",
    "description": "Delete meta field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete meta field"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/meta-fields/{metaFieldId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meta Fields",
    "typeScriptTag": "metaFields",
    "description": "Get the meta field by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops/{shopId}/meta-fields/{metaFieldId}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meta Fields",
    "typeScriptTag": "metaFields",
    "description": "Update meta field",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/webforms/{webformId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legacy Forms",
    "typeScriptTag": "legacyForms",
    "description": "Get Legacy Form by ID.",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gdpr-fields/{gdprFieldId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GDPR Fields",
    "typeScriptTag": "gdprFields",
    "description": "Get GDPR Field details",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{workflowId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflow by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{workflowId}",
    "method": "updateSingleWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Update workflow",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "active"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/sms/{smsId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SMS Messages",
    "typeScriptTag": "smsMessages",
    "description": "Get a single SMS message by its ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/{autoresponderId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Delete autoresponder.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete autoresponder"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/{autoresponderId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Get a single autoresponder by its ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/{autoresponderId}",
    "method": "updateAutoresponder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Update autoresponder",
    "parameters": [
      {
        "name": "autoresponderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Q"
      },
      {
        "name": "href",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.getresponse.com/v3/autoresponders/Q"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Message 2"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "test12"
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "V"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromField",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "flags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sendSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statistics",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdOn",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/{autoresponderId}/thumbnail",
    "method": "getThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Get the autoresponder thumbnail",
    "parameters": [
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "The size of the autoresponder thumbnail",
        "default": "default"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/{autoresponderId}/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "The statistics for a single autoresponder",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/websites/{websiteId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Websites",
    "typeScriptTag": "websites",
    "description": "Get a single Website by ID",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/wbe/{websiteId}/performance",
    "method": "getPerformanceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Website",
    "typeScriptTag": "website",
    "description": "Get details for website statistics",
    "parameters": [
      {
        "name": "query[date][from]",
        "schema": "undefined",
        "required": false,
        "description": "Show a single website statistics from this date"
      },
      {
        "name": "query[date][to]",
        "schema": "undefined",
        "required": false,
        "description": "Show a single website statistics to this date"
      },
      {
        "name": "query[location]",
        "schema": "string",
        "required": false,
        "description": "Website statistics by location"
      },
      {
        "name": "query[device]",
        "schema": "string",
        "required": false,
        "description": "Website statistics by device"
      },
      {
        "name": "query[page]",
        "schema": "string",
        "required": false,
        "description": "Website statistics by a page UUID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a list of webinars",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search webinars by name"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "The list of campaign resource IDs (string separated with ',')"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search webinars by status"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort webinars by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort webinars by creation date"
      },
      {
        "name": "sort[startsOn]",
        "schema": "string",
        "required": false,
        "description": "Sort webinars by update date"
      },
      {
        "name": "query[type]",
        "schema": "string",
        "required": false,
        "description": "Search webinars by type"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact list",
    "parameters": [
      {
        "name": "query[email]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by email"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by name"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by campaign ID"
      },
      {
        "name": "query[origin]",
        "schema": "string",
        "required": false,
        "description": "Search contacts by origin"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "query[changedOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search contacts edited from this date"
      },
      {
        "name": "query[changedOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search contacts edited to this date"
      },
      {
        "name": "sort[email]",
        "schema": "string",
        "required": false,
        "description": "Sort by email"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "sort[changedOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by change date"
      },
      {
        "name": "sort[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Sort by campaign ID"
      },
      {
        "name": "additionalFlags",
        "schema": "string",
        "required": false,
        "description": "The additional flags parameter with the value 'exactMatch' will search for contacts with the exact value of the email and name provided in the query string. Without this flag, matching is done via a standard 'like' comparison, which may sometimes be slow."
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
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
    "description": "Create a new contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ">\nIf the request is successful, the API returns the HTTP code **202 Accepted**.\nThis means that the contact has been preliminarily validated and added to the queue. \nIt may take a few minutes to process the queue and add the contact to the list. If your contact didn't appear on the list, there's a possibility that it was rejected at a later stage of processing. \n\n### Double opt-in\n\nCampaigns can be set to double opt-in.\nThis means that the contact has to click a link in a confirmation message before they can be added to your list.\nUnconfirmed contacts are not returned by the API and can only be found using Search Contacts."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/batch",
    "method": "createBatchContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create multiple contacts at once",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "C"
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ">\nIf the request is successful, the API returns the HTTP code **202 Accepted**.\nThis means that the contacts has been preliminarily validated and added to the queue. \nIt may take a few minutes to process the queue and add the contacts to the list. If your contact doesn't appear on the list, they were likely rejected during the late processing stages. \n\n### Double opt-in\n\nCampaigns (https://apireference.getresponse.com/ can be set to use double opt-in.\nThis means that a contact has to click a link in a confirmation message before they can be added to your list.\nUnconfirmed contacts are not returned by API and can only be found using Search Contacts."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts",
    "method": "savedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Get a saved search contact list",
    "parameters": [
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name",
        "example": "desc"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by creation date",
        "example": "asc"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search by name"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts",
    "method": "createNewSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Create search contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Search contact details."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search-contacts/contacts",
    "method": "usingConditions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Contacts",
    "typeScriptTag": "searchContacts",
    "description": "Search contacts using conditions",
    "parameters": [
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name",
        "example": "desc"
      },
      {
        "name": "sort[email]",
        "schema": "string",
        "required": false,
        "description": "Sort by email",
        "example": "desc"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by creation date",
        "example": "asc"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "subscribersType",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sectionLogicOperator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "or"
      },
      {
        "name": "section",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/templates",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Emails Templates",
    "typeScriptTag": "transactionalEmailsTemplates",
    "description": "Get the list of transactional email templates",
    "parameters": [
      {
        "name": "query[subject]",
        "schema": "string",
        "required": false,
        "description": "Search templates by subject"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by creation date"
      },
      {
        "name": "sort[subject]",
        "schema": "string",
        "required": false,
        "description": "Sort by template subject"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Emails Templates",
    "typeScriptTag": "transactionalEmailsTemplates",
    "description": "Create transactional email template",
    "parameters": [
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Order Confirmation - Example Shop"
      },
      {
        "name": "content",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the list of transactional emails",
    "parameters": [
      {
        "name": "query[sentOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search transactional emails sent from this date"
      },
      {
        "name": "query[sentOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search transactional emails sent to this date"
      },
      {
        "name": "query[tagged]",
        "schema": "string",
        "required": false,
        "description": "Search tagged/untagged transactional emails"
      },
      {
        "name": "query[tagId]",
        "schema": "string",
        "required": false,
        "description": "Search transactional emails with a specific tag ID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Send transactional email",
    "parameters": [
      {
        "name": "fromField",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE",
        "default": "direct"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactional-emails/statistics",
    "method": "getOverallStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the overall statistics of transactional emails",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": true,
        "description": "Group results by time interval",
        "example": "QUERY[GROUPBY]"
      },
      {
        "name": "query[timeFrame][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[timeFrame][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "query[tagged]",
        "schema": "string",
        "required": false,
        "description": "Search tagged/untagged transactional emails"
      },
      {
        "name": "query[tagId]",
        "schema": "string",
        "required": false,
        "description": "Search transactional emails with a specific tag ID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "From Fields",
    "typeScriptTag": "fromFields",
    "description": "Get the list of 'From' addresses",
    "parameters": [
      {
        "name": "query[email]",
        "schema": "string",
        "required": false,
        "description": "Search 'From' address by email"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search 'From' address by name"
      },
      {
        "name": "query[isDefault]",
        "schema": "boolean",
        "required": false,
        "description": "Search only default 'From' address",
        "example": true
      },
      {
        "name": "query[isActive]",
        "schema": "boolean",
        "required": false,
        "description": "Search only active 'From' addresses",
        "example": true
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort 'From' address by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from-fields",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "From Fields",
    "typeScriptTag": "fromFields",
    "description": "Create 'From' address",
    "parameters": [
      {
        "name": "fromFieldId",
        "schema": "string",
        "description": "",
        "example": "TTzW"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/from-fields/TTzW"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "jsmith@example.com"
      },
      {
        "name": "rewrittenEmail",
        "schema": "string",
        "description": "",
        "example": "jsmith@example.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "isActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "object",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Get the list of RSS newsletters",
    "parameters": [
      {
        "name": "query[subject]",
        "schema": "string",
        "required": false,
        "description": "Search RSS newsletters by subject"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search RSS newsletters by status"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search RSS newsletters created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search RSS newsletters created to this date"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search RSS newsletters by campaign ID"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters",
    "method": "createNewsletter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "Create RSS newsletter",
    "parameters": [
      {
        "name": "rssNewsletterId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dGer"
      },
      {
        "name": "href",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.getresponse.com/v3/rss-newsletters/dGer"
      },
      {
        "name": "rssFeedUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://blog.getresponse.com"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My rss to newsletters"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "rsstest0"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromField",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sendSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdOn",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/rss-newsletters/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RSS Newsletters",
    "typeScriptTag": "rssNewsletters",
    "description": "The statistics for all RSS newsletters",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[rssNewsletterId]",
        "schema": "string",
        "required": false,
        "description": "The list of RSS newsletter resource IDs (string separated with ',')"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "The list of campaign resource IDs (string separated with ',')"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Get a list of custom events",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search custom events by name"
      },
      {
        "name": "query[hasAttributes]",
        "schema": "string",
        "required": false,
        "description": "Search custom events with or without attributes"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Create custom event",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sample_custom_event"
      },
      {
        "name": "attributes",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-events/trigger",
    "method": "triggerEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Events",
    "typeScriptTag": "customEvents",
    "description": "Trigger a custom event",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lesson_finished"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lTgH5"
      },
      {
        "name": "attributes",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Empty response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/forms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get the list of forms.",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search forms by name"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search forms created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search forms created to this date"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search forms assigned to this list (https://apireference.getresponse.com/. You can pass multiple comma-separated values, eg. `Xd1P,sC7r`"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search by status. **Note:** `disabled` includes both `unpublished` and `draft` and `enabled` equals `published`"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort[visitors]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort[uniqueVisitors]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort[subscribed]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort[subscriptionRate]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/landing-pages",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legacy Landing Pages",
    "typeScriptTag": "legacyLandingPages",
    "description": "Get a list of landing pages",
    "parameters": [
      {
        "name": "query[domain]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by domain"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by status"
      },
      {
        "name": "query[subdomain]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by subdomain"
      },
      {
        "name": "query[metaTitle]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by metaTitle field"
      },
      {
        "name": "query[userDomain]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by user provided domain"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by ID of the assigned campaign. Campaign ID must be encoded! You can get the campaign list with encoded IDs by calling the `/v3/campaigns` endpoint. You can search by multiple comma separated values eg. `o5lx,34er`."
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Show landing pages created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Show landing pages created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "sort[domain]",
        "schema": "string",
        "required": false,
        "description": "Sort by domain"
      },
      {
        "name": "sort[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Sort by campaign"
      },
      {
        "name": "sort[metaTitle]",
        "schema": "string",
        "required": false,
        "description": "Sort by metaTitle"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/imports",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Get a list of imports.",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search imports by campaignId"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search imports created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search imports created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by creation date"
      },
      {
        "name": "sort[finishedOn]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by finish date"
      },
      {
        "name": "sort[campaignName]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by campaign name"
      },
      {
        "name": "sort[uploadedContacts]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by uploaded contact count"
      },
      {
        "name": "sort[updatedContacts]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by updated contact count"
      },
      {
        "name": "sort[addedContacts]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by inserted contact count"
      },
      {
        "name": "sort[invalidContacts]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by invalid contact count"
      },
      {
        "name": "sort[status]",
        "schema": "string",
        "required": false,
        "description": "Sort imports by status (uploaded, to_review, approved, finished, rejected, canceled)"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/imports",
    "method": "scheduleNewContactImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Schedule a new contact import",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "z5c"
      },
      {
        "name": "fieldMapping",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "contacts",
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
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/ecommerce/revenue",
    "method": "getRevenueStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Get the ecommerce revenue statistics",
    "parameters": [
      {
        "name": "query[orderDate][from]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for orders from this date"
      },
      {
        "name": "query[orderDate][to]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for orders to this date"
      },
      {
        "name": "query[shopId]",
        "schema": "string",
        "required": false,
        "description": "Search statistics by shop ID. You can get the shop ID by calling the `/v3/shops` endpoint. You can search for multiple shops using comma-separated values, for example, `pgIH, CNXF`"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics/ecommerce/performance",
    "method": "getPerformanceStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Get the ecommerce general performance statistics",
    "parameters": [
      {
        "name": "query[orderDate][from]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for orders from this date"
      },
      {
        "name": "query[orderDate][to]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for orders to this date"
      },
      {
        "name": "query[shopId]",
        "schema": "string",
        "required": false,
        "description": "Search statistics by shop ID. You can get the shop ID by calling the `/v3/shops` endpoint. You can search for multiple shops using comma-separated values, for example, `pgIH, CNXF`"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/predefined-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Predefined Fields",
    "typeScriptTag": "predefinedFields",
    "description": "Get the predefined fields list",
    "parameters": [
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name",
        "example": "DESC"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search by name"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search by campaign ID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/predefined-fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Predefined Fields",
    "typeScriptTag": "predefinedFields",
    "description": "Create a predefined field",
    "parameters": [
      {
        "name": "predefinedFieldId",
        "schema": "string",
        "description": "",
        "example": "6neM"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/predefined-fields/6neM"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my_predefined_field_123"
      },
      {
        "name": "value",
        "schema": "string",
        "description": "",
        "example": "my value"
      },
      {
        "name": "campaign",
        "schema": "object",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppressions",
    "method": "getSuppressionLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions",
    "typeScriptTag": "suppressions",
    "description": "Get suppression lists",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search suppressions by name"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search suppressions created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search suppressions created to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by the createdOn date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppressions",
    "method": "createNewSuppressionList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions",
    "typeScriptTag": "suppressions",
    "description": "Creates a new suppression list",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "suppression-name"
      },
      {
        "name": "masks",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-confirmations/body/{languageCode}",
    "method": "getCollectionOfBodies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Confirmations",
    "typeScriptTag": "subscriptionConfirmations",
    "description": "Get collection of SUBSCRIPTION CONFIRMATIONS bodies",
    "parameters": [
      {
        "name": "languageCode",
        "schema": "string",
        "required": true,
        "description": "ISO 639-1 Language Code Standard",
        "example": "en"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-confirmations/subject/{languageCode}",
    "method": "getSubjectCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Confirmations",
    "typeScriptTag": "subscriptionConfirmations",
    "description": "Get collection of SUBSCRIPTION CONFIRMATIONS subjects",
    "parameters": [
      {
        "name": "languageCode",
        "schema": "string",
        "required": true,
        "description": "ISO 639-1 Language Code Standard",
        "example": "en"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops",
    "method": "getListOfShops",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shops",
    "typeScriptTag": "shops",
    "description": "Get a list of shops",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search shop by name"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shops",
    "method": "createNewShop",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shops",
    "typeScriptTag": "shops",
    "description": "Create shop",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/popups",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms and Popups",
    "typeScriptTag": "formsAndPopups",
    "description": "Get the list of forms and popups",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search forms and popups by name"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search forms and popups by status"
      },
      {
        "name": "stats[from]",
        "schema": "string",
        "required": false,
        "description": "Show statistics from this date"
      },
      {
        "name": "stats[to]",
        "schema": "string",
        "required": false,
        "description": "Show statistics to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort forms and popups by name"
      },
      {
        "name": "sort[status]",
        "schema": "string",
        "required": false,
        "description": "Sort forms and popups by status"
      },
      {
        "name": "sort[createdAt]",
        "schema": "string",
        "required": false,
        "description": "Sort forms and popups by creation date"
      },
      {
        "name": "sort[updatedAt]",
        "schema": "string",
        "required": false,
        "description": "Sort forms and popups by modification date"
      },
      {
        "name": "sort[views]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of views"
      },
      {
        "name": "sort[uniqueVisitors]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of unique visitors"
      },
      {
        "name": "sort[leads]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of leads"
      },
      {
        "name": "sort[ctr]",
        "schema": "string",
        "required": false,
        "description": "Sort by CTR (click-through rate)"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/splittests",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "A/B tests",
    "typeScriptTag": "aBTests",
    "description": "The list of A/B tests.",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by name"
      },
      {
        "name": "query[type]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by type"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by status",
        "default": "active"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search A/B tests created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search A/B tests created to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by creation date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/quota",
    "method": "getStorageInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Get storage space information",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/files",
    "method": "getFileList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Get the list of files",
    "parameters": [
      {
        "name": "query[allFolders]",
        "schema": "string",
        "required": false,
        "description": "Return files from all folders, including the root folder. **This parameter can't be used together with ** `query[folderId]`"
      },
      {
        "name": "query[folderId]",
        "schema": "string",
        "required": false,
        "description": "Search for files in a specific folder. **This parameter can't be used together with ** `query[allFolders]`"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search for files by name"
      },
      {
        "name": "query[group]",
        "schema": "string",
        "required": false,
        "description": "Search for files by group",
        "example": "photo"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[group]",
        "schema": "string",
        "required": false,
        "description": "Sort files by group"
      },
      {
        "name": "sort[size]",
        "schema": "string",
        "required": false,
        "description": "Sort files by size"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/files",
    "method": "createNewFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Create a file",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "image"
      },
      {
        "name": "extension",
        "schema": "string",
        "description": "",
        "example": "jpg"
      },
      {
        "name": "folder",
        "schema": "undefined",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/folders",
    "method": "listFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Get the list of folders",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search folders by name"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort folders by name"
      },
      {
        "name": "sort[size]",
        "schema": "string",
        "required": false,
        "description": "Sort folders by size"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort folders by creation date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-library/folders",
    "method": "createFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File Library",
    "typeScriptTag": "fileLibrary",
    "description": "Create a folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sample folder"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/ab-tests/subject",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "A/B tests - subject",
    "typeScriptTag": "aBTestsSubject",
    "description": "The list of A/B tests",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by name"
      },
      {
        "name": "query[stage]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by stage"
      },
      {
        "name": "query[abTestId]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by ID"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search A/B tests by list ID"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[stage]",
        "schema": "string",
        "required": false,
        "description": "Sort by stage"
      },
      {
        "name": "sort[sendOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by send date"
      },
      {
        "name": "sort[totalDelivered]",
        "schema": "string",
        "required": false,
        "description": "Sort by total delivered"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/ab-tests/subject",
    "method": "createNewTest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "A/B tests - subject",
    "typeScriptTag": "aBTestsSubject",
    "description": "Create a new A/B test",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/click-tracks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Click Tracks",
    "typeScriptTag": "clickTracks",
    "description": "Get click tracked links list",
    "parameters": [
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search click tracks from messages created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search click tracks from messages created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by message date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get the newsletter list",
    "parameters": [
      {
        "name": "query[subject]",
        "schema": "string",
        "required": false,
        "description": "Search newsletters by subject"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search newsletters by name"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search newsletters by status"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search newsletters created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search newsletters created to this date"
      },
      {
        "name": "query[sendOn][from]",
        "schema": "string",
        "required": false,
        "description": "Search for newsletters sent from this date",
        "example": "2023-01-20"
      },
      {
        "name": "query[sendOn][to]",
        "schema": "string",
        "required": false,
        "description": "Search for newsletters sent to this date",
        "example": "2023-01-20"
      },
      {
        "name": "query[type]",
        "schema": "string",
        "required": false,
        "description": "Search newsletters by type"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search newsletters by campaign ID"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "sort[sendOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by send on date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters",
    "method": "enqueueNewsletter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Create newsletter",
    "parameters": [
      {
        "name": "content",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "flags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New message"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "broadcast"
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Annual report"
      },
      {
        "name": "fromField",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "campaign",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sendOn",
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
        "name": "sendSettings",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/send-draft",
    "method": "sendDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Send the newsletter draft",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "N"
      },
      {
        "name": "sendOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendSettings",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/statistics",
    "method": "getStatisticsBasedOnList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Total newsletter statistics",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[newsletterId]",
        "schema": "string",
        "required": false,
        "description": "The list of newsletter resource IDs (string separated with '')"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "The list of campaign resource IDs (string separated with '')"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get the list of tags",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search tags by name"
      },
      {
        "name": "query[createdAt][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search tags created from this date"
      },
      {
        "name": "query[createdAt][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search tags created to this date"
      },
      {
        "name": "sort[createdAt]",
        "schema": "string",
        "required": false,
        "description": "Sort tags by creation date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "addNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Add a new tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My_Tag"
      },
      {
        "name": "color",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Get a list of addresses",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by name"
      },
      {
        "name": "query[firstName]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by first name"
      },
      {
        "name": "query[lastName]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by last name"
      },
      {
        "name": "query[address1]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by address1 field"
      },
      {
        "name": "query[address2]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by address2 field"
      },
      {
        "name": "query[city]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by city"
      },
      {
        "name": "query[zip]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by ZIP"
      },
      {
        "name": "query[province]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by province"
      },
      {
        "name": "query[provinceCode]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by province code"
      },
      {
        "name": "query[phone]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by phone"
      },
      {
        "name": "query[company]",
        "schema": "string",
        "required": false,
        "description": "Search addresses by company"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "string",
        "required": false,
        "description": "Search addresses created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "string",
        "required": false,
        "description": "Search addresses created to this date"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Create address",
    "parameters": [
      {
        "name": "createdOn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedOn",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/blocklists",
    "method": "getBlocklistMasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Returns account blocklist masks",
    "parameters": [
      {
        "name": "query[mask]",
        "schema": "string",
        "required": false,
        "description": "Blocklist mask to search for",
        "example": "@somedomain.com"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/blocklists",
    "method": "updateBlocklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update account blocklist",
    "parameters": [
      {
        "name": "additionalFlags",
        "schema": "string",
        "required": false,
        "description": "The flag value `add` adds the masks provided in the request body to your blocklist. The flag value `delete` deletes the masks. The masks are replaced if there are no flag values in the request body. \n\n For better performance, use the flag value `noResponse`. It removes the response body and can be used alone or combined with other flags. If multiple flags are used, separate them by a comma, like this: `additionalFlags=noResponse` or `additionalFlags=add,noResponse`."
      },
      {
        "name": "masks",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get a list of custom fields",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search custom fields by name"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom-fields",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "string",
        "description": "",
        "example": "pas"
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/custom-fields/pas"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "office_phone_number"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueType",
        "schema": "string",
        "description": "",
        "example": "phone"
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fieldType",
        "schema": "string",
        "description": "",
        "example": "text"
      },
      {
        "name": "hidden",
        "schema": "string",
        "description": ""
      },
      {
        "name": "values",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/lps",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Landing Pages",
    "typeScriptTag": "landingPages",
    "description": "Get the list of landing pages",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by name"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search landing pages by status"
      },
      {
        "name": "stats[from]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for landing pages from this date"
      },
      {
        "name": "stats[to]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for landing pages to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort landing pages by name"
      },
      {
        "name": "sort[createdAt]",
        "schema": "string",
        "required": false,
        "description": "Sort landing pages by creation date"
      },
      {
        "name": "sort[updatedAt]",
        "schema": "string",
        "required": false,
        "description": "Sort landing pages by modification date"
      },
      {
        "name": "sort[visits]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of page visits"
      },
      {
        "name": "sort[leads]",
        "schema": "string",
        "required": false,
        "description": "Sort landing pages by number of leads"
      },
      {
        "name": "sort[subscriptionRate]",
        "schema": "string",
        "required": false,
        "description": "Sort by subscription rate"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/multimedia",
    "method": "getImageList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Multimedia",
    "typeScriptTag": "multimedia",
    "description": "Get images list",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/multimedia",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multimedia",
    "typeScriptTag": "multimedia",
    "description": "Upload image",
    "parameters": [
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracking",
    "method": "javascriptCodeSnippets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "Get Tracking JavaScript code snippets",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracking/facebook-pixels",
    "method": "getFacebookPixels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "Get the list of \"Facebook Pixels\"",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Account information",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "updateAccountDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "VfEy1"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john.smith@test.com"
      },
      {
        "name": "countryCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "industryTag",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "href",
        "schema": "string",
        "description": "",
        "example": "https://api.getresponse.com/v3/accounts"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Smith"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "MyBigCompany"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "+00155555555"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Oklahoma"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Alderson"
      },
      {
        "name": "street",
        "schema": "string",
        "description": "",
        "example": "Sunset blv."
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": "",
        "example": "81-611"
      },
      {
        "name": "numberOfEmployees",
        "schema": "string",
        "description": "",
        "example": "500"
      },
      {
        "name": "timeFormat",
        "schema": "string",
        "description": "",
        "example": "24h"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/billing",
    "method": "getBillingInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Billing information",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/login-history",
    "method": "getLoginHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "History of logins",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/badge",
    "method": "getCurrentStatusOfBadge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Current status of your GetResponse badge",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/badge",
    "method": "toggleBadgeStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Turn on/off the GetResponse Badge",
    "parameters": [
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/industries",
    "method": "listIndustryTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List of Industry Tags",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/timezones",
    "method": "getTimezonesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List of timezones",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/callbacks",
    "method": "disableCallbacks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Disable callbacks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/callbacks",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get callbacks configuration",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/callbacks",
    "method": "enableCallbacksConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Enable or update callbacks configuration",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "https://example.com/callback"
      },
      {
        "name": "actions",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/sending-limits",
    "method": "getSendingLimits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Send limits",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get a list of campaigns",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "campaign_name"
      },
      {
        "name": "query[isDefault]",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns",
    "method": "createNewCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Create a campaign",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/origins",
    "method": "getSubscriberOriginStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get subscriber origin statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/locations",
    "method": "getSubscriberLocationStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get subscriber location statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/list-size",
    "method": "getCampaignSizeStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get campaign size statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/subscriptions",
    "method": "getSubscriptionStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get the number and origin of subscription statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/removals",
    "method": "getRemovalStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get removal statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/balance",
    "method": "getBalanceStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get balance statistics",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3Va2e"
      },
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "month"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/statistics/summary",
    "method": "getStatisticsSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns (https://apireference.getresponse.com/",
    "typeScriptTag": "campaignsHttps:ApireferenceGetresponseCom",
    "description": "Get the statistics summary for selected campaigns",
    "parameters": [
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3Va2e"
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/webforms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legacy Forms",
    "typeScriptTag": "legacyForms",
    "description": "Get Legacy Forms.",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search Legacy Forms by name"
      },
      {
        "name": "query[modifiedOn][from]",
        "schema": "string",
        "required": false,
        "description": "Search Legacy Forms modified from this date"
      },
      {
        "name": "query[modifiedOn][to]",
        "schema": "string",
        "required": false,
        "description": "Search Legacy Forms modified to this date"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search Legacy Forms by campaignId. Accepts multiple IDs separated with a comma"
      },
      {
        "name": "sort[modifiedOn]",
        "schema": "string",
        "required": false,
        "description": "Sort Legacy Forms by modification date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gdpr-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GDPR Fields",
    "typeScriptTag": "gdprFields",
    "description": "Get the GDPR fields list",
    "parameters": [
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort fields by name"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort fields by creation date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow",
    "method": "listWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/sms-automation",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SMS Automation Messages",
    "typeScriptTag": "smsAutomationMessages",
    "description": "Get the list of automated SMS messages.",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search automated SMS messages by name"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search automated SMS messages by campaign (https://apireference.getresponse.com/ ID"
      },
      {
        "name": "query[hasLinks]",
        "schema": "boolean",
        "required": false,
        "description": "Search for automated SMS messages containing links"
      },
      {
        "name": "sort[status]",
        "schema": "string",
        "required": false,
        "description": "Sort by the status of the SMS message"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by the name of the automated SMS message"
      },
      {
        "name": "sort[modifiedOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by the date the SMS message was modified on"
      },
      {
        "name": "sort[delivered]",
        "schema": "string",
        "required": false,
        "description": "Sort by the number of delivered SMS messages"
      },
      {
        "name": "sort[sent]",
        "schema": "string",
        "required": false,
        "description": "Sort by the number of sent SMS messages"
      },
      {
        "name": "sort[clicks]",
        "schema": "string",
        "required": false,
        "description": "Sort by the number of link clicks"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/sms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SMS Messages",
    "typeScriptTag": "smsMessages",
    "description": "Get the list of SMS messages.",
    "parameters": [
      {
        "name": "query[type]",
        "schema": "string",
        "required": false,
        "description": "Search SMS messages by type"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search SMS messages by name"
      },
      {
        "name": "query[sendingStatus]",
        "schema": "string",
        "required": false,
        "description": "Search SMS messages by status"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search SMS messages by campaign (https://apireference.getresponse.com/ ID"
      },
      {
        "name": "query[hasLinks]",
        "schema": "boolean",
        "required": false,
        "description": "Search for SMS messages with links"
      },
      {
        "name": "sort[sendingStatus]",
        "schema": "string",
        "required": false,
        "description": "Sort by sending status"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[sendOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by sending date"
      },
      {
        "name": "sort[modifiedOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by modification date"
      },
      {
        "name": "sort[delivered]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of delivered messages"
      },
      {
        "name": "sort[sent]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of sent messages"
      },
      {
        "name": "sort[clicks]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of link clicks"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Get the list of autoresponders.",
    "parameters": [
      {
        "name": "query[subject]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by subject"
      },
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by name"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by status"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Search autoresponder created from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Search autoresponder created to this date"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by campaign ID"
      },
      {
        "name": "query[type]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by type"
      },
      {
        "name": "query[triggerType]",
        "schema": "string",
        "required": false,
        "description": "Search autoresponder by triggerType"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort by name"
      },
      {
        "name": "sort[subject]",
        "schema": "string",
        "required": false,
        "description": "Sort by subject"
      },
      {
        "name": "sort[dayOfCycle]",
        "schema": "string",
        "required": false,
        "description": "Sort by cycle day"
      },
      {
        "name": "sort[delivered]",
        "schema": "string",
        "required": false,
        "description": "Sort by delivered"
      },
      {
        "name": "sort[openRate]",
        "schema": "string",
        "required": false,
        "description": "Sort by open rate"
      },
      {
        "name": "sort[clickRate]",
        "schema": "string",
        "required": false,
        "description": "Sort by click rate"
      },
      {
        "name": "sort[createdOn]",
        "schema": "string",
        "required": false,
        "description": "Sort by date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders",
    "method": "createNewAutoresponder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "Create autoresponder",
    "parameters": [
      {
        "name": "autoresponderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Q"
      },
      {
        "name": "href",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.getresponse.com/v3/autoresponders/Q"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Message 2"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "test12"
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "V"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromField",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "flags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sendSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statistics",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdOn",
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
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/autoresponders/statistics",
    "method": "getAllStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autoresponders",
    "typeScriptTag": "autoresponders",
    "description": "The statistics for all autoresponders",
    "parameters": [
      {
        "name": "query[groupBy]",
        "schema": "string",
        "required": false,
        "description": "Group results by time interval"
      },
      {
        "name": "query[autoreponderId]",
        "schema": "string",
        "required": false,
        "description": "The list of autoresponder resource IDs (string separated with '')"
      },
      {
        "name": "query[campaignId]",
        "schema": "string",
        "required": false,
        "description": "The list of campaign resource IDs (string separated with '')"
      },
      {
        "name": "query[createdOn][from]",
        "schema": "undefined",
        "required": false,
        "description": "Count data from this date"
      },
      {
        "name": "query[createdOn][to]",
        "schema": "undefined",
        "required": false,
        "description": "Count data to this date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/websites",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Websites",
    "typeScriptTag": "websites",
    "description": "Get the list of websites",
    "parameters": [
      {
        "name": "query[name]",
        "schema": "string",
        "required": false,
        "description": "Search websites by name"
      },
      {
        "name": "query[status]",
        "schema": "string",
        "required": false,
        "description": "Search websites by status"
      },
      {
        "name": "stats[from]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for websites from this date"
      },
      {
        "name": "stats[to]",
        "schema": "string",
        "required": false,
        "description": "Show statistics for websites to this date"
      },
      {
        "name": "sort[name]",
        "schema": "string",
        "required": false,
        "description": "Sort websites by name"
      },
      {
        "name": "sort[createdAt]",
        "schema": "string",
        "required": false,
        "description": "Sort websites by creation date"
      },
      {
        "name": "sort[updatedAt]",
        "schema": "string",
        "required": false,
        "description": "Sort websites by modification date"
      },
      {
        "name": "sort[pageViews]",
        "schema": "string",
        "required": false,
        "description": "Sort websites by page views"
      },
      {
        "name": "sort[visits]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of site visits"
      },
      {
        "name": "sort[uniqueVisitors]",
        "schema": "string",
        "required": false,
        "description": "Sort by number of unique visitors"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "List of fields that should be returned. Id is always returned. Fields should be separated by comma"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Requested number of results per page",
        "default": 100
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      }
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
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="GetResponse APIv3"
      apiBaseUrl="https://api.getresponse.com/v3"
      apiVersion="3.2024-03-04T09:53:07+0000"
      endpoints={134}
      sdkMethods={280}
      schemas={310}
      parameters={649}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/getresponse/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/getresponse/openapi.yaml"
      developerDocumentation="apireference.getresponse.com/"
    />
  );
}
  