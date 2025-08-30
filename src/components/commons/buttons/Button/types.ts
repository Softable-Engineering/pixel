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
  borderRadius?: string
  color?: string
  fitWidth?: boolean
  variant?: ButtonVariant
}

export type ButtonVariant = 'filled' | 'outlined' | 'text'
