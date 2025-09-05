import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0.75rem;

  position: relative;

  &:focus {
    outline: 1px solid var(--primary);
  }

  & > p {
    word-wrap: break-word;
    width: 100%;
  }
`
