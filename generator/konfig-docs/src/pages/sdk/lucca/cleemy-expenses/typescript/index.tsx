import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LuccaCleemyExpensesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lucca-cleemy-expenses-typescript-sdk"
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
      company="Lucca"
      serviceName="Cleemy Expenses"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/logo.svg"
      companyKebabCase="lucca"
      clientNameCamelCase="luccaCleemyExpenses"
      homepage="lucca-hr.com"
      lastUpdated={new Date("2024-03-26T19:55:14.920Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/favicon.png"
      contactUrl="https://www.lucca.fr"
      contactEmail="developers@lucca.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","resource_management","human_resources","scheduling","time_management","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/v3/expenseTempItems",
    "method": "listTempItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "List ExpenseTempItems (temporary expense)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "array",
        "description": "Comma-separated list of user identifiers (int)."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "{fieldName},{'asc'||'desc'}. Example: `?orderby=purchasedOn,desc`"
      },
      {
        "name": "purchasedOn",
        "schema": "string",
        "description": "Examples: `between,2022-01-01,202201-31`."
      },
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/expenseTempItems",
    "method": "createNewTemporaryExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Create a new temporary expense",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "purchasedOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURCHASEDON"
      },
      {
        "name": "originalTransaction",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "processedAmounts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expenseNatureId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "mileage",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "effectiveQuantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "attendees",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "axisSections",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expenseReceipts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedActions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/expenseTempItems/{expenseTempItemId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Get an ExpenseTempItem by id",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/expenseTempItems/{expenseTempItemId}",
    "method": "updateExpenseTempItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Update an ExpenseTempItem by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "purchasedOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURCHASEDON"
      },
      {
        "name": "originalTransaction",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "processedAmounts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expenseNatureId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "mileage",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "effectiveQuantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "attendees",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "axisSections",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expenseReceipts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedActions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/expenseClaims/creation",
    "method": "createNewExpenseClaim",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ExpenseClaims",
    "typeScriptTag": "expenseClaims",
    "description": "Create a new ExpenseClaim",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/expenseClaims",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExpenseClaims",
    "typeScriptTag": "expenseClaims",
    "description": "List ExpenseClaims",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "array",
        "description": "Comma-separated list of user identifiers (int)."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "{fieldName},{'asc'||'desc'}. Example: `?orderby=declaredOn,desc`"
      },
      {
        "name": "declaredOn",
        "schema": "string",
        "description": "Examples: `between,2022-01-01,202201-31`."
      },
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      },
      {
        "name": "statusId",
        "schema": "string",
        "description": "1: Created; 2: PartiallyApproved; 3: Approved; 4: Controlled; 5: ApprovedAndControlled; 6: PaymentInitiated; 7: Paid; 8: Refused; 9: Cancelled. Examples: `2,3` or `PartiallyApproved,Approved`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Cleemy Expenses"
      apiBaseUrl="https://example.ilucca.net"
      apiVersion="1.0"
      endpoints={4}
      sdkMethods={8}
      schemas={23}
      parameters={53}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/cleemy-expenses/openapi.yaml"
      developerDocumentation="developers.lucca.fr/"
    />
  );
}
  