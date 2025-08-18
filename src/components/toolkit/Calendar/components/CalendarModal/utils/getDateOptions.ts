// Utils
import { startOfDay } from '../hooks/useCalendar/utils'

// Types
import type { Option } from '../components/Select/types'

export function getDateOptions(): Option<string>[] {
  const today = new Date()
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  )
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  )

  return [
    {
      label: 'Hoje',
      value: startOfDay(today).toISOString()
    },
    {
      label: 'Ontem',
      value: startOfDay(yesterday).toISOString()
    },
    {
      label: 'Amanhã',
      value: startOfDay(tomorrow).toISOString()
    }
  ]
}
