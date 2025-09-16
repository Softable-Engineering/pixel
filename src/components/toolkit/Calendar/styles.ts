import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  --primary: ${({ theme }) => theme.colors.primary};

  --scrolbar-color: ${({ theme }) => theme.colors.scrollbar};

  --border-color: ${({ theme }) => theme.colors.border.secondary};
  --text-color: ${({ theme }) => theme.colors.text.secondary};
  --option-background-color: ${({ theme }) => theme.colors.background.secondary};
  --option-background-hover: ${({ theme }) => theme.colors.background.hover_secondary};
  --option-secondary-background-color: ${({ theme }) => theme.colors.background.hover_secondary};
  --background-color: ${({ theme }) => theme.colors.background.secondary};
`
