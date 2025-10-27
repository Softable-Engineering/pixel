import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover_secondary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.border.primary};
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.25rem;
`
