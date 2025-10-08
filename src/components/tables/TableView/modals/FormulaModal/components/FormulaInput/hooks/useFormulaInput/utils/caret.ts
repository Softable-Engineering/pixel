export function placeCaretAtEnd(el: Node | null) {
  if (!el) return
  const r = document.createRange()
  r.selectNodeContents(el)
  r.collapse(false)
  const s = window.getSelection()
  s?.removeAllRanges()
  s?.addRange(r)
}

export function placeCaretAfter(
  node: Node | null,
  inputElement?: HTMLElement | null
) {
  if (!node) return
  const range = document.createRange()
  range.setStartAfter(node)
  range.collapse(true)
  const sel = window.getSelection()
  sel?.removeAllRanges()
  sel?.addRange(range)
  if (inputElement) inputElement.focus()
}

export function placeCaretBefore(
  node: Node | null,
  inputElement?: HTMLElement | null
) {
  if (!node) return
  const range = document.createRange()
  range.setStartBefore(node)
  range.collapse(true)
  const sel = window.getSelection()
  sel?.removeAllRanges()
  sel?.addRange(range)
  if (inputElement) inputElement.focus()
}
