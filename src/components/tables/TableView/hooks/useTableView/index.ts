// External Libraries
import { useRef } from 'react'

// Utils
import { getColumns } from './utils'

// Types
import type { Props } from '../../types'
import type { FormulaModalMethods } from '../../modals/FormulaModal/types'

export function useTableView<T>(props: Props<T>) {
  // Refs
  const formulaModalRef = useRef<FormulaModalMethods>(null)

  // States

  // Functions
  function handleOpenFormulaModal() {
    formulaModalRef.current?.open()
  }

  // Constants
  const normalizedColumns = getColumns({
    ...props,
    onOpenFormulaModal: handleOpenFormulaModal
  })

  return {
    formulaModalRef,
    normalizedColumns,
    handleOpenFormulaModal
  }
}
