// Types
import type { ColumnPosition, Token } from '../types'
import type { Column } from '@components/tables/TableView/modals/FormulaModal/types'
import { createColumnNode } from '../utils'

export class FormulaRenderer {
  constructor(
    private element: HTMLElement,
    private columns: Column[]
  ) {}

  public render(tokens: Token[], columnPositions: ColumnPosition[]): void {
    const nodes = this.createNodesFromTokens(tokens, columnPositions)
    this.replaceElementContent(nodes)
  }

  private createNodesFromTokens(
    tokens: Token[],
    columnPositions: ColumnPosition[]
  ): Node[] {
    return tokens.map(token => {
      if (token.type === 'column' && token.columnId) {
        return this.createOrReuseColumnNode(token.columnId, columnPositions)
      }
      return this.createTokenNode(token)
    })
  }

  private createOrReuseColumnNode(
    columnId: string,
    columnPositions: ColumnPosition[]
  ): Node {
    // const existingPosition = columnPositions.find(
    //   cp => cp.node.dataset.id === columnId
    // )

    // if (existingPosition) {
    //   return existingPosition.node
    // }

    const column = this.columns.find(col => col.id === columnId)
    if (column) {
      return createColumnNode(column, this.element)
    }

    return this.createErrorNode(`[col:${columnId}]`)
  }

  private createTokenNode(token: Token): Node {
    const span = document.createElement('span')
    span.className = this.getTokenClassName(token)
    span.textContent = token.value
    return span
  }

  private getTokenClassName(token: Token): string {
    const classes: string[] = []

    if (token.type !== 'text' || !token.isError) {
      classes.push('token', token.type)
    }

    if (token.isError) {
      classes.push('formula-error-underline')
    }

    return classes.join(' ')
  }

  private createErrorNode(value: string): Node {
    const span = document.createElement('span')
    span.className = 'formula-error-underline'
    span.textContent = value
    return span
  }

  private replaceElementContent(nodes: Node[]): void {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }

    nodes.forEach(node => {
      this.element.appendChild(node)
    })
  }
}
