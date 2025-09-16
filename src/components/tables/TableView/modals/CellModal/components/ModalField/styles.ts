import { css, styled } from 'styled-components'

export const ScrollStyles = css`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:active {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--scrolbar-color);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrolbar-color);
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: var(--scrolbar-color);
  }

  scrollbar-width: 8px;
  scrollbar-color: var(--scrolbar-color) transparent;
`

interface ContainerProps {
  $minHeight?: string
}

interface TextareaProps {
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

  background-color: var(--background-color);
  color: var(--text-color);

  ${ScrollStyles}

`

export const Textarea = styled.textarea<TextareaProps>`
  width: 17rem;
  min-height: ${({ $minHeight }) => $minHeight ?? '3rem'};
  max-height: 20rem;

  resize: none;
  border: none;
  outline: none;
  padding: 0.5rem;

  color: var(--text-color);
  background-color: var(--background-color);

  ${ScrollStyles}
`
