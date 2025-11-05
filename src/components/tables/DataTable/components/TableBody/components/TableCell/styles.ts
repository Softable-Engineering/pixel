import { styled } from 'styled-components'

interface Props {
  $cellPadding?: string
  $isFirstRow?: boolean
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;

  padding: ${({ $cellPadding }) => $cellPadding ?? '0.75rem'};


  border-top: ${({ $isFirstRow }) =>
    $isFirstRow ? '1px solid var(--border-color)' : 'none'};
  border-left: ${({ $hasVerticalDivider }) =>
    $hasVerticalDivider ? '1px solid var(--border-color)' : 'none'};
  border-right: ${({ $hasVerticalDivider }) =>
    $hasVerticalDivider ? '1px solid var(--border-color)' : 'none'};

  border-bottom: 1px solid
    ${({ $hasHorizontalDivider }) =>
      $hasHorizontalDivider ? 'var(--border-color)' : 'none'};
`
