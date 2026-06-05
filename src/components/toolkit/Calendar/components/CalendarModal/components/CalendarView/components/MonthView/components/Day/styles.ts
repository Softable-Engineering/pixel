// External Libraries
import { styled } from 'styled-components'

// Utils
import { getVariant } from './utils'

// Types
import type { Variant } from './types'

interface ContainerProps {
  $variant?: Variant
  $disabled?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  `}

  ${({ $variant }) => ($variant ? getVariant($variant) : null)}
`
