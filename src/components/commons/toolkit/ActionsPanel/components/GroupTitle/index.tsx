// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  title: string
}

export const GroupTitle: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Typography variant="caption" fontWeight="medium">
        {title}
      </Typography>
    </Container>
  )
}
