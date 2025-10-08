export const MODAL_ANIMATION_PRESETS = {
  initial: { translateY: 20, opacity: 0, scale: 0.8 },
  animate: { translateY: 0, opacity: 1, scale: 1 },
  exit: { translateY: 20, opacity: 0, scale: 0.8 },
  transition: { duration: 0.2, ease: 'easeInOut' }
}

export const BACKDROP_ANIMATION_PRESETS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: 'easeInOut' }
}
