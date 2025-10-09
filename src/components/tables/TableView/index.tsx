// Components
import type { BaseCustomData } from '../DataTable'

// Hooks
import { ModalContextProvider } from '@contexts/useModalContext'
import { TableViewContextProvider } from './contexts/useTableViewContext'

// Types
import type { Props } from './types'

// Styles
import { TableViewInner } from './components/TableViewInner'

export * from './types'

export const TableView = <T extends BaseCustomData>(props: Props<T>) => {
  return (
    <TableViewContextProvider>
      <ModalContextProvider>
        <TableViewInner {...props} />
      </ModalContextProvider>
    </TableViewContextProvider>
  )
}
