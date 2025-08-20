// External Libraries
import React from 'react'

// Styles
import { Container, LoaderProps } from './styles'

type Props = LoaderProps

export const Loader: React.FC<Props> = props => {
  return <Container {...props} />
}
