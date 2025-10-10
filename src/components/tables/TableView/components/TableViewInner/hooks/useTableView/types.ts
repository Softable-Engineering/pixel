// Types
import type { Props } from '../../../../types'

export type GetColumnsParams<T> = Props<T> & {
  onOpenFormulaModal: (columnId: string, formula?: string) => void
}
