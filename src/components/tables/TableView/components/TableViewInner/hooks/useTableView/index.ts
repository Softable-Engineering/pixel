// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Not needed> */
import { useEffect, useRef } from 'react'

// Utils
import { getColumns } from './utils'

// Types
import type { Props } from '../../../../types'
import type { FormulaModalMethods } from '../../../../modals/FormulaModal/types'
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'

export function useTableView<T>(props: Props<T>) {
  // Refs
  const formulaModalRef = useRef<FormulaModalMethods>(null)

  // Hooks
  const { handleChangePermissions } = useTableViewContext()

  // UseEffects
  useEffect(() => {
    if (props?.permissions) handleChangePermissions(props.permissions)
  }, [props?.permissions])

  // Functions
  function handleOpenFormulaModal(columnId?: string, formula?: string) {
    formulaModalRef.current?.open(columnId, formula)
  }

  // Constants
  const normalizedColumns = getColumns({
    ...props,
    onOpenFormulaModal: handleOpenFormulaModal
  })

  function handleRefMethods() {
    return { newFormulaColumn: handleOpenFormulaModal }
  }

  return {
    formulaModalRef,
    normalizedColumns,
    handleRefMethods,
    handleOpenFormulaModal
  }
}
