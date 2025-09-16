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
import { useState } from 'react'

type Variant = SelectProps

type Props = Variant & {
  onClose: () => void
}

export const SelectModal: React.FC<Props> = props => {
  // Constants
  const { options, selected, onChange, onClose } = props
  const selecteds = options.filter(option => selected.includes(option.id))

  // States
  const [search, setSearch] = useState('')

  const optionsFiltered = options.filter(option =>
    option.name.toLowerCase().includes(search.toLowerCase())
  )

  // Functions
  function renderLabels() {
    return selecteds.map((option, index) => {
      return (
        <Label
          key={`options_${option.id}_${index}`}
          value={option.name}
          color={option.color}
          onRemove={() => handleClickRemoveOption(option)}
        />
      )
    })
  }

  function handleClickOption(opt: SelectOption) {
    if (props.multiple) return onChange([...selected, opt.id])

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

        <Input autoFocus onChange={e => setSearch(e.target.value)} />
      </ContainerDisplay>

      <ListLabels options={optionsFiltered} onClick={handleClickOption} />
    </Container>
  )
}
