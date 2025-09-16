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
  const [selectedRows, setSelectedRows] = useState<string[]>([])
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
  function moveGroup(
    list: string[],
    groupIds: string[],
    overId: string,
    place: 'before' | 'after'
  ) {
    const current = [...list]

    const group = groupIds
      .filter(id => current.includes(id))
      .sort((a, b) => current.indexOf(a) - current.indexOf(b))
    if (group.length === 0) return current

    // Se o alvo está dentro do grupo, o caller deve resolver outro alvo (vizinho)
    if (group.includes(overId)) return current

    const withoutGroup = current.filter(id => !group.includes(id))
    let insertIndex = withoutGroup.indexOf(overId)
    if (insertIndex < 0) return current

    if (place === 'after')
      insertIndex = Math.min(insertIndex + 1, withoutGroup.length)

    const before = withoutGroup.slice(0, insertIndex)
    const after = withoutGroup.slice(insertIndex)
    return [...before, ...group, ...after]
  }

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
    if (!(active && over) || active.id === over.id) return

    const activeId = String(active.id)
    const overId = String(over.id)

    const current = rowsOrder

    const hasMulti = selectedRows.includes(activeId) && selectedRows.length > 1
    const group = (hasMulti ? selectedRows : [activeId])
      .filter(id => current.includes(id))
      .sort((a, b) => current.indexOf(a) - current.indexOf(b))

    const firstIdx = current.indexOf(group[0])
    const lastIdx = current.indexOf(group[group.length - 1])
    const idxActive = current.indexOf(activeId)
    const idxOver = current.indexOf(overId)
    const movingDown = idxOver > idxActive

    let newRowsOrder: string[]

    if (!group.includes(overId)) {
      const place: 'before' | 'after' = movingDown ? 'after' : 'before'
      newRowsOrder = moveGroup(current, group, overId, place)
    } else {
      if (movingDown) {
        const afterId = current[lastIdx + 1]
        if (afterId) {
          newRowsOrder = moveGroup(current, group, afterId, 'after')
        } else {
          const withoutGroup = current.filter(id => !group.includes(id))
          newRowsOrder = [...withoutGroup, ...group]
        }
      } else {
        const beforeId = current[firstIdx - 1]
        if (beforeId) {
          newRowsOrder = moveGroup(current, group, beforeId, 'before')
        } else {
          const withoutGroup = current.filter(id => !group.includes(id))
          newRowsOrder = [...group, ...withoutGroup]
        }
      }
    }

    setRowsOrder(newRowsOrder)
    onReorderRows?.(newRowsOrder)
  }

  function handleToggleSelection(rowId: string) {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter(id => id !== rowId))
    } else {
      setSelectedRows([...selectedRows, rowId])
    }
  }

  return {
    table,
    rowsOrder,
    columnOrder,
    selectedRows,
    sensors: enableColumnOrdering || enableRowReordering ? sensors : [],
    handleRowDragEnd,
    handleToggleSelection,
    handleDragEnd: handleColumnDragEnd
  }
}
