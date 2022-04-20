import { ReactElement } from 'react'

import {
  CurrentPriceTypography,
  OriginalPriceTypography
} from '@/components/fragments/Typographies'

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardImage
} from '@/components/fragments/Card'

type OrderCardProps = {
  brand: string
  description: string
  originalPrice: number
  currentPrice: number
  renderImage?: ReactElement
  renderActions?: ReactElement
}

const DISCOUNT_THRESHOLD = 15

export function OrderCard({
  originalPrice,
  currentPrice,
  brand,
  description,
  renderImage,
  renderActions
}: OrderCardProps) {
  const getDiscount = () => {
    return 100 - (currentPrice * 100) / originalPrice
  }

  const hasDiscount = () => getDiscount() > DISCOUNT_THRESHOLD

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
