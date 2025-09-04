// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type {
  CellTypes,
  SelectOption
} from '@components/tables/TableView/types'
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

export interface BaseProps extends PropsWithChildren {
  minHeight?: string
}

export type TextProps = {
  type: CellTypes.TEXT
  text: string
  onChange: (text: string) => void
}

export type SelectProps = {
  type: CellTypes.SELECT
  selected: string[]
  options: SelectOption[]
  onChange: (select: string[]) => void
}

export type MultiSelectProps = {
  type: CellTypes.MULTI_SELECT
  selected: string[]
  options: SelectOption[]
  onChange: (select: string[]) => void
}

export type Variant = TextProps | SelectProps | MultiSelectProps

export type Props = Variant & BaseProps & UseFollowElementPositionOptions
