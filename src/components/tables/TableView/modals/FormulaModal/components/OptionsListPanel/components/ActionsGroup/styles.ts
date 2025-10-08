import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.25rem;

  > p:first-of-type {
    /* position: sticky;
    top: 0; */

    background-color: var(--background-color);

    padding: 0.5rem;
  }
`

export const OptionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.25rem;
  padding-left: 0.25rem;
`
