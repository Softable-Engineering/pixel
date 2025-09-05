import { styled } from 'styled-components'

interface ContainerProps {
  $minHeight?: string
}

export const Container = styled.div<ContainerProps>`
  width: 18rem;
  min-height: ${({ $minHeight }) => $minHeight ?? '1rem'};

  display: flex;
  flex-direction: column;

  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4 );
  border: 1px solid var(--border-color);
  overflow: hidden;

  background-color: var(--background-color);
  color: var(--text-color);
`

export const Textarea = styled.textarea`
  flex: 1;

  resize: none;
  border: none;
  outline: none;
  padding: 0.5rem;

  color: var(--text-color);
  background-color: transparent;
`
