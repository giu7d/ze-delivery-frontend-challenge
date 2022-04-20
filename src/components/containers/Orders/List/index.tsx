import { useNavigate } from 'react-router-dom'
import { BiCart, BiTrash } from 'react-icons/bi'

import { useOrders } from '@/hooks/useOrders'
import { Warning } from '@/components/fragments/Warning'
import { Checkout } from '@/components/fragments/Checkout'
import { TextButton } from '@/components/fragments/Buttons'
import { SelectPackArea } from '@/components/fragments/Select/Pack/styles'
import {
  CurrentPriceTypography,
  LabelTypography
} from '@/components/fragments/Typographies'

import { OrdersListItem } from './Item'
import { OrdersCheckoutArea, OrdersListArea, OrdersActionsArea } from './styles'

export function OrdersList() {
  const { orders, getOrderTotal, resetOrders } = useOrders()

  const navigate = useNavigate()

  const handleSubmitOrder = () => {
    console.log('Pedido realizado')
    resetOrders()
    navigate('/')
  }

  if (!orders.length) {
    return (
      <OrdersListArea>
        <Warning>
          <BiCart className="warning-icon" />
          <h3 className="warning-title">Carrinho vazio</h3>
          <p className="warning-content">
            Seu pedido está vazio, insira um item no carrinho para continuar.
          </p>
        </Warning>
      </OrdersListArea>
    )
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
