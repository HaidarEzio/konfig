import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HyperplaneTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hyperplane-typescript-sdk"
      metaDescription={`Hyperplane builds the brain for financial institutions.

Our data platform uses first-party data for hyper-personalization and machine intelligence through specialized foundational models.`}
      company="Hyperplane"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/logo.jpg"
      companyKebabCase="hyperplane"
      clientNameCamelCase="hyperplane"
      homepage="hyperplane.ai"
      lastUpdated={new Date("2024-03-24T21:42:09.454Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","finance","machine_learning"]}
      methods={[
  {
    "url": "/auth/token",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Get Token",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4681f83e-a4e9-11ee-a506-0242ac120002"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "W5qNTpWIT81r5qE3wHrtwXBujKdmGAvx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
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
    "url": "/automl/lookalike",
    "method": "createLookalikeRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Create an AutoML lookalike request",
    "parameters": [
      {
        "name": "modelVersion",
        "schema": "string",
        "description": "Model Version"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "engagement_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGAGEMENT_TYPE"
      },
      {
        "name": "negative_label_users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "positive_label_users",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "run_description",
        "schema": "string",
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
    "url": "/automl/runs",
    "method": "getAllRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get all AutoML runs in a specified module",
    "parameters": [
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
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
    "url": "/automl/runs/{run_id}",
    "method": "getRunSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get run summary for a specified AutoML run",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
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
    "url": "/automl/runs/{run_id}/generate_batch_scores",
    "method": "rerunInferenceScores",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Rerun the inference and store the updated scores in the output connection of the module",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
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
    "url": "/automl/runs/{run_id}/rescore",
    "method": "rerunInference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Rerun inference on latest user snapshots to update scores",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
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
    "url": "/automl/runs/{run_id}/status",
    "method": "getRunStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get status of a specified AutoML run",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
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
    "url": "/automl/runs/{run_id}/status_batch_scores",
    "method": "getRunStatusBatchScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get status of the batch scores request for an AutoML run",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
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
    "url": "/automl/runs/{run_id}/users",
    "method": "getTopUsersExcludingTraining",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get top users from a specified AutoML run excluding training users",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "Run ID",
        "example": "RUN_ID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users scored in run per page. Between 1 and 10000. Defaults to 500",
        "default": 500
      },
      {
        "name": "allow_users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "block_users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tag_filters",
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
    "url": "/automl/users",
    "method": "getAvailableUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoML Service",
    "typeScriptTag": "autoMlService",
    "description": "Get available users for training an AutoML run in a specified module",
    "parameters": [
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users scored in run per page. Between 1 and 10000. Defaults to 500",
        "default": 500
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
    "url": "/batch/user/personas",
    "method": "getAllFacetAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Get all the facet attributes for a list of users.",
    "parameters": [
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "month",
        "schema": "string",
        "description": "Reference month for persona scores in `YYYY-MM` format."
      },
      {
        "name": "personaScoreThreshold",
        "schema": "number",
        "description": "Minimum user persona score threshold to be included in the response."
      },
      {
        "name": "user_ids",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/client/{access_key_id}",
    "method": "getByAccessKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Get Client",
    "parameters": [
      {
        "name": "accessKeyId",
        "schema": "string",
        "required": true,
        "description": "Access Key ID",
        "example": "ACCESS_KEY_ID"
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
    "url": "/health",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Health check",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/module/transaction-enrichment/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get statistics for transaction enrichment module.",
    "parameters": [
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "General statistics for a given transaction enrichment module"
      }
    ]
  },
  {
    "url": "/module/transaction-enrichment/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "List the users in a transaction enrichment module.",
    "parameters": [
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "userIdPrefix",
        "schema": "string",
        "description": "Prefix used to filter user_id results (e.g.: prefix = '2'-> users = ['23456', '24562'])."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of elements per page. Defaults to 100",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Page of users of a given module"
      }
    ]
  },
  {
    "url": "/persona",
    "method": "listExisting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "List existing personas.",
    "parameters": [
      {
        "name": "facetTypes",
        "schema": "string",
        "description": "Comma-separated facet types to select. By default, all personas are returned. Valid facet types are: interest, demographic, pre_defined_persona, custom."
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of personas per page, between 1 and 10000. Will return all personas if not specified."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response of users linked to a given persona"
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
    "url": "/persona",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Create a persona definition.",
    "parameters": [
      {
        "name": "modelVersion",
        "schema": "string",
        "description": "Model Version",
        "default": "\"latest\""
      },
      {
        "name": "company_facets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "demographic_facets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "interest_facets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "persona_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Young Professional"
      },
      {
        "name": "pre_defined_personas",
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
    "url": "/persona/{persona_id}",
    "method": "deleteDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Delete a persona definition.",
    "parameters": [
      {
        "name": "personaId",
        "schema": "string",
        "required": true,
        "description": "Persona ID",
        "example": "PERSONA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/persona/{persona_id}",
    "method": "getPersonaStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Fetch information and score statistics about a persona definition.",
    "parameters": [
      {
        "name": "personaId",
        "schema": "string",
        "required": true,
        "description": "Persona ID",
        "example": "PERSONA_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "month",
        "schema": "string",
        "description": "Reference month for persona scores in `YYYY-MM` format. Defaults to current month."
      },
      {
        "name": "personaScoreThreshold",
        "schema": "number",
        "description": "Minimum user persona score threshold to count a user as belonging to a persona in the response."
      }
    ],
    "responses": [
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
    "url": "/persona/{persona_id}/percentile_score",
    "method": "getPercentileScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Fetch score on a given percentile for a persona id.",
    "parameters": [
      {
        "name": "personaId",
        "schema": "string",
        "required": true,
        "description": "Persona ID",
        "example": "PERSONA_ID"
      },
      {
        "name": "percentile",
        "schema": "number",
        "required": true,
        "description": "Target percentile. Defaults to 50th percentile (i.e.: the median)",
        "example": 0,
        "default": 50
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "month",
        "schema": "string",
        "description": "Reference month for persona scores in `YYYY-MM` format. Defaults to current month."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Percentile and associated score."
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
    "url": "/persona/{persona_id}/users",
    "method": "getRankedUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "Get ranked list of users who match a persona definition.",
    "parameters": [
      {
        "name": "personaId",
        "schema": "string",
        "required": true,
        "description": "Persona ID",
        "example": "PERSONA_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of users scored in run per page, between 1 and 10000. Defaults to 500.",
        "default": 500
      },
      {
        "name": "month",
        "schema": "string",
        "description": "Reference month for persona scores in `YYYY-MM` format. Defaults to current month."
      },
      {
        "name": "personaScoreThreshold",
        "schema": "number",
        "description": "Minimum user persona score threshold for user to be included in the response."
      },
      {
        "name": "birth_date",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "blocklist",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "['1234']"
        ]
      },
      {
        "name": "branch",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "cbo_code",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "declared_monthly_income",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response of users linked to a given persona"
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
    "url": "/statistics/latest_month",
    "method": "getLatestMonth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "Get the latest month with valid data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/{user_id}/cashflow/categories",
    "method": "getUserCashflowCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get a user's cashflow aggregated per category.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Minimum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Maximum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Specifies if we must include only an specific account type. Can be 'CREDIT_CARD', 'DEBIT_CARD', 'SAVINGS', 'CHECKING', 'INVESTMENT', 'PENSION', or 'LOAN'."
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
    "url": "/user/{user_id}/cashflow/history",
    "method": "getUserCashflowHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get the cashflow history for a given user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Minimum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Maximum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "aggregation",
        "schema": "string",
        "description": "How to aggregate the cashflows in periods. Can be 'HOUR', 'DAY', 'WEEK', 'MONTH', or 'YEAR'."
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Specifies if we must include only an specific account type. Can be 'CREDIT_CARD', 'DEBIT_CARD', 'SAVINGS', 'CHECKING', 'INVESTMENT', 'PENSION', or 'LOAN'."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Historic of cashflows for a given user"
      }
    ]
  },
  {
    "url": "/user/{user_id}/cashflow/statistics",
    "method": "getUserCashflowStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get the cashflow statistics for a given user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Minimum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Maximum transaction date to be included (e.g. '2020-09-18 10:00:00')."
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
    "url": "/user/{user_id}/transactions",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get the transaction history for a given user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, starting at 1",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of elements per page",
        "default": 100
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Minimum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Maximum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "flowType",
        "schema": "string",
        "description": "The flow type from transactions to be returned, must be either 'inflow', or 'outflow'. Defaults to returning both."
      },
      {
        "name": "minAmount",
        "schema": "number",
        "description": "The minimum amount from transactions to be returned."
      },
      {
        "name": "maxAmount",
        "schema": "number",
        "description": "The maximum amount from transactions to be returned."
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Specifies if we must include only an specific account type."
      },
      {
        "name": "categories",
        "schema": "array",
        "description": "List of categories to filter. Accept only category codes present on our taxonomy."
      },
      {
        "name": "searchName",
        "schema": "string",
        "description": "Search for a specific string in the transaction description."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Historic of enriched transactions of a given user"
      }
    ]
  },
  {
    "url": "/user/{user_id}/transactions/statistics",
    "method": "getUserStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Enriched Transactions",
    "typeScriptTag": "enrichedTransactions",
    "description": "Get the transaction statistics for a given user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "Module ID",
        "example": "MODULE-ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Minimum\ttransaction\tdate\tto\tbe\tincluded\t(e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Maximum transaction date to be included (e.g. '2020-09-18 10:00:00')."
      },
      {
        "name": "flowType",
        "schema": "string",
        "description": "The flow type from transactions to be returned, must be either 'inflow', or 'outflow'. Defaults to returning both."
      },
      {
        "name": "minAmount",
        "schema": "number",
        "description": "The minimum amount from transactions to be returned."
      },
      {
        "name": "maxAmount",
        "schema": "number",
        "description": "The maximum amount from transactions to be returned."
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Specifies if we must include only an specific account type."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Transaction statistics for a given user"
      }
    ]
  },
  {
    "url": "/users/{user_id}/personas",
    "method": "listUserPersonas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Personas",
    "typeScriptTag": "personas",
    "description": "List personas associated with a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USER_ID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "description": "Module ID"
      },
      {
        "name": "month",
        "schema": "string",
        "description": "Reference month for persona scores in `YYYY-MM` format."
      },
      {
        "name": "personaScoreThreshold",
        "schema": "number",
        "description": "Minimum user persona score threshold to be included in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response of personas linked to a given user"
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
  }
]
    }
      language="TypeScript"
      apiTitle="Hyperplane API Gateway"
      apiBaseUrl="https://api.sandbox-65ebc.chico.ai/v1"
      apiVersion="1.0"
      endpoints={26}
      sdkMethods={28}
      schemas={60}
      parameters={105}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hyperplane/openapi.yaml"
      developerDocumentation="docs.hyperplane.ai/reference/post_auth-token"
    />
  );
}
  