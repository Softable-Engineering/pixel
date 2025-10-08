// Components
import { OptionButton } from './components/OptionButton'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export const GroupPicker = <T,>({ options, onClick }: Props<T>) => {
  // Functions
  function renderContent() {
    if (!options) return null

    return options.map(option => (
      <OptionButton
        key={`option_${option.id}`}
        option={option}
        onClick={onClick}
      />
    ))
  }

  return <Container>{renderContent()}</Container>
}
