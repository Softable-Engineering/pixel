import { styled } from 'styled-components'

interface Props {
  $cellPadding?: string
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.td<Props>`
  width: min-content;

  padding: ${({ $cellPadding }) => $cellPadding ?? '0.75rem'};

  border-right: 1px solid
    ${({ $hasVerticalDivider }) =>
      $hasVerticalDivider ? 'var(--border-color)' : 'none'};

  border-top: 1px solid
    ${({ $hasHorizontalDivider }) =>
      $hasHorizontalDivider ? 'var(--border-color)' : 'none'};
`
