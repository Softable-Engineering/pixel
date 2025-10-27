import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 0.5rem;
  `

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  color: var(--text-color-secondary);

  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.hover};

  border: none;
  border-radius: 0.25rem;
  outline: none;
`
