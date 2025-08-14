/**
 * Returns a new Date with the same timestamp as the given one.
 * Not exported — internal helper used to avoid mutating inputs.
 */
function cloneDate(sourceDate: Date): Date {
  return new Date(sourceDate.getTime())
}

/**
 * Returns the number of days in a given month of a given year.
 * Not exported — internal helper used by addMonths/addYears.
 *
 * @param year - Full year (e.g., 2025)
 * @param monthIndex - Zero-based month (0 = January … 11 = December)
 */
function daysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate()
}

/**
 * Start of the calendar day for the given date (00:00:00.000 local time).
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the start of that day
 */
export function startOfDay(inputDate: Date): Date {
  return new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  )
}

/**
 * End of the calendar day for the given date (23:59:59.999 local time).
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the end of that day
 */
export function endOfDay(inputDate: Date): Date {
  return new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    23,
    59,
    59,
    999
  )
}

/**
 * Adds (or subtracts) whole days to a date.
 *
 * @param inputDate - Base date
 * @param amountInDays - Positive to move forward, negative to move backward
 * @returns A new Date shifted by the given number of days
 */
export function addDays(inputDate: Date, amountInDays: number): Date {
  var workingDate = cloneDate(inputDate)
  workingDate.setDate(workingDate.getDate() + amountInDays)
  return workingDate
}

/**
 * Adds (or subtracts) whole weeks to a date.
 *
 * @param inputDate - Base date
 * @param amountInWeeks - Positive to move forward, negative to move backward
 * @returns A new Date shifted by the given number of weeks
 */
export function addWeeks(inputDate: Date, amountInWeeks: number): Date {
  return addDays(inputDate, amountInWeeks * 7)
}

/**
 * Adds (or subtracts) whole calendar months to a date.
 * Preserves the day-of-month when possible; clamps to the last day of the target month when needed.
 * Example: Jan 31 + 1 month → Feb 29 (leap year) / Feb 28 (non-leap year).
 *
 * @param inputDate - Base date
 * @param amountInMonths - Positive to move forward, negative to move backward
 * @returns A new Date in the target month, with a safe day-of-month
 */
export function addMonths(inputDate: Date, amountInMonths: number): Date {
  var workingDate = cloneDate(inputDate)
  var originalDayOfMonth = workingDate.getDate()

  // Avoid rollover to a different month when the same day doesn't exist
  workingDate.setDate(1)
  workingDate.setMonth(workingDate.getMonth() + amountInMonths)

  var lastDayOfTargetMonth = daysInMonth(
    workingDate.getFullYear(),
    workingDate.getMonth()
  )
  workingDate.setDate(
    Math.max(1, Math.min(originalDayOfMonth, lastDayOfTargetMonth))
  )

  return workingDate
}

/**
 * Adds (or subtracts) whole calendar years to a date.
 * Preserves the month and day when possible; clamps Feb 29 → Feb 28 on non-leap years.
 *
 * @param inputDate - Base date
 * @param amountInYears - Positive to move forward, negative to move backward
 * @returns A new Date in the target year, with a safe day-of-month
 */
export function addYears(inputDate: Date, amountInYears: number): Date {
  var workingDate = cloneDate(inputDate)
  var originalDayOfMonth = workingDate.getDate()
  var originalMonthIndex = workingDate.getMonth()

  // Avoid invalid dates (e.g., 29 Feb in non-leap years)
  workingDate.setDate(1)
  workingDate.setFullYear(workingDate.getFullYear() + amountInYears)
  workingDate.setMonth(originalMonthIndex)

  var lastDayOfTargetMonth = daysInMonth(
    workingDate.getFullYear(),
    originalMonthIndex
  )
  workingDate.setDate(
    Math.max(1, Math.min(originalDayOfMonth, lastDayOfTargetMonth))
  )

  return workingDate
}

/**
 * True if leftDate is strictly before rightDate (by timestamp).
 *
 * @param leftDate - First date
 * @param rightDate - Second date
 */
export function isBefore(leftDate: Date, rightDate: Date): boolean {
  return leftDate.getTime() < rightDate.getTime()
}

/**
 * True if leftDate is strictly after rightDate (by timestamp).
 *
 * @param leftDate - First date
 * @param rightDate - Second date
 */
export function isAfter(leftDate: Date, rightDate: Date): boolean {
  return leftDate.getTime() > rightDate.getTime()
}

/**
 * True if both dates fall on the same calendar day (local time).
 *
 * @param firstDate - First date
 * @param secondDate - Second date
 */
export function isSameDay(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  )
}

/**
 * Start of the week that contains the given date, honoring a configurable first weekday.
 *
 * @param inputDate - Any Date
 * @param weekStartsOn - First day of week (0=Sun, 1=Mon, … 6=Sat). Defaults to 0.
 * @returns A new Date set to 00:00:00.000 of the week start
 */
export function startOfWeek(
  inputDate: Date,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
): Date {
  var weekStartIndex = typeof weekStartsOn === 'number' ? weekStartsOn : 0 // 0 = Sunday
  var baseDate = startOfDay(inputDate)
  var weekdayIndex = baseDate.getDay() // 0..6
  var daysBackToStart = (weekdayIndex - weekStartIndex + 7) % 7
  return addDays(baseDate, -daysBackToStart)
}

