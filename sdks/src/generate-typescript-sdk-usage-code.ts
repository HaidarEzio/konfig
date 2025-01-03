import { SecuritySchemes } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import snakeCase from "lodash.snakecase";

export function generateTypescriptSdkUsageCode({
  sdkName,
  clientName,
  securitySchemes,
}: {
  sdkName: string;
  clientName: string;
  securitySchemes: SecuritySchemes;
}): string {
  sdkName = sdkName.replace("{language}", "typescript");
  const setupLines: string[] = [];
  const usedKeys = new Set<string>();
  for (const key in securitySchemes) {
    let newLines: string[] = [];
    const addKey = (key: string, value: string) => {
      if (usedKeys.has(key)) {
        // add with comment
        newLines.push(`    // ${key}: "${value}"`);
      } else {
        newLines.push(`    ${key}: "${value}"`);
      }
      usedKeys.add(key);
    };
    const securityScheme = securitySchemes[key];
    if (securityScheme.description !== undefined) {
      if (securityScheme.description.includes("\n")) {
        const lines = securityScheme.description.split("\n");
        newLines.push(`    /*`);
        for (const line of lines) {
          newLines.push(`     * ${line}`);
        }
        newLines.push(`     */`);
      } else {
        newLines.push(`    // ${securityScheme.description}`);
      }
    }
    if (securityScheme.type === "apiKey") {
      addKey(camelcase(key), snakeCase(securityScheme.name).toUpperCase());
    } else if (securityScheme.type === "http") {
      if (securityScheme.scheme.toLocaleLowerCase() === "basic") {
        addKey("username", "USERNAME");
        addKey("password", "PASSWORD");
      } else if (securityScheme.scheme.toLocaleLowerCase() === "bearer") {
        addKey(camelcase(key), snakeCase(key).toUpperCase());
      } else if (securityScheme.scheme.toLocaleLowerCase() === "digest") {
        addKey("username", "USERNAME");
        addKey("password", "PASSWORD");
      }
    } else if (securityScheme.type === "oauth2") {
      if ("flows" in securityScheme) {
        if (securityScheme.flows.implicit !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("redirectUri", "REDIRECT_URI");
        } else if (securityScheme.flows.password !== undefined) {
          addKey("username", "USERNAME");
          addKey("password", "PASSWORD");
        } else if (securityScheme.flows.clientCredentials !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("clientSecret", "CLIENT_SECRET");
        } else if (securityScheme.flows.authorizationCode !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("clientSecret", "CLIENT_SECRET");
          addKey("redirectUri", "REDIRECT_URI");
        }
      }
    } else if (securityScheme.type === "openIdConnect") {
      addKey("clientId", "CLIENT_ID");
      addKey("clientSecret", "CLIENT_SECRET");
    }
    setupLines.push(...newLines);
  }

  // only add comma to lines that are not at the end and don't start with "//"
  const setupLinesWithCommas = setupLines.map((line, index) => {
    if (
      line.endsWith(",") ||
      line.trim().startsWith("//") ||
      line.trim().startsWith("/*") ||
      line.trim().startsWith("*") ||
      line.trim().startsWith("*/") ||
      index === setupLines.length - 1
    ) {
      return line;
    }
    return `${line},`;
  });

  const lines: string[] = [
    `import { ${clientName} } from '${sdkName}';`,
    "",
    ...(setupLines.length > 0
      ? [
          `const ${camelcase(clientName)} = new ${clientName}({`,
          ...setupLinesWithCommas,
          "})",
        ]
      : [`const ${camelcase(clientName)} = new ${clientName}()`]),
  ];
  return lines.join("\n");
}
