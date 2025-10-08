// External Libraries
import type React from 'react'

// Components
import { OptionItem } from './components/OptionItem'
import { Typography } from '@components/toolkit/Typography'

// Types
import type { FormulaOption, OptionsGroup } from '../../types'

// Styles
import { Container, OptionsContainer } from './styles'

interface Props {
  groupIndex: number
  group: OptionsGroup
  selectionPath: number[]
  onClick: (item: FormulaOption) => void
}

export const ActionsGroup: React.FC<Props> = ({
  group,
  groupIndex,
  selectionPath,
  onClick
}) => {
  // Functions
  function renderOptions() {
    return group.options.map((option, index) => (
      <OptionItem
        key={getOptionKey(option)}
        option={option}
        pathKey={`${groupIndex}-${index}`}
        isFocused={checkFocused(index)}
        onClick={onClick}
      />
    ))
  }

  function checkFocused(optionIndex: number) {
    return selectionPath[0] === groupIndex && selectionPath[1] === optionIndex
  }

  function getOptionKey(option: FormulaOption) {
    return option.type === 'function'
      ? option.value
      : `${option.column.id}_${option.column.label}`
  }

  return (
    <Container>
      <Typography variant="b3">{group.title}</Typography>

      <OptionsContainer>{renderOptions()}</OptionsContainer>
    </Container>
  )
}
