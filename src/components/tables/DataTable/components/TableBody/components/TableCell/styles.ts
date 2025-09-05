import { styled } from 'styled-components'

interface Props {
  $cellPadding?: string
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;

  padding: ${({ $cellPadding }) => $cellPadding ?? '0.75rem'};

  box-shadow: ${({ $hasVerticalDivider }) =>
    $hasVerticalDivider ? '1px 0 var(--border-color)' : 'none'};

  border-top: 1px solid
    ${({ $hasHorizontalDivider }) =>
      $hasHorizontalDivider ? 'var(--border-color)' : 'none'};
`
