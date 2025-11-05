import { styled } from 'styled-components'

interface RowProps {
  cursor?: string
}

export const Container = styled.div<RowProps>`
  width: 100%;

  position: relative;

  display: flex;
  column-gap: 0.5rem;

  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`

export const EmptyCell = styled.div`
  flex: 1;

  padding: 0.75rem;

  border-left: 1px solid var(--border-color);

  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`

export const ContainerDragIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  margin-right: 0.5rem;
`
