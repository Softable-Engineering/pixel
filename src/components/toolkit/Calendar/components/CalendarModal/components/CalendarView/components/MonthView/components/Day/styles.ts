// External Libraries
import styled from 'styled-components'

// Utils
import { getVariant } from './utils'

// Types
import type { Variant } from './types'

interface ContainerProps {
  $variant?: Variant
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $variant }) => ($variant ? getVariant($variant) : null)}
`
