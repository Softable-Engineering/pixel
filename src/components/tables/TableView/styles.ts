import { styled } from 'styled-components'

export const Container = styled.div`
  --primary: ${({ theme }) => theme.colors.primary};
  --text-color: ${({ theme }) => theme.colors.text.primary};
  --border-color: ${({ theme }) => theme.colors.border.tertiary};
  --background-color: ${({ theme }) => theme.colors.background.tertiary};
  --secondary-background-color: ${({ theme }) => theme.colors.border.tertiary};
  --modal-display: #2d2d2d;
  --scrolbar-color: ${({ theme }) => theme.colors.scrollbar};
  --hover: ${({ theme }) => theme.colors.border.tertiary};
`
