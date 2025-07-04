// External Libraries
import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { flexRender, type Header } from '@tanstack/react-table'
import { useTheme } from 'styled-components'

// Components
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
              <svg
                width="13"
                height="13"
                fill="#ffffff"
                viewBox="0 0 13 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Drag icon</title>
                <path
                  fill="#7d7c78"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.73569 4.40065C5.23275 4.40065 5.63569 3.9977 5.63569 3.50065C5.63569 3.00359 5.23275 2.60065 4.73569 2.60065C4.23864 2.60065 3.83569 3.00359 3.83569 3.50065C3.83569 3.9977 4.23864 4.40065 4.73569 4.40065ZM7.93569 4.40065C8.43273 4.40065 8.83569 3.9977 8.83569 3.50065C8.83569 3.00359 8.43273 2.60065 7.93569 2.60065C7.43864 2.60065 7.03569 3.00359 7.03569 3.50065C7.03569 3.9977 7.43864 4.40065 7.93569 4.40065ZM8.83569 6.70065C8.83569 7.1977 8.43273 7.60065 7.93569 7.60065C7.43864 7.60065 7.03569 7.1977 7.03569 6.70065C7.03569 6.20359 7.43864 5.80065 7.93569 5.80065C8.43273 5.80065 8.83569 6.20359 8.83569 6.70065ZM4.73569 7.60065C5.23275 7.60065 5.63569 7.1977 5.63569 6.70065C5.63569 6.20359 5.23275 5.80065 4.73569 5.80065C4.23864 5.80065 3.83569 6.20359 3.83569 6.70065C3.83569 7.1977 4.23864 7.60065 4.73569 7.60065ZM8.83569 9.90065C8.83569 10.3977 8.43273 10.8006 7.93569 10.8006C7.43864 10.8006 7.03569 10.3977 7.03569 9.90065C7.03569 9.40361 7.43864 9.00065 7.93569 9.00065C8.43273 9.00065 8.83569 9.40361 8.83569 9.90065ZM4.73569 10.8006C5.23275 10.8006 5.63569 10.3977 5.63569 9.90065C5.63569 9.40361 5.23275 9.00065 4.73569 9.00065C4.23864 9.00065 3.83569 9.40361 3.83569 9.90065C3.83569 10.3977 4.23864 10.8006 4.73569 10.8006Z"
                />
              </svg>
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
