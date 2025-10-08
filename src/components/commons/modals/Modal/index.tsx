// External Libraries
import type React from 'react'
import type { PropsWithChildren } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Portal } from '../Portal'
import { Icon } from '@components/toolkit/Icon'
import { Typography } from '@components/toolkit/Typography'

// Utils
import {
  MODAL_ANIMATION_PRESETS,
  BACKDROP_ANIMATION_PRESETS
} from './constants'

// Styles
import { BackDrop, CloseButton, Container, Content, Header } from './styles'

interface Props {
  open: boolean
  title?: string
  zIndex?: number
  wrapperId?: string
  hideHeader?: boolean
  hideCloseButton?: boolean
  onClose: () => void
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  open,
  title,
  zIndex,
  children,
  wrapperId,
  hideHeader,
  hideCloseButton,
  onClose
}) => {
  return (
    <AnimatePresence>
      {open ? (
        <Portal wrapperId={wrapperId ?? 'portal-modal'}>
          <BackDrop
            $zIndex={zIndex}
            onClick={onClose}
            {...BACKDROP_ANIMATION_PRESETS}
          />

          <Container
            $zIndex={zIndex}
            aria-modal="true"
            {...MODAL_ANIMATION_PRESETS}
          >
            <Content>
              {!hideHeader ? (
                <Header>
                  <Typography variant="h4" fontSize="1rem" fontWeight="medium">
                    {title || ''}
                  </Typography>

                  {!hideCloseButton ? (
                    <CloseButton type="button" onClick={onClose}>
                      <Icon src="/general/closeBlack.svg" />
                    </CloseButton>
                  ) : null}
                </Header>
              ) : null}

              {children}
            </Content>
          </Container>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}
