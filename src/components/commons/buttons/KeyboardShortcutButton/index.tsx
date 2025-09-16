// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useKeyboardShortcutButton } from './hooks/useKeyboardShortcutButton'

// Types
import type { KeyboardShortcutButtonProps } from './types'

// Styles
import { Container, Wrapper } from './styles'
import { useState } from 'react'

export const KeyboardShortcutButton: React.FC<KeyboardShortcutButtonProps> = ({
  label,
  endIcon,
  startIcon,
  destructive,
  keyboardShortcut,
  onClick
}) => {
  // States
  const [hover, setHover] = useState(false)

  // Hooks
  const { displayShortcut } = useKeyboardShortcutButton({
    keyboardShortcut,
    onClick
  })

  // Constants
  const textColor = destructive && hover ? 'red' : 'var(--text-color-secondary)'

  return (
    <Container
      onClick={onClick}
      className="clickable"
      $destructive={destructive}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Wrapper>
        {startIcon}

        <Typography variant="b1" fontSize="0.85rem" color={textColor}>
          {label}
        </Typography>
      </Wrapper>

      <Wrapper>
        <Typography variant="b2" fontSize="0.75rem" color={textColor}>
          {displayShortcut}
        </Typography>

        {endIcon}
      </Wrapper>
    </Container>
  )
}
