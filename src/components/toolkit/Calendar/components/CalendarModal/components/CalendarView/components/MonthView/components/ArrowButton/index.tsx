// External Libraries
import type React from 'react'

// Components

// Styles
import { Container } from './styles'

export type Variant = 'left' | 'right'

interface Props {
  variant: Variant
  onClick: () => void
}

export const ArrowButton: React.FC<Props> = ({ variant, onClick }) => {
  return (
    <Container $variant={variant} onClick={onClick}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>arrow</title>
        <path
          d="M8.99806 5.3761C9.33139 5.1817 9.75 5.4221 9.75 5.808L9.75 10.192C9.75 10.5779 9.33139 10.8183 8.99806 10.6239L5.2404 8.43189C4.9096 8.23895 4.9096 7.76105 5.2404 7.56811L8.99806 5.3761Z"
          fill="#A8AFB7"
        />
      </svg>
    </Container>
  )
}
