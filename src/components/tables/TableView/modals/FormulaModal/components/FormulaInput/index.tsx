// External Libraries
import React, { useImperativeHandle } from 'react'

// Components

// Hooks
import { useFormulaInput } from './hooks/useFormulaInput'

// Types
import type { FormulaInputMethods, FormulaInputProps } from './types'

// Styles
import { Container, InputContainer } from './styles'

export const FormulaInput = React.forwardRef<
  FormulaInputMethods,
  FormulaInputProps
>((props, ref) => {
  // Hooks
  const { inputRef, handleRefMethods } = useFormulaInput(props)
  useImperativeHandle(ref, handleRefMethods)

  return (
    <Container>
      <InputContainer ref={inputRef} contentEditable spellCheck={false} />
    </Container>
  )
})
