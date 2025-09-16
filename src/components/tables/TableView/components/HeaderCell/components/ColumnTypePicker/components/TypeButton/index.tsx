// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { COLUMN_TYPE_MAP } from '@components/tables/TableView/utils/columnInfos'

// Types
import type { ColumnType } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'

interface Props {
  type: ColumnType
  onClick: (chartType: ColumnType) => void
}

export const TypeButton: React.FC<Props> = ({ type, onClick }) => {
  // Constants
  const infos = COLUMN_TYPE_MAP[type]

  // Functions
  function handleClick() {
    onClick(type)
  }

  if (!infos) return null

  return (
    <Container onClick={handleClick}>
      {infos.icon}

      <Typography variant="b3" $lineHeight="100%">
        {infos.label}
      </Typography>
    </Container>
  )
}
