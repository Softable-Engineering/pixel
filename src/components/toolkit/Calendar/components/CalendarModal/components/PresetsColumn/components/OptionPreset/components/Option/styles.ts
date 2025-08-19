import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.125rem;

  transition: 0.5s;
`

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  transition: 0.5s;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--option-background-hover);
  }
`
