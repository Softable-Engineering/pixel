// Types
import type { PresetGroup } from '@components/toolkit/Calendar/types'

// Utils
import { DEFAULT_PRESETS } from '@components/toolkit/Calendar/constants/presets'

export function getPresets(): PresetGroup[] {
  return [DEFAULT_PRESETS.single, DEFAULT_PRESETS.group]
}
