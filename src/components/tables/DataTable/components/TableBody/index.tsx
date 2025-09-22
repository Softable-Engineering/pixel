// External Libraries
import type { ReactNode } from 'react'
import type { Row, Table } from '@tanstack/react-table'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

// Components
import { DraggableRow } from './components/DraggableRow'

// Types
import type { CustomData } from '../../types'

// Styles
import { Container } from './styles'

interface Props<T> {
  table: Table<T>
  fitWidth: boolean
  rowsOrder: string[]
  cellPadding?: string
  selectedRows: string[]
  actionsColumn?: ReactNode
  hasVerticalDivider: boolean
  enableRowReordering?: boolean
  hasHorizontalDivider: boolean
  toggleSelection: (id: string) => void
}

export const TableBody = <T,>({
  table,
  fitWidth,
  rowsOrder,
  cellPadding,
  selectedRows,
  actionsColumn,
  hasVerticalDivider,
  enableRowReordering,
  hasHorizontalDivider,
  toggleSelection
}: Props<T>) => {
  // Constants
  const rows = table.getRowModel().rows as unknown as Row<CustomData<T>>[]

  // Functions
  function renderRows() {
    return rows.map(row => {
      const cells = row.getVisibleCells()
      const isSelected = selectedRows.includes(row.original.data.id)
      const cursor = row.original.onClick ? 'pointer' : 'default'
      const handleClick = () => row.original.onClick?.(row.original.data)

      return (
        <DraggableRow
          row={row}
          key={row.id}
          cells={cells}
          cursor={cursor}
          fitWidth={fitWidth}
          isSelected={isSelected}
          cellPadding={cellPadding}
          actionsColumn={actionsColumn}
          hasVerticalDivider={hasVerticalDivider}
          enableRowReordering={enableRowReordering}
          hasHorizontalDivider={hasHorizontalDivider}
          onClick={handleClick}
          onToggleSelectedRow={() => toggleSelection(row.original.data.id)}
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
