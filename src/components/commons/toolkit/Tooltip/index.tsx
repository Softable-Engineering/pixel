// External Libraries
import type React from 'react'
import { createPortal } from 'react-dom'

// Hooks
import { useTooltip } from './hooks/useTooltip'

// Types
import { TooltipPlacement, type TooltipProps } from './types'

// Styles
import {
  Container,
  TooltipArrow,
  TriggerWrapper,
  TooltipContainer
} from './styles'

export const Tooltip: React.FC<TooltipProps> = ({
  color,
  content,
  children,
  offset = 8,
  maxWidth = 30,
  disabled = false,
  placement = TooltipPlacement.Top
}) => {
  // Hooks
  const {
    position,
    isVisible,
    triggerRef,
    tooltipRef,
    handleMouseEnter,
    handleMouseLeave
  } = useTooltip({ offset, disabled, placement })

  return (
    <Container>
      <TriggerWrapper
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </TriggerWrapper>

      {isVisible &&
        createPortal(
          <TooltipContainer
            ref={tooltipRef}
            $color={color}
            position={position}
            $maxWidth={maxWidth}
            $isVisible={isVisible}
          >
            {content}
            <TooltipArrow $color={color} $placement={placement} />
          </TooltipContainer>,
          document.body
        )}
    </Container>
  )
}
