// External Libraries
import { useMemo } from 'react'

// Components
import { Footer } from '../Footer'
import { DataTable } from '@components/tables/DataTable'
import { FormulaModal } from '../../modals/FormulaModal'

// Hooks
import { useTableView } from './hooks/useTableView'

// Utils
import { resolveRow } from '../../utils'
import { ActionsButtons } from '../ActionsButtons'

// Types
import type { Props } from '../../types'

// Styles
import { Container } from './styles'

export const TableViewInner = <T,>(props: Props<T>) => {
  // Constants
  const formulaColumns = useMemo(() => {
    if (!props.data.length) return []
    return resolveRow({
      row: props.data[0],
      locale: props.locale,
      columns: props.columns
    })
  }, [props.columns, props.data, props.locale])

  // Hooks
  const { formulaModalRef, normalizedColumns } = useTableView(props)

  // Functions
  function getFooter() {
    if (props.viewOnly) return null

    return <Footer onManagementHeader={props.onManagementHeader} />
  }

  function renderActionsButtons() {
    if (props.viewOnly) return null

    return <ActionsButtons {...props} />
  }

  return (
    <Container id="table-column-actions-panel">
      <DataTable<T>
        {...props}
        cellPadding="1px"
        footer={getFooter()}
        columns={normalizedColumns}
        actionsColumn={renderActionsButtons()}
      />

      <FormulaModal ref={formulaModalRef} columns={formulaColumns} />
    </Container>
  )
}
