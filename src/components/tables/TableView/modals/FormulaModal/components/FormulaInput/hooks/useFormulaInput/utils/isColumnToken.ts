export const isColumnToken = (node: Node | null): node is HTMLElement =>
  !!(
    node &&
    node.nodeType === Node.ELEMENT_NODE &&
    (node as HTMLElement).dataset?.token === 'column'
  )
