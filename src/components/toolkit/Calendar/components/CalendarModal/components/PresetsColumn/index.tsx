// External Libraries
import type React from 'react'

// Components
import { OptionPreset } from './components/OptionPreset'

// Types
import type {
  PresetGroup,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  presets: PresetGroup[]
  context: BuildContext
}

export const PresetsColumn: React.FC<Props> = ({ presets, context }) => {
  // Functions
  function renderPresets() {
    return presets.map(preset => {
      return Object.entries(preset).map(([key, value]) => {
        return <OptionPreset key={key} item={value} context={context} />
      })
    })
  }

  return <Container>{renderPresets()}</Container>
}
