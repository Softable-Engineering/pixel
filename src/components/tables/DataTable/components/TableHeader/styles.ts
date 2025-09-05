import { styled } from 'styled-components'

interface ContainerProps {
  $headColor?: string
  $textColorHeader?: string
}

export const Container = styled.div<ContainerProps>`
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

export const HeaderRow = styled.div`
  width: 100%;

  display: flex;
`

export const ActionsCell = styled.div`
  padding: 0 2rem 0 0;
`
