// External Libraries
import type { ReactNode } from 'react'
import type { Row, Table } from '@tanstack/react-table'

// Components
import { TableCell } from './components/TableCell'

// Types
import type { CustomData } from '../../types'

// Styles
import { Cell, TableRow } from './styles'

interface Props<T> {
  table: Table<T>
  cellPadding?: string
  actionsColumn?: ReactNode
  hasVerticalDivider: boolean
  hasHorizontalDivider: boolean
}

export const TableBody = <T,>({
  table,
  cellPadding,
  actionsColumn,
  hasVerticalDivider,
  hasHorizontalDivider
}: Props<T>) => {
  const rows = table.getRowModel().rows as unknown as Row<CustomData<T>>[]

  // Functions
  function renderRows() {
    return rows.map(row => {
      const cells = row.getVisibleCells()
      const cursor = row.original.onClick ? 'pointer' : 'default'
      const handleClick = () => row.original.onClick?.(row.original.data)

      return (
        <TableRow key={`${row.id}`} cursor={cursor} onClick={handleClick}>
          {cells.map((cell, index) => {
            const isLastCell = index === cells.length - 1

            return (
              <TableCell<T>
                key={cell.id}
                row={row}
                cell={cell}
                cellPadding={cellPadding}
                hasHorizontalDivider={hasHorizontalDivider}
                hasVerticalDivider={
                  (!isLastCell || !!actionsColumn) && hasVerticalDivider
                }
              />
            )
          })}

          {actionsColumn ? <Cell /> : null}
        </TableRow>
      )
    })
  }

  return <tbody>{renderRows()}</tbody>
}
