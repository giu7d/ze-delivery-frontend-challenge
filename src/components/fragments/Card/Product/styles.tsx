import styled from 'styled-components'

import { Card, CardBadge, CardImage } from '@/components/fragments/Card'

export const ProductCardWrapper = styled(Card)`
  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    width: auto;
  }
`

export const ProductCardBadge = styled(CardBadge)`
  @media screen and (min-width: 768px) {
    align-self: flex-end;
    border-radius: 0.1rem 1rem;
  }
`

export const ProductCardImage = styled(CardImage)`
  @media screen and (min-width: 768px) {
    min-width: auto;
    min-height: 250px;

    img {
      min-height: 100px;
    }
  }
`
