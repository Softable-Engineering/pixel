// External Libraries
import React from 'react'
import { Cell, Row } from '@tanstack/react-table'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type {
  CustomData,
  CustomColumnDef
} from '@components/tables/DataTable/types'

// Styles
import { Container } from './styles'

interface Props<T> {
  row: Row<CustomData<T>>
  hasVerticalDivider: boolean
  hasHorizontalDivider: boolean
  cell: Cell<CustomData<T>, unknown>
}

export const TableCell = <T,>({
  row,
  cell,
  hasVerticalDivider,
  hasHorizontalDivider
}: Props<T>) => {
  // Constants
  const value = cell.getValue()
  const typeValue = typeof value
  const columnDef = cell.column.columnDef as CustomColumnDef<T>
  const handleClick = columnDef.onClick
    ? () => columnDef.onClick!(row.original.data)
    : undefined

  // Functions
  function getValue() {
    if (typeValue === 'string')
      return <Typography variant="b1">{value as string}</Typography>
    return value as React.ReactNode
  }

  return (
    <Container
      style={{ width: cell.column.getSize() }}
      $hasVerticalDivider={hasVerticalDivider}
      $hasHorizontalDivider={hasHorizontalDivider}
      onClick={handleClick}
    >
      {getValue()}
    </Container>
  )
}
