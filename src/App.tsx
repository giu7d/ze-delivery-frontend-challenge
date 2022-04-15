import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global'
import { Theme } from '@/themes'

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main>Hello World</Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.div``
