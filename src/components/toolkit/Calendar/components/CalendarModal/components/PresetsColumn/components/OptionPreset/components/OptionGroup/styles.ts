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
    transition: 0.5s;
    background-color: var(--option-background-hover);
  }
`

export const ContainerChildren = styled(motion.div)`
  width: fit-content;
  min-width: 15rem;
  height: fit-content;

  position: absolute;
  left: 100%;
  top: 0;

  background-color: var(--option-background-color);
`
