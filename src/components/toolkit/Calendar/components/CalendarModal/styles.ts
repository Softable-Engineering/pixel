import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 40rem;
  height: fit-content;

  display: flex;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  border-radius: 0.5rem;
  background-color: #fbfbfb;
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1rem;
`
