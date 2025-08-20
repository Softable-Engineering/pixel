// External Libraries
import { type PropsWithChildren, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Services
import { createWrapperAndAppendToBody } from './services'

interface Props {
  wrapperId?: string
}

export const Portal: React.FC<PropsWithChildren<Props>> = ({
  children,
  wrapperId = 'reactPortal'
}) => {
  // States
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false

    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (!wrapperElement) return null

  return createPortal(children, wrapperElement)
}
