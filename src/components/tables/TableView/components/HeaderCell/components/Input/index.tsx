// External Libraries
import type React from 'react'

// Components

// Styles
import { Container, InputField } from './styles'

interface Props {
  value: string
  onChange: (value: string) => void
}

export const Header: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Container>
      <InputField
        autoFocus
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  )
}
