import { styled } from 'styled-components'

interface ContainerProps {
  $color: string
  $stretch: boolean
  $hasHover: boolean
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $stretch }) => ($stretch ? '100%' : 'fit-content')};
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;

  background-color: ${({ $color }) => $color};

  column-gap: 0.5rem;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    opacity: ${({ $hasHover }) => ($hasHover ? 0.8 : 1)};
  }

  overflow: hidden;

  & > p {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const Button = styled.button`
  height: 1rem;
  width: 1rem;
  background-color: #0000002f;
  border: none;

  transition: 0.5s;
  padding: 0.25rem;
  border-radius: 0.25rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
    opacity: 0.7;
  }
`
