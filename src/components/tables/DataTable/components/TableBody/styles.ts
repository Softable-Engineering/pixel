import { styled } from 'styled-components'

interface RowProps {
  cursor?: string
}

export const Container = styled.div`
  width: 100%;
  height: fit-content;
`

export const TableRow = styled.div<RowProps>`
  width: 100%;

  display: flex;

  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`

export const Cell = styled.td`
  width: min-content;

  padding: 0.75rem;

  border-top: 1px solid var(--border-color);
`
