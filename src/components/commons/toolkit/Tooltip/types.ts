export enum TooltipPlacement {
  Top = 'Top',
  Left = 'Left',
  Right = 'Right',
  Bottom = 'Bottom'
}

export interface Position {
  top: number
  left: number
}

export interface TooltipProps {
  color?: string
  content: React.ReactNode
  children: React.ReactNode

  placement?: TooltipPlacement

  offset?: number
  maxWidth?: number
  disabled?: boolean
}
