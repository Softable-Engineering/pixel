// External Libraries
import { css } from 'styled-components'

// Types
import type { Variant } from './types'

export function getVariant(variant?: Variant) {
  if (!variant) return null

  if (variant === 'single') {
    return css`
      p {
        color: white;
      }
      border-radius: 0.5rem;
      background-color: var(--primary);
    `
  }

  if (variant === 'start') {
    return css`
      p {
        color: white;
      }
      border-radius: 0.5rem 0 0 0.5rem;
      background-color: var(--primary);
    `
  }

  if (variant === 'end') {
    return css`
      p {
        color: white;
      }
      border-radius: 0 0.5rem 0.5rem 0;
      background-color: var(--primary);
    `
  }

  if (variant === 'middle') {
    return css`
      background-color: var(--option-background-hover);
    `
  }
}
