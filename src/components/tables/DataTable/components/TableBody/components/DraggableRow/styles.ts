import styled from 'styled-components'

interface RowProps {
  cursor?: string
}

interface ContainerDragProps {
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.div<RowProps>`
  width: 100%;

  position: relative;

  display: flex;

  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`

export const EmptyCell = styled.div`
  width: min-content;

  padding: 0.75rem;

  border-top: 1px solid var(--border-color);
`

export const ReorderCell = styled.div<ContainerDragProps>`
  position: absolute;

  top: calc(50% - (2rem / 2));
  left: calc(-2.5rem);

  width: 2.5rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: grab;
`

export const ContainerDragIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  margin-right: 0.5rem;
`
