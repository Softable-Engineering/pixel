// External Libraries
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { GroupDisplayButton } from './components/GroupDisplayButton'

// Utils
import { OPACITY_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type { GroupAction } from '@components/toolkit/ActionsPanel/types'

// Styles
import { Container, ContentWrapper } from './styles'

interface Props<T extends string> {
  action: GroupAction<T>
}

export type Direction = 'left' | 'right'

export const GroupActionItem = <T extends string>({ action }: Props<T>) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const [hovered, setHovered] = useState(false)
  const [direction, setDirection] = useState<Direction>('right')
  const [decided, setDecided] = useState(false)
  const triggerRectRef = useRef<DOMRect | null>(null)

  function handleMouseEnter() {
    setHovered(true)
    if (triggerRef.current) {
      triggerRectRef.current = triggerRef.current.getBoundingClientRect()
    }
    setDecided(false)
  }

  function handleMouseLeave() {
    setHovered(false)
    setDecided(false)
    triggerRectRef.current = null
  }

  useLayoutEffect(() => {
    if (!hovered || decided || !menuRef.current || !triggerRectRef.current)
      return

    const submenuWidth = menuRef.current.offsetWidth
    const viewportWidth = window.innerWidth
    const spaceRight = viewportWidth - triggerRectRef.current.right

    setDirection(spaceRight < submenuWidth ? 'left' : 'right')
    setDecided(true)
  }, [hovered, decided])

  useEffect(() => {
    if (!hovered) return
    const onResize = () => setDecided(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [hovered])

  return (
    <Container ref={triggerRef} className="clickable">
      <GroupDisplayButton
        action={action}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <AnimatePresence initial={false}>
        {action.children && hovered ? (
          <ContentWrapper
            ref={menuRef}
            $direction={direction}
            {...OPACITY_ANIMATION_PRESETS}
            style={{ visibility: decided ? 'visible' : 'hidden' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {action.children}
          </ContentWrapper>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
