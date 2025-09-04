// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { Label } from '../../../Label'
import { CellModal } from '../../../../modals/CellModal'

// Types
import type { BaseMultiSelect, BaseSelect } from '../../types'
import { CellTypes, ColumnType } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'

type Variant = BaseSelect | BaseMultiSelect

type Props = Variant

export const SelectCell: React.FC<Props> = props => {
  // Constants
  const { selected, select, onChange } = props
  const labels = select.options.filter(option => selected.includes(option.id))
  const type = isMultipleSelect(props)
    ? CellTypes.MULTI_SELECT
    : CellTypes.SELECT

  // Functions
  function isMultipleSelect(variant: Variant): variant is BaseMultiSelect {
    return variant.type === ColumnType.MULTI_SELECT
  }

  function renderLabels() {
    if (!isMultipleSelect(props)) {
      const item = labels[0]
      if (!item) return null
      return <Label color={item.color} value={item.name} />
    }

    return labels.map((option, index) => {
      return (
        <Label
          key={`options_${option.id}_${index}`}
          color={option.color}
          value={option.name}
        />
      )
    })
  }

  return (
    <CellModal
      type={type}
      selected={selected}
      options={select.options}
      onChange={onChange}
    >
      <Container>{renderLabels()}</Container>
    </CellModal>
  )
}
