// External Libraries
import type React from 'react'

// Components
import { TypeButton } from './components/TypeButton'

// Types
import { ColumnType } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'

interface Props {
  onClick: (columnType: ColumnType) => void
}

export const ColumnTypePicker: React.FC<Props> = ({ onClick }) => {
  // Constants
  const options = Object.values(ColumnType).filter(
    option => option !== ColumnType.PAGE
  )

  // Functions
  function renderContent() {
    if (!options) return null

    return options.map(option => (
      <TypeButton key={option} type={option} onClick={onClick} />
    ))
  }

  return <Container>{renderContent()}</Container>
}
