// External Libraries
import type React from 'react'

// Components
import { ButtonContent } from './components/ButtonContent'

// Types
import type { ButtonProps } from './types'

// Styles
import { Container } from './styles'

export const Button: React.FC<ButtonProps> = ({
  type,
  color,
  fitWidth,
  disabled,
  variant = 'filled',
  borderRadius,
  onClick,
  ...rest
}) => {
  // Functions
  function handleButtonClick() {
    if (!disabled && !rest.loading && onClick) onClick()
  }

  return (
    <Container
      type={type}
      tabIndex={0}
      $color={color}
      $variant={variant}
      disabled={disabled}
      $fitWidth={fitWidth}
      $loading={rest.loading}
      $borderRadius={borderRadius}
      onClick={handleButtonClick}
    >
      <ButtonContent variant={variant} color={color} {...rest} />
    </Container>
  )
}
