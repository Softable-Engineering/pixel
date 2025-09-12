import { styled } from 'styled-components'

export const Container = styled.div`
  width: 15rem;
`

export const GroupWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0.25rem;
`

export const Divider = styled.hr`
  width: 100%;
  height: 1px;

  border: 0;

  background-color: ${({ theme }) => theme.colors.border.primary};
`
