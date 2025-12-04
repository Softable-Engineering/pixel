import type { FormulaOption } from '@components/tables/TableView/modals/FormulaModal/components/OptionsListPanel/types'

export interface OptionItemProps {
  pathKey: string
  isFocused: boolean
  option: FormulaOption
  onClick: (item: FormulaOption) => void
}
