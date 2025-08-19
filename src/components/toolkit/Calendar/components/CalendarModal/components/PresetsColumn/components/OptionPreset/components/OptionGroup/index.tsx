// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no> */
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
import {
  Container,
  ContainerOption,
  ContainerChildren,
  ContainerPreset
} from './styles'

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
  function renderGroup(presets: Preset[]) {
    return presets.map(preset => {
      return (
        <OptionPreset
          item={preset}
          key={preset.id}
          context={context}
          onChangeValue={onChangeValue}
        />
      )
    })
  }

  function renderShortcutGroup(items: Preset[][]): ReactNode[] {
    return items.map((item, index) => {
      const isLast = index === items.length - 1

      return (
        <ContainerPreset key={`subgroup_${index}`} isLast={isLast}>
          {renderGroup(item)}
        </ContainerPreset>
      )
    })
  }

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ContainerOption>
        <Typography variant="b2" fontWeight="medium" color="var(--text-color)">
          {group?.label}
        </Typography>
      </ContainerOption>

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
