import styled from 'styled-components'

interface ContainerDragProps {
  $hasVerticalDivider: boolean
  $hasHorizontalDivider: boolean
}

export const Container = styled.div`
  position: absolute;

  top: calc(50% - (2rem / 2));
  left: calc(-3rem);

  width: 3rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 0.5rem;
`

export const ReorderContainer = styled.div<ContainerDragProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: grab;
`

export const Checkbox = styled.input`
  cursor: pointer;
`
