import { styled } from 'styled-components'

export interface LabelProps {
  $color: string
}

export const Container = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
  padding: 0.75rem;

  &:focus {
    outline: 1px solid var(--primary);
  }
`
