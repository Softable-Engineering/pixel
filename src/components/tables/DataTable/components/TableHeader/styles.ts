import { styled } from 'styled-components'

interface ContainerProps {
  $headColor?: string
  $textColorHeader?: string
}

export const Container = styled.thead<ContainerProps>`
  overflow: hidden;
  background-color: ${({ $headColor }) => $headColor ?? 'transparent'};

  svg path {
    fill: ${({ $textColorHeader }) =>
      $textColorHeader ? `${$textColorHeader} !important` : undefined};
  }

  p {
    color: ${({ $textColorHeader }) =>
      $textColorHeader ? `${$textColorHeader} !important` : 'inherit'};
  }
`
