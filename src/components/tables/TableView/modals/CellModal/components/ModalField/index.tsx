// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
import type React from 'react'
import { useEffect, useRef } from 'react'

// Components
import { SelectModal } from './component/SelectModal'

// Types
import { CellTypes } from '../../types'
import type { ModalFieldProps } from './types'

// Styles
import { Textarea } from './styles'

export const ModalField: React.FC<ModalFieldProps> = props => {
  // Refs
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Constants
  const { type, minHeight, onChange, onClose } = props

  // Refs
  const initialHeight = useRef(getInitialHeight())

  // UseEffects
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [props])

  // Functions
  function getInitialHeight() {
    if (minHeight > 20 * 16) return 20 * 16

    return minHeight
  }

  function renderContent() {
    if (type === CellTypes.TEXT) {
      return (
        <Textarea
          ref={textareaRef}
          autoFocus
          value={props.text}
          $minHeight={`${initialHeight.current}px`}
          onChange={e => onChange(e.target.value)}
        />
      )
    }

    if (type === CellTypes.SELECT)
      return <SelectModal {...props} onClose={onClose} />
  }

  return renderContent()
}
