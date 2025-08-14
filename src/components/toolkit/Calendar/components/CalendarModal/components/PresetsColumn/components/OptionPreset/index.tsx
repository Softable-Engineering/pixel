// External Libraries
import type React from 'react'

// Components
import { Option } from './components/Option'
import { OptionGroup } from './components/OptionGroup'

// Types
import type { Preset, BuildContext } from '@components/toolkit/Calendar/types'

// Styles
import { isShortcutGroup } from './utils'

interface Props {
  item: Preset
  context: BuildContext
}

export const OptionPreset: React.FC<Props> = ({ item, context }) => {
  if (isShortcutGroup(item))
    return <OptionGroup group={item} context={context} />

  return <Option shortcut={item} context={context} />
}
