import styled from 'styled-components'

export const Container = styled.div`
  max-width: 15rem;
  height: fit-content;


  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem;

  background-color: var(--option-secondary-background-color);
  border-radius: 0.5rem;

  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    opacity: 0.8;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
`
