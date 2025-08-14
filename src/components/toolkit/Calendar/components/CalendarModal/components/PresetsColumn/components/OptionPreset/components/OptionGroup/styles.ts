// External Libraries
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  position: relative;

  color: var(--text-color);
  background-color: var(--option-background-color);
  transition: 0.5s;

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

  position: absolute;
  left: calc(100% + 0.5rem);
  top: 0;

  border-radius: 0.5rem;

  background-color: var(--option-background-color);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`
