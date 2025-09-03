import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  padding: 0.5rem;
`

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0.25rem;

  border-radius: 0.25rem;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    background-color: var(--secondary-background-color);
  }
`
