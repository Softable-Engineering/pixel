import { css } from 'styled-components'
import type { IMargin, IPadding } from '@type/css'

export function applyMargin(props: IMargin) {
  return css`
    ${props.$margin ? { margin: props.$margin } : {}};
    ${props.$marginBottom ? { marginBottom: props.$marginBottom } : {}};
    ${props.$marginLeft ? { marginLeft: props.$marginLeft } : {}};
    ${props.$marginRight ? { marginRight: props.$marginRight } : {}};
    ${props.$marginTop ? { marginTop: props.$marginTop } : {}};
  `
}

export function applyPadding(props: IPadding) {
  return css`
    ${props.$padding ? { padding: props.$padding } : {}};
    ${props.$paddingBottom ? { paddingBottom: props.$paddingBottom } : {}};
    ${props.$paddingTop ? { paddingTop: props.$paddingTop } : {}};
    ${props.$paddingLeft ? { paddingLeft: props.$paddingLeft } : {}};
    ${props.$paddingRight ? { paddingRight: props.$paddingRight } : {}};
  `
}
