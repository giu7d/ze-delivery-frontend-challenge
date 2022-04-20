import { Link } from 'react-router-dom'

import { useOrders } from '@/hooks/useOrders'
import { CheckoutProduct } from '@/components/fragments/Checkout/Product'

import { OrdersListItem } from './Item'
import { OrdersListArea } from './styles'

export function OrdersList() {
  const { orders, getOrderTotal } = useOrders()

  if (!orders.length) {
    return <div>Seu pedido está vazio. Insira um item no carrinho</div>
  }

  return (
    <>
      <OrdersListArea>
        {orders.map(orderItem => (
          <OrdersListItem key={orderItem.id} orderItem={orderItem} />
        ))}
      </OrdersListArea>
      <Link to="/orders">
        <CheckoutProduct label="Forma de pagamento" price={getOrderTotal()} />
      </Link>
    </>
  )
}
