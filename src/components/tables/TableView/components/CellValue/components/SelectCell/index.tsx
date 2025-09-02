// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { Label } from './components/Label'

// Types
import type { BaseSelect } from '../../types'

// Styles
import { Container } from './styles'

interface Props extends BaseSelect {
  selected: string
}

export const SelectCell: React.FC<Props> = ({ selected, select }) => {
  // Constants
  const item = select.options.find(item => item.id === selected)

  if (!item) return null

  return (
    <Container>
      <Label color={item.color} value={item.name} />
    </Container>
  )
}
