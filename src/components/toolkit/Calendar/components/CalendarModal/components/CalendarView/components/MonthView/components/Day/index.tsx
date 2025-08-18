// External Libraries
import type React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  day: number
  year: number
  month: number
  disabled: boolean
  isOtherMonth: boolean
  onChange?: (date: Date) => void
}

export const Day: React.FC<Props> = ({
  day,
  year,
  month,
  disabled,
  isOtherMonth
}) => {
  if (isOtherMonth) return <Container />

  return (
    <Container>
      <Typography variant="b2" $align="center" color={'var(--text-color)'}>
        {day}
      </Typography>
    </Container>
  )
}
