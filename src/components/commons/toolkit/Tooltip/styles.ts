// External Libraries
import { styled } from 'styled-components'

// Types
import { type Position, TooltipPlacement } from './types'

export const Container = styled.div`
  width: 100%;
  display: inline-block;
`

export const TriggerWrapper = styled.span`
  width: 100%;
  display: inline-flex;
  align-items: center;

  cursor: pointer;
`

interface TooltipContainerProps {
  $color?: string
  $maxWidth: number
  position: Position
  $isVisible: boolean
}

export const TooltipContainer = styled.div<TooltipContainerProps>`
  position: fixed;
  pointer-events: none;

  top: ${({ position }) => position.top}px;
  left: ${({ position }) => position.left}px;

  width: fit-content;
  max-width: ${({ $maxWidth }) => $maxWidth}rem;

  border-radius: 6px;
  padding: 0.5rem 0.75rem;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme, $color }) => $color || theme.colors.background.secondary};

  z-index: 20;
  font-size: 0.875rem;
  line-height: 1.4;
  word-break: break-all;
  white-space: normal;
`

interface TooltipArrowProps {
  $color?: string
  $placement: TooltipPlacement
}

export const TooltipArrow = styled.div<TooltipArrowProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);

  background-color: ${({ theme, $color }) => $color || theme.colors.background.secondary};

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  ${({ $placement }) => {
    switch ($placement) {
      case TooltipPlacement.Top:
        return 'bottom: -4px; left: 50%; margin-left: -4px;'
      case TooltipPlacement.Bottom:
        return 'top: -4px; left: 50%; margin-left: -4px;'
      case TooltipPlacement.Left:
        return 'right: -4px; top: 50%; margin-top: -4px;'
      case TooltipPlacement.Right:
        return 'left: -4px; top: 50%; margin-top: -4px;'
    }
  }}
`
