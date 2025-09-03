// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { getContrastingTextColor } from '@utils/functions/getContrastingTextColor'

// Styles
import { Button, Container } from './styles'

interface Props {
  color: string
  value: string
  stretch?: boolean
  onClick?: () => void
  onRemove?: () => void
}

export const Label: React.FC<Props> = ({
  color,
  value,
  stretch = false,
  onClick,
  onRemove
}) => {
  // Constants
  const textColor = getContrastingTextColor(color)
  const hasHover = Boolean(onClick)

  return (
    <Container $color={color} $stretch={stretch} $hasHover={hasHover}>
      <Typography variant="b2" color={textColor}>
        {value}
      </Typography>

      {onRemove ? (
        <Button type="button" onClick={onRemove}>
          <Typography variant="b2" color={textColor} fontSize={'0.5rem'}>
            ✕
          </Typography>
        </Button>
      ) : null}
    </Container>
  )
}
