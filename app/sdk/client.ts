import { createClient } from "./createClient";
    
import { operationUrlObject as migrateAgentAdminOperationUrlObject, operations as migrateAgentAdminOperations } from "./migrate-agent-admin";
import { operationUrlObject as migrateAgentOpenapiOperationUrlObject, operations as migrateAgentOpenapiOperations } from "./migrate-agent-openapi";
import { operationUrlObject as migrateAgentUserThreadOperationUrlObject, operations as migrateAgentUserThreadOperations } from "./migrate-agent-user-thread";
import { operationUrlObject as migrateAgentUserOperationUrlObject, operations as migrateAgentUserOperations } from "./migrate-agent-user";
import { operationUrlObject as migrateOauthAdminOperationUrlObject, operations as migrateOauthAdminOperations } from "./migrate-oauth-admin";
import { operationUrlObject as migrateOauthStateOperationUrlObject, operations as migrateOauthStateOperations } from "./migrate-oauth-state";


 
  //@ts-ignore
  export const migrateAgentAdmin = createClient<migrateAgentAdminOperations>(migrateAgentAdminOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-agent-admin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.AGENT_ADMIN_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  

 
  //@ts-ignore
  export const migrateAgentOpenapi = createClient<migrateAgentOpenapiOperations>(migrateAgentOpenapiOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-agent-openapi",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.AGENT_OPENAPI_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  

 
  //@ts-ignore
  export const migrateAgentUserThread = createClient<migrateAgentUserThreadOperations>(migrateAgentUserThreadOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-agent-user-thread",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.AGENT_USER_THREAD_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  

 
  //@ts-ignore
  export const migrateAgentUser = createClient<migrateAgentUserOperations>(migrateAgentUserOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-agent-user",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.AGENT_USER_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  

 
  //@ts-ignore
  export const migrateOauthAdmin = createClient<migrateOauthAdminOperations>(migrateOauthAdminOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-oauth-admin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OAUTH_ADMIN_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  

 
  //@ts-ignore
  export const migrateOauthState = createClient<migrateOauthStateOperations>(migrateOauthStateOperationUrlObject, {
    baseUrl: "https://data.actionschema.com/migrate-oauth-state",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OAUTH_STATE_CRUD_AUTH_TOKEN
    },
    timeoutSeconds: 60,
  });
  