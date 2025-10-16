import { styled } from 'styled-components'

interface ContainerProps {
  maxWidth?: string
  maxHeight?: string
  $fillFlex?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth, $fillFlex }) =>
    $fillFlex ? undefined : maxWidth || '100%'};
  max-height: ${({ maxHeight, $fillFlex }) =>
    $fillFlex ? undefined : maxHeight || '100%'};
  flex: ${({ $fillFlex }) => ($fillFlex ? 1 : undefined)};

  overflow-y: auto;

  overflow-x: auto;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`
