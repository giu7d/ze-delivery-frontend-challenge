import { ReactElement } from 'react'

import {
  CurrentPriceTypography,
  OriginalPriceTypography
} from '@/components/partials/Typographies'
import {
  Card,
  CardActions,
  CardBadge,
  CardContent,
  CardHeader,
  CardImage
} from '@/components/partials/Cards'

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
      <CardBadge>
        -{getDiscount().toFixed(0)}
        <small>%</small>
      </CardBadge>
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
    <Card>
      {renderDiscount()}
      {renderImage && <CardImage>{renderImage}</CardImage>}
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
    </Card>
  )
}
