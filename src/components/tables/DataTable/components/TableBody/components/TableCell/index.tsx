// External Libraries
import type React from 'react'
import type { Cell, Row } from '@tanstack/react-table'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { CustomColumnDef, CustomData } from '../../../../types'

// Styles
import { Container } from './styles'

interface Props<T> {
  fitWidth: boolean
  cellPadding?: string
  row: Row<CustomData<T>>
  hasVerticalDivider: boolean
  hasHorizontalDivider: boolean
  cell: Cell<CustomData<T>, unknown>
}

export const TableCell = <T,>({
  row,
  cell,
  fitWidth,
  cellPadding,
  hasVerticalDivider,
  hasHorizontalDivider
}: Props<T>) => {
  // Constants
  const value = cell.getValue()
  const typeValue = typeof value
  const columnDef = cell.column.columnDef as CustomColumnDef<T>
  const handleClick = columnDef.onClick
    ? () => columnDef.onClick?.(row.original.data)
    : undefined

  // Functions
  function getValue() {
    if (typeValue === 'string')
      return <Typography variant="b1">{value as string}</Typography>
    return value as React.ReactNode
  }

  return (
    <Container
      $fitWidth={fitWidth}
      $cellPadding={cellPadding}
      style={{ width: cell.column.getSize() }}
      $hasVerticalDivider={hasVerticalDivider}
      $hasHorizontalDivider={hasHorizontalDivider}
      onClick={handleClick}
    >
      {getValue()}
    </Container>
  )
}
