// External Libraries
import type { Table } from '@tanstack/react-table'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { CustomColumnDef, CustomData } from '../../types'

// Styles
import { Container, ResultsCell } from './styles'

interface Props<T> {
  haActionsColumn: boolean
  table: Table<CustomData<T>>
  enableRowReordering: boolean
}

export const ResultsRow = <T,>({
  table,
  haActionsColumn,
  enableRowReordering
}: Props<T>) => {
  // Constants
  const headers = table.getHeaderGroups()[0].headers

  // Functions
  function renderCells() {
    return headers.map((header, index) => {
      const col = header.column.columnDef as CustomColumnDef<CustomData<T>>
      return (
        <ResultsCell
          key={`result_cell_${header.id}_${index}`}
          style={{ width: header.getSize() }}
        >
          <Typography variant="b1" fontSize="0.75rem">
            {col.result?.label}{' '}
          </Typography>

          <Typography variant="b1" fontSize="1rem">
            {col.result?.value}
          </Typography>
        </ResultsCell>
      )
    })
  }

  return (
    <Container $enableRowReordering={enableRowReordering}>
      {renderCells()}

      {haActionsColumn ? <ResultsCell /> : null}
    </Container>
  )
}
