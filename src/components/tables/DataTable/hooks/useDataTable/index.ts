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
  enableColumnOrdering,
  onReorder
}: UseDataTableParams<T>) {
  // Constants
  const initialColumnOrder = useMemo(
    () => columns.map(c => c.id ?? c.header) as string[],
    [columns]
  )

  // States
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnOrder, setColumnOrder] = useState<string[]>(initialColumnOrder)

  const state = { sorting, columnOrder, rowSelection }

  // UseEffects
  useEffect(() => {
    if (columnOrder.length !== initialColumnOrder.length) {
      setColumnOrder(initialColumnOrder)
    }
  }, [columnOrder.length, initialColumnOrder])

  // Hooks
  const table = useReactTable<CustomData<T>>({
    data,
    columns,
    state: state,
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
  function handleDragEnd(event: DragEndEvent) {
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

  return {
    table,
    sensors: enableColumnOrdering ? sensors : [],
    columnOrder,
    handleDragEnd
  }
}
