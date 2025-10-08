// External Libraries
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Not needed> */
import type React from 'react'
import {
  useState,
  useEffect,
  useContext,
  createContext,
  type PropsWithChildren
} from 'react'

// Utils
import { lockScroll } from '@utils/functions'

// Types
import type { ModalContextData, ModalRef } from './types'

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  // States
  const [openModals, setOpenModals] = useState<React.RefObject<ModalRef>[]>([])

  // Functions
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && openModals.length > 0) {
      const lastModalRef = openModals[openModals.length - 1]
      if (lastModalRef?.current) lastModalRef.current?.close()
    }
  }

  function openModal(modalRef: React.RefObject<ModalRef>) {
    setOpenModals(prev => [...prev, modalRef])
  }

  function closeModal() {
    setOpenModals(prevModals => prevModals.slice(0, -1))
  }

  useEffect(() => {
    lockScroll(!!openModals.length)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openModals])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

function useModalContext(): ModalContextData {
  const context = useContext(ModalContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useModalContext must be within a ContextProvider')
  }

  return context
}

export { ModalContextProvider, useModalContext }
