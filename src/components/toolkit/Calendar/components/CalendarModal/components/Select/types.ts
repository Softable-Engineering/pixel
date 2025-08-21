export interface Option<T> {
  label: string
  value: T
}

export interface Props<T> {
  value?: T
  disabled?: boolean
  options: Option<T>[]
  withCustomValue?: boolean
  onChange: (value: T) => void
}
