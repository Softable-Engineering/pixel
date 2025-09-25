// External Libraries
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

// Types
import type { Direction } from '.'

interface ContentWrapperProps {
  $direction: Direction
}

export const Container = styled.div`
  position: relative;

  user-select: none;
`

export const ContentWrapper = styled(motion.div)<ContentWrapperProps>`
  position: absolute;

  top: 0;
  right: ${({ $direction }) => ($direction === 'right' ? 'auto' : 'calc(100% + 0.5rem);')};
  left: ${({ $direction }) => ($direction === 'left' ? 'auto' : 'calc(100% + 0.5rem);')};

  z-index: 10;
`
