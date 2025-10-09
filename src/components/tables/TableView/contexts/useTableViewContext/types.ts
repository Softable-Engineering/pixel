// Types
import type { TablePermissions } from '../../types'
import type { DeepPartial } from '../../types/deepPartial'
import type { FormulaModalMethods } from '../../modals/FormulaModal/types'

export interface TableViewContextData {
  permissions: TablePermissions
  formulaModalRef: React.RefObject<FormulaModalMethods>
  handleChangePermissions: (permissions: DeepPartial<TablePermissions>) => void
}
