// External Libraries
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { OptionsList } from './components/OptionsList'
import { OptionDisplay } from './components/OptionDisplay'

// Hooks
import { useClickOutsideWatcher } from 'src/hooks/useClickOutsideWatcher'

// Types
import type { Option, Props } from './types'

// Styles
import { Container } from './styles'

const VALUE_CUSTOM_OPTION = 'custom-value-with-select'

export const Select = <T extends string>(props: Props<T>) => {
  // Refs
  const containerListRef = useRef<HTMLDivElement>(null)

  // Constants
  const {
    value,
    options,
    disabled = false,
    withCustomValue = false,
    onChange
  } = props
  const selectedOption = options.find(option => option.value === value)

  const completeOptions = getCompleteOptions()

  // States
  const [customValueSelected, setCustomValueSelected] = useState(false)

  // States
  const [visible, setVisible] = useState(false)

  // Hooks
  useClickOutsideWatcher(containerListRef, handleClose, !visible)

  useEffect(() => {
    if (!selectedOption) {
      setCustomValueSelected(true)
    } else return setCustomValueSelected(false)
  }, [selectedOption])

  // Functions
  function getCompleteOptions() {
    const customOption = {
      label: 'Valor customizado',
      value: VALUE_CUSTOM_OPTION
    }
    if (withCustomValue) {
      return [...options, customOption]
    }

    return options
  }

  function toggleVisible() {
    setVisible(prev => !prev)
  }

  function handleClose() {
    setVisible(false)
  }

  function handleChange(value: T) {
    if (value === VALUE_CUSTOM_OPTION) {
      setCustomValueSelected(true)
      handleClose()
      return
    }
    setCustomValueSelected(false)
    onChange(value)
    handleClose()
  }

  return (
    <Container $disabled={disabled} ref={containerListRef}>
      <OptionDisplay
        value={value}
        visibleListModal={visible}
        selectedOption={selectedOption}
        customValueSelected={customValueSelected}
        onChange={onChange}
        onClick={toggleVisible}
      />

      <AnimatePresence initial={false}>
        {visible && !disabled ? (
          <OptionsList<T>
            value={value}
            options={completeOptions as Option<T>[]}
            onChange={handleChange}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
