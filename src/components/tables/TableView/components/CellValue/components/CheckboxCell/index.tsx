// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Types
import type { BaseCheckbox } from '../../types'

// Styles
import { Checkbox, Container } from './styles'

interface Props extends BaseCheckbox {}

export const CheckboxCell: React.FC<Props> = ({ checked, onChange }) => {
  // Functions
  function toggleCheckbox() {
    onChange(!checked)
  }

  return (
    <Container onClick={toggleCheckbox} tabIndex={0} role="button">
      <Checkbox type="checkbox" checked={checked} />
    </Container>
  )
}
