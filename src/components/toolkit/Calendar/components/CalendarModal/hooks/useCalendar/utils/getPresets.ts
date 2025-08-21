// Types
import type { PresetGroup, Variant } from '@components/toolkit/Calendar/types'

// Utils
import { DEFAULT_PRESETS } from '@components/toolkit/Calendar/constants/presets'

export function getPresets(variant: Variant): PresetGroup[] {
  if (variant === 'single') return [{ today: DEFAULT_PRESETS.single.today }]

  return [DEFAULT_PRESETS.single, DEFAULT_PRESETS.group]
}
