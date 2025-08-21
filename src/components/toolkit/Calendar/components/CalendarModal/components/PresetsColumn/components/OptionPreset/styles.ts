import { styled } from 'styled-components'

interface ContainerProps {
  $isLast: boolean
}

export const ContainerGroup = styled.div<ContainerProps>`
  border-bottom: ${({ $isLast }) => (!$isLast ? '1px solid var(--border-color)' : null)};
`
