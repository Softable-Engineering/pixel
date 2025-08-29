// Types
import type {
  DateColumn,
  TextColumn,
  SelectColumn,
  NumberColumn
} from '../../types'

export type BaseText = TextColumn & {
  text: string
}

export type BaseSelect = SelectColumn & {
  selected: string
}

export type BaseDate = DateColumn & {
  date: string
}

export type BaseNumber = NumberColumn & {
  number: string
}

export type Variant = BaseText | BaseSelect | BaseDate | BaseNumber

export type Props = Variant
