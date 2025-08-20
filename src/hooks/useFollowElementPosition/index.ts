// External Libraries
import { useCallback, useEffect, useMemo, useState } from 'react'

// Utils
import { getPosition } from './utils/position'

// Types
import type { UseFollowElementPositionOptions } from './types'

export function useFollowElementPosition(
  targetRef: React.RefObject<HTMLElement>,
  options?: UseFollowElementPositionOptions
) {
  // Constants
  const {
    offsetX = 0,
    offsetY = 0,
    placement = 'bottom-start',
    scrollContainerId
  } = options || {}

  // States
  const [floatingEl, setFloatingEl] = useState<HTMLDivElement | null>(null)

  const updatePosition = useCallback(() => {
    const target = targetRef.current
    const floating = floatingEl
    if (!target || !floating) return

    const rect = target.getBoundingClientRect()
    const floatingRect = floating.getBoundingClientRect()
    const pos = getPosition({ rect, floatingRect, placement, offsetX, offsetY })

    floating.style.transform = `translate(${pos.left}px, ${pos.top}px)`
  }, [targetRef, floatingEl, offsetX, offsetY, placement])

  useEffect(() => {
    if (!floatingEl) return

    const scrollContainer = scrollContainerId
      ? document.getElementById(scrollContainerId)
      : window

    if (!scrollContainer) return

    updatePosition()

    const handle = () => requestAnimationFrame(updatePosition)

    scrollContainer.addEventListener('scroll', handle, { passive: true })
    scrollContainer.addEventListener('resize', handle)

    const resizeObserver = new ResizeObserver(handle)
    if (targetRef.current) resizeObserver.observe(targetRef.current)

    return () => {
      scrollContainer.removeEventListener('scroll', handle)
      scrollContainer.removeEventListener('resize', handle)
      resizeObserver.disconnect()
    }
  }, [floatingEl, updatePosition, scrollContainerId, targetRef])

  const refCallback = useCallback((el: HTMLDivElement | null) => {
    if (el) setFloatingEl(el)
  }, [])

  const returnValue = useMemo(
    () => ({ element: floatingEl, floatingRef: refCallback }),
    [floatingEl, refCallback]
  )

  return returnValue
}
