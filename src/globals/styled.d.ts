import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsWildcards
  }

  export interface ColorsWildcards {
    primary: string

    scrollbar: string

    text: TextColors
    border: BorderColors
    background: BackgroundColors
  }

  interface TextColors {
    primary: string
    secondary: string
  }

  interface BorderColors {
    primary: string
    secondary: string
    tertiary: string
  }

  interface BackgroundColors {
    skeleton: string

    primary: string
    secondary: string
    tertiary: string

    hover: string
    hover_secondary: string
  }
}
