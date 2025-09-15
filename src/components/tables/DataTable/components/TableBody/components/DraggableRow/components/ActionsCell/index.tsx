// External Libraries
import type React from 'react'
import type { DraggableAttributes } from '@dnd-kit/core'
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'

// Assets
import { DragIcon } from '@assets/icons/general/Drag'

// Styles
import { Checkbox, Container, ReorderContainer } from './styles'

interface Props {
  isSelected: boolean
  hasVerticalDivider: boolean
  hasHorizontalDivider: boolean
  attributes: DraggableAttributes
  listeners?: SyntheticListenerMap
  onToggleSelectedRow: () => void
}

export const ActionsCell: React.FC<Props> = ({
  listeners,
  attributes,
  isSelected,
  hasVerticalDivider,
  hasHorizontalDivider,
  onToggleSelectedRow
}) => {
  return (
    <Container>
      <ReorderContainer
        $hasVerticalDivider={hasVerticalDivider}
        $hasHorizontalDivider={hasHorizontalDivider}
        {...listeners}
        {...attributes}
      >
        <DragIcon />
      </ReorderContainer>

      <Checkbox
        type="checkbox"
        checked={isSelected}
        onChange={onToggleSelectedRow}
      />
    </Container>
  )
}
