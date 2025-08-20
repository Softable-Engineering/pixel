import {
  DEFAULT_SPEED,
  DEFAULT_THICKNESS,
  DEFAULT_EMPTY_COLOR
} from './constants'
import { LoaderProps } from './styles'

export function getBorder(props: LoaderProps) {
  const thickness = props.thickness || DEFAULT_THICKNESS
  const emptyColor = props.$emptyColor || DEFAULT_EMPTY_COLOR

  return `${thickness} solid ${emptyColor}`
}

export function getSpinnerAnimation(props: LoaderProps) {
  const speed = props.speed || DEFAULT_SPEED

  return `spinnerAnimation ${speed} linear infinite`
}
