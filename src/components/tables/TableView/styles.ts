import { styled } from 'styled-components'

export const Container = styled.div`
  --primary: ${({ theme }) => theme.colors.primary};
  --text-color: ${({ theme }) => theme.colors.text.primary};
  --border-color: ${({ theme }) => theme.colors.border.tertiary};
  --background-color: ${({ theme }) => theme.colors.background.tertiary};
`
