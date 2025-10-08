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
import { useMemo } from 'react'

type Variant = BaseSelect

type Props = Variant & {
  viewOnly?: boolean
}

export const SelectCell: React.FC<Props> = props => {
  // Constants
  const { selected, select, onChange } = props
  const labels = useMemo(() => {
    return select.options.filter(option => selected.includes(option.id))
  }, [select.options, selected])

  // Functions
  function renderLabels() {
    if (labels.length === 0) return null

    return labels.map((option, index) => {
      return (
        <Label
          key={`options_${option.id}_${index}`}
          value={option.name}
          color={option.color}
        />
      )
    })
  }

  return (
    <CellModal
      minHeight={5 * 16}
      selected={selected}
      type={CellTypes.SELECT}
      options={select.options}
      viewOnly={props.viewOnly}
      multiple={select.multiple}
      onChange={onChange}
    >
      <Container>{renderLabels()}</Container>
    </CellModal>
  )
}
