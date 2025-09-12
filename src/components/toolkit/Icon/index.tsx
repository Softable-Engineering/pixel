// External Libraries
import type React from 'react'
import { Suspense } from 'react'

// Types
import type { IconProps } from './types'

// Styles
import { StyledIcon } from './styles'

export const Icon: React.FC<IconProps> = ({ src, size = '1.25rem', alt }) => {
  return (
    <Suspense fallback={null}>
      <StyledIcon $size={size}>
        <img src={src} alt={alt} />
      </StyledIcon>
    </Suspense>
  )
}
