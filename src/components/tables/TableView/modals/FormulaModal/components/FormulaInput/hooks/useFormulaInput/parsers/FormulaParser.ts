// Utils
import {
  COLUMN_TOKEN_PREFIX,
  COLUMN_TOKEN_SUFFIX
} from '../constants/tokenizer'

// Types
import type { ColumnPosition } from '../types'

export class FormulaParser {
  public extractText(element: HTMLElement): {
    text: string
    columnPositions: ColumnPosition[]
  } {
    let text = ''
    const columnPositions: ColumnPosition[] = []

    element.childNodes.forEach(node => {
      if (this.isColumnElement(node)) {
        const el = node as HTMLElement
        columnPositions.push({ position: text.length, node: el })
        text += `${COLUMN_TOKEN_PREFIX}${el.dataset.id}${COLUMN_TOKEN_SUFFIX}`
      } else {
        text += node.textContent || ''
      }
    })

    return { text, columnPositions }
  }

  public serialize(element: HTMLElement): string {
    let result = ''

    element.childNodes.forEach(node => {
      if (this.isColumnElement(node)) {
        const el = node as HTMLElement

        const labelEl = el.querySelector('.column-label') as HTMLElement | null

        const label = labelEl
          ? (labelEl.textContent ?? '').trim()
          : (el.dataset.label ?? '').trim()

        result += `${el.dataset.id}::${label}`
      } else {
        result += node.textContent || ''
      }
    })

    return result
  }

  public deserialize(formula: string): string {
    // const deserializedText = formula.replace(
    //   /([^:\s]+)::[^\s]*/g,
    //   (_, id) => `[col:${id}]`
    // )

    // const deserializedText = formula.replace(
    //   /([0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12})::([A-Za-z0-9_]+)/g,
    //   (_match, uuid, columnName) => `[col:${columnName}@@@${uuid}]`
    // )

    const deserializedText = formula.replace(
      /([A-Za-z0-9_]+)@@@([0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12})::[A-Za-z0-9_]+/g,
      (_match, columnName, uuid) => `[col:${columnName}@@@${uuid}]`
    )

    return deserializedText
  }

  public getLastWord(element: HTMLElement): string {
    const selection = window.getSelection()

    if (!selection) return ''

    if (selection.rangeCount > 0 && selection.isCollapsed) {
      const range = selection.getRangeAt(0)

      const cloneRange = range.cloneRange()
      cloneRange.setStart(element, 0)
      const beforeText = cloneRange.toString()

      const lastWordMatch = beforeText.match(/(\w+)(?!.*\w)$/)
      const lastWord = lastWordMatch ? lastWordMatch[1] : ''

      return lastWord
    }

    return ''
  }

  private isColumnElement(node: Node): boolean {
    return (
      node.nodeType === Node.ELEMENT_NODE &&
      (node as HTMLElement).dataset.token === 'column'
    )
  }
}
