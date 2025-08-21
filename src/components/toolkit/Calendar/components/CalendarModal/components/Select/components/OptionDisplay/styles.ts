import { styled } from 'styled-components'

interface ContainerProps {
  $visible: boolean
}

export const Container = styled.div<ContainerProps>`
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  background-color: var(--option-secondary-background-color);
  border-radius: 0.5rem;

  transition: 0.5s;

  svg {
    margin-left: 0.5rem;
    width: 1rem;

    transition: 0.5s;
    transform: ${({ $visible }) => ($visible ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    opacity: 0.8;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  background-color: transparent;
  border: 0;
  flex: 1;

  outline: none;
`
