// External Libraries
import React from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { ButtonLoader } from '../ButtonLoader'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { LABEL_COLOR_MAPPER } from '../../mappers/label'

// Types
import { ButtonTextProps, ButtonVariant } from '../../types'

// Styles
import { Container } from './styles'

interface Props extends ButtonTextProps {
  color?: string
  loading?: boolean
  variant: ButtonVariant
}

export const ButtonContent: React.FC<Props> = ({
  label,
  color,
  loading,
  variant,
  endIcon,
  startIcon,
  labelColor,
  labelVariant = 'b2'
}) => {
  // Constants
  const textColor = labelColor || LABEL_COLOR_MAPPER[variant]

  return (
    <Container>
      {startIcon ?? null}

      <Typography
        color={textColor}
        fontWeight="bold"
        $lineHeight="100%"
        variant={labelVariant}
      >
        {label}
      </Typography>

      {endIcon ?? null}

      <AnimatePresence>
        {loading ? <ButtonLoader color={color} variant={variant} /> : null}
      </AnimatePresence>
    </Container>
  )
}
