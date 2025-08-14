// External Libraries
import type React from 'react'

// Components
import { OptionPreset } from './components/OptionPreset'

// Types
import type {
  DateRange,
  PresetGroup,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  context: BuildContext
  presets: PresetGroup[]
  onChangeValue: (range: DateRange) => void
}

export const PresetsColumn: React.FC<Props> = ({
  presets,
  context,
  onChangeValue
}) => {
  // Functions
  function renderPresets() {
    return presets.map(preset => {
      return Object.entries(preset).map(([key, value]) => {
        return (
          <OptionPreset
            key={key}
            item={value}
            context={context}
            onChangeValue={onChangeValue}
          />
        )
      })
    })
  }

  return <Container>{renderPresets()}</Container>
}
