import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  top: calc(100% + 0.25rem);
  left: 0;

  z-index: 10;

  background-color: var(--option-background-color);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.07);
  overflow-y: auto;

  border-radius: 0.5rem;
`
