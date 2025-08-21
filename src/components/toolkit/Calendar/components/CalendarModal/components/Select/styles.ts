import { styled } from 'styled-components'

interface ContainerProps {
  $disabled: boolean
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  min-width: 10rem;
  max-width: 20rem;
  height: fit-content;
  position: relative;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`
