import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  &:focus {
    outline: 1px solid var(--primary);
  }
`

export const Checkbox = styled.input`
  cursor: pointer;
`
