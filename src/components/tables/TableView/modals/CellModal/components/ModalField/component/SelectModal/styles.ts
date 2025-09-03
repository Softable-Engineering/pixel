import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

`

export const ContainerDisplay = styled.div`
  display: flex;

  display: flex;
  flex-wrap: wrap;

  background-color: var(--secondary-background-color);
  border-bottom: 1px solid var(--border-color);

  padding: 0.5rem;

  gap: 0.5rem;
`

export const Input = styled.input`
  flex: 1;
  height: 1.5rem;
  min-width: 7rem;

  outline: none;
  border: 0;
  color: var(--text-color);

  background-color: transparent;
`
