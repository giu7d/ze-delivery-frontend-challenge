import { Link } from 'react-router-dom'

import { useOrders } from '@/hooks/useOrders'
import { ProductsSection } from '@/components/partials/Sections'
import { ProductCheckout } from '@/components/fragments/Product/Checkout'

import { OrdersListItem } from './Item'

export function OrdersList() {
  const { orders, getOrderTotal } = useOrders()

  if (!orders.length) {
    return <div>Seu pedido está vazio. Insira um item no carrinho</div>
  }

  return (
    <>
      <ProductsSection>
        {orders.map(orderItem => (
          <OrdersListItem key={orderItem.id} orderItem={orderItem} />
        ))}
      </ProductsSection>
      <Link to="/orders">
        <ProductCheckout label="Finalizar pedido" price={getOrderTotal()} />
      </Link>
    </>
  )
}
