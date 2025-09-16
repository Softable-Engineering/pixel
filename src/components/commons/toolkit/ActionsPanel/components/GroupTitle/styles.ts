import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;

  padding: 0.25rem 0.5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
  }
`
