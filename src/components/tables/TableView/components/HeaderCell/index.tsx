// External Libraries
import type React from 'react'
import type { ReactNode } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  title: string
  icon: ReactNode
}

export const HeaderCell: React.FC<Props> = ({ icon, title }) => {
  return (
    <Container>
      {icon}

      <Typography variant="b2">{title}</Typography>
    </Container>
  )
}
