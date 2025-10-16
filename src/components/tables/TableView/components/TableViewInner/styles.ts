import { css, styled } from 'styled-components'

export const Container = styled.div`

  width: fit-content;

  --primary: ${({ theme }) => theme.colors.primary};
  --text-color: ${({ theme }) => theme.colors.text.primary};
  --text-color-secondary: ${({ theme }) => theme.colors.text.secondary};
  --primary-border-color: ${({ theme }) => theme.colors.border.primary};
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
`

export const ScrollStyles = css`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:active {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  scrollbar-width: 8px;
  scrollbar-color: ${({ theme }) => theme.colors.scrollbar} transparent;
`
