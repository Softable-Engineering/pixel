// External Libraries
import { forwardRef } from 'react'

// Styles
import { Container, InputField } from './styles'

interface Props {
  value: string
  onChange: (value: string) => void
}

export const Header = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange }, ref) => {
    return (
      <Container>
        <InputField
          ref={ref}
          autoFocus
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Container>
    )
  }
)
