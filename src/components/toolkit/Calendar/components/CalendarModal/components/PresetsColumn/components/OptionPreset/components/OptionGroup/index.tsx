// External Libraries
import type React from 'react'
import { AnimatePresence } from 'framer-motion'
import { type ReactNode, useState } from 'react'

// Components
import { OptionPreset } from '../..'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { OPACITY_ANIMATION_PRESETS } from '@utils/animations'

// Types
import type {
  Preset,
  DateRange,
  BuildContext,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

// Styles
import { Container, ContainerChildren } from './styles'

interface Props {
  group: ShortcutGroup
  context: BuildContext
  onChangeValue: (range: DateRange) => void
}

export const OptionGroup: React.FC<Props> = ({
  group,
  context,
  onChangeValue
}) => {
  // States
  const [hover, setHover] = useState(false)

  // Functions
  function renderItem(preset: Preset) {
    return (
      <OptionPreset
        key={preset.id}
        item={preset}
        context={context}
        onChangeValue={onChangeValue}
      />
    )
  }

  function renderShortcutGroup(items: Preset[]): ReactNode[] {
    return items.map(item => {
      return renderItem(item)
    })
  }

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography variant="b2" fontWeight="bold" color="var(--text-color)">
        {group?.label}
      </Typography>

      <AnimatePresence initial={false}>
        {hover ? (
          <ContainerChildren {...OPACITY_ANIMATION_PRESETS}>
            {renderShortcutGroup(group.items)}
          </ContainerChildren>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
