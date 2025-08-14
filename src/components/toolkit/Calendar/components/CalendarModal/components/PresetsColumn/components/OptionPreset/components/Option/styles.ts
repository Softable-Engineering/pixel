import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--option-background-hover);
  }
`
