import type { Props, SectionTableProps } from '../types'

export function isSectionTable<T>(
  props: Props<T>
): props is SectionTableProps<T> {
  return 'sections' in props
}
