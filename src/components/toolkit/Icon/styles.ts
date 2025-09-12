import { styled } from 'styled-components'

interface StyledIconProps {
  $size: string
  $color?: string
}

export const StyledIcon = styled.span<StyledIconProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ $color }) => $color};

  svg {
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
  }
`
