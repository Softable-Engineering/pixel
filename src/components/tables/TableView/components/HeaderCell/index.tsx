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
  type ColumnType,
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
  onOpenFormulaModal: (columnId: string, formula?: string) => void
  onManagementHeader: (action: ManagementHeaderParams) => void
}

export const HeaderCell = <T,>({
  icon,
  title,
  column,
  viewOnly,
  onManagementHeader,
  onOpenFormulaModal
}: Props<T>) => {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // States
  const [name, setName] = useState(title)

  // Hooks
  const { permissions } = useTableViewContext()

  // Constants
  const namePermission = permissions.columns.name
  const showNameInput =
    namePermission.enabled === true && Array.isArray(namePermission.types)
      ? namePermission.types.includes(column.type)
      : namePermission.types === true
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
    if (!groupOptions.length && !showNameInput) return null

    setIsOpen(true)
  }

  function handleClosePanel() {
    if (title !== inputRef.current?.value)
      return handleChangeColumnName(inputRef.current?.value ?? name)

    setIsOpen(false)
  }

  function handleClickOption(action: ColumnActions) {
    if (action === ColumnActions.Calculate) return
    if (action === ColumnActions.AddColumn) return
    if (action === ColumnActions.ChangeFormula) return
    if (action === ColumnActions.UpdateProperty) return
    if (action === ColumnActions.UpdateColumnName) return
    if (action === ColumnActions.UpdateTypeColumn) return
    if (action === ColumnActions.AddFormulaColumn) return

    onManagementHeader({ type: action, columnId: column.id })
    handleClosePanel()
  }

  function handleChangeTypeColumn(type: ColumnType) {
    return onManagementHeader({
      typeColumn: type,
      columnId: column.id,
      type: ColumnActions.UpdateTypeColumn
    })
  }

  function handleChangeColumnName(name: string) {
    return onManagementHeader({
      name,
      columnId: column.id,
      type: ColumnActions.UpdateColumnName
    })
  }

  function renderHeader() {
    if (!showNameInput) return null

    return <Header ref={inputRef} value={name} onChange={setName} />
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
        header={renderHeader()}
        onClose={handleClosePanel}
        onClick={handleClickOption}
      />
    </Container>
  )
}
