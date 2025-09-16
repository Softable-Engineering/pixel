import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  min-width: 12rem;

  display: flex;
  align-items: center;

  white-space: nowrap;

  padding: 0.5rem;
  border-radius: 4px;
  column-gap: 0.25rem;

  transition: background-color 0.25s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover_secondary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.border.primary};
  }
`
