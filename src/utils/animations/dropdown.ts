export const DROPDOWN_ANIMATION_PRESETS = {
  initial: { opacity: 0, translateY: -5 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: -5 },
  transition: { duration: 0.2, ease: 'easeOut' }
}

export const REVERSE_DROPDOWN_ANIMATION_PRESETS = {
  initial: { opacity: 0, translateY: 5 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 5 },
  transition: { duration: 0.2, ease: 'easeInOut' }
}
