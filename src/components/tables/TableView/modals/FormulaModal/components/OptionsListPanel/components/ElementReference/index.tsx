// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import {
  getColumnTypeIcon,
  COLUMN_ICON_TYPE_MAPPER,
  COLUMN_TYPE_NAME_MAPPER
} from '@utils/mappers'
import { FUNCTION_DESCRIPTION_MAPPER } from './constants'

// Types
import { ElementInfos } from './types'
import { OptionsGroup } from '../../types'

// Styles
import { Container, TitleRow } from './styles'

interface Props {
  options: OptionsGroup[]
  selectionPath: number[]
}

export const ElementReference: React.FC<Props> = ({
  options,
  selectionPath
}) => {
  // Constants
  const infos = getElementInfos()

  // Functions
  function getElementInfos(): ElementInfos {
    const element = options[selectionPath[0]]?.options?.[selectionPath[1]]

    if (!element) return { title: '', description: '', icon: 'text' }

    if (element.type === 'function') {
      return {
        icon: 'formula',
        title: element.displayValue,
        description: FUNCTION_DESCRIPTION_MAPPER[element.displayValue]
      }
    }

    const columnType = COLUMN_ICON_TYPE_MAPPER[element.columnType]

    return {
      icon: columnType,
      description: `Coluna do tipo ${COLUMN_TYPE_NAME_MAPPER[columnType]}.`,
      title: element.alias ?? element.column
    }
  }

  return (
    <Container>
      <TitleRow>
        {infos.title ? getColumnTypeIcon(infos.icon) : null}

        <Typography variant="b1">{infos.title}</Typography>
      </TitleRow>

      <Typography variant="b2">{infos.description}</Typography>
    </Container>
  )
}
