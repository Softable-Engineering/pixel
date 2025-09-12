// External Libraries
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
import type { ReactNode } from 'react'
import type { Table } from '@tanstack/react-table'

// Components
import { DraggableColumnHeader } from './components/DraggableColumnHeader'

// Styles
import { ActionsCell, Container, HeaderRow } from './styles'

interface Props<T> {
  table: Table<T>
  headerColor?: string
  columnOrder: string[]
  canResetResize: boolean
  textColorHeader?: string
  actionsColumn?: ReactNode
  hasVerticalDivider: boolean
  enableResizeColumns: boolean
  enableRowReordering: boolean
  hasHorizontalDivider: boolean
  enableColumnOrdering: boolean
}

export const TableHeader = <T,>({
  table,
  columnOrder,
  headerColor,
  actionsColumn,
  canResetResize,
  textColorHeader,
  hasVerticalDivider,
  enableResizeColumns,
  enableColumnOrdering,
  hasHorizontalDivider
}: Props<T>) => {
  return (
    <Container $headColor={headerColor} $textColorHeader={textColorHeader}>
      {table.getHeaderGroups().map(headerGroup => (
        <HeaderRow key={headerGroup.id}>
          <SortableContext
            items={columnOrder}
            strategy={horizontalListSortingStrategy}
          >
            {headerGroup.headers.map((header, index) => {
              const isLastColumn = index === headerGroup.headers.length - 1

              return (
                <DraggableColumnHeader<T>
                  key={header.id}
                  header={header}
                  canResetResize={canResetResize}
                  hasHorizontalDivider={hasHorizontalDivider}
                  enableResizeColumns={enableResizeColumns}
                  enableColumnOrdering={enableColumnOrdering}
                  hasVerticalDivider={
                    !isLastColumn && !actionsColumn && hasVerticalDivider
                  }
                />
              )
            })}
          </SortableContext>

          {actionsColumn ? <ActionsCell>{actionsColumn}</ActionsCell> : null}
        </HeaderRow>
      ))}
    </Container>
  )
}
