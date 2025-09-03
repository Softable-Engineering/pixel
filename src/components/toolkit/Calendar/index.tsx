// External Libraries
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'

// Components
import { CalendarModal } from './components/CalendarModal'

// Hooks
import { useClickOutsideWatcher } from '@hooks/useClickOutsideWatcher'
import { useFollowElementPosition } from '@hooks/useFollowElementPosition'

// Types
import type { CalendarProps, CalendarMethods } from './types/calendar'

// Styles
import { Container } from './styles'

// Exports
export * as CalendarTypes from './types/calendar'
export { DEFAULT_PRESETS } from './constants/presets'

export const Calendar = React.forwardRef<CalendarMethods, CalendarProps>(
  ({ children, ...rest }, ref) => {
    // Refs
    const containerCalendarRef = useRef<HTMLDivElement>(null)

    // States
    const [visible, setVisible] = useState(false)
    const [calendarId] = useState(() => crypto.randomUUID())

    // Hooks
    useImperativeHandle(ref, handleRefMethods)
    useClickOutsideWatcher(containerCalendarRef, handleClose)
    const { floatingRef } = useFollowElementPosition(containerCalendarRef, rest)

    // biome-ignore lint/correctness/useExhaustiveDependencies: <>
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose()
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [])

    // Functions
    function handleRefMethods() {
      return { open: handleOpen, close: handleClose }
    }

    function handleOpen() {
      setVisible(true)
    }

    function handleClose() {
      setVisible(false)
    }

    return (
      <Container
        ref={containerCalendarRef}
        id={`wrapper-calendar-component-${calendarId}`}
      >
        {children}

        <AnimatePresence initial={false}>
          {visible ? (
            <CalendarModal
              ref={floatingRef}
              {...rest}
              calendarId={calendarId}
              onClose={handleClose}
            />
          ) : null}
        </AnimatePresence>
      </Container>
    )
  }
)
