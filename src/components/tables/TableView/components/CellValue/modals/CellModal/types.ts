// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

export enum Types {
  DATE = 'date',
  TEXT = 'text',
  SELECT = 'select'
}

export interface BaseProps extends PropsWithChildren {
  minHeight?: string
}

export type TextProps = {
  type: Types.TEXT
  text: string
  onChange: (text: string) => void
}

export type SelectProps = {
  type: Types.SELECT
  select: string[]
  multiple?: boolean
  onChange: (select: string[]) => void
}

export type Variant = TextProps | SelectProps

export type Props = Variant & BaseProps & UseFollowElementPositionOptions
