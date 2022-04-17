import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global'
import { Theme } from '@/themes'
import { ProductsList } from '@/components/containers/Products/List'
import { HeaderMobile } from '@/components/fragments/Header/Mobile'

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HeaderMobile />
        <ProductsList />
      </ThemeProvider>
    </>
  )
}
