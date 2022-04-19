import { Link } from 'react-router-dom'

import { useOrders } from '@/hooks/useOrders'
import { useProducts } from '@/hooks/useProducts'
import { ProductsSection } from '@/components/partials/Sections'
import { useScrollListener } from '@/hooks/utils/useScrollListener'
import { ProductCheckout } from '@/components/fragments/Product/Checkout'

import { ProductsListItem } from './Item'

export function ProductsList() {
  const { products, isError, isLoading, loadMoreProducts } = useProducts()
  const { getOrderTotal } = useOrders()

  useScrollListener(() => loadMoreProducts())

  if (isError) {
    return <div>{isError.message}</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <>
      <ProductsSection>
        {products.map(page =>
          page.map(product => (
            <ProductsListItem key={product.uuid} product={product} />
          ))
        )}
      </ProductsSection>
      <Link to="/orders">
        <ProductCheckout label="Agendar entrega" price={getOrderTotal()} />
      </Link>
    </>
  )
}
