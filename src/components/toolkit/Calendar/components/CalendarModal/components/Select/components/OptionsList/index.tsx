// External Libraries
import { forwardRef, type ReactNode, type Ref } from 'react'

// Components
import { SelectOption } from './components/SelectOption'

// Types
import type { Option } from '../../types'

// Styles
import { Container } from './styles'

interface Props<T> {
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
}

export const OptionsListInner = <T,>(
  { value, options, onChange }: Props<T>,
  ref: Ref<HTMLDivElement>
) => {
  // Functions
  function renderOption() {
    return options.map((option, index) => {
      const isSelected = option.value === value

      if (isSelected) return null

      return (
        <SelectOption<T>
          key={`option_${option.value}_${index}`}
          label={option.label}
          value={option.value}
          isSelected={isSelected}
          onChange={onChange}
        />
      )
    })
  }

  return <Container ref={ref}>{renderOption()}</Container>
}

export const OptionsList = forwardRef(OptionsListInner) as <T>(
  props: Props<T> & { ref?: Ref<HTMLDivElement> },
  ref: Ref<HTMLDivElement>
) => ReactNode
