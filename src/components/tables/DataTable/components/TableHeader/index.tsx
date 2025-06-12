// External Libraries
import React from 'react'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
import { Table } from '@tanstack/react-table'

// Components
import { DraggableColumnHeader } from './components/DraggableColumnHeader'

// Styles
import { Container } from './styles'

interface Props<T> {
  table: Table<T>
  headerColor?: string
  columnOrder: string[]
  canResetResize: boolean
  textColorHeader?: string
  hasVerticalDivider: boolean
  enableResizeColumns: boolean
  enableColumnOrdering: boolean
}

export const TableHeader = <T,>({
  table,
  columnOrder,
  headerColor,
  canResetResize,
  textColorHeader,
  hasVerticalDivider,
  enableResizeColumns,
  enableColumnOrdering
}: Props<T>) => {
  return (
    <Container $headColor={headerColor} $textColorHeader={textColorHeader}>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
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
                  enableResizeColumns={enableResizeColumns}
                  enableColumnOrdering={enableColumnOrdering}
                  hasVerticalDivider={!isLastColumn && hasVerticalDivider}
                />
              )
            })}
          </SortableContext>
        </tr>
      ))}
    </Container>
  )
}
