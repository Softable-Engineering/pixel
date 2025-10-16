// External Libraries
import { forwardRef, type ReactNode, type Ref } from 'react'

// Components
import type { BaseCustomData } from '../DataTable'

// Hooks
import { ModalContextProvider } from '@contexts/useModalContext'
import { TableViewContextProvider } from './contexts/useTableViewContext'

// Types
import type { Props, TableViewMethods } from './types'

// Styles
import { TableViewContainer } from './components/TableViewInner'

export * from './types'
export * from './utils/functions'

export const TableInner = <T extends BaseCustomData>(
  props: Props<T>,
  ref: Ref<TableViewMethods>
) => {
  return (
    <TableViewContextProvider>
      <ModalContextProvider>
        <TableViewContainer {...props} ref={ref} />
      </ModalContextProvider>
    </TableViewContextProvider>
  )
}

export const TableView = forwardRef(TableInner) as <T extends BaseCustomData>(
  props: Props<T> & { ref?: Ref<TableViewMethods> },
  ref: Ref<TableViewMethods>
) => ReactNode
