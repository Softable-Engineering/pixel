// External Libraries
import { useEffect, useRef, useState } from 'react'

// Hooks
import { useModalContext } from '@contexts/useModalContext'

// Utils
import { FUNCTIONS } from '../../utils'
import { buildAvailableItems, getNextItemPath } from './utils'

// Types
import type {
  OptionsGroup,
  FormulaOption
} from '../../components/OptionsListPanel/types'
import type { ItemPathParams, UseFormulaParams } from './types'
import type { FormulaInputMethods } from '../../components/FormulaInput/types'

export function useFormula({ columns }: UseFormulaParams) {
  // Refs
  const inputRef = useRef<FormulaInputMethods>(null)

  // Hooks
  const { closeModal } = useModalContext()

  // States
  const [path, setPath] = useState([0, 0])
  const [search, setSearch] = useState('')
  const [formula, setFormula] = useState('')
  const [columnId, setColumnId] = useState('')
  const [visible, setVisible] = useState(false)
  const [availableItems, setAvailableItems] = useState<OptionsGroup[]>([])

  useEffect(() => {
    const items = buildAvailableItems(columns, search, FUNCTIONS)
    setAvailableItems(items)
  }, [search, columns])

  // Functions
  function handleKeyDown(event: KeyboardEvent) {
    inputRef.current?.focus()

    const pathParams: ItemPathParams = {
      current: path,
      direction: 'down',
      items: availableItems
    }

    let newPath: number[] | null = null

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        newPath = getNextItemPath(pathParams)
        setPath(newPath)
        break
      case 'ArrowUp':
        event.preventDefault()
        newPath = getNextItemPath({ ...pathParams, direction: 'up' })
        setPath(newPath)
        break
      case 'Tab':
      case 'Enter': {
        event.preventDefault()
        const item = availableItems[path[0]].options[path[1]]
        if (item) {
          onOptionClick(item)
        }
        break
      }
    }

    if (newPath) {
      const element = document.querySelector(
        `[data-path="${newPath.join('-')}"]`
      )

      if (element)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  function onOptionClick(item: FormulaOption) {
    if (!inputRef.current) return

    inputRef.current.focus()

    if (item.type === 'column') inputRef.current.insertColumnToken(item.column)
    else inputRef.current.insertFunctionText(item.value)
  }

  function handleRefMethods() {
    return { open: handleOpen, close: handleClose }
  }

  function handleOpen(columnId?: string, formula?: string) {
    setColumnId(columnId || '')
    setFormula(formula || '')

    setVisible(true)
  }

  function handleClose() {
    setVisible(false)
    closeModal()
  }

  return {
    path,
    search,
    formula,
    visible,
    inputRef,
    columnId,
    availableItems,
    handleClose,
    onOptionClick,
    handleKeyDown,
    handleRefMethods,
    handleChangeSearch: setSearch
  }
}
