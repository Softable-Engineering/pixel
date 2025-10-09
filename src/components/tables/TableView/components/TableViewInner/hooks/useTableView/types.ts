// Types
import type { Props } from '../../../../types'

export type GetColumnsParams<T> = Props<T> & {
  onOpenFormulaModal: () => void
}
