// External Libraries
import type { ReactNode } from 'react'
import type { Row, Table } from '@tanstack/react-table'

// Components
import { DraggableRow } from './components/DraggableRow'

// Types
import type { CustomData } from '../../types'

// Styles
import { Container } from './styles'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

interface Props<T> {
  table: Table<T>
  rowsOrder: string[]
  cellPadding?: string
  actionsColumn?: ReactNode
  hasVerticalDivider: boolean
  enableRowReordering?: boolean
  hasHorizontalDivider: boolean
}

export const TableBody = <T,>({
  table,
  rowsOrder,
  cellPadding,
  actionsColumn,
  hasVerticalDivider,
  enableRowReordering,
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
        <DraggableRow
          row={row}
          key={row.id}
          cells={cells}
          cursor={cursor}
          cellPadding={cellPadding}
          actionsColumn={actionsColumn}
          hasVerticalDivider={hasVerticalDivider}
          enableRowReordering={enableRowReordering}
          hasHorizontalDivider={hasHorizontalDivider}
          handleClick={handleClick}
        />
      )
    })
  }

  return (
    <Container>
      <SortableContext items={rowsOrder} strategy={verticalListSortingStrategy}>
        {renderRows()}
      </SortableContext>
    </Container>
  )
}
