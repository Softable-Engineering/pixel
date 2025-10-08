// Types
import type { ItemPathParams } from '../types'

export function getNextItemPath(params: ItemPathParams): number[] {
  const { current, items, direction } = params

  if (!items.length) return [0, 0]

  const [groupIndex, optionIndex] = current
  const currentGroup = items[groupIndex]

  if (direction === 'down') {
    const nextOption = currentGroup.options[optionIndex + 1]
    const nextGroup = items[groupIndex + 1]

    if (nextOption) return [groupIndex, optionIndex + 1]
    else if (nextGroup) return [groupIndex + 1, 0]
    else return [0, 0]
  }

  if (direction === 'up') {
    const prevOption = currentGroup.options[optionIndex - 1]
    const prevGroup = items[groupIndex - 1]

    if (prevOption) return [groupIndex, optionIndex - 1]
    else if (prevGroup) {
      const lastOptionIndex = prevGroup.options.length - 1
      return [groupIndex - 1, lastOptionIndex]
    } else {
      const lastGroupIndex = items.length - 1
      const lastOptionIndex = items[lastGroupIndex].options.length - 1
      return [lastGroupIndex, lastOptionIndex]
    }
  }

  return [0, 0]
}
