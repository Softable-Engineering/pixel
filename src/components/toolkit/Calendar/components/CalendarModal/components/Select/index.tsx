// External Libraries
import type React from 'react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { OptionDisplay } from './components/OptionDisplay'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export const Select: React.FC<Props> = ({ value, options, onChange }) => {
  // States
  const [visible, setVisible] = useState(false)

  // Functions
  function handleToggleVisible() {
    setVisible(prev => !prev)
  }

  return (
    <Container>
      <OptionDisplay value={value} onClick={handleToggleVisible} />

      <AnimatePresence initial={false}>
        {visible ? <>asd</> : null}
      </AnimatePresence>
    </Container>
  )
}
