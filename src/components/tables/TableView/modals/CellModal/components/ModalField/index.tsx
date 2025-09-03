// External Libraries
import type React from 'react'

// Components
import { SelectModal } from './component/SelectModal'

// Types
import { Types } from '../../types'
import type { ModalFieldProps } from './types'

// Styles
import { Container, Textarea } from './styles'

export const ModalField: React.FC<ModalFieldProps> = props => {
  // Constants
  const { type, minHeight, onChange, onClose } = props

  // Functions
  function renderContent() {
    if (type === Types.TEXT) {
      return (
        <Textarea
          autoFocus
          value={props.text}
          onChange={e => onChange(e.target.value)}
        />
      )
    }

    if (type === Types.SELECT)
      return <SelectModal {...props} onClose={onClose} />
  }

  return <Container $minHeight={minHeight}>{renderContent()}</Container>
}
