// External Libraries
import React, { useEffect, useImperativeHandle } from 'react'

// Components
import { Tips } from './components/Tips'
import { Header } from './components/Header'
import { Preview } from './components/Preview'
import { Modal } from '@components/commons/modals/Modal'
import { FormulaInput } from './components/FormulaInput'

// Hooks
import { useFormula } from './hooks/useFormula'

// Types
import type { FormulaModalProps, FormulaModalMethods } from './types'

// Styles
import { Container, Content, Row } from './styles'
import { OptionsListPanel } from './components/OptionsListPanel'
import { FUNCTIONS } from './utils'

export const FormulaModal = React.forwardRef<
  FormulaModalMethods,
  FormulaModalProps
>((props, ref) => {
  // Hooks
  const {
    path,
    visible,
    inputRef,
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

  return (
    <Modal
      hideHeader
      open={visible}
      wrapperId="table-column-actions-panel"
      onClose={handleClose}
    >
      <Container>
        <Header
          title="Edit formula"
          onDone={() => console.log(inputRef.current?.serialize())}
        />

        <Content>
          <FormulaInput
            ref={inputRef}
            functions={FUNCTIONS}
            columns={props.columns}
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
