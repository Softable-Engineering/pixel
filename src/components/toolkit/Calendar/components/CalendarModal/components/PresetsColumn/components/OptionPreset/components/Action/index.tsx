// External Libraries
import type React from 'react'

// Components
import { Switch } from './components/Switch'
import { Typography } from '@components/toolkit/Typography'

// Types
import type {
  ActionOption,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  action: ActionOption
  context: BuildContext
}

export const Action: React.FC<Props> = ({ action, context }) => {
  // Functions
  function handleActionClick(value: boolean) {
    action.action(context, value)
  }

  function renderSwitch() {
    const checked = action.checked(context)

    return <Switch onChange={handleActionClick} checked={checked} />
  }

  function renderActionOption() {
    switch (action.type) {
      case 'SWITCH':
        return renderSwitch()
      default:
        return null
    }
  }

  return (
    <Container>
      <Typography variant="b2" color={'var(--text-color)'}>
        {action.label}
      </Typography>

      {renderActionOption()}
    </Container>
  )
}
