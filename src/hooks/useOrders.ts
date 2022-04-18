import { useDispatch, useSelector } from 'react-redux'

import { OrderItem } from '@/schemas/Order'
import { GlobalState, setOrders } from '@/redux/reducer'

export function useOrders() {
  const orders = useSelector<GlobalState, OrderItem[]>(state => state.orders)
  const dispatch = useDispatch()

  const addOrder = (order: OrderItem) => dispatch(setOrders([...orders, order]))

  const getOrderTotal = () =>
    orders.reduce((acc, current) => {
      return acc + current.selectedPack.currentPrice * current.quantity
    }, 0)

  return { orders, totalOfOrders: orders.length, addOrder, getOrderTotal }
}
