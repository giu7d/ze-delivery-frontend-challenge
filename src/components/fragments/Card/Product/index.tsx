import { ReactElement } from 'react'

import {
  CurrentPriceTypography,
  OriginalPriceTypography
} from '@/components/fragments/Typographies'

import {
  CardActions,
  CardContent,
  CardHeader
} from '@/components/fragments/Card'

import {
  ProductCardBadge,
  ProductCardImage,
  ProductCardWrapper
} from './styles'

type ProductCardProps = {
  brand: string
  description: string
  originalPrice: number
  currentPrice: number
  renderImage?: ReactElement
  renderActions?: ReactElement
}

const DISCOUNT_THRESHOLD = 15

export function ProductCard({
  originalPrice,
  currentPrice,
  brand,
  description,
  renderImage,
  renderActions
}: ProductCardProps) {
  const getDiscount = () => {
    return 100 - (currentPrice * 100) / originalPrice
  }

  const hasDiscount = () => getDiscount() > DISCOUNT_THRESHOLD

  const renderDiscount = () => {
    if (!hasDiscount()) return

    return (
      <ProductCardBadge>
        -{getDiscount().toFixed(0)}
        <small>%</small>
      </ProductCardBadge>
    )
  }

  const renderPrice = () => {
    const [decimal, precision] = currentPrice.toString().split('.')

    return (
      <CurrentPriceTypography discount={hasDiscount()}>
        R$ {decimal}
        {precision && <small>.{precision}</small>}
      </CurrentPriceTypography>
    )
  }

  return (
    <ProductCardWrapper>
      {renderDiscount()}
      {renderImage && <ProductCardImage>{renderImage}</ProductCardImage>}
      <div>
        <CardHeader>
          <h4 className="title">{brand}</h4>
          <h5 className="description">{description}</h5>
        </CardHeader>
        <CardContent>
          {hasDiscount() && (
            <OriginalPriceTypography>
              R$ {originalPrice}
            </OriginalPriceTypography>
          )}
          {renderPrice()}
        </CardContent>
        {renderActions && <CardActions>{renderActions}</CardActions>}
      </div>
    </ProductCardWrapper>
  )
}
