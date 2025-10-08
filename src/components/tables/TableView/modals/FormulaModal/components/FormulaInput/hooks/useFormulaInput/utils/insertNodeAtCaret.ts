import { placeCaretAfter } from './caret'

export function insertNodeAtCaret(
  node: Node,
  inputElement: HTMLElement | null
) {
  if (!inputElement) return

  const sel = window.getSelection()
  if (!sel || !sel.rangeCount) {
    // Caso não haja seleção, insira o nó diretamente no inputElement
    inputElement.appendChild(node)
    placeCaretAfter(node, inputElement)
    return
  }

  const range = sel.getRangeAt(0)

  // Verificar se o cursor está dentro de um span
  const parentElement = range.startContainer.parentElement
  if (parentElement && parentElement.tagName === 'SPAN') {
    // Se o cursor está dentro de um <span>, movemos a inserção para o inputElement
    inputElement.appendChild(node)
    placeCaretAfter(node, inputElement)
    return
  }

  range.deleteContents()
  range.insertNode(node)
  range.collapse(true)

  // const before = document.createTextNode('\u200B')
  // const after = document.createTextNode('\u200B')

  // Opcionalmente, adiciona um espaço antes do nó
  // node.parentNode?.insertBefore(before, node)
  // node.parentNode?.insertBefore(after, node.nextSibling || null)

  placeCaretAfter(node)
}
