import * as fs from 'fs-extra'
import {
  isJsonString,
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
  parseSpec,
  POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
} from 'konfig-lib'
import boxen from 'boxen'
import { Progress } from './fix-progress'
import { oasYamlDump } from './oas-yaml-dump'
import { getSpecPath } from './get-spec-path'
import { fixOas } from './fix-oas'
import path from 'path'
import { oasJsonDump } from './oas-json-dump'
import { getSpecInputPath } from './get-spec-input-path'
import { parseKonfigYaml } from './parse-konfig-yaml'

interface FixOptions {
  format?: boolean
  specInputPath?: string
  spec?: string
  auto?: boolean
  konfigDir?: string
  skipMissingResponseDescriptionFix?: boolean
  skipListUsageSecurity?: boolean
  alwaysYes?: boolean
}

export async function executeFixCommand(options: FixOptions): Promise<void> {
  const flags = {
    ...options,
    auto: options.auto ?? true,
    alwaysYes: options.alwaysYes ?? true,
  }

  if (flags.spec === undefined) {
    flags.spec = getSpecPath({ konfigDir: flags.konfigDir })
    flags.specInputPath =
      getSpecInputPath({ konfigDir: flags.konfigDir }) ?? flags.spec
  }
  if (flags.spec === undefined) {
    throw Error(
      `Either specify path to OAS with -s flag or assign "specPath" field in "konfig.yaml"`
    )
  }

  if (flags.specInputPath === undefined) throw Error(`This shouldn't happen`)

  const prependKonfigDir = ({ specPath }: { specPath: string }) => {
    return flags.konfigDir !== undefined
      ? path.join(flags.konfigDir, specPath)
      : specPath
  }

  const { parsedKonfigYaml } = parseKonfigYaml({
    configDir: flags.konfigDir ?? process.cwd(),
  })
  const specInputPath = prependKonfigDir({ specPath: flags.specInputPath })
  const specOutputPath = prependKonfigDir({ specPath: flags.spec })
  const rawSpec = fs.readFileSync(specInputPath, 'utf-8')
  let spec = await parseSpec(rawSpec)

  if (flags.format) {
    fs.writeFileSync(flags.spec, oasYamlDump(spec))
    return
  }

  const progress: Progress = Progress.getSaved({
    konfigDir: flags.konfigDir ?? process.cwd(),
    progressYamlPathOverride: parsedKonfigYaml.progressYamlPath,
  })

  const {
    issuesFixed,
    infoDescriptionFixed,
    numberOfMissingResponseDescriptionsAdded,
    numberOfExamplesFixed,
    numberOfUpdatedOperationIds,
    numberOfMissingTags,
    numberOfTrailingSlashesFixed,
    numberOfMissing200ResponsesAdded,
    numberOfParametersConvertedToSecurityRequirements,
    numberOfEmptyRequestBodiesRemoved,
    numberOfListUsagesOfSecurityFixed,
    numberOfImproperlyNamedTags,
    numberOfRedundantSecurityAndParametersFixed,
    numberOfObjectsWithNoPropertiesFixed,
    numberOfSchemasDefined,
    numberOfParametersRemovedForNewSecurityScheme,
    numberOfUnstructuredRequestBodiesFixed,
    numberOfIgnorePotentialIncorrectTypeAdded,
    numberOfCustomModifications,
    numberOfIgnoreObjectsWithNoPropertiesAdded,
    numberOfEmptyResponseBodySchemasFixed,
    numberOfDuplicateTagNamesFixed,
    numberOfInvalidServerUrlsFixed,
    numberOfRedundantSecuritySchemesRemoved,
    numberOfExampleAndExamplesFixed,
    numberOfDisallowedHeaderNamesRemoved,
    numberOfNewTagNames,
  } = await fixOas({
    spec,
    progress,
    konfigYaml: parsedKonfigYaml,
    alwaysYes: flags.alwaysYes,
    auto: flags.auto,
    skipMissingResponseDescription: flags.skipMissingResponseDescriptionFix,
    skipFixListUsageSecurity: flags.skipListUsageSecurity,
  })

  fs.writeFileSync(
    specOutputPath,
    isJsonString(rawSpec) ? oasJsonDump(spec.spec) : oasYamlDump(spec.spec)
  )

  console.log(
    boxen(
      `Updated ${numberOfUpdatedOperationIds} operation IDs
Made ${numberOfCustomModifications} custom modifications
Renamed ${numberOfImproperlyNamedTags} improperly named tags
Removed ${numberOfDisallowedHeaderNamesRemoved} disallowed headers removed
Added ${numberOfIgnoreObjectsWithNoPropertiesAdded} ${OBJECT_WITH_NO_PROPERTIES_RULE_NAME} ignore rule
Added ${numberOfIgnorePotentialIncorrectTypeAdded} ${POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME} ignore rule
Added ${infoDescriptionFixed} missing info description
Added ${numberOfMissingResponseDescriptionsAdded} missing response descriptions
Added ${numberOfMissingTags} missing tags
Added ${numberOfEmptyResponseBodySchemasFixed} empty response body schemas
Added ${numberOfSchemasDefined} named schemas
Added ${numberOfMissing200ResponsesAdded} missing 2xx responses
Added ${numberOfNewTagNames} new tag names
Fixed ${numberOfDuplicateTagNamesFixed} duplicate tag names fixed
Fixed ${numberOfInvalidServerUrlsFixed} invalid server URLs fixed
Fixed ${numberOfUnstructuredRequestBodiesFixed} unstructured request bodies
Fixed ${numberOfObjectsWithNoPropertiesFixed} objects with no properties
Fixed ${numberOfExampleAndExamplesFixed} redundant "example" & "examples" fields
Fixed ${numberOfExamplesFixed} examples with invalid schemas
Fixed ${numberOfParametersConvertedToSecurityRequirements} parameters that should be security requirements
Fixed ${numberOfListUsagesOfSecurityFixed} list usages of security
Removed ${numberOfTrailingSlashesFixed} trailing slashes
Removed ${numberOfRedundantSecurityAndParametersFixed} redundant security requirement and parameters
Removed ${numberOfRedundantSecuritySchemesRemoved} redundant security schemes
Removed ${numberOfParametersRemovedForNewSecurityScheme} parameters replace with security requirement
Removed ${numberOfEmptyRequestBodiesRemoved} empty request bodies`,
      {
        title: `Fixed ${issuesFixed} Issues`,
        borderColor: issuesFixed === 0 ? 'gray' : 'green',
        padding: 1,
      }
    )
  )
}