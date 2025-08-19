// External Libraries
import type React from 'react'

// Components
import { Option } from './components/Option'
import { OptionGroup } from './components/OptionGroup'

// Types
import type {
  Preset,
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { isShortcutGroup } from './utils'

interface Props {
  item: Preset
  context: BuildContext
  onChangeValue: (range: DateRange) => void
}

export const OptionPreset: React.FC<Props> = ({
  item,
  context,
  onChangeValue
}) => {
  if (isShortcutGroup(item)) {
    return (
      <OptionGroup
        group={item}
        context={context}
        onChangeValue={onChangeValue}
      />
    )
  }

  return (
    <Option shortcut={item} context={context} onChangeValue={onChangeValue} />
  )
}
