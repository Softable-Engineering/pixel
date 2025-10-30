import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.text.primary};
`
