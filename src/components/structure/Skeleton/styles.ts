import { styled } from 'styled-components'
import type { IMargin } from '@type/css'
import { applyMargin } from '@utils/functions'

export interface ContainerProps extends IMargin {
  width?: string
  height?: string
  $borderRadius?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || '100%'};
  min-width: ${({ width }) => width || '100%'};

  height: ${({ height }) => height || '100%'};
  min-height: ${({ height }) => height || '100%'};

  cursor: default;
  background: ${({ theme }) => theme.colors.background.skeleton};

  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};

  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  color: transparent !important;

  ${props => applyMargin(props)};

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
