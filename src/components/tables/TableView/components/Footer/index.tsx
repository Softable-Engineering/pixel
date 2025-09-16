// External Libraries
import type React from 'react'

// Components
import { Button } from '../Button'

// Assets
import { Plus } from '@assets/icons/general/Plus'

// Types
import { ColumnActions, type ManagementHeaderParams } from '../../types'

// Styles
import { Container } from './styles'

interface Props {
  onManagementHeader: (params: ManagementHeaderParams) => void
}

export const Footer: React.FC<Props> = ({ onManagementHeader }) => {
  // Functions
  function handleAddLineClick() {
    const data: ManagementHeaderParams = {
      type: ColumnActions.AddLine
    }

    onManagementHeader(data)
  }

  return (
    <Container>
      <Button
        label="Nova linha"
        startIcon={<Plus />}
        onClick={handleAddLineClick}
      />
    </Container>
  )
}
