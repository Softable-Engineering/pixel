// External Libraries
import styled from 'styled-components'

// Types
import type { Variant } from '.'

interface ContainerProps {
  $variant: Variant
}

export const Container = styled.div<ContainerProps>`
  width: 2.5rem;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ $variant }) => ($variant === 'left' ? 'rotate(0deg)' : 'rotate(180deg)')};

  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: var(--option-background-hover);
    opacity: 0.5;
    transition: 0.5s;
  }
`
