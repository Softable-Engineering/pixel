// Utils
import { CursorManager } from '../cursor'
import { FormulaParser } from '../parsers'
import { FormulaRenderer } from '../renderer'
import { FormulaTokenizer } from '../tokenizer'

// Types
import type { FunctionDescriptor } from '../../../types'
import type { Column } from '@components/tables/TableView/modals/FormulaModal/types'

export class FormulaEditor {
  private tokenizer: FormulaTokenizer
  private cursorManager: CursorManager
  private renderer: FormulaRenderer
  private parser: FormulaParser
  private onSearchChange: (lastWord: string) => void

  constructor(
    private element: HTMLElement,
    functions: FunctionDescriptor[],
    columns: Column[],
    onSearchChange: (lastWord: string) => void
  ) {
    this.tokenizer = new FormulaTokenizer(functions)
    this.cursorManager = new CursorManager(element)
    this.renderer = new FormulaRenderer(element, columns)
    this.parser = new FormulaParser()
    this.onSearchChange = onSearchChange
  }

  public applyTokenization(): void {
    const cursorOffset = this.cursorManager.getOffset()
    const { text, columnPositions } = this.parser.extractText(this.element)
    const tokens = this.tokenizer.tokenize(text)
    this.renderer.render(tokens, columnPositions)
    this.cursorManager.restoreOffset(cursorOffset)

    const lastWord = this.parser.getLastWord(this.element)
    this.onSearchChange(lastWord)
  }

  public handleInput(): void {
    this.applyTokenization()
  }

  public serialize(): string {
    return this.parser.serialize(this.element)
  }

  public deserialize(formula: string) {
    const text = this.parser.deserialize(formula)

    this.element.innerHTML = text
    this.applyTokenization()

    this.cursorManager.restoreOffset(text.length)
  }

  public getElement(): HTMLElement {
    return this.element
  }

  public insertText(textToInsert: string, offsetText?: number): FormulaEditor {
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return this

    const range = selection.getRangeAt(0)
    const cursorNode = range.startContainer
    const startOffset = this.cursorManager.getOffset()

    if (cursorNode.nodeType === Node.TEXT_NODE) {
      const textNode = cursorNode as Text
      const cursorOffset = range.startOffset
      const textContent = textNode.textContent ?? ''

      const beforeCursor = textContent.slice(0, cursorOffset)
      const afterCursor = textContent.slice(cursorOffset)

      // Use regex to find the start of the current word
      const beforeMatch = beforeCursor.match(/([\wÀ-ÿ.]+)$/) // Last contiguous sequence of non-space characters before cursor
      const wordStart = beforeMatch
        ? beforeCursor.lastIndexOf(beforeMatch[1])
        : cursorOffset

      // Use regex to find the end of the current word
      const afterMatch = afterCursor.match(/^([\wÀ-ÿ.]+)/) // First contiguous sequence of non-space characters after cursor
      const wordEnd = afterMatch
        ? cursorOffset + afterMatch[0].length
        : cursorOffset

      // Set the range to replace only the current word
      range.setStart(textNode, wordStart)
      range.setEnd(textNode, wordEnd)

      const newElement = document.createTextNode(textToInsert)
      range.deleteContents()
      range.insertNode(newElement)

      const { text, columnPositions } = this.parser.extractText(this.element)

      const tokens = this.tokenizer.tokenize(text + ' ')
      this.renderer.render(tokens, columnPositions)

      const textOffset = offsetText ? offsetText : textToInsert.length
      const targetOffset = startOffset + textOffset

      this.cursorManager.restoreOffset(targetOffset)
    } else if (cursorNode.nodeType === Node.ELEMENT_NODE) {
      const newElement = document.createTextNode(textToInsert)
      // Insert the element at the caret position
      range.deleteContents()
      range.insertNode(newElement)

      const { text, columnPositions } = this.parser.extractText(this.element)

      const tokens = this.tokenizer.tokenize(text + ' ')
      this.renderer.render(tokens, columnPositions)

      const textOffset = offsetText ? offsetText : textToInsert.length
      const targetOffset = startOffset + textOffset

      this.cursorManager.restoreOffset(targetOffset)
    }

    return this
  }
}
