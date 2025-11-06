// External Libraries
import { useState, type ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import type { Cell, Row } from '@tanstack/react-table'
import type { CSSProperties } from 'styled-components'

// Components
import { TableCell } from '../TableCell'
import { ActionsCell } from './components/ActionsCell'

// Types
import type { CustomData } from '@components/tables/DataTable/types'

// Styles
import { EmptyCell, Container } from './styles'

interface Props<T> {
  cursor: string
  rowIndex: number
  isSelected: boolean
  cellPadding?: string
  row: Row<CustomData<T>>
  actionsColumn?: ReactNode
  hasVerticalDivider: boolean
  enableRowReordering?: boolean
  hasHorizontalDivider: boolean
  cells: Cell<CustomData<T>, unknown>[]
  onClick: () => void
  onToggleSelectedRow: () => void
}

export const DraggableRow = <T,>({
  row,
  cells,
  cursor,
  rowIndex,
  isSelected,
  cellPadding,
  actionsColumn,
  hasVerticalDivider,
  enableRowReordering,
  hasHorizontalDivider,
  onClick,
  onToggleSelectedRow
}: Props<T>) => {
  // States
  const [hover, setHover] = useState(false)

  // Hooks
  const { listeners, transform, attributes, isDragging, setNodeRef } =
    useSortable({ id: row.original.data.id })

  // Constants
  const showActionsCell = enableRowReordering && (hover || isSelected)
  const style: CSSProperties = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    opacity: hover ? 0.8 : isDragging ? 0.5 : 1,
    transition: '0.5s'
  }

  return (
    // biome-ignore lint/a11y/useSemanticElements: <Not needed>
    <Container
      ref={setNodeRef}
      tabIndex={0}
      style={style}
      role="button"
      cursor={cursor}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {showActionsCell ? (
        <ActionsCell
          listeners={listeners}
          attributes={attributes}
          isSelected={isSelected}
          hasVerticalDivider={hasVerticalDivider}
          hasHorizontalDivider={hasHorizontalDivider}
          onToggleSelectedRow={onToggleSelectedRow}
        />
      ) : null}

      {cells.map((cell, index) => {
        // const isLastCell = index === cells.length - 1

        return (
          <TableCell<T>
            key={`row_${cell.id}_${index}`}
            row={row}
            cell={cell}
            rowIndex={rowIndex}
            cellPadding={cellPadding}
            hasHorizontalDivider={hasHorizontalDivider}
            hasVerticalDivider={hasVerticalDivider}
          />
        )
      })}

      {actionsColumn ? <EmptyCell /> : null}
    </Container>
  )
}
