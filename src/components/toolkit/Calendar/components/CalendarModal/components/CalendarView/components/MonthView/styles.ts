import styled from 'styled-components'

export const Container = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 1rem;
  margin-top: 0.5rem;
`

export const ContainerDays = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(7, 1fr);
`
