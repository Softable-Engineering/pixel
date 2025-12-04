// External Libraries
import { useCallback, useEffect, useRef, useState } from 'react'

// Utils
import { calculatePosition } from './utils'

// Types
import type { Position } from '../../types'
import type { UseTooltipParams } from './types'

export function useTooltip({ offset, disabled, placement }: UseTooltipParams) {
  // Refs
  const triggerRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // States
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 })

  // Functions
  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()

    const newPosition = calculatePosition(
      triggerRect,
      tooltipRect,
      placement,
      offset
    )

    setPosition(newPosition)
  }, [placement, offset])

  const handleMouseEnter = useCallback(() => {
    if (disabled) return

    setIsVisible(true)
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    if (disabled) return

    setIsVisible(false)
  }, [disabled])

  // UseEffects
  useEffect(() => {
    if (isVisible) {
      updatePosition()
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)

      return () => {
        window.removeEventListener('scroll', updatePosition, true)
        window.removeEventListener('resize', updatePosition)
      }
    }
  }, [isVisible, updatePosition])

  return {
    position,
    isVisible,
    triggerRef,
    tooltipRef,
    handleMouseEnter,
    handleMouseLeave
  }
}
