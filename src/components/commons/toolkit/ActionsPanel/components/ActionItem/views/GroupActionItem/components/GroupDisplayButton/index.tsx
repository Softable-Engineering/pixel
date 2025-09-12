// External Libraries
import { useTheme } from 'styled-components'

// Components
import { Typography } from '@components/toolkit/Typography'

// Assets
import { Right } from '@assets/icons/arrows/Right'

// Types
import type { GroupAction } from '@components/commons/toolkit/ActionsPanel/types'

// Styles
import { Container, Group } from './styles'

interface Props<T extends string> {
  action: GroupAction<T>
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const GroupDisplayButton = <T extends string>({
  action,
  onMouseEnter,
  onMouseLeave
}: Props<T>) => {
  // Hooks
  const theme = useTheme()

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Group>
        {action.icon}

        <Typography
          variant="b1"
          fontSize="0.85rem"
          color={theme.colors.text.secondary}
        >
          {action.label}
        </Typography>
      </Group>

      <Right />
    </Container>
  )
}
