// Types
import { type Position, TooltipPlacement } from '../../../types'

export function calculatePosition(
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  placement: TooltipPlacement,
  offset: number
): Position {
  const positions: Record<TooltipPlacement, Position> = {
    [TooltipPlacement.Top]: {
      top: triggerRect.top - tooltipRect.height - offset,
      left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
    },
    [TooltipPlacement.Bottom]: {
      top: triggerRect.bottom + offset,
      left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
    },
    [TooltipPlacement.Left]: {
      top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
      left: triggerRect.left - tooltipRect.width - offset
    },
    [TooltipPlacement.Right]: {
      top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
      left: triggerRect.right + offset
    }
  }

  return adjustPositionForViewport(positions[placement], tooltipRect)
}

function adjustPositionForViewport(
  position: Position,
  tooltipRect: DOMRect
): Position {
  const adjusted = { ...position }
  const padding = 8

  if (adjusted.left < padding) {
    adjusted.left = padding
  }
  if (adjusted.left + tooltipRect.width > window.innerWidth - padding) {
    adjusted.left = window.innerWidth - tooltipRect.width - padding
  }

  if (adjusted.top < padding) {
    adjusted.top = padding
  }
  if (adjusted.top + tooltipRect.height > window.innerHeight - padding) {
    adjusted.top = window.innerHeight - tooltipRect.height - padding
  }

  return adjusted
}
