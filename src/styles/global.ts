import { createGlobalStyle } from 'styled-components'

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
  }

  html,
  body,
  #root {
    height: 100%;
  }
`
