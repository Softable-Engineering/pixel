import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsWildcards
  }

  export interface ColorsWildcards {
    primary: string

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
  }

  interface BackgroundColors {
    skeleton: string
  }
}
