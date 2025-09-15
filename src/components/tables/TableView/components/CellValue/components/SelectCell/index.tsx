// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { Label } from '../../../Label'
import { CellModal } from '../../../../modals/CellModal'

// Types
import type { BaseSelect } from '../../types'
import { CellTypes } from '@components/tables/TableView/modals/CellModal/types'

// Styles
import { Container } from './styles'

type Variant = BaseSelect

type Props = Variant

export const SelectCell: React.FC<Props> = props => {
  // Constants
  const { selected, select, onChange } = props
  const labels = select.options.filter(option => selected.includes(option.id))

  // Functions
  function renderLabels() {
    if (!props.select.multiple) {
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
      minHeight={5 * 16}
      type={CellTypes.SELECT}
      selected={selected}
      multiple={select.multiple}
      options={select.options}
      onChange={onChange}
    >
      <Container>{renderLabels()}</Container>
    </CellModal>
  )
}
