// External Libraries
import type React from 'react'

// Styles
import { Container, Thumb } from './styles'

interface Props {
  checked: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
}

export const Switch: React.FC<Props> = ({ checked, disabled, onChange }) => {
  // Functions
  function toggle() {
    onChange(!checked)
  }

  return (
    <Container
      type="button"
      role="switch"
      $checked={checked}
      $disabled={disabled}
      disabled={!!disabled}
      aria-checked={checked}
      aria-disabled={disabled}
      onClick={toggle}
    >
      <Thumb $checked={checked} />
    </Container>
  )
}
