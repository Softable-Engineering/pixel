// External Libraries
import { placeCaretBefore } from './caret'

export function insertFunctionText(
  fnName: string,
  inputElement: HTMLElement | null
) {
  if (!inputElement) return

  const operator = document.createElement('span')
  operator.className = 'operator'
  operator.textContent = fnName
  // NOTE: operador deixamos editável por padrão (se quiser imutável: setAttribute contenteditable=false)

  const open = document.createElement('span')
  open.className = 'ponctuation'
  open.textContent = '('

  const close = document.createElement('span')
  close.className = 'ponctuation'
  close.textContent = ')'

  const sel = window.getSelection()
  if (!sel || !sel.rangeCount) {
    inputElement.appendChild(operator)
    inputElement.appendChild(open)
    inputElement.appendChild(close)
    placeCaretBefore(close, inputElement)
    return
  }

  const range = sel.getRangeAt(0)
  range.deleteContents()

  range.insertNode(close)
  range.insertNode(open)
  range.insertNode(operator)

  placeCaretBefore(close)
}
