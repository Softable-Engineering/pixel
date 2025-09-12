import { styled } from 'styled-components'

export const Container = styled.div`
  --primary: ${({ theme }) => theme.colors.primary};
  --text-color: ${({ theme }) => theme.colors.text.primary};
  --text-color-secondary: ${({ theme }) => theme.colors.text.secondary};
  --border-color: ${({ theme }) => theme.colors.border.tertiary};
  --background-color: ${({ theme }) => theme.colors.background.tertiary};
  --secondary-background-color: ${({ theme }) => theme.colors.background.secondary};
  --modal-display: ${({ theme }) => theme.colors.background.hover_secondary};
  --scrolbar-color: ${({ theme }) => theme.colors.scrollbar};
  --hover: ${({ theme }) => theme.colors.border.tertiary};
  --secondary-hover: ${({ theme }) => theme.colors.background.hover_secondary};

  p, input, textarea {
    font-family: Cereal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

 & > div > div > div > div > div {
  box-shadow: none;
 }
`
