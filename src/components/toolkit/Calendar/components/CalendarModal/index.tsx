// External Libraries
import React from 'react'

// Components
import { PresetsColumn } from './components/PresetsColumn'

// Hooks
import { useCalendar } from './hooks/useCalendar'

// Utils
import { OPACITY_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type { DateRange } from '../../types'

// Styles
import { Container } from './styles'

interface Props {
  value: DateRange
  onChange: (range: DateRange) => void
}

export const CalendarModal = React.forwardRef<HTMLDivElement, Props>(
  ({ value, onChange }, ref) => {
    // Hooks
    const { presets, context } = useCalendar()

    return (
      <Container ref={ref} {...OPACITY_ANIMATION_PRESETS}>
        <PresetsColumn presets={presets} context={context} />
      </Container>
    )
  }
)
