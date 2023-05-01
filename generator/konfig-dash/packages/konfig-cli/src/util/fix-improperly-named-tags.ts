import boxen from 'boxen'
import * as inquirer from 'inquirer'
import { getOperations, Spec, TagObject, tagSchema } from 'konfig-lib'
import { Progress } from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'

export async function fixImproperlyNamedTags({
  spec,
  progress,
  alwaysYes,
}: {
  spec: Spec['spec']
  progress: Progress
  alwaysYes: boolean
}): Promise<number> {
  let numberOfImproperlyNamedTags = 0
  if (spec.tags === undefined) return numberOfImproperlyNamedTags
  for (const tag of spec.tags) {
    const parseResult = tagSchema.safeParse(tag.name)
    if (parseResult.success) continue
    console.log(
      boxen(
        `Detected improperly named Tag "${tag.name}"\nhttps://docs.konfigthis.com/reference/lint-rules#tag-naming-convention"`,
        {
          title: 'Improper Tag Detected',
          padding: 1,
          borderColor: 'red',
        }
      )
    )
    // Improper tag detected, lets rename it

    // first, check if there is saved tag rename
    const savedName = progress.getTagRename({ oldName: tag.name })
    if (savedName !== undefined) {
      // if yes, ask to use it
      const confirm = await inquirerConfirm({
        message: `Use saved Tag name: "${savedName}"`,
        alwaysYes,
      })
      if (confirm) {
        console.log(
          boxen(savedName, {
            title: 'Using Saved Tag Name',
            padding: 1,
            borderColor: 'blue',
          })
        )
        // Use saved progress
        renameTag({
          oldName: tag.name,
          newName: savedName,
          progress,
          spec,
          tag,
        })
        numberOfImproperlyNamedTags++
        continue
      }
    }

    // if no, prompt input
    const { newName } = await inquirer.prompt<{ newName: string }>([
      {
        type: 'input',
        name: 'newName',
        message: `Enter new Tag name:`,
        validate(newName: string) {
          const parseResult = tagSchema.safeParse(newName)
          if (!parseResult.success) return false
          if (spec.tags === undefined) return true
          const conflictingTagName = spec.tags
            .map((t) => t.name)
            .find((tagName) => tagName === newName)
          if (conflictingTagName !== undefined)
            return `New Tag name must be unique (conflicts with "${conflictingTagName}")`
          return true
        },
      },
    ])

    // save progress
    renameTag({
      oldName: tag.name,
      newName: newName,
      progress,
      spec,
      tag,
    })
    numberOfImproperlyNamedTags++
  }

  return numberOfImproperlyNamedTags
}

function renameTag({
  oldName,
  newName,
  progress,
  spec,
  tag,
}: {
  oldName: string
  newName: string
  progress: Progress
  spec: Spec['spec']
  tag: TagObject
}) {
  // Rename everywhere in spec
  tag.name = newName
  const operations = getOperations({ spec })
  for (const { operation } of operations) {
    if (operation.tags === undefined) continue
    if (!operation.tags.includes(oldName)) continue
    operation.tags = operation.tags.map((tag) =>
      tag === oldName ? newName : tag
    )
  }

  progress.saveTagRename({ oldName, newName })
}
