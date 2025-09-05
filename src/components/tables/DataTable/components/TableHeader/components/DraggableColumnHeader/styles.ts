import { styled } from 'styled-components'

interface Props {
  $hasVerticalDivider?: boolean
}

interface ContentProps {
  $width?: number
  $padding?: string
  $maxWidth?: number
}

export const Container = styled.div<Props>`
  height: 2.5rem;

  text-align: left;

  box-shadow: ${({ $hasVerticalDivider }) =>
    $hasVerticalDivider ? '1px 0 var(--border-color)' : 'none'};
`

export const ColumnHeader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: left;
`

export const Content = styled.div<ContentProps>`
  width: ${({ $width }) => `${$width}px`};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: left;

  span {
    width: ${({ $width }) => `${$width}px`};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: ${({ $padding }) => $padding || '0'};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ResizeHandle = styled.div`
  width: 0.25rem;
  height: 100%;

  cursor: col-resize;

  user-select: none;
  touch-action: none;

  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContainerDragIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  margin-right: 0.5rem;
`
