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
import { Container, ContainerPreset } from './styles'

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
  function renderPreset(preset: PresetGroup) {
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
  }

  function renderPresets() {
    return presets.map((preset, index) => {
      const isLastPreset = preset === presets[presets.length - 1]

      return (
        <ContainerPreset
          key={`preset_${preset.id}_${index}`}
          $isLast={isLastPreset}
        >
          {renderPreset(preset)}
        </ContainerPreset>
      )
    })
  }

  return <Container>{renderPresets()}</Container>
}
