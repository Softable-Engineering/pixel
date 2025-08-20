// Types
import type { ActionOption, Preset } from '@components/toolkit/Calendar/types'

export function isAction(preset: Preset): preset is ActionOption {
  return 'type' in preset
}
