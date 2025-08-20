import styled from 'styled-components'

import { getBorder, getSpinnerAnimation } from './utils'
import { DEFAULT_SIZE, DEFAULT_COLOR } from './constants'

export type LoaderProps = {
  size?: string
  color?: string
  speed?: string
  thickness?: string
  $emptyColor?: string
}

export const Container = styled.div<LoaderProps>`
  display: inline-block;

  width: ${({ size }) => size || DEFAULT_SIZE};
  height: ${({ size }) => size || DEFAULT_SIZE};

  border-radius: 50%;
  border: ${props => getBorder(props)};
  border-left-color: ${({ color }) => color || DEFAULT_COLOR};

  animation: ${props => getSpinnerAnimation(props)};

  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
