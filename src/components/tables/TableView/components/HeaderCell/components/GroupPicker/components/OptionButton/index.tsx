// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Option } from '../../types'

// Styles
import { Container } from './styles'

interface Props<T> {
  option: Option<T>
  onClick: (id: T) => void
}

export const OptionButton = <T,>({ option, onClick }: Props<T>) => {
  // Functions
  function handleClick() {
    onClick(option.id)
  }

  return (
    <Container onClick={handleClick}>
      {option.startIcon}

      <Typography variant="b3" $lineHeight="100%">
        {option.label}
      </Typography>
    </Container>
  )
}
