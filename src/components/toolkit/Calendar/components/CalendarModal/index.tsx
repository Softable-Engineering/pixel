// External Libraries
import React from 'react'

// Components
import { Select } from './components/Select'
import { CalendarView } from './components/CalendarView'
import { PresetsColumn } from './components/PresetsColumn'
import { Button } from '@components/commons/buttons/Button'

// Hooks
import { useCalendar } from './hooks/useCalendar'

// Utils
import { startOfDay } from './hooks/useCalendar/utils'
import { getDateOptions, getOperatorOptions } from './utils'
import { OPACITY_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type { DateRange, DateRangeValue, Locale } from '../../types'

// Styles
import { Container, ContainerCalendar, Content, Footer, Header } from './styles'

interface Props {
  value: DateRangeValue
  locale: Locale
  onClose: () => void
  onChange: (range: DateRangeValue) => void
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
      clearValue,
      applyValue,
      handleChangeFilters,
      handleChangeDateRange
    } = useCalendar(params)

    // Constants
    const startDateOptions = getDateOptions()
    const endDateOptions = getDateOptions()
    const { filters } = context

    // Functions
    function handleChangeValue(value: Date, type: keyof DateRange) {
      if (context.filters.operator !== 'range') {
        return handleChangeDateRange({ start: value, end: value })
      }

      if (type === 'start') {
        return handleChangeDateRange({ start: value })
      }

      handleChangeDateRange({ end: value })
    }

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
              onChange={v => handleChangeValue(new Date(v), 'start')}
            />
            <Select
              withCustomValue
              options={endDateOptions}
              disabled={filters.operator !== 'range'}
              value={startOfDay(valueRange.end).toISOString()}
              onChange={v => handleChangeValue(new Date(v), 'end')}
            />
          </Header>

          <Content>
            <CalendarView
              context={context}
              dateRange={valueRange}
              onChangeValue={handleChangeDateRange}
            />
          </Content>

          <Footer>
            <Button
              label="Limpar"
              variant="text"
              borderRadius="0.5rem"
              onClick={clearValue}
            />
            <Button
              label="Aplicar"
              variant="filled"
              borderRadius="0.5rem"
              onClick={applyValue}
            />
          </Footer>
        </ContainerCalendar>
      </Container>
    )
  }
)
