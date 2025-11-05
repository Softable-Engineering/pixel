// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: Ignored due to no validation needed */
import type { ReactNode } from 'react'
import type { CSSProperties } from 'styled-components'
import { DndContext, closestCenter } from '@dnd-kit/core'

// Components
import { TableBody } from './components/TableBody'
import { ResultsRow } from './components/ResultsRow'
import { TableHeader } from './components/TableHeader'
import { Skeleton } from '@components/structure/Skeleton'
import { Portal } from '@components/commons/modals/Portal'

// Hooks
import { useDataTable } from './hooks/useDataTable'

// Types
import type { CustomColumnDef, CustomData } from './types'

// Styles
import { Container, Content, LoaderContainer } from './styles'

export * from './types'

interface Props<T> {
  height?: number
  loading?: boolean
  fitWidth?: boolean
  footer?: ReactNode
  cellPadding?: string
  data: CustomData<T>[]
  borderColor?: string
  headerColor?: string
  stickyPortalId?: string
  showResultsRow?: boolean
  textColorHeader?: string
  canResetResize?: boolean
  actionsColumn?: ReactNode
  enableSelection?: boolean
  tableStyles?: CSSProperties
  hasVerticalDivider?: boolean
  enableRowReordering?: boolean
  enableResizeColumns?: boolean
  hasHorizontalDivider?: boolean
  enableColumnOrdering?: boolean
  columns: CustomColumnDef<CustomData<T>>[]
  onReorder?: (ids: string[]) => Promise<void>
  onReorderRows?: (ids: string[]) => Promise<void>
}

export const DataTable = <T,>({
  data,
  footer,
  loading,
  columns,
  headerColor,
  borderColor,
  cellPadding,
  tableStyles,
  actionsColumn,
  stickyPortalId,
  textColorHeader,
  fitWidth = false,
  showResultsRow = false,
  canResetResize = false,
  hasVerticalDivider = false,
  enableRowReordering = false,
  hasHorizontalDivider = true,
  enableResizeColumns = false,
  enableColumnOrdering = false,
  onReorder
}: Props<T>) => {
  // Hooks
  const {
    table,
    sensors,
    rowsOrder,
    columnOrder,
    selectedRows,
    handleDragEnd,
    handleRowDragEnd,
    handleToggleSelection
  } = useDataTable<T>({
    data,
    columns,
    enableRowReordering,
    enableColumnOrdering,
    onReorder
  })

  // Functions
  function renderResultsRow() {
    if (!showResultsRow) return null

    if (stickyPortalId) {
      return (
        <Portal wrapperId={stickyPortalId}>
          <ResultsRow
            table={table}
            haActionsColumn={!!actionsColumn}
            enableRowReordering={enableRowReordering}
          />
        </Portal>
      )
    }

    return (
      <ResultsRow
        table={table}
        enableRowReordering={enableRowReordering}
        haActionsColumn={!!actionsColumn}
      />
    )
  }

  if (loading) {
    return (
      <LoaderContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={`skeleton_${index}`} width="100%" height="3rem" />
        ))}
      </LoaderContainer>
    )
  }

  return (
    <Container $fitWidth={fitWidth} $enableRowReordering={enableRowReordering}>
      <Content
        style={tableStyles}
        $borderColor={borderColor}
        $hasBorder={!actionsColumn}
      >
        <Portal wrapperId={stickyPortalId}>
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <TableHeader<CustomData<T>>
              table={table}
              headerColor={headerColor}
              columnOrder={columnOrder}
              actionsColumn={actionsColumn}
              canResetResize={canResetResize}
              textColorHeader={textColorHeader}
              hasVerticalDivider={hasVerticalDivider}
              enableRowReordering={enableRowReordering}
              enableResizeColumns={enableResizeColumns}
              hasHorizontalDivider={hasHorizontalDivider}
              enableColumnOrdering={enableColumnOrdering}
            />
          </DndContext>
        </Portal>

        <DndContext
          sensors={sensors}
          onDragEnd={handleRowDragEnd}
          collisionDetection={closestCenter}
        >
          <TableBody
            table={table}
            rowsOrder={rowsOrder}
            cellPadding={cellPadding}
            selectedRows={selectedRows}
            actionsColumn={actionsColumn}
            hasVerticalDivider={hasVerticalDivider}
            enableRowReordering={enableRowReordering}
            hasHorizontalDivider={hasHorizontalDivider}
            toggleSelection={handleToggleSelection}
          />
        </DndContext>

        {footer}

        {renderResultsRow()}
      </Content>
    </Container>
  )
}
