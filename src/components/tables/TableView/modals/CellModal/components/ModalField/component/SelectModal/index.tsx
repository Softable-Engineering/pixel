// External Libraries
import type React from 'react'

// Components
import { ListLabels } from './components/ListLabels'
import { Label } from '@components/tables/TableView/components/Label'

// Types
import type { MultiSelectProps, SelectProps } from '../../../../types'
import {
  CellTypes,
  type SelectOption
} from '@components/tables/TableView/types'

// Styles
import { Container, ContainerDisplay, Input } from './styles'

type Variant = SelectProps | MultiSelectProps

type Props = Variant & {
  onClose: () => void
}

export const SelectModal: React.FC<Props> = props => {
  // Constants
  const { options, selected, onChange, onClose } = props
  const selecteds = options.filter(option => selected.includes(option.id))
  const multiple = isMultipleSelect(props)

  // Functions
  function isMultipleSelect(variant: Variant): variant is MultiSelectProps {
    return variant.type === CellTypes.MULTI_SELECT
  }

  function renderLabels() {
    return selecteds.map((option, index) => {
      return (
        <Label
          key={`options_${option.id}_${index}`}
          color={option.color}
          value={option.name}
          onRemove={() => handleClickRemoveOption(option)}
        />
      )
    })
  }

  function handleClickOption(opt: SelectOption) {
    if (multiple) {
      return onChange([...selected, opt.id])
    }

    onChange([opt.id])
    onClose()
  }

  function handleClickRemoveOption(opt: SelectOption) {
    onChange(selected.filter(id => id !== opt.id))
  }

  return (
    <Container>
      <ContainerDisplay>
        {renderLabels()}

        <Input autoFocus />
      </ContainerDisplay>

      <ListLabels options={options} onClick={handleClickOption} />
    </Container>
  )
}
