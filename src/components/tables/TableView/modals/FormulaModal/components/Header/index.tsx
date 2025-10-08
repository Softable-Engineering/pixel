// External Libraries
import type React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import { Button } from '@components/commons/buttons/Button'

interface Props {
  title: string
  onDone: () => void
}

export const Header: React.FC<Props> = ({ title, onDone }) => {
  return (
    <Container>
      <Typography
        variant="h4"
        fontSize="1rem"
        fontWeight="medium"
        color="var(--text-color-secondary)"
      >
        {title}
      </Typography>

      <Button
        label="Done"
        padding="0.5rem"
        color="var(--primary)"
        onClick={onDone}
      />
    </Container>
  )
}
