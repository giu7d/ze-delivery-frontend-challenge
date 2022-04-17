import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@/themes'
import { Router } from '@/Router'
import { store } from '@/redux/store'
import { GlobalStyle } from '@/styles/global'

const entry = document.getElementById('root')

const root = createRoot(entry!)

root.render(
  <ThemeProvider theme={Theme}>
    <ReduxProvider store={store}>
      <GlobalStyle />
      <Router />
    </ReduxProvider>
  </ThemeProvider>
)
