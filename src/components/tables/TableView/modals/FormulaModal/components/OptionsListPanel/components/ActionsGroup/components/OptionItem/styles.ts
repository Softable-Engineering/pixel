import { styled } from 'styled-components'

interface ContainerProps {
  $isFocused: boolean
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 0.5rem;
  border-radius: 3px;
  padding: 0.5rem;

  transition: background-color 0.2s ease;

  background-color: ${({ $isFocused, theme }) =>
    $isFocused ? theme.colors.background.hover : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }
`

export const TextContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  column-gap: 0.5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
  }
`

export const IconContainer = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
`
