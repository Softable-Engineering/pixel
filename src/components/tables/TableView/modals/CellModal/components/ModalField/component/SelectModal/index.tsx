// External Libraries
import type React from 'react'

// Components
import { ListLabels } from './components/ListLabels'
import { Label } from '@components/tables/TableView/components/Label'

// Types
import type { SelectProps } from '../../../../types'
import type { SelectOption } from '@components/tables/TableView/types'

// Styles
import { Container, ContainerDisplay, Input } from './styles'

type Props = SelectProps & {
  onClose: () => void
}

export const SelectModal: React.FC<Props> = ({
  options,
  multiple,
  selected,
  onChange,
  onClose
}) => {
  // Constants
  const selecteds = options.filter(option => selected.includes(option.id))

  // Functions
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
      onChange([...selected, opt.id])
      return onClose()
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
