// External Libraries
import { styled } from 'styled-components'

// Styles
import { ScrollStyles } from '@components/tables/TableView/styles'

export const Container = styled.div`
  width: 30%;
  height: 15rem;

  padding: 0 0.5rem 0.5rem 0.5rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  ${ScrollStyles}
`
