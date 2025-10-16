// External Libraries
import React from 'react'

// Hooks
import { useScrollPaginationContainer } from './hooks/useScrollPaginationContainer'

// Types
import type { ScrollPaginationContainerProps } from './types'

// Styles
import { Container } from './styles'

export const ScrollPaginationContainer: React.FC<
  ScrollPaginationContainerProps
> = props => {
  // Hooks
  const { scrollRef } = useScrollPaginationContainer(props)

  return (
    <Container
      ref={scrollRef}
      $fillFlex={props.fillFlex}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
    >
      {props.children}
    </Container>
  )
}
