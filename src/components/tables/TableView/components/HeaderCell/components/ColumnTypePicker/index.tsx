// External Libraries
import type React from 'react'

// Components
import { TypeButton } from './components/TypeButton'

// Types
import { ColumnType } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'

interface Props {
  columnType: ColumnType
  onClick: (columnType: ColumnType) => void
}

export const ColumnTypePicker: React.FC<Props> = ({ columnType, onClick }) => {
  // Hooks
  const { permissions } = useTableViewContext()
  const options = getOptions()

  // Functions
  function getOptions() {
    if (permissions.columns.changeType.enabled === false) return []

    if (!Array.isArray(permissions.columns.changeType.rules[columnType])) {
      return Object.values(ColumnType).filter(
        option => option !== ColumnType.PAGE
      )
    } else {
      return permissions.columns.changeType.rules[columnType]
    }
  }

  function renderContent() {
    if (!options) return null

    return options.map(option => (
      <TypeButton key={option} type={option} onClick={onClick} />
    ))
  }

  return <Container>{renderContent()}</Container>
}
