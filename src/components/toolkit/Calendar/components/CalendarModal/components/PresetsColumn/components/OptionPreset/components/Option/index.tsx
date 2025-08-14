// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { resolveFilterToRange } from '@components/toolkit/Calendar/utils'

// Types
import type { Shortcut, BuildContext } from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  shortcut: Shortcut
  context: BuildContext
}

export const Option: React.FC<Props> = ({ context, shortcut }) => {
  // Functions
  function handleOptionClick() {
    const dateFilter = shortcut.build(context)

    const resp = resolveFilterToRange(dateFilter, context)

    const startDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(resp.start)

    const endDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(resp.end)

    console.log(`${startDate} - ${endDate}`)
  }

  return (
    <Container onClick={handleOptionClick}>
      <Typography variant="b2" fontWeight="medium" color="var(--text-color)">
        {shortcut.label}
      </Typography>
    </Container>
  )
}
