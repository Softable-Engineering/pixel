// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container, Content } from './styles'

interface Props<T> {
  label: string
  value: T
  isSelected: boolean
  onChange: (value: T) => void
}

export const SelectOption = <T,>(props: Props<T>) => {
  // Constants
  const { label, value, onChange } = props

  return (
    <Container onClick={() => onChange(value)}>
      <Content>
        <Typography variant="b2" color={'var(--text-color)'}>
          {label}
        </Typography>
      </Content>
    </Container>
  )
}
