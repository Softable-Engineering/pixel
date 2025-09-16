import { styled } from 'styled-components'

interface ContainerProps {
  $fitWidth?: boolean
  $hasBorder?: boolean
  $borderColor?: string
  $enableRowReordering?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $fitWidth }) => ($fitWidth ? '100%' : 'fit-content')};

  border-spacing: 0;

  overflow: hidden;

  border-radius: 0.5rem;


  --text-color-secondary: ${({ theme }) => theme.colors.text.secondary};
  --primary: ${({ theme }) => theme.colors.primary};
  --border-color: ${({ $borderColor, theme }) =>
    $borderColor ?? theme.colors.border.primary};

  padding-left: ${({ $enableRowReordering }) => ($enableRowReordering ? '4rem' : 0)};
`

export const Content = styled.div<ContainerProps>`
  border: ${({ $hasBorder }) => ($hasBorder ? '1px solid var(--border-color)' : null)};
  border-bottom: 0;
  border-radius: 0.5rem;
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
