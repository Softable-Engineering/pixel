// Utils
import { startOfDay } from '../hooks/useCalendar/utils'

// Types
import type { Option } from '../components/Select/types'

interface GetDateOptionsParams {
  disableFutureDates?: boolean
  disablePastDates?: boolean
}

export function getDateOptions(params?: GetDateOptionsParams): Option<string>[] {
  const { disableFutureDates, disablePastDates } = params ?? {}
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

  const options: Option<string>[] = [
    {
      label: 'Hoje',
      value: startOfDay(today).toISOString()
    }
  ]

  if (!disablePastDates) {
    options.push({
      label: 'Ontem',
      value: startOfDay(yesterday).toISOString()
    })
  }

  if (!disableFutureDates) {
    options.push({
      label: 'Amanhã',
      value: startOfDay(tomorrow).toISOString()
    })
  }

  return options
}
