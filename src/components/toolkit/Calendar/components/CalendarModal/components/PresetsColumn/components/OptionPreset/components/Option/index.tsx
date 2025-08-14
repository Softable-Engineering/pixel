// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { resolveFilterToRange } from '@components/toolkit/Calendar/utils'

// Types
import type {
  Shortcut,
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  shortcut: Shortcut
  context: BuildContext
  onChangeValue: (range: DateRange) => void
}

export const Option: React.FC<Props> = ({
  context,
  shortcut,
  onChangeValue
}) => {
  // Functions
  function handleOptionClick() {
    const dateFilter = shortcut.build(context)

    const dateRange = resolveFilterToRange(dateFilter, context)

    onChangeValue(dateRange)
  }

  return (
    <Container onClick={handleOptionClick}>
      <Typography variant="b2" fontWeight="medium" color="var(--text-color)">
        {shortcut.label}
      </Typography>
    </Container>
  )
}
