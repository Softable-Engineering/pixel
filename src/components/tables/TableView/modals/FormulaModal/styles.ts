import { styled } from 'styled-components'

export const Container = styled.div`
  width: 50rem;
  min-height: 30vh;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--secondary-hover);
  border-radius: 0.5rem;

  background-color: var(--background-color);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

export const Row = styled.div`
  flex: 1;

  display: flex;
`
