// External Libraries
import type React from 'react'
import { useRef, useState } from 'react'

// Components
import { ActionsPanel } from '@components/commons/toolkit/ActionsPanel'

// Types
import { getOptions } from './utils/getOptions'
import type { ColumnType } from '@components/tables/TableView/types'

// Styles
import { Container } from './styles'
import { Button } from '../../../Button'
import { Plus } from '@assets/icons/general/Plus'

interface Props {
  onClick: (columnType: ColumnType) => void
}

export const AddColumnButton: React.FC<Props> = ({ onClick }) => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)

  // Constants
  const options = getOptions()

  // States
  const [isOpen, setIsOpen] = useState(false)

  // Functions
  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <Container ref={containerRef} onClick={handleOpen}>
      <Button startIcon={<Plus />} onClick={() => {}} />

      <ActionsPanel<ColumnType>
        referenceRef={containerRef}
        isOpen={isOpen}
        options={options}
        placement="bottom-end"
        wrapperId="table-column-actions-panel"
        onClick={onClick}
        onClose={handleClose}
      />
    </Container>
  )
}
