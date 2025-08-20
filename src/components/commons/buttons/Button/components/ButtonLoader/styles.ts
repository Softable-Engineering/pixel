import { motion } from 'framer-motion'
import styled from 'styled-components'

interface LoaderProps {
  $color: string
}

export const Container = styled(motion.div)<LoaderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.borderRadius.button};
`
