/* eslint-disable react-hooks/exhaustive-deps */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Not needed> */
import { useEffect } from 'react'

export function useClickOutsidePortalWatcher(
  refs: (HTMLElement | null)[],
  onClickOutside: () => void,
  disabled = false
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!event.target) return

      if (refs.some(ref => ref?.contains(event.target as Node))) return

      onClickOutside()
    }

    if (!disabled) document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [refs, disabled])
}
