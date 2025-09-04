// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Not needed> */
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { ModalField } from './components/ModalField'

// Hooks
import { useClickOutsideWatcher } from '@hooks/useClickOutsideWatcher'
import { useFollowElementPosition } from '@hooks/useFollowElementPosition'

// Types
import type { Props } from './types'

// Styles
import { Container, ContainerCell, ContainerModal } from './styles'

export const CellModal: React.FC<Props> = props => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const containerCellRef = useRef<HTMLDivElement>(null)

  // Constants
  const { children } = props
  const containerHeight = containerCellRef.current?.offsetHeight ?? 0
  const minHeight = containerHeight + 10 || 100

  // States
  const [visible, setVisible] = useState(false)

  // Hooks
  const { floatingRef } = useFollowElementPosition(containerRef, {
    placement: 'top-left-start',
    offsetX: -5
  })
  useClickOutsideWatcher(containerRef, toggleVisible, !visible)

  // Functions
  function toggleVisible() {
    setVisible(prev => !prev)
  }

  function handleClose() {
    setVisible(false)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Container ref={containerRef}>
      <ContainerCell ref={containerCellRef} onClick={toggleVisible}>
        {children}
      </ContainerCell>

      <AnimatePresence initial={false}>
        {visible ? (
          <ContainerModal ref={floatingRef}>
            <ModalField
              {...props}
              minHeight={`${minHeight}px`}
              onClose={handleClose}
            />
          </ContainerModal>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
