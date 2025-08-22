// External Libraries
import { useEffect, useState } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import { Locale, MaskModule, MaskType } from 'src/services/MaskModule'

// Types
import type { Option } from '../../types'

// Styles
import { Container, Form, Input } from './styles'

interface Props<T> {
  value?: string
  disabled: boolean
  placeholder?: string
  visibleListModal: boolean
  customValueSelected: boolean
  selectedOption: Option<T> | undefined
  onClick: () => void
  onChange: (value: T) => void
}

export const OptionDisplay = <T,>(props: Props<T>) => {
  // Constants
  const { selectedOption, customValueSelected, onClick, onChange } = props

  // States
  const [customValue, setCustomValue] = useState(props.value)

  // UseEffects
  useEffect(() => {
    const date = props.value ? new Date(props.value) : null
    const formattedDate = date
      ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      : ''
    setCustomValue(formattedDate)
  }, [props.value])

  // Functions
  function renderValue() {
    if (customValueSelected)
      return (
        <Form onSubmit={onSubmit}>
          <Input
            value={customValue}
            disabled={props.disabled}
            placeholder={props.placeholder || '00/00/0000'}
            onBlur={onBlur}
            onChange={handleChangeValue}
          />
        </Form>
      )

    return (
      <Typography variant="b2" color="var(--text-color)">
        {selectedOption?.label ?? 'Selecione uma opção'}
      </Typography>
    )
  }

  function handleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const mask = MaskModule.getMask(Locale.BR, MaskType.DATE)
    const maskedValue = mask?.format(value as string)

    return setCustomValue(maskedValue || '')
  }

  function getDate() {
    try {
      if (!customValue || customValue.length !== 10) return null
      const [day, month, year] = customValue.split('/')
      const date = new Date(
        `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      )

      if (Number.isNaN(date.getTime())) return null

      const newDate = new Date(
        date.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
      ).toISOString() as T

      return newDate
    } catch {
      return null
    }
  }

  function onBlur() {
    const newDate = getDate()
    if (newDate && newDate !== '') return onChange(newDate)

    if (!!props.value) return onChange(props.value as T)
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onBlur()
  }

  function handleOpen() {
    if (props.disabled) return

    onClick()
  }

  return (
    <Container $visible={props.visibleListModal} onClick={handleOpen}>
      {renderValue()}

      <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
        <title>Arrow icon</title>
        <path d="M4 6.5L8 10.5L12 6.5" stroke="#7D7C78" />
      </svg>
    </Container>
  )
}
