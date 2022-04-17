import { ThemeProvider } from 'styled-components'
import { BiCart, BiFilterAlt, BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'

import { GlobalStyle } from '@/styles/global'
import { Theme } from '@/themes'
import {
  BadgeButton,
  IconButton,
  PrimaryCheckoutButton,
  TextButton
} from './components/fragments/Buttons'
import {
  CheckBoxArea,
  CheckBoxOption,
  CheckBoxOptions
} from './components/fragments/CheckBoxes'
import {
  CurrentPriceTypography,
  FinalPriceTypography,
  LabelTypography,
  OldPriceTypography,
  PageTitleTypography
} from './components/fragments/Typographies'
import { Input, InputArea } from './components/fragments/Inputs'
import { Header } from './components/fragments/Header'
import {
  CheckoutSection,
  FilterSection,
  ProductsSection
} from './components/fragments/Sections'
import {
  Card,
  CardActions,
  CardBadge,
  CardContent,
  CardHeader,
  CardImage
} from './components/fragments/Cards'

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {/* MOBILE NAV */}
        <Header>
          <IconButton>
            <BiMenuAltLeft />
          </IconButton>
          <PageTitleTypography>Produtos</PageTitleTypography>
          <BadgeButton>
            <span>3</span>
            <BiCart className="icon" />
          </BadgeButton>
        </Header>

        {/* FILTER */}
        <FilterSection>
          <InputArea>
            <BiSearchAlt className="icon" />
            <Input type="text" placeholder="Buscar" />
          </InputArea>
          <IconButton>
            <BiFilterAlt />
          </IconButton>
        </FilterSection>
        {/* Products */}

        <ProductsSection>
          {Array(10)
            .fill('')
            .map((_el, index) => (
              <Card key={index}>
                <CardBadge>
                  -15<small>%</small>
                </CardBadge>
                <CardImage>
                  <img
                    src="https://via.placeholder.com/300x350"
                    alt="placeholder image"
                  />
                </CardImage>
                <div>
                  <CardHeader>
                    <h4 className="title">Brahma</h4>
                    <h5 className="description">Cerveja duplo malte 250ml</h5>
                  </CardHeader>
                  <CardContent>
                    <OldPriceTypography>R$ 99.99</OldPriceTypography>
                    <CurrentPriceTypography>
                      R$ 99<small>.99</small>
                    </CurrentPriceTypography>
                  </CardContent>

                  <CardActions>
                    <CheckBoxArea>
                      <LabelTypography>Escolha um pack</LabelTypography>
                      <CheckBoxOptions>
                        <CheckBoxOption>
                          15 <small>un.</small>
                        </CheckBoxOption>
                        <CheckBoxOption selected>
                          35 <small>un.</small>
                        </CheckBoxOption>
                        <CheckBoxOption>
                          60 <small>un.</small>
                        </CheckBoxOption>
                      </CheckBoxOptions>
                    </CheckBoxArea>
                    <TextButton>Adicionar</TextButton>
                  </CardActions>
                </div>
              </Card>
            ))}
        </ProductsSection>
        {/* BOTTOM CART */}
        <CheckoutSection>
          <PrimaryCheckoutButton>
            <span>Agendar entrega</span>
            <FinalPriceTypography>
              <small>R$</small>
              52
              <small>.99</small>
            </FinalPriceTypography>
          </PrimaryCheckoutButton>
        </CheckoutSection>
      </ThemeProvider>
    </>
  )
}
