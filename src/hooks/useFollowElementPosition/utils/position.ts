/* eslint-disable no-magic-numbers */
// Types
import type { Align } from '../types'

interface GetPositionParams {
  rect: DOMRect
  floatingRect: DOMRect

  offsetX: number
  offsetY: number
  placement: Align
}

export function getPosition(params: GetPositionParams) {
  const { placement, rect, floatingRect, offsetX, offsetY } = params

  let top = rect.top + offsetY
  let left = rect.left + offsetX

  switch (placement) {
    case 'top':
      top = rect.top - floatingRect.height - offsetY
      left = rect.left + rect.width / 2 - floatingRect.width / 2 + offsetX
      break

    case 'top-start':
      top = rect.top - floatingRect.height - offsetY
      break

    case 'top-end':
      top = rect.top - floatingRect.height - offsetY
      left = rect.right - offsetX - floatingRect.width
      break

    case 'bottom':
      top = rect.bottom + offsetY
      left = rect.left + rect.width / 2 - floatingRect.width / 2 + offsetX
      break

    case 'bottom-start':
      top = rect.bottom + offsetY
      break

    case 'bottom-end':
      top = rect.bottom + offsetY
      left = rect.right - offsetX - floatingRect.width
      break

    case 'left':
      top = rect.top + rect.height / 2 - floatingRect.height / 2 + offsetY
      left = rect.left - floatingRect.width - offsetX
      break

    case 'left-start':
      left = rect.left - floatingRect.width - offsetX
      break

    case 'left-end':
      top = rect.bottom - floatingRect.height - offsetY
      left = rect.left - floatingRect.width - offsetX
      break

    case 'right':
      top = rect.top + rect.height / 2 - floatingRect.height / 2 + offsetY
      left = rect.right + offsetX
      break

    case 'right-start':
      left = rect.right + offsetX
      break

    case 'right-end':
      left = rect.right + offsetX
      top = rect.bottom - floatingRect.height - offsetY
      break

    case 'center':
      left = rect.left + rect.width / 2 - floatingRect.width / 2 + offsetX
      top = rect.top + rect.height / 2 - floatingRect.height / 2 + offsetY
      break
  }

  return { top, left }
}
