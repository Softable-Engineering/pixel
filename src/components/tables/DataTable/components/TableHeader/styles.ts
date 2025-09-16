import { styled } from 'styled-components'

interface ContainerProps {
  $headColor?: string
  $textColorHeader?: string
}

interface ReorderCellProps {
  $hasVerticalDivider?: boolean
  $hasHorizontalDivider?: boolean
}

interface ActionsCellProps {
  $hasHorizontalDivider?: boolean
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

export const ActionsCell = styled.div<ActionsCellProps>`
  flex: 1;

  display: flex;

  padding: 0 2rem 0 0;

    border-bottom: 1px solid
    ${({ $hasHorizontalDivider }) =>
      $hasHorizontalDivider ? 'var(--border-color)' : 'none'};
`

export const ReorderCell = styled.div<ReorderCellProps>`
  width: 2.5rem;

  border-right: ${({ $hasVerticalDivider }) => ($hasVerticalDivider ? '1px solid var(--border-color)' : 'none')};
`
