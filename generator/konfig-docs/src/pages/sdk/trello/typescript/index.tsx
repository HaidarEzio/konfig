import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function TrelloTypeScriptSdk() {
  return (
    <Sdk
      sdkName="trello-typescript-sdk"
      metaDescription="Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process."
      company="Trello"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/logo.png"
      clientNameCamelCase="trello"
      homepage="developer.atlassian.com/cloud/trello"
      lastUpdated={new Date("2024-01-31T21:23:25.312Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/favicon.ico"
      contactUrl="https://trello.com/home"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/actions/{idAction}",
    "method": "deleteActionsByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "deleteActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}",
    "method": "getActionsByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}",
    "method": "updateActionsByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/board",
    "method": "getActionsBoardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/board/{field}",
    "method": "getActionsBoardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/card",
    "method": "getActionsCardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/card/{field}",
    "method": "getActionsCardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/display",
    "method": "getActionsDisplayByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsDisplayByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/entities",
    "method": "getActionsEntitiesByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsEntitiesByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/list",
    "method": "getActionsListByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/list/{field}",
    "method": "getActionsListByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/member",
    "method": "getActionsMemberByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/member/{field}",
    "method": "getActionsMemberByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/memberCreator",
    "method": "getActionsMemberCreatorByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/memberCreator/{field}",
    "method": "getActionsMemberCreatorByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/organization",
    "method": "getActionsOrganizationByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/organization/{field}",
    "method": "getActionsOrganizationByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/text",
    "method": "updateActionsTextByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsTextByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/{field}",
    "method": "getActionsByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/batch",
    "method": "getBatch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch",
    "typeScriptTag": "batch",
    "description": "getBatch()",
    "parameters": [
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "list of API v1 GET routes, not including the version prefix"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards",
    "method": "addBoards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoards()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}",
    "method": "getBoardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "actionMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "cardChecklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "labelFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "labelsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "myPrefs",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}",
    "method": "updateBoardsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/actions",
    "method": "getBoardsActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/boardStars",
    "method": "getBoardsBoardStarsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsBoardStarsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/calendarKey/generate",
    "method": "addBoardsCalendarKeyGenerateByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsCalendarKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards",
    "method": "getBoardsCardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards/{filter}",
    "method": "getBoardsCardsByIdBoardByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards/{idCard}",
    "method": "getBoardsCardsByIdBoardByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "idCard"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "getBoardsChecklistsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "addBoardsChecklistsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/closed",
    "method": "updateBoardsClosedByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsClosedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/deltas",
    "method": "getBoardsDeltasByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsDeltasByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/desc",
    "method": "updateBoardsDescByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsDescByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/emailKey/generate",
    "method": "addBoardsEmailKeyGenerateByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsEmailKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/idOrganization",
    "method": "updateBoardsIdOrganizationByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsIdOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/blue",
    "method": "updateBoardsLabelNamesBlueByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesBlueByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/green",
    "method": "updateBoardsLabelNamesGreenByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesGreenByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/orange",
    "method": "updateBoardsLabelNamesOrangeByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesOrangeByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/purple",
    "method": "updateBoardsLabelNamesPurpleByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesPurpleByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/red",
    "method": "updateBoardsLabelNamesRedByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesRedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/yellow",
    "method": "updateBoardsLabelNamesYellowByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesYellowByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "getBoardsLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "addBoardsLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels/{idLabel}",
    "method": "getBoardsLabelsByIdBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoardByIdLabel()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "getBoardsListsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "addBoardsListsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists/{filter}",
    "method": "getBoardsListsByIdBoardByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/markAsViewed",
    "method": "addBoardsMarkAsViewedByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsMarkAsViewedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "getBoardsMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "updateBoardsMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{filter}",
    "method": "getBoardsMembersByIdBoardByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "deleteBoardsMembersByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "updateBoardsMembersByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}/cards",
    "method": "getBoardsMembersCardsByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersCardsByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/membersInvited",
    "method": "getBoardsMembersInvitedByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/membersInvited/{field}",
    "method": "getBoardsMembersInvitedByIdBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships",
    "method": "getBoardsMembershipsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "getBoardsMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "updateBoardsMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs",
    "method": "getBoardsMyPrefsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMyPrefsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/emailPosition",
    "method": "updateBoardsMyPrefsEmailPositionByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsEmailPositionByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/idEmailList",
    "method": "updateBoardsMyPrefsIdEmailListByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsIdEmailListByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showListGuide",
    "method": "updateBoardsMyPrefsShowListGuideByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowListGuideByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebar",
    "method": "updateBoardsMyPrefsShowSidebarByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarActivity",
    "method": "updateBoardsMyPrefsShowSidebarActivityByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarActivityByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarBoardActions",
    "method": "updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarMembers",
    "method": "updateBoardsMyPrefsShowSidebarMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/name",
    "method": "updateBoardsNameByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsNameByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/organization",
    "method": "getBoardsOrganizationByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/organization/{field}",
    "method": "getBoardsOrganizationByIdBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/powerUps",
    "method": "addBoardsPowerUpsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsPowerUpsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/powerUps/{powerUp}",
    "method": "deleteBoardsPowerUpsByIdBoardByPowerUp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsPowerUpsByIdBoardByPowerUp()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "powerUp",
        "schema": "string",
        "required": true,
        "description": "powerUp"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/background",
    "method": "updateBoardsPrefsBackgroundByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsBackgroundByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/calendarFeedEnabled",
    "method": "updateBoardsPrefsCalendarFeedEnabledByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCalendarFeedEnabledByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/cardAging",
    "method": "updateBoardsPrefsCardAgingByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardAgingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/cardCovers",
    "method": "updateBoardsPrefsCardCoversByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardCoversByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/comments",
    "method": "updateBoardsPrefsCommentsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCommentsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/invitations",
    "method": "updateBoardsPrefsInvitationsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsInvitationsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/permissionLevel",
    "method": "updateBoardsPrefsPermissionLevelByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsPermissionLevelByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/selfJoin",
    "method": "updateBoardsPrefsSelfJoinByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsSelfJoinByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/voting",
    "method": "updateBoardsPrefsVotingByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsVotingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/subscribed",
    "method": "updateBoardsSubscribedByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsSubscribedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/{field}",
    "method": "getBoardsByIdBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards",
    "method": "addCards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCards()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "deleteCardsByIdCard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "getCardsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersVoted",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberVotedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "stickerFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "updateCardsByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions",
    "method": "getCardsActionsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsActionsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/comments",
    "method": "addCardsActionsCommentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsActionsCommentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "deleteCardsActionsCommentsByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "updateCardsActionsCommentsByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "getCardsAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "addCardsAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mimeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "deleteCardsAttachmentsByIdCardByIdAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "getCardsAttachmentsByIdCardByIdAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/board",
    "method": "getCardsBoardByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/board/{field}",
    "method": "getCardsBoardByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checkItemStates",
    "method": "getCardsCheckItemStatesByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsCheckItemStatesByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}",
    "method": "updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklistCurrent",
        "schema": "string",
        "required": true,
        "description": "idChecklistCurrent"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem",
    "method": "addCardsChecklistCheckItemByIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
    "method": "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard",
    "method": "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name",
    "method": "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos",
    "method": "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state",
    "method": "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "getCardsChecklistsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "addCardsChecklistsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists/{idChecklist}",
    "method": "deleteCardsChecklistsByIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistsByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/closed",
    "method": "updateCardsClosedByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsClosedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/desc",
    "method": "updateCardsDescByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDescByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/due",
    "method": "updateCardsDueByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDueByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idAttachmentCover",
    "method": "updateCardsIdAttachmentCoverByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdAttachmentCoverByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idBoard",
    "method": "updateCardsIdBoardByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idLabels",
    "method": "addCardsIdLabelsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idLabels/{idLabel}",
    "method": "deleteCardsIdLabelsByIdCardByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdLabelsByIdCardByIdLabel()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idList",
    "method": "updateCardsIdListByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "addCardsIdMembersByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "updateCardsIdMembersByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers/{idMember}",
    "method": "deleteCardsIdMembersByIdCardByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdMembersByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "addCardsLabelsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "updateCardsLabelsByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels/{color}",
    "method": "deleteCardsLabelsByIdCardByColor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsLabelsByIdCardByColor()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "color"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/list",
    "method": "getCardsListByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/list/{field}",
    "method": "getCardsListByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/markAssociatedNotificationsRead",
    "method": "addCardsMarkAssociatedNotificationsReadByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMarkAssociatedNotificationsReadByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/members",
    "method": "getCardsMembersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "getCardsMembersVotedByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "addCardsMembersVotedByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted/{idMember}",
    "method": "deleteCardsMembersVotedByIdCardByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsMembersVotedByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/name",
    "method": "updateCardsNameByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsNameByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/pos",
    "method": "updateCardsPosByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsPosByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "getCardsStickersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "addCardsStickersByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "deleteCardsStickersByIdCardByIdSticker",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "getCardsStickersByIdCardByIdSticker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "updateCardsStickersByIdCardByIdSticker",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/subscribed",
    "method": "updateCardsSubscribedByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsSubscribedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/{field}",
    "method": "getCardsByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists",
    "method": "addChecklists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklists()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "deleteChecklistsByIdChecklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "getChecklistsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "updateChecklistsByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/board",
    "method": "getChecklistsBoardByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/board/{field}",
    "method": "getChecklistsBoardByIdChecklistByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/cards",
    "method": "getChecklistsCardsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/cards/{filter}",
    "method": "getChecklistsCardsByIdChecklistByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklistByFilter()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "getChecklistsCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "addChecklistsCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "checked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "getChecklistsCheckItemsByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/idCard",
    "method": "updateChecklistsIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/name",
    "method": "updateChecklistsNameByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsNameByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/pos",
    "method": "updateChecklistsPosByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsPosByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/{field}",
    "method": "getChecklistsByIdChecklistByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels",
    "method": "addLabels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "addLabels()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "deleteLabelsByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "deleteLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "getLabelsByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "updateLabelsByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/board",
    "method": "getLabelsBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/board/{field}",
    "method": "getLabelsBoardByIdLabelByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabelByField()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/color",
    "method": "updateLabelsColorByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsColorByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/name",
    "method": "updateLabelsNameByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsNameByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists",
    "method": "addLists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addLists()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}",
    "method": "getListsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}",
    "method": "updateListsByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/actions",
    "method": "getListsActionsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsActionsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/archiveAllCards",
    "method": "addListsArchiveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsArchiveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/board",
    "method": "getListsBoardByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/board/{field}",
    "method": "getListsBoardByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "getListsCardsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "addListsCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards/{filter}",
    "method": "getListsCardsByIdListByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdListByFilter()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/closed",
    "method": "updateListsClosedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsClosedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/idBoard",
    "method": "updateListsIdBoardByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsIdBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/moveAllCards",
    "method": "addListsMoveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsMoveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/name",
    "method": "updateListsNameByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsNameByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/pos",
    "method": "updateListsPosByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsPosByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/subscribed",
    "method": "updateListsSubscribedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsSubscribedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/{field}",
    "method": "getListsByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}",
    "method": "getMembersByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionBefore",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "boardMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "boardOrganization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardOrganizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "boardsInvited",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "savedSearches",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizations",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationPaidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationsInvited",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "organizationsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "notifications",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
      },
      {
        "name": "notificationsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "notificationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "notificationMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "notificationBefore",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "notificationSince",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "tokens",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium"
      },
      {
        "name": "customBoardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "customStickers",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "customEmoji",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}",
    "method": "updateMembersByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "avatarSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bio",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/colorBlind",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/minutesBetweenSummaries",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/actions",
    "method": "getMembersActionsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersActionsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/avatar",
    "method": "addMembersAvatarByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersAvatarByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/avatarSource",
    "method": "updateMembersAvatarSourceByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersAvatarSourceByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/bio",
    "method": "updateMembersBioByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBioByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "getMembersBoardBackgroundsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "addMembersBoardBackgroundsByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "getMembersBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "getMembersBoardStarsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "addMembersBoardStarsByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "deleteMembersBoardStarsByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "getMembersBoardStarsByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "updateMembersBoardStarsByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/idBoard",
    "method": "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/pos",
    "method": "updateMembersBoardStarsPosByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsPosByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boards",
    "method": "getMembersBoardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boards/{filter}",
    "method": "getMembersBoardsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardsInvited",
    "method": "getMembersBoardsInvitedByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardsInvited/{field}",
    "method": "getMembersBoardsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/cards",
    "method": "getMembersCardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/cards/{filter}",
    "method": "getMembersCardsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "getMembersCustomBoardBackgroundsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "addMembersCustomBoardBackgroundsByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "getMembersCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "addMembersCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji/{idCustomEmoji}",
    "method": "getMembersCustomEmojiByIdMemberByIdCustomEmoji",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMemberByIdCustomEmoji()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomEmoji",
        "schema": "string",
        "required": true,
        "description": "idCustomEmoji"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "getMembersCustomStickersByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "addMembersCustomStickersByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "deleteMembersCustomStickersByIdMemberByIdCustomSticker",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "getMembersCustomStickersByIdMemberByIdCustomSticker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: scaled or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/deltas",
    "method": "getMembersDeltasByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersDeltasByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/fullName",
    "method": "updateMembersFullNameByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersFullNameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/initials",
    "method": "updateMembersInitialsByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersInitialsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/notifications",
    "method": "getMembersNotificationsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
      },
      {
        "name": "readFilter",
        "schema": "string",
        "required": false,
        "description": "One of: all, read or unread"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/notifications/{filter}",
    "method": "getMembersNotificationsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/oneTimeMessagesDismissed",
    "method": "addMembersOneTimeMessagesDismissedByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersOneTimeMessagesDismissedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizations",
    "method": "getMembersOrganizationsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizations/{filter}",
    "method": "getMembersOrganizationsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizationsInvited",
    "method": "getMembersOrganizationsInvitedByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizationsInvited/{field}",
    "method": "getMembersOrganizationsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/colorBlind",
    "method": "updateMembersPrefsColorBlindByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsColorBlindByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/locale",
    "method": "updateMembersPrefsLocaleByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsLocaleByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/minutesBetweenSummaries",
    "method": "updateMembersPrefsMinutesBetweenSummariesByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsMinutesBetweenSummariesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "getMembersSavedSearchesByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "addMembersSavedSearchesByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "deleteMembersSavedSearchesByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "getMembersSavedSearchesByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "updateMembersSavedSearchesByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/name",
    "method": "updateMembersSavedSearchesNameByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/pos",
    "method": "updateMembersSavedSearchesPosByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/query",
    "method": "updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/tokens",
    "method": "getMembersTokensByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersTokensByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/username",
    "method": "updateMembersUsernameByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersUsernameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/{field}",
    "method": "getMembersByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/all/read",
    "method": "addNotificationsAllRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "addNotificationsAllRead()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "getNotificationsByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "card",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "updateNotificationsByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "unread",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/board",
    "method": "getNotificationsBoardByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/board/{field}",
    "method": "getNotificationsBoardByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/card",
    "method": "getNotificationsCardByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/card/{field}",
    "method": "getNotificationsCardByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/display",
    "method": "getNotificationsDisplayByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsDisplayByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/entities",
    "method": "getNotificationsEntitiesByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsEntitiesByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/list",
    "method": "getNotificationsListByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/list/{field}",
    "method": "getNotificationsListByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/member",
    "method": "getNotificationsMemberByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/member/{field}",
    "method": "getNotificationsMemberByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/memberCreator",
    "method": "getNotificationsMemberCreatorByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/memberCreator/{field}",
    "method": "getNotificationsMemberCreatorByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/organization",
    "method": "getNotificationsOrganizationByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/organization/{field}",
    "method": "getNotificationsOrganizationByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/unread",
    "method": "updateNotificationsUnreadByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsUnreadByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/{field}",
    "method": "getNotificationsByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations",
    "method": "addOrganizations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizations()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "deleteOrganizationsByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "getOrganizationsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberActivity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "updateOrganizationsByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/actions",
    "method": "getOrganizationsActionsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsActionsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/boards",
    "method": "getOrganizationsBoardsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/boards/{filter}",
    "method": "getOrganizationsBoardsByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/deltas",
    "method": "getOrganizationsDeltasByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsDeltasByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/desc",
    "method": "updateOrganizationsDescByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDescByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/displayName",
    "method": "updateOrganizationsDisplayNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDisplayNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "deleteOrganizationsLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "addOrganizationsLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "getOrganizationsMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "updateOrganizationsMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{filter}",
    "method": "getOrganizationsMembersByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "deleteOrganizationsMembersByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "updateOrganizationsMembersByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/all",
    "method": "deleteOrganizationsMembersAllByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersAllByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/cards",
    "method": "getOrganizationsMembersCardsByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersCardsByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/deactivated",
    "method": "updateOrganizationsMembersDeactivatedByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersDeactivatedByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/membersInvited",
    "method": "getOrganizationsMembersInvitedByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/membersInvited/{field}",
    "method": "getOrganizationsMembersInvitedByIdOrgByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships",
    "method": "getOrganizationsMembershipsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "getOrganizationsMembershipsByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "updateOrganizationsMembershipsByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/name",
    "method": "updateOrganizationsNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "deleteOrganizationsPrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "updateOrganizationsPrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/org",
    "method": "updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/private",
    "method": "updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/public",
    "method": "updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/externalMembersDisabled",
    "method": "updateOrganizationsPrefsExternalMembersDisabledByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsExternalMembersDisabledByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/googleAppsVersion",
    "method": "updateOrganizationsPrefsGoogleAppsVersionByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsGoogleAppsVersionByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "An email address with optional expansion tokens"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "updateOrganizationsPrefsOrgInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/permissionLevel",
    "method": "updateOrganizationsPrefsPermissionLevelByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsPermissionLevelByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/website",
    "method": "updateOrganizationsWebsiteByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsWebsiteByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/{field}",
    "method": "getOrganizationsByIdOrgByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/search",
    "method": "getSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearch()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384"
      },
      {
        "name": "idBoards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "idOrganizations",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "idCards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "modelTypes",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: actions, boards, cards, members or organizations"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "cardsPage",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100"
      },
      {
        "name": "cardBoard",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardList",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "partial",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/search/members",
    "method": "getSearchMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearchMembers()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 20"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "onlyOrgMembers",
        "schema": "string",
        "required": false,
        "description": "A boolean"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions",
    "method": "addSessions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "addSessions()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions/socket",
    "method": "getSessionsSocket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "getSessionsSocket()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions/{idSession}",
    "method": "updateSessionsByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions/{idSession}/status",
    "method": "updateSessionsStatusByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsStatusByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}",
    "method": "deleteTokensByToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}",
    "method": "getTokensByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions"
      },
      {
        "name": "webhooks",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/member",
    "method": "getTokensMemberByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/member/{field}",
    "method": "getTokensMemberByTokenByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByTokenByField()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "getTokensWebhooksByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "addTokensWebhooksByToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "addTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "updateTokensWebhooksByToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "updateTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "deleteTokensWebhooksByTokenByIdWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "getTokensWebhooksByTokenByIdWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/{field}",
    "method": "getTokensByTokenByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByTokenByField()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/types/{id}",
    "method": "getTypesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "type",
    "typeScriptTag": "type",
    "description": "getTypesById()",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks",
    "method": "addWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "addWebhooks()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/",
    "method": "updateWebhooks",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooks()",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "deleteWebhooksByIdWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "deleteWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "getWebhooksByIdWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "updateWebhooksByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/active",
    "method": "updateWebhooksActiveByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksActiveByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/callbackURL",
    "method": "updateWebhooksCallbackUrlByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksCallbackURLByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/description",
    "method": "updateWebhooksDescriptionByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksDescriptionByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/idModel",
    "method": "updateWebhooksIdModelByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksIdModelByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/{field}",
    "method": "getWebhooksByIdWebhookByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhookByField()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/1/appKey/generate\"  target=\"_blank\">Generate your application key</a>"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "<a href=\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\"  target=\"_blank\">Getting a token from a user</a>"
      }
    ],
    "responses": []
  }
]
    }
      language="TypeScript"
      apiTitle="Trello"
      apiBaseUrl="https://trello.com/1"
      apiVersion="1.0"
      endpoints={264}
      sdkMethods={324}
      schemas={122}
      parameters={1907}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/openapi.yaml"
    />
  );
}
  