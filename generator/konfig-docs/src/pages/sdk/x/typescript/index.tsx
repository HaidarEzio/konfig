import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function XTypeScriptSdk() {
  return (
    <Sdk
      sdkName="x-typescript-sdk"
      metaDescription="Publish & analyze posts, optimize ads, & create unique customer experiences with the X API, X Ads API, & X Embeds."
      company="X"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/logo.jpg"
      clientNameCamelCase="x"
      homepage="developer.x.com"
      lastUpdated={new Date("2024-02-16T17:42:11.445Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/favicon.ico"
      contactUrl="https://developer.twitter.com/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/2/compliance/jobs",
    "method": "listJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "List Compliance Jobs",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of Compliance Job to list."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of Compliance Job to list."
      },
      {
        "name": "complianceJobFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of ComplianceJob fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/compliance/jobs",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "Create compliance job",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resumable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/compliance/jobs/{id}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "Get Compliance Job",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Compliance Job to retrieve."
      },
      {
        "name": "complianceJobFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of ComplianceJob fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_conversations",
    "method": "createNewDmConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Create a new DM Conversation",
    "parameters": [
      {
        "name": "conversation_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "message",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "participant_ids",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_conversations/with/{participant_id}/dm_events",
    "method": "getDmEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Get DM Events for a DM Conversation",
    "parameters": [
      {
        "name": "participantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the participant user for the One to One DM conversation."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "required": false,
        "description": "The set of event_types to include in the results."
      },
      {
        "name": "dmEventFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of DmEvent fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_conversations/with/{participant_id}/messages",
    "method": "sendNewMessageToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Send a new message to a user",
    "parameters": [
      {
        "name": "participantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the recipient user that will receive the DM."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_conversations/{dm_conversation_id}/messages",
    "method": "sendNewMessageToDmConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Send a new message to a DM Conversation",
    "parameters": [
      {
        "name": "dmConversationId",
        "schema": "string",
        "required": true,
        "description": "The DM Conversation ID."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_conversations/{id}/dm_events",
    "method": "getDmEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Get DM Events for a DM Conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The DM Conversation ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "required": false,
        "description": "The set of event_types to include in the results."
      },
      {
        "name": "dmEventFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of DmEvent fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/dm_events",
    "method": "getRecentDmEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Messages",
    "typeScriptTag": "directMessages",
    "description": "Get recent DM Events",
    "parameters": [
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "required": false,
        "description": "The set of event_types to include in the results."
      },
      {
        "name": "dmEventFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of DmEvent fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists",
    "method": "createNewList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create List",
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
        "description": ""
      },
      {
        "name": "private",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}",
    "method": "deleteOwnedList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete List",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List to delete."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}",
    "method": "lookupByListId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "List lookup by List ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List."
      },
      {
        "name": "listFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of List fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}",
    "method": "updateOwnedList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update List.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List to modify."
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
        "name": "private",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}/followers",
    "method": "getFollowersByListId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that follow a List by the provided List ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}/members",
    "method": "getMembersByListId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that are members of a List by the provided List ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}/members",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Add a List member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List for which to add a member."
      },
      {
        "name": "user_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}/members/{user_id}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Remove a List member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List to remove a member."
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of User that will be removed from the List."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/lists/{id}/tweets",
    "method": "listByListId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "List Tweets timeline by List ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the List."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/openapi.json",
    "method": "getOpenApiSpec",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Returns the OpenAPI Specification document.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces",
    "method": "lookupSpaceIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Space lookup up Space IDs",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "The list of Space IDs to return."
      },
      {
        "name": "spaceFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Space fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "topicFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Topic fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces/by/creator_ids",
    "method": "lookupByCreatorIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Space lookup by their creators",
    "parameters": [
      {
        "name": "userIds",
        "schema": "array",
        "required": true,
        "description": "The IDs of Users to search through."
      },
      {
        "name": "spaceFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Space fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "topicFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Topic fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces/search",
    "method": "findMatchingSpaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Search for Spaces",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query."
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "The state of Spaces to search for."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "spaceFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Space fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "topicFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Topic fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces/{id}",
    "method": "lookupSpaceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Space lookup by Space ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Space to be retrieved."
      },
      {
        "name": "spaceFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Space fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "topicFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Topic fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces/{id}/buyers",
    "method": "getBuyersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Retrieve the list of Users who purchased a ticket to the given space",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Space to be retrieved."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/spaces/{id}/tweets",
    "method": "getTweets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Retrieve Tweets from a Space.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Space to be retrieved."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets",
    "method": "lookupByTweetIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Tweet lookup by Tweet IDs",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "A comma separated list of Tweet IDs. Up to 100 are allowed in a single request."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets",
    "method": "createTweet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Creation of a Tweet",
    "parameters": [
      {
        "name": "card_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direct_message_deep_link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "for_super_followers_only",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "geo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "media",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nullcast",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "poll",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quote_tweet_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reply",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reply_settings",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/compliance/stream",
    "method": "streamData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "Tweets Compliance stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "partition",
        "schema": "integer",
        "required": true,
        "description": "The partition number."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tweet compliance stream events."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/counts/all",
    "method": "getTweetCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Full archive search counts",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute)."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute)."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID."
      },
      {
        "name": "nextToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "The granularity for the search counts results."
      },
      {
        "name": "searchCountFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of SearchCount fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/counts/recent",
    "method": "getRecentTweetCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Recent search counts",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute)."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute)."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID."
      },
      {
        "name": "nextToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "The granularity for the search counts results."
      },
      {
        "name": "searchCountFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of SearchCount fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/firehose/stream",
    "method": "getFirehoseStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Firehose stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "partition",
        "schema": "integer",
        "required": true,
        "description": "The partition number."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/label/stream",
    "method": "streamTweetsLabelEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "Tweets Label stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tweet label stream events."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/sample/stream",
    "method": "streamSample",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Sample stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/sample10/stream",
    "method": "streamSample10",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Sample 10% stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "partition",
        "schema": "integer",
        "required": true,
        "description": "The partition number."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/search/all",
    "method": "searchAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Full-archive search",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute)."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute)."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of search results to be returned by a request."
      },
      {
        "name": "nextToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "This order in which to return results."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/search/recent",
    "method": "getRecentTweets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Recent search",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute)."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute)."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of search results to be returned by a request."
      },
      {
        "name": "nextToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "This order in which to return results."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/search/stream",
    "method": "getFilteredStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Filtered stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/search/stream/rules",
    "method": "searchStreamRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Rules lookup",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of Rule IDs."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This value is populated by passing the 'next_token' returned in a request to paginate through results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/search/stream/rules",
    "method": "addOrDeleteRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Add/Delete rules",
    "parameters": [
      {
        "name": "dryRun",
        "schema": "boolean",
        "required": false,
        "description": "Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A response from modifying user-specified stream filtering rules."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Tweet delete by Tweet ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Tweet to be deleted."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{id}",
    "method": "lookupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Tweet lookup by Tweet ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A single Tweet ID."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{id}/liking_users",
    "method": "listLikingUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that have liked the provided Tweet ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A single Tweet ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{id}/quote_tweets",
    "method": "getQuoteTweets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Retrieve Tweets that quote a Tweet.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A single Tweet ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to be returned."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "exclude",
        "schema": "array",
        "required": false,
        "description": "The set of entities to exclude (e.g. 'replies' or 'retweets')."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{id}/retweeted_by",
    "method": "getRetweetedByTweetIdUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that have retweeted the provided Tweet ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A single Tweet ID."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/tweets/{tweet_id}/hidden",
    "method": "hideReply",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Hide replies",
    "parameters": [
      {
        "name": "tweetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the reply that you want to hide or unhide."
      },
      {
        "name": "hidden",
        "schema": "boolean",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users",
    "method": "lookupByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User lookup by IDs",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "A list of User IDs, comma-separated. You can specify up to 100 IDs."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/by",
    "method": "lookupByUsernames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User lookup by usernames",
    "parameters": [
      {
        "name": "usernames",
        "schema": "array",
        "required": true,
        "description": "A list of usernames, comma-separated."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/by/username/{username}",
    "method": "lookupByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User lookup by username",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "A username."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/compliance/stream",
    "method": "streamUsersData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance",
    "typeScriptTag": "compliance",
    "description": "Users Compliance stream",
    "parameters": [
      {
        "name": "backfillMinutes",
        "schema": "integer",
        "required": false,
        "description": "The number of minutes of backfill requested."
      },
      {
        "name": "partition",
        "schema": "integer",
        "required": true,
        "description": "The partition number."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User compliance stream events."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/me",
    "method": "lookupMe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User lookup me",
    "parameters": [
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}",
    "method": "lookupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User lookup by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/blocking",
    "method": "getBlockedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that are blocked by provided User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to return results."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/blocking",
    "method": "blockUserById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Block User by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to block the target User."
      },
      {
        "name": "target_user_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/bookmarks",
    "method": "getUserBookmarks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "Bookmarks by User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to return results."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/bookmarks",
    "method": "addTweet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "Add Tweet to Bookmarks",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to add bookmarks."
      },
      {
        "name": "tweet_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/bookmarks/{tweet_id}",
    "method": "removeTweet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "Remove a bookmarked Tweet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User whose bookmark is to be removed."
      },
      {
        "name": "tweetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Tweet that the source User is removing from bookmarks."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/followed_lists",
    "method": "getFollowed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get User's Followed Lists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "listFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of List fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/followed_lists",
    "method": "followList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Follow a List",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that will follow the List."
      },
      {
        "name": "list_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/followed_lists/{list_id}",
    "method": "unfollowList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Unfollow a List",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that will unfollow the List."
      },
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "The ID of the List to unfollow."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/followers",
    "method": "getFollowersById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Followers by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/following",
    "method": "getFollowingUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Following by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/following",
    "method": "followUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Follow User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to follow the target User."
      },
      {
        "name": "target_user_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/liked_tweets",
    "method": "getLikedTweets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Returns Tweet objects liked by the provided User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/likes",
    "method": "likeTweet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Causes the User (in the path) to like the specified Tweet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to like the Tweet."
      },
      {
        "name": "tweet_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/likes/{tweet_id}",
    "method": "unlikeTweetById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Causes the User (in the path) to unlike the specified Tweet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to unlike the Tweet."
      },
      {
        "name": "tweetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Tweet that the User is requesting to unlike."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/list_memberships",
    "method": "getUserMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get a User's List Memberships",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "listFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of List fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/mentions",
    "method": "getMentionsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "User mention timeline by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/muting",
    "method": "getMutedUsersById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns User objects that are muted by the provided User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to return results."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/muting",
    "method": "muteUserById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Mute User by User ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to mute the target User."
      },
      {
        "name": "target_user_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/owned_lists",
    "method": "getUserOwnedLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get a User's Owned Lists.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get a specified 'page' of results."
      },
      {
        "name": "listFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of List fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/pinned_lists",
    "method": "getUserPinnedLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get a User's Pinned Lists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to return results."
      },
      {
        "name": "listFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of List fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/pinned_lists",
    "method": "pinList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Pin a List",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that will pin the List."
      },
      {
        "name": "list_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/pinned_lists/{list_id}",
    "method": "unpinList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Unpin a List",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User for whom to return results."
      },
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "The ID of the List to unpin."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/retweets",
    "method": "retweetTweetById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Causes the User (in the path) to retweet the specified Tweet.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to retweet the Tweet."
      },
      {
        "name": "tweet_id",
        "schema": "string",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/retweets/{source_tweet_id}",
    "method": "unretweetById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "Causes the User (in the path) to unretweet the specified Tweet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to retweet the Tweet."
      },
      {
        "name": "sourceTweetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Tweet that the User is requesting to unretweet."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/timelines/reverse_chronological",
    "method": "getUserHomeTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "User home timeline by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "exclude",
        "schema": "array",
        "required": false,
        "description": "The set of entities to exclude (e.g. 'replies' or 'retweets')."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{id}/tweets",
    "method": "listByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tweets",
    "typeScriptTag": "tweets",
    "description": "User Tweets timeline by User ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the User to lookup."
      },
      {
        "name": "sinceId",
        "schema": "string",
        "required": false,
        "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified."
      },
      {
        "name": "untilId",
        "schema": "string",
        "required": false,
        "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified."
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results."
      },
      {
        "name": "paginationToken",
        "schema": "string",
        "required": false,
        "description": "This parameter is used to get the next 'page' of results."
      },
      {
        "name": "exclude",
        "schema": "array",
        "required": false,
        "description": "The set of entities to exclude (e.g. 'replies' or 'retweets')."
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified."
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified."
      },
      {
        "name": "tweetFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Tweet fields to display."
      },
      {
        "name": "expansions",
        "schema": "array",
        "description": "A comma separated list of fields to expand."
      },
      {
        "name": "mediaFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Media fields to display."
      },
      {
        "name": "pollFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Poll fields to display."
      },
      {
        "name": "userFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of User fields to display."
      },
      {
        "name": "placeFields",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Place fields to display."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{source_user_id}/blocking/{target_user_id}",
    "method": "unblockUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unblock User by User ID",
    "parameters": [
      {
        "name": "sourceUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to unblock the target User."
      },
      {
        "name": "targetUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the User that the source User is requesting to unblock."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{source_user_id}/following/{target_user_id}",
    "method": "unfollowUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unfollow User",
    "parameters": [
      {
        "name": "sourceUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to unfollow the target User."
      },
      {
        "name": "targetUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the User that the source User is requesting to unfollow."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/2/users/{source_user_id}/muting/{target_user_id}",
    "method": "unmuteByUserId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unmute User by User ID",
    "parameters": [
      {
        "name": "sourceUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the authenticated source User that is requesting to unmute the target User."
      },
      {
        "name": "targetUserId",
        "schema": "string",
        "required": true,
        "description": "The ID of the User that the source User is requesting to unmute."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
      apiTitle="Twitter API v2"
      apiBaseUrl="https://api.twitter.com"
      apiVersion="2.62"
      endpoints={67}
      sdkMethods={80}
      schemas={235}
      parameters={417}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/openapi.yaml"
    />
  );
}
  