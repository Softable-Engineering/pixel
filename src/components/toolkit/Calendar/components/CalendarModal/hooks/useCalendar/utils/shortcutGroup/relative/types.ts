export enum TypeRelative {
  YEAR = 'year',
  MONTH = 'month',
  QUARTER = 'quarter',
  BIMESTER = 'bimester',
  TRIMESTER = 'trimester',
  SEMESTER = 'semester'
}
export interface RelativeData {
  label: string
  monthRepresent: number
}
