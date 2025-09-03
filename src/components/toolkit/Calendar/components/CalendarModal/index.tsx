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
import type {
  Variant,
  DateRange,
  PresetGroup,
  DateOperator,
  DateRangeValue
} from '../../types'

// Styles
import { Container, ContainerCalendar, Content, Footer, Header } from './styles'

interface Props {
  locale: string
  variant?: Variant
  calendarId: string
  visibleMonths?: number
  value: DateRangeValue
  presets?: PresetGroup[]
  onClose: () => void
  onChange: (range: DateRangeValue, operator: DateOperator) => void
}

export const CalendarModal = React.forwardRef<HTMLDivElement, Props>(
  (params, ref) => {
    // Constants
    const operatorOptions = getOperatorOptions()
    const { calendarId } = params

    // Hooks
    const {
      presets,
      context,
      variant,
      visibleMonths,
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
    const endDateValue = valueRange.end
      ? startOfDay(valueRange.end).toISOString()
      : undefined
    const startDateValue = valueRange.start
      ? startOfDay(valueRange.start).toISOString()
      : undefined

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
        {variant === 'group' ? (
          <PresetsColumn
            presets={presets}
            context={context}
            calendarId={calendarId}
            onChangeValue={handleChangeDateRange}
          />
        ) : null}

        <ContainerCalendar>
          <Header>
            {variant === 'group' ? (
              <Select
                value={filters.operator}
                options={operatorOptions}
                onChange={v => {
                  handleChangeFilters({ operator: v })
                }}
              />
            ) : null}
            <Select
              withCustomValue
              value={startDateValue}
              placeholder="Data inicial"
              options={startDateOptions}
              onChange={v => handleChangeValue(new Date(v), 'start')}
            />
            {variant === 'group' ? (
              <Select
                withCustomValue
                value={endDateValue}
                options={endDateOptions}
                placeholder="Data final"
                disabled={filters.operator !== 'range'}
                onChange={v => handleChangeValue(new Date(v), 'end')}
              />
            ) : null}
          </Header>

          <Content>
            <CalendarView
              variant={variant}
              context={context}
              dateRange={valueRange}
              visibleMonths={visibleMonths}
              onChangeValue={handleChangeDateRange}
            />
          </Content>

          <Footer>
            <Button
              label="Limpar"
              variant="text"
              borderRadius="0.5rem"
              labelColor="var(--text-color)"
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
