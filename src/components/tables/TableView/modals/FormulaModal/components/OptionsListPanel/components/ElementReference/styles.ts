import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  row-gap: 0.75rem;
`

export const TitleRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  column-gap: 0.25rem;

  p {
    line-height: 100%;
  }
`
