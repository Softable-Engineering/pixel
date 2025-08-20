import { type RuleSet, css } from 'styled-components'
import { BACKGROUND_COLOR_MAPPER } from './background'
import type { ButtonVariant } from '../types'

export function mapVariantToCss(
  variant: ButtonVariant,
  color?: string
): RuleSet {
  const buttonColor = color || BACKGROUND_COLOR_MAPPER[variant]

  if (variant === 'filled') {
    return css`
      background-color: ${buttonColor};
      border: 1px solid ${buttonColor};

      &:not(:disabled) {
        &:hover {
          background-color: ${buttonColor}D9;
        }
      }
    `
  }

  if (variant === 'outlined') {
    return css`
      background-color: white;
      border: 1px solid ${color || 'gray'};

      &:not(:disabled) {
        &:hover {
          opacity: 0.5;
        }
      }
    `
  }

  if (variant === 'text') {
    return css`
      border: none;
      background-color: transparent;

      &:not(:disabled) {
        &:hover {
          opacity: 0.5;
        }
      }
    `
  }

  return css``
}
