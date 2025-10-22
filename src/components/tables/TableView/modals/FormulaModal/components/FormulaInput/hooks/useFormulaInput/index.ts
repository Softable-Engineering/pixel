// External Libraries
import { useEffect, useRef } from 'react'

// Utils
import { FormulaEditor } from './editor'
import { FUNCTIONS } from '../../../../utils'

// Types
import type { UseFormulaInputParams } from './types'
import type { FormulaInputMethods } from '../../types'
import type { FormulaOptionColumn } from '../../../OptionsListPanel/types'

export function useFormulaInput({
  formula,
  columns = [],
  functions = FUNCTIONS,
  onChangeSearch
}: UseFormulaInputParams) {
  // Refs
  const columnsRef = useRef<FormulaOptionColumn[]>(columns)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<FormulaEditor | null>(null)

  // UseEffects
  useEffect(() => {
    const el = inputRef.current
    if (!el) return

    if (!editorRef.current) {
      editorRef.current = new FormulaEditor(
        el,
        functions,
        columnsRef.current,
        onChangeSearch
      )
    }

    if (formula) {
      editorRef.current.deserialize(formula)
    }

    const onInput = (_e: Event) => editorRef.current?.handleInput()
    el.addEventListener('input', onInput)

    return () => {
      el.removeEventListener('input', onInput)
      editorRef.current = null
    }
  }, [functions, formula, onChangeSearch])

  // Functions
  function resetContent() {
    if (!inputRef.current) return
    inputRef.current.innerHTML = ''
  }

  function exportFormula() {
    return editorRef.current?.serialize() ?? ''
  }

  function setupFormula(f: string) {
    editorRef.current?.deserialize(f)
  }

  function focus() {
    inputRef.current?.focus()
  }

  function insertColumn(column: FormulaOptionColumn) {
    editorRef.current?.insertText(`[col:${column.id}]`, 1)
  }

  function insertFunction(name: string) {
    const offset = name.length + 1
    editorRef.current?.insertText(`${name.toLowerCase()}()`, offset)
  }

  function handleRefMethods(): FormulaInputMethods {
    return {
      focus,
      reset: resetContent,
      serialize: exportFormula,
      deserialize: setupFormula,
      insertColumnToken: insertColumn,
      insertFunctionText: insertFunction
    }
  }

  return { inputRef, handleRefMethods }
}
