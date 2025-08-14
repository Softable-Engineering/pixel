// Types
import type { DateAdapter } from '@components/toolkit/Calendar/types'

// Utils
import {
  isAfter,
  addDays,
  endOfDay,
  addWeeks,
  addYears,
  isBefore,
  addMonths,
  isSameDay,
  endOfYear,
  endOfWeek,
  startOfDay,
  endOfMonth,
  startOfWeek,
  startOfYear,
  startOfMonth,
  endOfQuarter,
  endOfBimester,
  endOfSemester,
  startOfQuarter,
  startOfBimester,
  startOfSemester,
  endOfQuadmester,
  startOfQuadmester
} from './dateAdapters'

export function getAdapters(): DateAdapter {
  return {
    addDays,
    addWeeks,
    addYears,
    addMonths,

    isAfter,
    isBefore,
    isSameDay,

    startOfDay,
    startOfWeek,
    startOfYear,
    startOfMonth,
    startOfQuarter,
    startOfBimester,
    startOfSemester,
    startOfQuadmester,

    endOfDay,
    endOfYear,
    endOfWeek,
    endOfMonth,
    endOfQuarter,
    endOfBimester,
    endOfSemester,
    endOfQuadmester
  }
}
