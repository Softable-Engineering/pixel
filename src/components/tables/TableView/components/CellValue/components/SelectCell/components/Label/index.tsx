// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { getContrastingTextColor } from '@utils/functions/getContrastingTextColor'

// Styles
import { Container } from './styles'

interface Props {
  color: string
  value: string
}

export const Label: React.FC<Props> = ({ color, value }) => {
  // Constants
  const textColor = getContrastingTextColor(color)

  return (
    <Container $color={color}>
      <Typography variant="b2" color={textColor}>
        {value}
      </Typography>
    </Container>
  )
}
