export interface Option {
  label: string
  value: string
}

export interface Props {
  value: string
  options: Option[]
  onChange: (value: string) => void
}
