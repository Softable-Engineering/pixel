import { styled } from 'styled-components'

import type { ButtonVariant } from './types'
import { mapVariantToCss } from './mappers/variant'

interface ContainerProps {
  $color?: string
  $padding?: string
  $loading?: boolean
  $fitWidth?: boolean
  $borderRadius?: string
  $variant: ButtonVariant
}

export const Container = styled.button<ContainerProps>`
  width: ${({ $fitWidth }) => ($fitWidth ? '100%' : 'max-content')};

  position: relative;

  padding: ${({ $padding }) => $padding ?? '0.75rem 1rem'};
  border-radius: ${({ theme, $borderRadius }) =>
    $borderRadius ? $borderRadius : '0.25rem'};

  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant, $color }) => mapVariantToCss($variant, $color)};
`
