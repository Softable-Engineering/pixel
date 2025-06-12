// External Libraries
import React, { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { flexRender, Header } from '@tanstack/react-table'
import { useTheme } from 'styled-components'

// Components
import { Icon } from '@components/toolkit/Icon'
import { Typography } from '@components/toolkit/Typography'

// Styles
import {
  Content,
  Container,
  ColumnHeader,
  ResizeHandle,
  ContainerDragIcon
} from './styles'

interface Props<T> {
  canResetResize: boolean
  header: Header<T, unknown>
  hasVerticalDivider: boolean
  enableResizeColumns: boolean
  enableColumnOrdering: boolean
}

const OPACITY_DRAGGING = 0.5

export const DraggableColumnHeader = <T,>({
  header,
  canResetResize,
  hasVerticalDivider,
  enableResizeColumns,
  enableColumnOrdering
}: Props<T>) => {
  // Constants
  const padding =
    typeof header.column.columnDef.header === 'string'
      ? '0 0 0 1rem'
      : '0 0 0 0.3rem'

  // States
  const [onHover, setHover] = useState(false)

  // Hooks
  const theme = useTheme()
  const { attributes, listeners, isDragging, transform, setNodeRef } =
    useSortable({ id: header.id })

  const style = {
    opacity: isDragging ? OPACITY_DRAGGING : 1,
    transform: transform ? `translateX(${transform.x}px)` : undefined
  }

  // Functions
  function resetSize() {
    if (!canResetResize) return
    header.column.resetSize()
  }

  return (
    <Container
      ref={setNodeRef}
      style={style}
      $hasVerticalDivider={hasVerticalDivider}
    >
      <ColumnHeader
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Content
          $maxWidth={header.column.getSize()}
          onDoubleClick={() => resetSize()}
          $padding={padding}
        >
          <Typography
            as="span"
            variant="b3"
            color={theme.colors.text.secondary}
          >
            {flexRender(header.column.columnDef.header, header.getContext()) ||
              '-'}
          </Typography>

          {enableColumnOrdering ? (
            <ContainerDragIcon {...listeners} {...attributes}>
              <Icon size="0.75rem" name="drag-vertical" />
            </ContainerDragIcon>
          ) : null}
        </Content>

        {onHover && enableResizeColumns ? (
          <ResizeHandle
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
          />
        ) : null}
      </ColumnHeader>
    </Container>
  )
}
