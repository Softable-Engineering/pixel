export class CursorWalker {
  constructor(private element: HTMLElement) {}

  public findPositionForOffset(targetOffset: number): {
    found: boolean
    node: Node
    offset: number
    afterElement?: boolean
  } {
    let traversed = 0
    const walker = document.createTreeWalker(
      this.element,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node: Node) => {
          if (this.isColumnElement(node)) {
            return NodeFilter.FILTER_ACCEPT
          }
          if (this.isInsideColumn(node)) {
            return NodeFilter.FILTER_REJECT
          }
          return NodeFilter.FILTER_ACCEPT
        }
      }
    )

    let node = walker.currentNode as Node | null

    while (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const textNode = node as Text
        const length = textNode.data.length

        if (traversed + length >= targetOffset) {
          return {
            found: true,
            node: textNode,
            offset: targetOffset - traversed
          }
        }
        traversed += length
      } else if (this.isColumnElement(node)) {
        traversed += 1

        if (traversed >= targetOffset) {
          return {
            found: true,
            node: node as HTMLElement,
            offset: 0,
            afterElement: traversed === targetOffset
          }
        }

        node = walker.nextSibling()
        continue
      }

      node = walker.nextNode()
    }

    return { found: false, node: this.element, offset: 0 }
  }

  private isColumnElement(node: Node): boolean {
    return (
      node.nodeType === Node.ELEMENT_NODE &&
      (node as HTMLElement).dataset.token === 'column'
    )
  }

  private isInsideColumn(node: Node): boolean {
    let parent = node.parentNode
    while (parent && parent !== this.element) {
      if (this.isColumnElement(parent)) {
        return true
      }
      parent = parent.parentNode
    }
    return false
  }
}
