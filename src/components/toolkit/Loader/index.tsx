// External Libraries
import type React from 'react'

// Styles
import { Container, type LoaderProps } from './styles'

type Props = LoaderProps

export const Loader: React.FC<Props> = props => {
  return <Container {...props} />
}
