import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.25rem;
  border-radius: 0.5rem;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
