// External Libraries
import { PropsWithChildren } from 'react'

// Types
import type { Pagination } from './pagination'
import { ScrollDirection } from './scrollDirection'

export type ScrollPaginationContainerProps =
  | VerticalPaginationContainerProps
  | HorizontalPaginationContainerProps
  | BidirectionalPaginationContainerProps

export interface BaseProps extends PropsWithChildren {
  fillFlex?: boolean
  maxWidth?: string
  maxHeight?: string
}

export interface VerticalPaginationContainerProps extends BaseProps {
  verticalPagination: Pagination
  direction: ScrollDirection.Vertical
}

export interface HorizontalPaginationContainerProps extends BaseProps {
  horizontalPagination: Pagination
  direction: ScrollDirection.Horizontal
}

export interface BidirectionalPaginationContainerProps extends BaseProps {
  verticalPagination: Pagination
  horizontalPagination: Pagination
  direction: ScrollDirection.Bidirectional
}
