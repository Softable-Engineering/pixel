import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4 );
  border: 1px solid var(--border-color);
  background-color: var(--secondary-background-color);

`

export const ContainerDisplay = styled.div`
  max-width: 20rem;
  display: flex;
  flex-wrap: wrap;

  background-color: var(--modal-display);
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
