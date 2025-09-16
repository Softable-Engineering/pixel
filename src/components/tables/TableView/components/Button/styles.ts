import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  column-gap: 0.5rem;
  transition: 0.5s;

  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--background-color);
  }
`
