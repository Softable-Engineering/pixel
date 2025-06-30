export const getPlaceholder = (size: number | string) => {
  if (typeof size === 'string') return size

  let placeholder = ''
  for (let i = 0; i < size; i++) {
    placeholder += '*'
  }

  return placeholder
}
