// Types
import type { WeekdayIndex } from './general'

export type DateToken =
  | 'today'
  | 'tomorrow'
  | 'yesterday'
  | 'endOfWeek'
  | 'endOfYear'
  | 'endOfMonth'
  | 'startOfWeek'
  | 'startOfYear'
  | 'startOfMonth'
  | 'endOfQuarter'
  | 'endOfBimester'
  | 'endOfSemester'
  | 'startOfQuarter'
  | 'startOfBimester'
  | 'endOfQuadmester'
  | 'startOfSemester'
  | 'startOfQuadmester'

export interface DateAdapter {
  startOfDay(date: Date): Date
  endOfDay(date: Date): Date

  addDays(date: Date, amountInDays: number): Date
  addWeeks(date: Date, amountInWeeks: number): Date
  addMonths(date: Date, amountInMonths: number): Date
  addYears(date: Date, amountInYears: number): Date

  isBefore(leftDate: Date, rightDate: Date): boolean
  isAfter(leftDate: Date, rightDate: Date): boolean
  isSameDay(firstDate: Date, secondDate: Date): boolean

  startOfWeek(date: Date, weekStartsOn?: WeekdayIndex): Date
  endOfWeek(date: Date, weekStartsOn?: WeekdayIndex): Date

  startOfMonth(date: Date): Date
  endOfMonth(date: Date): Date

  startOfQuarter(date: Date): Date
  endOfQuarter(date: Date): Date

  startOfBimester(date: Date): Date
  endOfBimester(date: Date): Date

  startOfQuadmester(date: Date): Date
  endOfQuadmester(date: Date): Date

  startOfSemester(date: Date): Date
  endOfSemester(date: Date): Date

  startOfYear(date: Date): Date
  endOfYear(date: Date): Date
}
