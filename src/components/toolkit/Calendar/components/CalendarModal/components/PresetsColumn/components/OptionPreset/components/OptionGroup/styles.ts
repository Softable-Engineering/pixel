// External Libraries
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface ContainerGroup {
  $isLast: boolean
}

export const Container = styled.div`
  width: 100%;
  padding: 0.125rem;

  position: relative;

  border-radius: 0.5rem;
  color: var(--text-color);
  background-color: var(--option-background-color);
`

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.5s;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;

  svg {
    transform: rotate(180deg);
  }

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--option-background-hover);
  }
`

export const ContainerChildren = styled(motion.div)`
  width: fit-content;
  min-width: 15rem;
  height: fit-content;
  max-height: 20rem;


  position: fixed;
  left: 0;
  top: 0;

  z-index: 11;

  border-radius: 0.5rem;

  background-color: var(--option-background-color);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  scrollbar-width: thin;
`

export const ContainerPreset = styled.div<ContainerGroup>`
  border-bottom: ${({ $isLast }) => (!$isLast ? '1px solid var(--border-color)' : null)};
`
