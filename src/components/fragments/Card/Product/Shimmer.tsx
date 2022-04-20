import { CardContent, CardHeader } from '..'
import { Shimmer } from '../../Shimmer'
import { ProductCardImage, ProductCardWrapper } from './styles'

export function CardProductShimmer() {
  return (
    <ProductCardWrapper>
      <ProductCardImage>
        <Shimmer style={{ width: '100%', height: '100%' }} />
      </ProductCardImage>
      <div>
        <CardHeader>
          <Shimmer style={{ width: '30%', height: '1rem' }} />
          <Shimmer style={{ width: '80%', height: '2rem' }} />
        </CardHeader>
        <CardContent>
          <Shimmer style={{ width: '25%', height: '1rem' }} />
          <Shimmer style={{ width: '15%', height: '1rem' }} />
          <Shimmer style={{ width: '100%', height: '2rem' }} />
        </CardContent>
      </div>
    </ProductCardWrapper>
  )
}
