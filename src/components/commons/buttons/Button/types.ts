import type { TypeVariants } from '@components/toolkit/Typography/types'

export interface ButtonProps extends ButtonStyleProps, ButtonTextProps {
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'

  onClick?: () => void
}

export interface ButtonTextProps {
  label: string

  labelColor?: string
  labelVariant?: keyof TypeVariants

  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export interface ButtonStyleProps {
  color?: string
  padding?: string
  fitWidth?: boolean
  borderRadius?: string
  variant?: ButtonVariant
}

export type ButtonVariant = 'filled' | 'outlined' | 'text'
