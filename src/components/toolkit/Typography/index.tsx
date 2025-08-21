// External Libraries
import type React from 'react'
import { useMemo } from 'react'
import { useTheme } from 'styled-components'

// Hooks
import { useTypography } from './context'

// Utils
import { getVariants } from './config'
import { getPlaceholder } from './utils/getPlaceholder'

// Types
import type { PixelTypeProps } from './types'

// Styles
import { Container } from './styles'

export const Typography: React.FC<PixelTypeProps> = props => {
  // Hooks
  const theme = useTheme()
  const { loading } = useTypography()

  // Constants
  const {
    id,
    variant,
    children,
    isLoading,
    skeletonPlaceholder = 10,
    ...rest
  } = props

  const loadingPlaceholder = useMemo(
    () => getPlaceholder(skeletonPlaceholder),
    [skeletonPlaceholder]
  )

  const customConfig = rest
  const defaultConfig = getVariants(theme)[variant]

  return (
    <Container
      id={id}
      {...{
        $isLoading: isLoading !== undefined ? isLoading : loading,
        ...defaultConfig,
        ...customConfig
      }}
    >
      {loading ? loadingPlaceholder : children}
    </Container>
  )
}
