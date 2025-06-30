// Bibliotecas Externas
import React, { createContext, type PropsWithChildren, useContext } from 'react'

export interface TypographyContextData {
  loading: boolean
}

const TypographyContext = createContext({} as TypographyContextData)

const TypographyProvider: React.FC<
  PropsWithChildren<TypographyContextData>
> = ({ children, loading }) => {
  return (
    <TypographyContext.Provider value={{ loading }}>
      {children}
    </TypographyContext.Provider>
  )
}

function useTypography(): TypographyContextData {
  const context = useContext(TypographyContext)
  return context
}

export { TypographyProvider, useTypography }
