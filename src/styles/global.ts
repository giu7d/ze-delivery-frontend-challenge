import { rgba } from 'polished'
import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: ${({ theme }) => `${theme.font.size}px`};
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }

  html,
  body,
  #root {
    min-height: 100%;
  }
`

export const darkLinearGradient = (theme: DefaultTheme) => `
    linear-gradient(
      125deg,
      ${rgba(theme.colors.dark, 0.1)} 0%,
      ${rgba(theme.colors.dark, 0.05)} 100%
    );
  `

export const primaryLinearGradient = (theme: DefaultTheme) => `
    linear-gradient(
      90deg,
      ${theme.colors.primary} 0%,
      ${rgba(theme.colors.primary, 0.85)} 100%
    );
  `
