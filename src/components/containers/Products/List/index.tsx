import { Link } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

import { useOrders } from '@/hooks/useOrders'
import { useProducts } from '@/hooks/useProducts'
import { Warning } from '@/components/fragments/Warning'
import { Checkout } from '@/components/fragments/Checkout'
import { useScrollListener } from '@/hooks/utils/useScrollListener'
import { CardProductShimmer } from '@/components/fragments/Card/Product/Shimmer'
import { OrdersListArea } from '@/components/containers/Orders/List/styles'

import { ProductsListItem } from './Item'
import { ProductsCheckoutArea, ProductsListArea } from './styles'

export function ProductsList() {
  const { products, isError, isLoading, loadMoreProducts } = useProducts()
  const { getOrderTotal } = useOrders()

  useScrollListener(() => loadMoreProducts())

  if (isError) {
    return (
      <OrdersListArea>
        <Warning>
          <FiAlertTriangle className="warning-icon" />
          <h3 className="warning-title">Erro</h3>
          <p className="warning-content">{isError.message}</p>
        </Warning>
      </OrdersListArea>
    )
  }

  if (isLoading) {
    return (
      <ProductsListArea>
        {Array(5)
          .fill('')
          .map((item, index) => (
            <CardProductShimmer key={`${index}-product-wrapper`} />
          ))}
      </ProductsListArea>
    )
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
          <ProductsCheckoutArea>
            <Checkout label="Agendar entrega" price={getOrderTotal()} />
          </ProductsCheckoutArea>
        </Link>
      )}
    </>
  )
}
