export function lockScroll(open: boolean) {
  const documentSelector = document.querySelector('body')
  if (!documentSelector) return

  const hasScroll = documentSelector.clientWidth < window.innerWidth

  if (open) {
    documentSelector.style.overflow = 'hidden'
    if (hasScroll) documentSelector.style.paddingRight = '15px'
  } else {
    documentSelector.style.overflow = 'auto'
    documentSelector.style.paddingRight = '0px'
  }
}
