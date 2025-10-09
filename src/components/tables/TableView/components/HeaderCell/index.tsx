// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Not needed> */
import { useMemo, useRef, useState, type ReactNode } from 'react'

// Components
import { Header } from './components/Input'
import { Typography } from '@components/toolkit/Typography'
import { ActionsPanel } from '@components/commons/toolkit/ActionsPanel'

// Hooks
import { useTableViewContext } from '../../contexts/useTableViewContext'

// Utils
import { getActions } from './utils'

// Types
import {
  ColumnType,
  ColumnActions,
  type ColumnDef,
  type ManagementHeaderParams
} from '../../types'

// Styles
import { Container } from './styles'

interface Props<T> {
  title: string
  icon: ReactNode
  viewOnly?: boolean
  column: ColumnDef<T>
  onOpenFormulaModal: () => void
  onClickOption: (action: ManagementHeaderParams) => void
}

export const HeaderCell = <T,>({
  icon,
  title,
  column,
  viewOnly,
  onClickOption,
  onOpenFormulaModal
}: Props<T>) => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)

  // Hooks
  const { permissions } = useTableViewContext()

  // Constants
  const groupOptions = useMemo(() => {
    const params = {
      column,
      permissions,
      onChangeTypeColumn: handleChangeTypeColumn,
      onOpenFormulaModal
    }

    return getActions(params)
  }, [permissions, column, onOpenFormulaModal])

  // States
  const [isOpen, setIsOpen] = useState(false)

  // Functions
  function handleOpenPanel() {
    if (!groupOptions.length) return null

    setIsOpen(true)
  }

  function handleClosePanel() {
    setIsOpen(false)
  }

  function handleClickOption(action: ColumnActions) {
    if (action === ColumnActions.Calculate) return
    if (action === ColumnActions.AddColumn) return
    if (action === ColumnActions.UpdateProperty) return
    if (action === ColumnActions.UpdateColumnName) return
    if (action === ColumnActions.UpdateTypeColumn)
      return onClickOption({
        type: action,
        columnId: column.id,
        typeColumn: ColumnType.EMAIL
      })

    onClickOption({ type: action, columnId: column.id })
    handleClosePanel()
  }

  function handleChangeTypeColumn(type: ColumnType) {
    return onClickOption({
      typeColumn: type,
      columnId: column.id,
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
        options={groupOptions}
        placement="bottom-start"
        wrapperId="table-column-actions-panel"
        header={<Header value={title} onChange={console.log} />}
        onClose={handleClosePanel}
        onClick={handleClickOption}
      />
    </Container>
  )
}
