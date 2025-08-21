import { styled } from 'styled-components'

export const Container = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 1rem;
  margin-top: 0.5rem;
`

export const DummyButton = styled.div`
    width: 2.5rem;
    padding: 0.5rem;
`

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerDays = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
