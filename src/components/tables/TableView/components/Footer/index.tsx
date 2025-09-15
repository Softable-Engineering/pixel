// External Libraries
import type React from 'react'

// Components
import { Plus } from '@assets/icons/general/Plus'

// Styles
import { Container } from './styles'
import { Button } from '../Button'

interface Props {
  name: string
}

export const Footer: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Button label="Nova linha" startIcon={<Plus />} onClick={() => {}} />
    </Container>
  )
}
