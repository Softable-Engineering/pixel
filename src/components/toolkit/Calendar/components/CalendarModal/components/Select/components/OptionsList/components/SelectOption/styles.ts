import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 10rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.125rem;

  transition: 0.5s;

  &:hover div {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--option-background-hover);
  }
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem;

  border-radius: 0.5rem;
`
