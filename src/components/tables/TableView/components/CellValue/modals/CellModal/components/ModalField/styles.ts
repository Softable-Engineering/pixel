import { styled } from 'styled-components'

interface ContainerProps {
  $minHeight?: string
}

export const Container = styled.div<ContainerProps>`
  width: 15rem;
  min-height: ${({ $minHeight }) => $minHeight ?? '1rem'};

  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4 );
  border: 1px solid var(--border-color);

  padding: 0.5rem;

  background-color: var(--background-color);
  color: var(--text-color);
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;

  resize: none;
  border: none;
  outline: none;

  color: var(--text-color);
  background-color: transparent;
`
