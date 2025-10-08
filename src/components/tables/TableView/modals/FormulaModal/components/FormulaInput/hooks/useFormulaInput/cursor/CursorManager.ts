import { CursorWalker } from './CursorWalker'

export class CursorManager {
  constructor(private element: HTMLElement) {}

  public getOffset(): number {
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return 0

    const range = selection.getRangeAt(0)
    const preCaretRange = range.cloneRange()
    preCaretRange.selectNodeContents(this.element)
    preCaretRange.setEnd(range.startContainer, range.startOffset)

    return this.calculateOffsetFromFragment(preCaretRange.cloneContents())
  }

  private calculateOffsetFromFragment(fragment: DocumentFragment): number {
    let offset = 0
    const walker = document.createTreeWalker(
      fragment,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    )

    let node = walker.currentNode as Node | null

    while (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        offset += (node.textContent || '').length
      } else if (this.isColumnElement(node)) {
        offset += 1
        node = walker.nextSibling()
        continue
      }
      node = walker.nextNode()
    }

    return offset
  }

  public restoreOffset(targetOffset: number): void {
    const selection = window.getSelection()
    if (!selection) return

    const walker = new CursorWalker(this.element)
    const result = walker.findPositionForOffset(targetOffset)

    if (result.found) {
      this.placeCaretAt(selection, result)
    } else {
      this.placeCaretAtEnd(selection)
    }
  }

  private placeCaretAt(
    selection: Selection,
    result: { node: Node; offset: number; afterElement?: boolean }
  ): void {
    const range = document.createRange()

    if (result.node.nodeType === Node.TEXT_NODE) {
      range.setStart(result.node, Math.max(0, result.offset))
    } else if (result.afterElement) {
      range.setStartAfter(result.node as HTMLElement)
    } else {
      range.setStartBefore(result.node as HTMLElement)
    }

    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  private placeCaretAtEnd(selection: Selection): void {
    try {
      const range = document.createRange()
      range.selectNodeContents(this.element)
      range.collapse(false)
      selection.removeAllRanges()
      selection.addRange(range)
    } catch (error) {
      console.error('Failed to place caret at end:', error)
    }
  }

  private isColumnElement(node: Node): boolean {
    return (
      node.nodeType === Node.ELEMENT_NODE &&
      (node as HTMLElement).dataset.token === 'column'
    )
  }
}
