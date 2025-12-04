// External Libraries
import { useMemo } from 'react'

// Types
import type { UseOptionItemParams } from './types'

export function useOptionItem({ option, onClick }: UseOptionItemParams) {
  // Constants
  const hasTippy = useMemo(() => option.type === 'column', [option.type])

  const label = useMemo(() => {
    if (option.type === 'function') return option.displayValue

    return option.column.label.trim()
  }, [option])

  // Functions
  function handleClick() {
    onClick(option)
  }

  return { label, hasTippy, handleClick }
}
