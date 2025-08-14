import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  height: fit-content;
  width: 40rem;
  border-radius: 0.5rem;
  background-color: #fbfbfb;
`
