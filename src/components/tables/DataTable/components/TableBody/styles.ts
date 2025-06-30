import { styled } from 'styled-components'

interface RowProps {
  cursor?: string
}

export const TableRow = styled.tr<RowProps>`
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`
