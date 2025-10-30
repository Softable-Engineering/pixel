import { styled } from 'styled-components'

interface ContainerProps {
  $destructive?: boolean
}

export const Container = styled.button<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 4px;

  transition: background-color 0.2s ease;

  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover_secondary};

    svg path {
      transition: 0.5s;
      fill: ${({ $destructive }) => ($destructive ? 'red' : 'currentColor')};
    }
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.border.primary};
  }

  p, svg path {
    transition: 0.5s;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
`
