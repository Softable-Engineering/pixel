// External Libraries
import type React from 'react'

// Styles
import { Container, type ContainerProps } from './styles'

type Props = ContainerProps

export const Skeleton: React.FC<Props> = props => {
  return <Container {...props} />
}
