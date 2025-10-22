// External Libraries
import ReactDOM from 'react-dom/client'

// Utils
import { placeCaretAfter, placeCaretBefore } from './caret'
import { getIcon } from '@components/tables/TableView/utils'

// Types
import type { FormulaOptionColumn } from '../../../../OptionsListPanel/types'

export function createColumnNode(
  column: FormulaOptionColumn,
  inputElement: HTMLElement | null
) {
  const span = document.createElement('span')
  span.contentEditable = 'false'
  span.dataset.token = 'column'
  span.dataset.id = column.id
  span.className = 'token column'

  const ic = document.createElement('span')
  ic.className = 'column-icon'
  const icon = getIcon(column.type)
  if (icon) {
    const root = ReactDOM.createRoot(ic)
    root.render(icon)
  }

  const lbl = document.createElement('span')
  const label = column.tableName
    ? `${column.tableName}.${column.label}`
    : column.label
  lbl.className = 'column-label'
  lbl.textContent = label

  span.appendChild(ic)
  span.appendChild(lbl)

  // Click to position caret before/after
  span.addEventListener('mousedown', ev => {
    ev.preventDefault()
    const rect = span.getBoundingClientRect()
    const clickX = (ev as MouseEvent).clientX
    const middle = rect.left + rect.width / 2
    if (clickX < middle) placeCaretBefore(span, inputElement)
    else placeCaretAfter(span, inputElement)
  })

  return span
}
