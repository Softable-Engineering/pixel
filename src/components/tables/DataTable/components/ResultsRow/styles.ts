import { styled } from 'styled-components'

// Utils
import { lightenAndDesaturate } from '@utils/functions'

interface ContainerProps {
  $enableRowReordering: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;

  padding-left: ${({ $enableRowReordering }) => ($enableRowReordering ? '4rem' : 0)};

  column-gap: 0.5rem;

  /* background-color: ${({ theme }) => theme.colors.background.primary}; */
`

export const ResultsCell = styled.div`
  height: 2.5rem;

  p {
    line-height: 1rem !important;
  }

  p:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;

  column-gap: 0.25rem;

  text-align: start;

  padding: 0.75rem 0.5rem;

  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  background-color: ${({ theme }) => `${lightenAndDesaturate(theme.colors.primary, 0.8)}`};
`
