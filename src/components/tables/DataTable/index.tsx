// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: Ignored due to no validation needed */
import { DndContext, closestCenter } from '@dnd-kit/core'

// Components
import { TableBody } from './components/TableBody'
import { TableHeader } from './components/TableHeader'
import { Skeleton } from '@components/structure/Skeleton'

// Hooks
import { useDataTable } from './hooks/useDataTable'

// Types
import type { CustomColumnDef, CustomData } from './types'

// Styles
import { Container, LoaderContainer } from './styles'

export * from './types'

interface Props<T> {
  height?: number
  loading?: boolean
  fitWidth?: boolean
  data: CustomData<T>[]
  borderColor?: string
  headerColor?: string
  textColorHeader?: string
  canResetResize?: boolean
  enableSelection?: boolean
  hasVerticalDivider?: boolean
  hasHorizontalDivider?: boolean
  enableResizeColumns?: boolean
  enableColumnOrdering?: boolean
  columns: CustomColumnDef<CustomData<T>>[]
  onReorder?: (ids: string[]) => Promise<void>
}

export const DataTable = <T,>({
  data,
  loading,
  columns,
  headerColor,
  borderColor,
  textColorHeader,
  fitWidth = false,
  canResetResize = false,
  hasVerticalDivider = false,
  hasHorizontalDivider = true,
  enableResizeColumns = false,
  enableColumnOrdering = false,
  onReorder
}: Props<T>) => {
  // Hooks
  const { table, sensors, columnOrder, handleDragEnd } = useDataTable<T>({
    data,
    columns,
    enableColumnOrdering,
    onReorder
  })

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
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <Container $fitWidth={fitWidth} $borderColor={borderColor}>
        <TableHeader<CustomData<T>>
          table={table}
          headerColor={headerColor}
          columnOrder={columnOrder}
          canResetResize={canResetResize}
          textColorHeader={textColorHeader}
          hasVerticalDivider={hasVerticalDivider}
          enableResizeColumns={enableResizeColumns}
          enableColumnOrdering={enableColumnOrdering}
        />

        <TableBody
          table={table}
          hasVerticalDivider={hasVerticalDivider}
          hasHorizontalDivider={hasHorizontalDivider}
        />
      </Container>
    </DndContext>
  )
}
