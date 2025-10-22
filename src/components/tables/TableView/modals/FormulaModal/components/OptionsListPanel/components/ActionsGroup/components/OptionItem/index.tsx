// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Assets
import { SigmaIcon } from '@assets/icons/tables/Sigma'
import { ConfirmIcon } from '@assets/icons/tables/Confirm'

// Utils
import { getIcon } from '@components/tables/TableView/utils'

// Types
import type { FormulaOption } from '../../../../types'

// Styles
import { Container, IconContainer, TextContainer } from './styles'

interface Props {
  pathKey: string
  isFocused: boolean
  option: FormulaOption
  onClick: (item: FormulaOption) => void
}

export const OptionItem: React.FC<Props> = ({
  option,
  pathKey,
  isFocused,
  onClick
}) => {
  // Functions
  function renderOptionIcon() {
    if (option.type === 'function') {
      return <SigmaIcon color="var(--text-color)" />
    }

    if (option.type === 'column') return getIcon(option.column.type)

    return null
  }

  function handleClick() {
    onClick(option)
  }

  function getOptionLabel() {
    if (option.type === 'function') return option.displayValue
    return option.column.label.trim()
  }

  return (
    <Container data-path={pathKey} $isFocused={isFocused} onClick={handleClick}>
      <TextContainer>
        <IconContainer>{renderOptionIcon()}</IconContainer>

        <Typography variant="b1" fontSize="0.85rem">
          {getOptionLabel()}
        </Typography>
      </TextContainer>

      {isFocused ? <ConfirmIcon /> : null}
    </Container>
  )
}
