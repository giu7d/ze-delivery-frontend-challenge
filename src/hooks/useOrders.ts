import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { OrderItem } from '@/schemas/Order'
import { GlobalState, setOrders } from '@/redux/reducer'
import { useLocalStorage } from '@/hooks/utils/useLocalStorage'

export function useOrders() {
  const dispatch = useDispatch()
  const orders = useSelector<GlobalState, OrderItem[]>(state => state.orders)
  const { getStorageData, persistStorageData, clearStorageData } =
    useLocalStorage('orders')

  useEffect(() => {
    dispatch(setOrders(getStorageData()))
  }, [])

  useEffect(() => {
    if (orders.length) persistStorageData(orders)
  }, [orders])

  const addOrder = (order: OrderItem) => dispatch(setOrders([...orders, order]))

  const updateOrder = (order: OrderItem) => {
    const newOrders = orders.map(item => {
      if (item.id === order.id) return order

      return item
    })

    return dispatch(setOrders(newOrders))
  }

  const deleteOrder = (order: OrderItem) => {
    const filteredOrders = orders.filter(
      currentOrder => currentOrder.id !== order.id
    )

    return dispatch(setOrders(filteredOrders))
  }

  const resetOrders = () => {
    clearStorageData()
    return dispatch(setOrders([]))
  }

  const getOrderTotal = () => {
    return orders.reduce(
      (acc, { quantity, selectedPack }) =>
        acc + selectedPack.currentPrice * quantity,
      0
    )
  }

  return {
    orders,
    totalOfOrders: orders.length,
    addOrder,
    updateOrder,
    deleteOrder,
    resetOrders,
    getOrderTotal
  }
}
