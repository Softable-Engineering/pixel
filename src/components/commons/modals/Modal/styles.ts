import { styled } from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  $zIndex?: number
}

const DEFAULT_Z_INDEX = 10

export const Container = styled(motion.div)<Props>`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: ${({ $zIndex }) => $zIndex || DEFAULT_Z_INDEX};
`

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: fixed;
  pointer-events: all;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
`

export const BackDrop = styled(motion.div)<Props>`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${({ $zIndex }) => $zIndex || DEFAULT_Z_INDEX};
`

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.5rem;
  padding-bottom: 0;
  column-gap: 0.5rem;
`

export const CloseButton = styled.button`
  height: 2rem;
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin-left: auto;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
`
