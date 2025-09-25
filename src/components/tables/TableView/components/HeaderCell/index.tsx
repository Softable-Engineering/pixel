// External Libraries
import type React from 'react'
import { useRef, useState, type ReactNode } from 'react'

// Components
import { Header } from './components/Input'
import { Typography } from '@components/toolkit/Typography'
import { ActionsPanel } from '@components/commons/toolkit/ActionsPanel'

// Utils
import { getActionsGroups } from './utils/options'

// Types
import {
  ColumnType,
  ColumnActions,
  type ManagementHeaderParams
} from '../../types'

// Styles
import { Container } from './styles'

interface Props {
  title: string
  icon: ReactNode
  columnId: string
  viewOnly?: boolean
  onClickOption: (action: ManagementHeaderParams) => void
}

export const HeaderCell: React.FC<Props> = ({
  icon,
  title,
  viewOnly,
  columnId,
  onClickOption
}) => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)

  // Constants
  const options = getActionsGroups({
    onChangeTypeColumn: handleChangeTypeColumn
  })

  // States
  const [isOpen, setIsOpen] = useState(false)

  // Functions
  function handleOpenPanel() {
    if (viewOnly) return null

    setIsOpen(true)
  }

  function handleClosePanel() {
    setIsOpen(false)
  }

  function handleClickOption(action: ColumnActions) {
    if (action === ColumnActions.Calculate) return
    if (action === ColumnActions.UpdateProperty) return
    if (action === ColumnActions.UpdateColumnName) return
    if (action === ColumnActions.AddColumn) return
    if (action === ColumnActions.UpdateTypeColumn)
      return onClickOption({
        type: action,
        columnId,
        typeColumn: ColumnType.EMAIL
      })

    onClickOption({ type: action, columnId })
    handleClosePanel()
  }

  function handleChangeTypeColumn(type: ColumnType) {
    return onClickOption({
      columnId,
      typeColumn: type,
      type: ColumnActions.UpdateTypeColumn
    })
  }

  return (
    <Container onClick={handleOpenPanel} ref={containerRef}>
      {icon}

      <Typography variant="b2">{title}</Typography>

      <ActionsPanel
        referenceRef={containerRef}
        isOpen={isOpen}
        options={options}
        placement="bottom-start"
        wrapperId="table-column-actions-panel"
        header={<Header value={title} onChange={console.log} />}
        onClose={handleClosePanel}
        onClick={handleClickOption}
      />
    </Container>
  )
}
