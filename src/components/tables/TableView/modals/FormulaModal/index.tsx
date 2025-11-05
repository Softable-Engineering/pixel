// External Libraries
import React, { useEffect, useImperativeHandle } from 'react'

// Components
import { Tips } from './components/Tips'
import { Header } from './components/Header'
import { Preview } from './components/Preview'
import { Modal } from '@components/commons/modals/Modal'
import { FormulaInput } from './components/FormulaInput'
import { OptionsListPanel } from './components/OptionsListPanel'

// Hooks
import { useFormula } from './hooks/useFormula'

// Utils
import { FUNCTIONS } from './utils'

// Types
import {
  ColumnType,
  type FormulaModalProps,
  type FormulaModalMethods
} from './types'
import { ColumnActions } from '../../types'

// Styles
import { Container, Content, Row } from './styles'

export const FormulaModal = React.forwardRef<
  FormulaModalMethods,
  FormulaModalProps
>((props, ref) => {
  // Hooks
  const {
    path,
    visible,
    formula,
    inputRef,
    columnId,
    availableItems,
    handleClose,
    onOptionClick,
    handleKeyDown,
    handleRefMethods,
    handleChangeSearch
  } = useFormula(props)
  useImperativeHandle(ref, handleRefMethods)

  // UseEffects
  useEffect(() => {
    if (!visible) return

    function keyDown(e: KeyboardEvent) {
      handleKeyDown(e)

      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', keyDown)
    return () => document.removeEventListener('keydown', keyDown)
  }, [visible, handleClose, handleKeyDown])

  // Functions
  function applyChangeFormula() {
    const formula = inputRef.current?.serialize()

    if (columnId && formula) {
      props.onManagementHeader({
        formula,
        columnId,
        type: ColumnActions.ChangeFormula
      })
    }

    if (!columnId && formula) {
      props.onManagementHeader({
        formula,
        typeColumn: ColumnType.FORMULA,
        type: ColumnActions.AddFormulaColumn
      })
    }

    handleClose()
  }

  return (
    <Modal
      hideHeader
      open={visible}
      wrapperId={props.wrapperId}
      onClose={handleClose}
    >
      <Container>
        <Header title="Edit formula" onDone={applyChangeFormula} />

        <Content>
          <FormulaInput
            ref={inputRef}
            formula={formula}
            functions={FUNCTIONS}
            columns={props.formulaColumns ?? props.columns}
            onChangeSearch={handleChangeSearch}
          />

          <Preview />

          <Row>
            <OptionsListPanel
              selectionPath={path}
              options={availableItems}
              onOptionClick={onOptionClick}
            />

            <Tips formula="" />
          </Row>
        </Content>
      </Container>
    </Modal>
  )
})

FormulaModal.displayName = 'FormulaModal'
