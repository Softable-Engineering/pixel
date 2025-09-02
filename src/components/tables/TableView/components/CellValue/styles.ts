import { styled } from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:focus {
    outline: none;
    border: 1px solid red;
    border-radius: 0.25rem;
  }
`

export const CellWrapper = styled.div`
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  pointer-events: none;
  box-sizing: border-box;
`
