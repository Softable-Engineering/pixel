// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { Label } from '../../../Label'
import { CellModal } from '../../../../modals/CellModal'

// Types
import type { BaseSelect } from '../../types'
import { CellTypes } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'

interface Props extends BaseSelect {}

export const SelectCell: React.FC<Props> = ({ selected, select, onChange }) => {
  // Constants
  const item = select.options.find(item => item.id === selected[0])

  return (
    <CellModal
      type={CellTypes.SELECT}
      selected={selected}
      options={select.options}
      onChange={onChange}
    >
      <Container>
        {item ? <Label color={item.color} value={item.name} /> : null}
      </Container>
    </CellModal>
  )
}
