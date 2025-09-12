// External Libraries
import { useState, useMemo, useEffect } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState
} from '@tanstack/react-table'
import {
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  type DragEndEvent
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

// Types
import type { CustomData } from '../../types'
import type { UseDataTableParams } from './types'

export function useDataTable<T>({
  data,
  columns,
  enableRowReordering,
  enableColumnOrdering,
  onReorder,
  onReorderRows
}: UseDataTableParams<T>) {
  // Constants
  const initialColumnOrder = useMemo(
    () => columns.map(c => c.id ?? c.header) as string[],
    [columns]
  )
  const initialRowsOrder = useMemo(
    () => data.map(d => d.data.id) as string[],
    [data]
  )

  // States
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowsOrder, setRowsOrder] = useState<string[]>(initialRowsOrder)
  const [columnOrder, setColumnOrder] = useState<string[]>(initialColumnOrder)

  const state = { sorting, columnOrder, rowSelection }

  // UseEffects
  useEffect(() => {
    if (columnOrder.length !== initialColumnOrder.length) {
      setColumnOrder(initialColumnOrder)
    }
  }, [columnOrder.length, initialColumnOrder])

  useEffect(() => {
    if (rowsOrder.length !== initialRowsOrder.length) {
      setRowsOrder(initialRowsOrder)
    }
  }, [rowsOrder.length, initialRowsOrder])

  // Constants
  const orderedData = useMemo(() => {
    const byId = new Map(data.map(item => [item.data.id, item]))

    return rowsOrder
      .map(id => byId.get(id))
      .filter((item): item is CustomData<T> => item !== undefined)
  }, [data, rowsOrder])

  // Hooks
  const table = useReactTable<CustomData<T>>({
    columns,
    state: state,
    data: orderedData,
    enableSorting: true,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel()
  })

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  // Functions
  function handleColumnDragEnd(event: DragEndEvent) {
    if (!enableColumnOrdering) return

    const { active, over } = event

    if (active && over && active.id !== over.id) {
      const newIndex = columnOrder.indexOf(over.id as string)
      const oldIndex = columnOrder.indexOf(active.id as string)
      const newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex)

      const column = columns.find(c => c.id === active.id)

      setColumnOrder(newColumnOrder)

      if (column) onReorder?.(newColumnOrder)
    }
  }

  function handleRowDragEnd(event: DragEndEvent) {
    if (!enableRowReordering) return

    const { active, over } = event

    if (active && over && active.id !== over.id) {
      const oldIndex = rowsOrder.indexOf(active.id as string)
      const newIndex = rowsOrder.indexOf(over.id as string)
      const newRowsOrder = arrayMove(rowsOrder, oldIndex, newIndex)

      setRowsOrder(newRowsOrder)

      onReorderRows?.(newRowsOrder)
    }
  }

  return {
    table,
    rowsOrder,
    columnOrder,
    sensors: enableColumnOrdering || enableRowReordering ? sensors : [],
    handleRowDragEnd,
    handleDragEnd: handleColumnDragEnd
  }
}
