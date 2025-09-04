// External Libraries
import type React from 'react'

// Components
import { SelectModal } from './component/SelectModal'

// Types
import type { ModalFieldProps } from './types'
import { CellTypes } from '@components/tables/TableView/types'

// Styles
import { Container, Textarea } from './styles'

export const ModalField: React.FC<ModalFieldProps> = props => {
  // Constants
  const { type, minHeight, onChange, onClose } = props

  // Functions
  function renderContent() {
    if (type === CellTypes.TEXT) {
      return (
        <Textarea
          autoFocus
          value={props.text}
          onChange={e => onChange(e.target.value)}
        />
      )
    }

    if (type === CellTypes.SELECT)
      return <SelectModal {...props} onClose={onClose} />

    if (type === CellTypes.MULTI_SELECT)
      return <SelectModal {...props} onClose={onClose} />
  }

  return <Container $minHeight={minHeight}>{renderContent()}</Container>
}
