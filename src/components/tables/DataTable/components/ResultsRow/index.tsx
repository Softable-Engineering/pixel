// External Libraries
import type { Table } from '@tanstack/react-table'

// Components

// Types
import type { CustomColumnDef, CustomData } from '../../types'

// Styles
import { Container, ResultsCell } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props<T> {
  table: Table<CustomData<T>>
  enableRowReordering: boolean
}

export const ResultsRow = <T,>({ table, enableRowReordering }: Props<T>) => {
  // Constants
  const headers = table.getHeaderGroups()[0].headers

  // Functions
  function renderCells() {
    return headers.map(header => {
      const col = header.column.columnDef as CustomColumnDef<CustomData<T>>
      return (
        <ResultsCell
          key={`result_cell_${header.id}`}
          style={{ width: header.getSize() }}
        >
          <Typography variant="b1">{col.result}</Typography>
        </ResultsCell>
      )
    })
  }

  return (
    <Container $enableRowReordering={enableRowReordering}>
      {renderCells()}
    </Container>
  )
}
