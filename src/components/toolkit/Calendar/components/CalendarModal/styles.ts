import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: fit-content;
  height: fit-content;

  display: flex;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  border-radius: 0.5rem;
  background-color: #fbfbfb;

  user-select: none;
`

export const ContainerCalendar = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 0.75rem;
`

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 0.5rem;

  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0.5rem;
  border-top: 1px solid var(--border-color);
  column-gap: 0.5rem;
`
