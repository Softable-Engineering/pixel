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

  public getElement(): HTMLElement {
    return this.element
  }

  public insertText(textToInsert: string, offsetText?: number): FormulaEditor {
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return this

    const startOffset = this.cursorManager.getOffset()

    const range = selection.getRangeAt(0)
    range.deleteContents()
    range.insertNode(document.createTextNode(textToInsert))

    const { text, columnPositions } = this.parser.extractText(this.element)
    const tokens = this.tokenizer.tokenize(text)
    this.renderer.render(tokens, columnPositions)

    const textOffset = offsetText ? offsetText : textToInsert.length
    const targetOffset = startOffset + textOffset
    this.cursorManager.restoreOffset(targetOffset)

    return this
  }
}
