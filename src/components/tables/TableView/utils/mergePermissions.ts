// Utils
import { DEFAULT_PERMISSIONS } from '../constants.ts'
import { deepMerge } from '@utils/functions/deepMerge.js'

// Types
import type { TablePermissions } from '../types'
import type { DeepPartial } from '../types/deepPartial.js'

export function mergeTablePermissions(
  override?: DeepPartial<TablePermissions>
): TablePermissions {
  return deepMerge(DEFAULT_PERMISSIONS, override)
}
