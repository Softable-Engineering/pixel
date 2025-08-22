// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no> */
import type React from 'react'
import { AnimatePresence } from 'framer-motion'
import { type ReactNode, useRef, useState } from 'react'

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
import { useFollowElementPosition } from '@hooks/useFollowElementPosition'
import { Portal } from '@components/commons/modals/Portal'

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
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)

  // States
  const [hover, setHover] = useState(false)

  // Hooks
  const { floatingRef } = useFollowElementPosition(containerRef, {
    placement: 'right-start',
    offsetX: 4
  })

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
        <ContainerPreset key={`subgroup_${index}`} $isLast={isLast}>
          {renderGroup(item)}
        </ContainerPreset>
      )
    })
  }

  return (
    <Container
      ref={containerRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ContainerOption>
        <Typography variant="b2" fontWeight="medium" color="var(--text-color)">
          {group?.label}
        </Typography>

        <svg
          width="5"
          height="6"
          fill="none"
          viewBox="0 0 5 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Right arrow</title>

          <path
            d="M3.99806 0.3761C4.33139 0.1817 4.75 0.4221 4.75 0.808L4.75 5.19198C4.75 5.57788 4.33139 5.81831 3.99806 5.62387L0.240401 3.43189C-0.0903995 3.23895 -0.0903994 2.76105 0.240401 2.56811L3.99806 0.3761Z"
            fill="#A8AFB7"
          />
        </svg>
      </ContainerOption>

      <AnimatePresence initial={false}>
        {hover ? (
          <Portal key={group.id} wrapperId="wrapper-calendar-component">
            <ContainerChildren ref={floatingRef} {...OPACITY_ANIMATION_PRESETS}>
              {renderShortcutGroup(group.items)}
            </ContainerChildren>
          </Portal>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
