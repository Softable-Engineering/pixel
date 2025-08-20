// External Libraries
import type React from 'react'

// Components
import { Loader } from '@components/toolkit/Loader'

// Utils
import { BACKGROUND_COLOR_MAPPER } from '../../mappers/background'

// Types
import type { ButtonVariant } from '../../types'

// Styles
import { Container } from './styles'

type Props = {
  color?: string
  variant: ButtonVariant
}

export const ButtonLoader: React.FC<Props> = ({ color, variant }) => {
  // Constants
  const background = color || BACKGROUND_COLOR_MAPPER[variant]

  // Functions
  function getLoaderColor() {
    if (variant === 'filled') return 'white'
    return color || 'black'
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      $color={background}
    >
      <Loader color={getLoaderColor()} />
    </Container>
  )
}
