// Types
import type { Option } from '../components/Select/types'
import type { DateOperator } from '@components/toolkit/Calendar/types'

export function getOperatorOptions(): Option<DateOperator>[] {
  return [
    { label: 'Em', value: 'equals' },
    { label: 'Após', value: 'after' },
    { label: 'Antes', value: 'before' },
    { label: 'No período', value: 'range' }
  ]
}
