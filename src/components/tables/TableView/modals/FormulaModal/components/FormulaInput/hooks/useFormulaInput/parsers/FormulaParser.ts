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
        result += `${el.dataset.id}::${el.textContent ?? ''}`
      } else {
        result += node.textContent || ''
      }
    })

    return result
  }

  public deserialize(formula: string): string {
    const deserializedText = formula.replace(
      /([^:\s]+)::[^\s]*/g,
      (_, id) => `[col:${id}]`
    )

    return deserializedText
  }

  public getLastWord(element: HTMLElement): string {
    const text = element.innerText || ''

    let cursorOffset = 0

    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const preRange = range.cloneRange()
      preRange.selectNodeContents(element)
      preRange.setEnd(range.endContainer, range.endOffset)
      cursorOffset = preRange.toString().length
    } else {
      return ''
    }

    cursorOffset = Math.min(cursorOffset, text.length)

    const textUntilCursor = text.slice(0, cursorOffset)

    if (textUntilCursor.endsWith(' ')) {
      return ''
    }

    const cleaned = textUntilCursor.replace(/[^\p{L}\p{N}\s]/gu, ' ')

    const match = cleaned.match(/([\p{L}\p{N}]+)$/u)

    return match ? match[0] : ''
  }

  private isColumnElement(node: Node): boolean {
    return (
      node.nodeType === Node.ELEMENT_NODE &&
      (node as HTMLElement).dataset.token === 'column'
    )
  }
}
