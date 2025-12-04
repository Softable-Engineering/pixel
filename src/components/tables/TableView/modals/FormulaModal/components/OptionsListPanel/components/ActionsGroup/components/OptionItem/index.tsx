// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useOptionItem } from './hooks/useOptionItem'

// Assets
import { SigmaIcon } from '@assets/icons/tables/Sigma'
import { ConfirmIcon } from '@assets/icons/tables/Confirm'

// Utils
import { getIcon } from '@components/tables/TableView/utils'

// Types
import type { OptionItemProps } from './types'

// Styles
import { Container, IconContainer, TextContainer } from './styles'

export const OptionItem: React.FC<OptionItemProps> = params => {
  // Constants
  const { option, pathKey, isFocused } = params

  // Hooks
  const { label, handleClick } = useOptionItem(params)

  // Functions
  function renderOptionIcon() {
    if (option.type === 'function') {
      return <SigmaIcon color="var(--text-color)" />
    }

    if (option.type === 'column') return getIcon(option.column.type)

    return null
  }

  return (
    <Container data-path={pathKey} $isFocused={isFocused} onClick={handleClick}>
      <TextContainer>
        <IconContainer>{renderOptionIcon()}</IconContainer>

        <Typography variant="b1" fontSize="0.85rem">
          {label}
        </Typography>
      </TextContainer>

      {isFocused ? <ConfirmIcon /> : null}
    </Container>
  )
}
