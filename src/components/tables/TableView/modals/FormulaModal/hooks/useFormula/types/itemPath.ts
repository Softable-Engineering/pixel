// Types
import type { OptionsGroup } from '../../../components/OptionsListPanel/types'

export interface ItemPathParams {
  current: number[]
  items: OptionsGroup[]
  direction: 'up' | 'down'
}
