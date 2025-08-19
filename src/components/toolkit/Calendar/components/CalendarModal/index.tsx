// External Libraries
import React from 'react'

// Components
import { Select } from './components/Select'
import { CalendarView } from './components/CalendarView'
import { PresetsColumn } from './components/PresetsColumn'

// Hooks
import { useCalendar } from './hooks/useCalendar'

// Utils
import { startOfDay } from './hooks/useCalendar/utils'
import { getDateOptions, getOperatorOptions } from './utils'
import { OPACITY_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type { DateRange } from '../../types'

// Styles
import { Container, ContainerCalendar, Content, Header } from './styles'

interface Props {
  value: DateRange
  onChange: (range: DateRange) => void
}

export const CalendarModal = React.forwardRef<HTMLDivElement, Props>(
  (params, ref) => {
    // Constants
    const operatorOptions = getOperatorOptions()

    // Hooks
    const {
      presets,
      context,
      valueRange,
      handleChangeFilters,
      handleChangeDateRange
    } = useCalendar(params)

    const startDateOptions = getDateOptions()
    const endDateOptions = getDateOptions()

    const { filters } = context

    return (
      <Container ref={ref} {...OPACITY_ANIMATION_PRESETS}>
        <PresetsColumn
          presets={presets}
          context={context}
          onChangeValue={handleChangeDateRange}
        />

        <ContainerCalendar>
          <Header>
            <Select
              options={operatorOptions}
              value={filters.operator}
              onChange={v => {
                handleChangeFilters({ operator: v })
              }}
            />
            <Select
              withCustomValue
              options={startDateOptions}
              value={startOfDay(valueRange.start).toISOString()}
              onChange={v => handleChangeDateRange({ start: new Date(v) })}
            />
            <Select
              withCustomValue
              options={endDateOptions}
              disabled={filters.operator !== 'range'}
              value={startOfDay(valueRange.end).toISOString()}
              onChange={v => handleChangeDateRange({ end: new Date(v) })}
            />
          </Header>

          <Content>
            <CalendarView
              context={context}
              dateRange={valueRange}
              onChangeValue={handleChangeDateRange}
            />
          </Content>
        </ContainerCalendar>
      </Container>
    )
  }
)
