/* eslint-disable react-hooks/exhaustive-deps */
import { type MutableRefObject, useEffect } from 'react'

export function useClickOutsideWatcher(
  ref: MutableRefObject<HTMLElement | null>,
  onClickOutside: () => void,
  disabled = false
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target && !ref?.current?.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    if (!disabled) document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, disabled, onClickOutside])
}
