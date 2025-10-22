// External Libraries
import {
  forwardRef,
  type ReactNode,
  type Ref,
  useImperativeHandle,
  useMemo
} from 'react'

// Components
import { Footer } from '../Footer'
import { DataTable } from '@components/tables/DataTable'
import { FormulaModal } from '../../modals/FormulaModal'

// Hooks
import { useTableView } from './hooks/useTableView'
import { useTableViewContext } from '../../contexts/useTableViewContext'

// Utils
import { resolveRow } from '../../utils'
import { ActionsButtons } from '../ActionsButtons'

// Types
import type { Props, TableViewMethods } from '../../types'

// Styles
import { Container } from './styles'

export const TableInner = <T,>(props: Props<T>, ref: Ref<TableViewMethods>) => {
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
  const { permissions } = useTableViewContext()
  const { formulaModalRef, normalizedColumns, handleRefMethods } =
    useTableView(props)
  useImperativeHandle(ref, handleRefMethods)

  // Functions
  function getFooter() {
    const rowPermissions = permissions.rows.create
    if (rowPermissions.enabled === false) return null

    return <Footer onManagementHeader={props.onManagementHeader} />
  }

  function renderActionsButtons() {
    const columnPermissions = permissions.columns.create

    if (columnPermissions.enabled === false) return null

    return <ActionsButtons {...props} />
  }

  return (
    <Container id="table-column-actions-panel">
      <DataTable<T>
        {...props}
        showResultsRow
        cellPadding="1px"
        footer={getFooter()}
        columns={normalizedColumns}
        actionsColumn={renderActionsButtons()}
        stickyPortalId="table-column-actions-panel"
      />

      <FormulaModal
        ref={formulaModalRef}
        columns={formulaColumns}
        onManagementHeader={props.onManagementHeader}
      />
    </Container>
  )
}

export const TableViewContainer = forwardRef(TableInner) as <T>(
  props: Props<T> & { ref?: Ref<TableViewMethods> },
  ref: Ref<TableViewMethods>
) => ReactNode
