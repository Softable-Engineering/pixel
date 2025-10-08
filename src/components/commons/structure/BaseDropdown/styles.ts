import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  will-change: transform;
`

export const Content = styled(motion.div)`
  display: flex;

  border-radius: 0.5rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