/**
 * End of the week that contains the given date, honoring a configurable first weekday.
 *
 * @param inputDate - Any Date
 * @param weekStartsOn - First day of week (0=Sun, 1=Mon, … 6=Sat). Defaults to 0.
 * @returns A new Date set to 23:59:59.999 of the week end
 */
export function endOfWeek(
  inputDate: Date,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
): Date {
  var weekStartDate = startOfWeek(inputDate, weekStartsOn)
  var weekEndDate = addDays(weekStartDate, 6)
  return endOfDay(weekEndDate)
}

/**
 * Start of the month that contains the given date (local time).
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the first day of the month at 00:00:00.000
 */
export function startOfMonth(inputDate: Date): Date {
  return new Date(inputDate.getFullYear(), inputDate.getMonth(), 1, 0, 0, 0, 0)
}

/**
 * End of the month that contains the given date (local time).
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the last day of the month at 23:59:59.999
 */
export function endOfMonth(inputDate: Date): Date {
  return new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  )
}

/**
 * Start of the calendar quarter (Jan–Mar, Apr–Jun, Jul–Sep, Oct–Dec) that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the first day of the quarter at 00:00:00.000
 */
export function startOfQuarter(inputDate: Date): Date {
  var year = inputDate.getFullYear()
  var monthIndex = inputDate.getMonth()
  var quarterStartMonthIndex = Math.floor(monthIndex / 3) * 3 // 0,3,6,9
  return new Date(year, quarterStartMonthIndex, 1, 0, 0, 0, 0)
}

/**
 * End of the calendar quarter that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the last day of the quarter at 23:59:59.999
 */
export function endOfQuarter(inputDate: Date): Date {
  var quarterStartDate = startOfQuarter(inputDate)
  return new Date(
    quarterStartDate.getFullYear(),
    quarterStartDate.getMonth() + 3,
    0,
    23,
    59,
    59,
    999
  )
}

/**
 * Start of the current bimester (two-month period) that contains the given date.
 * Bimesters are split as: Jan–Feb, Mar–Apr, May–Jun, Jul–Aug, Sep–Oct, Nov–Dec.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the first day of the bimester at 00:00:00.000
 */
export function startOfBimester(inputDate: Date): Date {
  var year = inputDate.getFullYear()
  var monthIndex = inputDate.getMonth()
  var bimesterStartMonthIndex = Math.floor(monthIndex / 2) * 2 // 0,2,4,6,8,10
  return new Date(year, bimesterStartMonthIndex, 1, 0, 0, 0, 0)
}

/**
 * End of the current bimester (two-month period) that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the last day of the bimester at 23:59:59.999
 */
export function endOfBimester(inputDate: Date): Date {
  var bimesterStartDate = startOfBimester(inputDate)
  var lastMonthOfBimesterStart = addMonths(bimesterStartDate, 1)
  return endOfMonth(lastMonthOfBimesterStart)
}

/**
 * Start of the current quadmester (four-month period) that contains the given date.
 * Quadmesters are split as: Jan–Apr, May–Aug, Sep–Dec.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the first day of the quadmester at 00:00:00.000
 */
export function startOfQuadmester(inputDate: Date): Date {
  var year = inputDate.getFullYear()
  var monthIndex = inputDate.getMonth()
  var quadmesterStartMonthIndex = Math.floor(monthIndex / 4) * 4 // 0,4,8
  return new Date(year, quadmesterStartMonthIndex, 1, 0, 0, 0, 0)
}

/**
 * End of the current quadmester (four-month period) that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the last day of the quadmester at 23:59:59.999
 */
export function endOfQuadmester(inputDate: Date): Date {
  var quadmesterStartDate = startOfQuadmester(inputDate)
  var lastMonthOfQuadmesterStart = addMonths(quadmesterStartDate, 3)
  return endOfMonth(lastMonthOfQuadmesterStart)
}

/**
 * Start of the current semester (six-month period) that contains the given date.
 * Semesters are split as: Jan–Jun, Jul–Dec.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the first day of the semester at 00:00:00.000
 */
export function startOfSemester(inputDate: Date): Date {
  var year = inputDate.getFullYear()
  var monthIndex = inputDate.getMonth()
  var semesterStartMonthIndex = Math.floor(monthIndex / 6) * 6 // 0,6
  return new Date(year, semesterStartMonthIndex, 1, 0, 0, 0, 0)
}

/**
 * End of the current semester (six-month period) that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to the last day of the semester at 23:59:59.999
 */
export function endOfSemester(inputDate: Date): Date {
  var semesterStartDate = startOfSemester(inputDate)
  var lastMonthOfSemesterStart = addMonths(semesterStartDate, 5)
  return endOfMonth(lastMonthOfSemesterStart)
}

/**
 * Start of the calendar year that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to Jan 1st, 00:00:00.000
 */
export function startOfYear(inputDate: Date): Date {
  return new Date(inputDate.getFullYear(), 0, 1, 0, 0, 0, 0)
}

/**
 * End of the calendar year that contains the given date.
 *
 * @param inputDate - Any Date
 * @returns A new Date set to Dec 31st, 23:59:59.999
 */
export function endOfYear(inputDate: Date): Date {
  return new Date(inputDate.getFullYear(), 12, 0, 23, 59, 59, 999)
}
