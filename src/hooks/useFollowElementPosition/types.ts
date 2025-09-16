export type Align =
  | 'top'
  | 'top-end'
  | 'top-start'
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'center'
  | 'top-left-start'

export interface UseFollowElementPositionOptions {
  offsetX?: number
  offsetY?: number
  placement?: Align
  scrollContainerId?: string
}
