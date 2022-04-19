import { useDispatch, useSelector } from 'react-redux'

import { OrderItem } from '@/schemas/Order'
import { GlobalState, setOrders } from '@/redux/reducer'

export function useOrders() {
  const orders = useSelector<GlobalState, OrderItem[]>(state => state.orders)
  const dispatch = useDispatch()

  const getOrderTotal = () =>
    orders.reduce((acc, current) => {
      return acc + current.selectedPack.currentPrice * current.quantity
    }, 0)

  const addOrder = (order: OrderItem) => dispatch(setOrders([...orders, order]))

  const updateOrder = (order: OrderItem) => {
    const orderIndex = orders.findIndex(
      currentOrder => currentOrder.id === order.id
    )

    if (orderIndex === -1) return

    const updatedOrder = [...orders]

    updatedOrder[orderIndex] = order

    dispatch(setOrders(updatedOrder))
  }

  const deleteOrder = (order: OrderItem) => {
    const filteredOrders = orders.filter(
      currentOrder => currentOrder.id !== order.id
    )

    dispatch(setOrders(filteredOrders))
  }

  return {
    orders,
    totalOfOrders: orders.length,
    addOrder,
    updateOrder,
    deleteOrder,
    getOrderTotal
  }
}
