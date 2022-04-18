import { ProductPack } from './Product'

export interface OrderItem {
  id: string
  productId: string
  brand: string
  description: string
  image: string
  selectedPack: ProductPack
  quantity: number
  deliveryPeriod: string
}
