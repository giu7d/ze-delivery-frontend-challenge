import { Link } from 'react-router-dom'

import { useOrders } from '@/hooks/useOrders'
import { useProducts } from '@/hooks/useProducts'
import { useScrollListener } from '@/hooks/utils/useScrollListener'
import { CheckoutProduct } from '@/components/fragments/Checkout/Product'

import { ProductsListItem } from './Item'
import { ProductsListArea } from './styles'

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
      <ProductsListArea>
        {products.map(page =>
          page.map(product => (
            <ProductsListItem key={product.uuid} product={product} />
          ))
        )}
      </ProductsListArea>

      {!!getOrderTotal() && (
        <Link to="/orders">
          <CheckoutProduct label="Agendar entrega" price={getOrderTotal()} />
        </Link>
      )}
    </>
  )
}
