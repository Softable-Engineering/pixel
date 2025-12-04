// External Libraries
import type React from 'react'
import { useTheme } from 'styled-components'

// Components
import { Typography } from '@components/toolkit/Typography'
import { Tooltip } from '@components/commons/toolkit/Tooltip'

// Hooks
import { useOptionItem } from './hooks/useOptionItem'

// Assets
import { SigmaIcon } from '@assets/icons/tables/Sigma'
import { ConfirmIcon } from '@assets/icons/tables/Confirm'

// Utils
import { getIcon } from '@components/tables/TableView/utils'

// Types
import type { OptionItemProps } from './types'
import { TooltipPlacement } from '@components/commons/toolkit/Tooltip/types'

// Styles
import { Container, IconContainer, TextContainer } from './styles'

export const OptionItem: React.FC<OptionItemProps> = params => {
  // Constants
  const { option, pathKey, isFocused } = params

  // Hooks
  const { colors } = useTheme()
  const { label, hasTippy, handleClick } = useOptionItem(params)

  // Functions
  function renderOptionIcon() {
    if (option.type === 'function') {
      return <SigmaIcon color="var(--text-color)" />
    }

    if (option.type === 'column') return getIcon(option.column.type)

    return null
  }

  return (
    <Tooltip
      content={label}
      disabled={!hasTippy}
      color={colors.border.secondary}
      placement={TooltipPlacement.Right}
    >
      <Container
        data-path={pathKey}
        $isFocused={isFocused}
        onClick={handleClick}
      >
        <TextContainer>
          <IconContainer>{renderOptionIcon()}</IconContainer>

          <Typography variant="b1" fontSize="0.85rem">
            {label}
          </Typography>
        </TextContainer>

        {isFocused ? <ConfirmIcon /> : null}
      </Container>
    </Tooltip>
  )
}
