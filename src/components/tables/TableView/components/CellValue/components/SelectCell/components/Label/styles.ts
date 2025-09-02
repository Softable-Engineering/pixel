import { styled } from 'styled-components'

interface ContainerProps {
  $color: string
}

export const Container = styled.div<ContainerProps>`
  width: fit-content;

  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;

  background-color: ${({ $color }) => $color};
`
