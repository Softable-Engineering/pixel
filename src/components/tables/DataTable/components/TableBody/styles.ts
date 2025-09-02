import { styled } from 'styled-components'

interface RowProps {
  cursor?: string
}

export const TableRow = styled.tr<RowProps>`
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`

export const Cell = styled.td`
  width: min-content;

  padding: 0.75rem;

  border-top: 1px solid var(--border-color);
`
