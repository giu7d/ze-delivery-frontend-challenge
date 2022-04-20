import { useNavigate } from 'react-router-dom'
import { BiTrash } from 'react-icons/bi'

import { useOrders } from '@/hooks/useOrders'
import { Checkout } from '@/components/fragments/Checkout'
import { TextButton } from '@/components/fragments/Buttons'

import { OrdersListItem } from './Item'
import { OrdersCheckoutArea, OrdersListArea, OrdersActionsArea } from './styles'
import { SelectPackArea } from '@/components/fragments/Select/Pack/styles'
import {
  CurrentPriceTypography,
  LabelTypography
} from '@/components/fragments/Typographies'

export function OrdersList() {
  const { orders, getOrderTotal, resetOrders } = useOrders()

  const navigate = useNavigate()

  const handleSubmitOrder = () => {
    console.log('Pedido realizado')
    resetOrders()
    navigate('/')
  }

  if (!orders.length) {
    return <div>Seu pedido está vazio. Insira um item no carrinho</div>
  }

  return (
    <>
      <OrdersListArea>
        <OrdersActionsArea>
          <SelectPackArea>
            <LabelTypography>Total</LabelTypography>
            <CurrentPriceTypography discount>
              R$ {getOrderTotal().toFixed(2)}
            </CurrentPriceTypography>
          </SelectPackArea>

          <TextButton onClick={resetOrders}>
            <BiTrash /> Remover todos
          </TextButton>
        </OrdersActionsArea>
        {orders.map(orderItem => (
          <OrdersListItem key={orderItem.id} orderItem={orderItem} />
        ))}
      </OrdersListArea>
      <OrdersCheckoutArea onClick={handleSubmitOrder}>
        <Checkout label="Finalizar pedido" price={getOrderTotal()} />
      </OrdersCheckoutArea>
    </>
  )
}
