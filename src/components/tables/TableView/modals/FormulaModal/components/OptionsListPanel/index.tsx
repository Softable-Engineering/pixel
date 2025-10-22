// External Libraries
import type React from 'react'

// Components
import { ActionsGroup } from './components/ActionsGroup'
import { EmptyMessage } from './components/EmptyMessage'

// Types
import type { FormulaOption, OptionsGroup } from './types'

// Styles
import { Container } from './styles'

interface Props {
  options: OptionsGroup[]
  selectionPath: number[]
  onOptionClick: (item: FormulaOption) => void
}

export const OptionsListPanel: React.FC<Props> = ({
  options,
  selectionPath,
  onOptionClick
}) => {
  // Functions
  function renderOptions() {
    if (!options.length) return <EmptyMessage />

    return options.map((group, index) => (
      <ActionsGroup
        key={group.title}
        group={group}
        groupIndex={index}
        selectionPath={selectionPath}
        onClick={onOptionClick}
      />
    ))
  }
  return <Container>{renderOptions()}</Container>
}
