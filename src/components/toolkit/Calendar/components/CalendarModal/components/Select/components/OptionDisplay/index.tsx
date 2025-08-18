// External Libraries
import { useEffect, useState } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Option } from '../../types'

// Styles
import { Container, Input } from './styles'

interface Props<T> {
  value: string
  customValueSelected: boolean
  selectedOption: Option<T> | undefined
  onClick: () => void
  onChange: (value: T) => void
}

export const OptionDisplay = <T,>(props: Props<T>) => {
  // Constants
  const { selectedOption, customValueSelected, onClick, onChange } = props

  // States
  const [customValue, setCustomValue] = useState(props.value)

  // UseEffects
  useEffect(() => {
    const date = new Date(props.value)
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
    setCustomValue(formattedDate)
  }, [props.value])

  // Functions
  function renderValue() {
    return (
      <Typography variant="b2" color="var(--text-color)">
        {selectedOption?.label ?? 'Selecione uma opção'}
      </Typography>
    )
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCustomValue(event.target.value)
  }

  function onBlur() {
    const [day, month, year] = customValue.split('/')
    const date = new Date(
      `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    )

    if (Number.isNaN(date.getTime())) return null

    const newDate = new Date(
      date.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
    ).toISOString() as T

    onChange(newDate)
  }

  if (customValueSelected)
    return (
      <Input
        value={customValue}
        placeholder="00/00/0000"
        onBlur={onBlur}
        onChange={handleChange}
      />
    )

  return <Container onClick={onClick}>{renderValue()}</Container>
}
