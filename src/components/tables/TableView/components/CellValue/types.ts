// Types
import type {
  DateColumn,
  TextColumn,
  SelectColumn,
  NumberColumn
} from '../../types'

export type BaseText = TextColumn & {
  text: string
  onChange: (text: string) => void
}

export type BaseSelect = SelectColumn & {
  selected: string[]
  onChange: (selected: string[]) => void
}

export type BaseDate = DateColumn & {
  value: string
  onChange: (date: string) => void
}

export type BaseNumber = NumberColumn & {
  number: string
  onChange: (number: string) => void
}

export type Variant = BaseText | BaseSelect | BaseDate | BaseNumber

export type Props = Variant
