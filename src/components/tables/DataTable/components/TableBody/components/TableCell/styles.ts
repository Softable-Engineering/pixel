import { styled } from 'styled-components'

interface Props {
  $fitWidth: boolean
  $cellPadding?: string
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.div<Props>`
  width: ${$fitWidth => ($fitWidth ? '100% !important' : 'fit-content')};

  display: flex;
  flex-direction: column;

  padding: ${({ $cellPadding }) => $cellPadding ?? '0.75rem'};

  box-shadow: ${({ $hasVerticalDivider }) =>
    $hasVerticalDivider ? '1px 0 var(--border-color)' : 'none'};

  border-bottom: 1px solid
    ${({ $hasHorizontalDivider }) =>
      $hasHorizontalDivider ? 'var(--border-color)' : 'none'};
`
