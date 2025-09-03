// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'
import { Label } from '@components/tables/TableView/components/Label'

// Types
import type { SelectOption } from '@components/tables/TableView/types'

// Styles
import { Container, Row } from './styles'

interface Props {
  options: SelectOption[]
  onClick: (option: SelectOption) => void
}

export const ListLabels: React.FC<Props> = ({ options, onClick }) => {
  // Functions
  function renderOptions() {
    return options.map((option, index) => {
      return (
        <Row
          key={`options_${option.id}_${index}`}
          onClick={() => onClick(option)}
        >
          <Label color={option.color} value={option.name} />
        </Row>
      )
    })
  }

  return (
    <Container>
      <Typography variant="b3">Select an option or create one</Typography>

      {renderOptions()}
    </Container>
  )
}
