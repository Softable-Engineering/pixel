// External Libraries
import type { ReactNode } from 'react'

export interface Option<T> {
  id: T
  label: string
  startIcon: ReactNode
}

export interface Props<T> {
  options: Option<T>[]
  onClick: (id: T) => void
}
