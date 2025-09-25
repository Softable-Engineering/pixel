/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Not needed> */

// External Libraries
import { Fragment } from 'react/jsx-runtime'

// Components
import { GroupTitle } from './components/GroupTitle'
import { ActionItem } from './components/ActionItem'
import { BaseDropdown } from '@components/commons/structure/BaseDropdown'

// Types
import type { ActionsPanelProps, DropdownAction } from './types'

// Styles
import { Container, Divider, GroupWrapper } from './styles'

export const ActionsPanel = <T extends string>({
  isOpen,
  header,
  options,
  elementId,
  wrapperId,
  referenceRef,
  onClose,
  onClick,
  ...rest
}: ActionsPanelProps<T>) => {
  // Functions
  function renderContent() {
    return options.map((group, index) => (
      <Fragment key={`group-${index}`}>
        <GroupWrapper>
          {group.title ? <GroupTitle title={group.title} /> : null}

          {group.actions.map(renderItem)}
        </GroupWrapper>

        {index !== options.length - 1 ? <Divider /> : null}
      </Fragment>
    ))
  }

  function renderItem(item: DropdownAction<T>) {
    return <ActionItem key={item.id} action={item} onClick={onClick} />
  }
  return (
    <BaseDropdown
      offsetY={4}
      isOpen={isOpen}
      wrapperId={wrapperId}
      placement="bottom-end"
      referenceRef={referenceRef}
      onClose={onClose}
      {...rest}
    >
      <Container id={elementId}>
        {header}

        {renderContent()}
      </Container>
    </BaseDropdown>
  )
}
