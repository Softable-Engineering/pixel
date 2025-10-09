// External Libraries
import type React from 'react'
import {
  useRef,
  useState,
  useContext,
  createContext,
  type PropsWithChildren
} from 'react'

// Utils
import { mergeTablePermissions } from '../../utils'
import { DEFAULT_PERMISSIONS } from '../../constants.ts'

// Types
import type { TableViewContextData } from './types'
import type { TablePermissions } from '../../types'
import type { DeepPartial } from '../../types/deepPartial'
import type { FormulaModalMethods } from '../../modals/FormulaModal/types'

const TableViewContext = createContext<TableViewContextData>(
  {} as TableViewContextData
)

const TableViewContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  // Refs
  const formulaModalRef = useRef<FormulaModalMethods>(null)

  // States
  const [permissions, setPermissions] =
    useState<TablePermissions>(DEFAULT_PERMISSIONS)

  // Functions
  function handleChangePermissions(permissions: DeepPartial<TablePermissions>) {
    if (!permissions) return

    const newPermissions = mergeTablePermissions(permissions)
    setPermissions(newPermissions)
  }

  return (
    <TableViewContext.Provider
      value={{
        permissions,
        formulaModalRef,
        handleChangePermissions
      }}
    >
      {children}
    </TableViewContext.Provider>
  )
}

function useTableViewContext(): TableViewContextData {
  const context = useContext(TableViewContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useTableViewContext must be within a ContextProvider')
  }

  return context
}

export { TableViewContextProvider, useTableViewContext }
