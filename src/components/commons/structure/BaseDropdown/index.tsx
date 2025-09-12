// External Libraries
import { AnimatePresence } from 'framer-motion'
import React, { useMemo, type PropsWithChildren } from 'react'

// Components
import { Portal } from '@components/commons/modals/Portal'

// Hooks
import { useFollowElementPosition } from '@hooks/useFollowElementPosition'

// Utils
import { DROPDOWN_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

// Styles
import { Container, Content } from './styles'
import { useClickOutsidePortalWatcher } from '@hooks/useClickOutsidePortalWatcher'

interface Props extends PropsWithChildren, UseFollowElementPositionOptions {
  isOpen: boolean
  wrapperId?: string
  referenceRef: React.RefObject<HTMLElement>
  onClose: () => void
}

export const BaseDropdown: React.FC<Props> = ({
  isOpen,
  wrapperId,
  referenceRef,
  children,
  onClose,
  ...rest
}) => {
  // Hooks
  const { floatingRef, element } = useFollowElementPosition(referenceRef, rest)

  const references = useMemo(
    () => [referenceRef.current, element],
    [element, referenceRef]
  )
  useClickOutsidePortalWatcher(references, onClose, !isOpen)

  return (
    <Portal wrapperId={wrapperId}>
      <AnimatePresence>
        {isOpen ? (
          <Container ref={floatingRef}>
            <Content key="dropdown-content" {...DROPDOWN_ANIMATION_PRESETS}>
              {children}
            </Content>
          </Container>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}
