// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type { SelectOption } from '@components/tables/TableView/types'
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

export interface BaseProps extends PropsWithChildren {
  minHeight: number
}

export enum CellTypes {
  TEXT = 'text',
  SELECT = 'select'
}

export type TextProps = {
  type: CellTypes.TEXT
  text: string
  onChange: (text: string) => void
}

export type SelectProps = {
  type: CellTypes.SELECT
  selected: string[]
  multiple?: boolean
  options: SelectOption[]
  onChange: (select: string[]) => void
}

export type Variant = TextProps | SelectProps

export type Props = Variant & BaseProps & UseFollowElementPositionOptions
