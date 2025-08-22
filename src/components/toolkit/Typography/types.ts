import type { PropsWithChildren } from 'react'
import type { FontWeights } from './config'

export interface TypeVariant {
  fontSize: string[]
  $lineHeight: string[]
  color: string[]
  fontFamily: string[]
  fontWeight: (keyof FontWeights)[]
  as: string
  contentEditable?: boolean
}

export interface TypeVariants {
  h1: TypeVariant
  h2: TypeVariant
  h3: TypeVariant
  h4: TypeVariant
  h5: TypeVariant
  b1: TypeVariant
  b2: TypeVariant
  b3: TypeVariant
  caption: TypeVariant
  legal: TypeVariant
}

export interface PixelTypeProps extends PropsWithChildren {
  $align?: 'center' | 'left' | 'right'
  variant: keyof TypeVariants
  skeletonPlaceholder?: number | string
  href?: string

  color?: string | string[]
  fontSize?: string | string[]
  $lineHeight?: string | string[]
  $marginTop?: string | string[]
  $marginBottom?: string | string[]
  $marginLeft?: string | string[]
  $marginRight?: string | string[]
  fontWeight?: keyof FontWeights | (keyof FontWeights)[]
  isLoading?: boolean

  id?: string
  as?: keyof JSX.IntrinsicElements

  contentEditable?: boolean
  placeholder?: string
}
