import { styled } from 'styled-components'

interface ContainerProps {
  $enableRowReordering: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;

  padding-left: ${({ $enableRowReordering }) => ($enableRowReordering ? '4rem' : 0)};

  background-color: ${({ theme }) => theme.colors.background.primary};
`

export const ResultsCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-align: end;

  padding: 0.75rem 0.5rem;
`
