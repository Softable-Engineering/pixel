// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
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
  const containerHeight = containerRef.current?.offsetHeight ?? 0
  const minHeight = containerHeight + 10 || 100

  // States
  const [visible, setVisible] = useState(false)

  // Hooks
  const { floatingRef } = useFollowElementPosition(containerRef, {
    placement: 'bottom-start',
    offsetY: -containerHeight - 5,
    offsetX: -5
  })
  useClickOutsideWatcher(containerRef, toggleVisible, !visible)

  // Functions
  function toggleVisible() {
    setVisible(prev => !prev)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      setVisible(false)
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
            <ModalField {...props} minHeight={`${minHeight}px`} />
          </ContainerModal>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
