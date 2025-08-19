// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Variant } from './types'

// Styles
import { Container } from './styles'

interface Props {
  day: number
  year: number
  month: number
  variant: Variant
  disabled: boolean
  isOtherMonth: boolean
  onChange: (date: Date) => void
}

export const Day: React.FC<Props> = ({
  day,
  year,
  month,
  variant,
  disabled,
  isOtherMonth,
  onChange
}) => {
  // Functions
  function handleChangeValue() {
    const newDate = new Date(year, month, day)
    onChange(newDate)
  }

  if (isOtherMonth) return <Container />

  return (
    <Container $variant={variant} onClick={handleChangeValue}>
      <Typography variant="b2" $align="center" color={'var(--text-color)'}>
        {day}
      </Typography>
    </Container>
  )
}
