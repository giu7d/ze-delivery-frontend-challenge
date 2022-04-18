import { ReactElement } from 'react'

import {
  CurrentPriceTypography,
  OldPriceTypography
} from '@/components/partials/Typographies'
import {
  Card,
  CardActions,
  CardBadge,
  CardContent,
  CardHeader,
  CardImage
} from '@/components/partials/Cards'
import { calculateDiscount } from '@/utils'

type ProductCardProps = {
  brand: string
  description: string
  oldPrice?: number
  currentPrice: number
  renderImage?: ReactElement
  renderActions?: ReactElement
}

export function ProductCard({
  oldPrice,
  currentPrice,
  brand,
  description,
  renderImage,
  renderActions
}: ProductCardProps) {
  const renderPrice = () => {
    const [decimal, precision = ''] = currentPrice.toString().split('.')

    return (
      <CurrentPriceTypography>
        R$ {decimal}
        <small>.{precision}</small>
      </CurrentPriceTypography>
    )
  }

  return (
    <Card>
      <CardBadge>
        {calculateDiscount(currentPrice, oldPrice || currentPrice)}
        <small>%</small>
      </CardBadge>
      {renderImage && <CardImage>{renderImage}</CardImage>}
      <div>
        <CardHeader>
          <h4 className="title">{brand}</h4>
          <h5 className="description">{description}</h5>
        </CardHeader>
        <CardContent>
          {oldPrice && <OldPriceTypography>R$ {oldPrice}</OldPriceTypography>}
          {renderPrice()}
        </CardContent>
        {renderActions && <CardActions>{renderActions}</CardActions>}
      </div>
    </Card>
  )
}
