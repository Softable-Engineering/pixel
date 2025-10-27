// External Libraries
import type { ReactNode, RefObject } from 'react'

// Types
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

export type Mode = 'fixed' | 'absolute'

export interface ActionsPanelProps<T extends string>
  extends UseFollowElementPositionOptions {
  isOpen: boolean
  elementId?: string
  header?: ReactNode
  wrapperId?: string
  options: DropdownActionsGroup<T>[]
  referenceRef: RefObject<HTMLElement>
  onClose: () => void
  onClick: (actionId: T) => void
}

export interface DropdownActionsGroup<T extends string> {
  title?: string
  actions: DropdownAction<T>[]
}

interface SharedDropdownAction<T> {
  id: T
  label: string
  icon?: ReactNode
}

export type DropdownAction<T extends string> = ButtonAction<T> | GroupAction<T>

export interface ButtonAction<T> extends SharedDropdownAction<T> {
  type: 'button'
  shortcut?: string
  destructive?: boolean
}

export interface GroupAction<T extends string> extends SharedDropdownAction<T> {
  type: 'group'
  header?: ReactNode
  children?: ReactNode
}
