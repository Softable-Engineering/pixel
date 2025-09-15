// External Libraries
import type React from 'react'
import type { ReactNode } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  label: string
  startIcon?: ReactNode
  onClick: () => void
}

export const Button: React.FC<Props> = ({ label, startIcon, onClick }) => {
  return (
    <Container onClick={onClick}>
      {startIcon}

      <Typography variant="b2" color="var(--text-color-secondary)">
        {label}
      </Typography>
    </Container>
  )
}
