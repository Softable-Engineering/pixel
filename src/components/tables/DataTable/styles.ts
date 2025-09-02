import { styled } from 'styled-components'

interface ContainerProps {
  $fitWidth?: boolean
  $hasBorder?: boolean
  $borderColor?: string
}

export const Container = styled.table<ContainerProps>`
  width: ${({ $fitWidth }) => ($fitWidth ? '100%' : 'auto')};

  border-spacing: 0;

  overflow: hidden;

  border-radius: 0.5rem;

  --primary: ${({ theme }) => theme.colors.primary};
  --border-color: ${({ $borderColor, theme }) =>
    $borderColor ?? theme.colors.border.primary};

  border: ${({ $hasBorder }) => ($hasBorder ? '1px solid var(--border-color)' : null)};
  border-bottom: 1px solid var(--border-color)
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
