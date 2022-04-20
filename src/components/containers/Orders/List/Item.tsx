import { OrderItem } from '@/schemas/Order'
import { useOrders } from '@/hooks/useOrders'
import { Image } from '@/components/fragments/Image'
import { ProductCard } from '@/components/fragments/Card/Product'
import { SelectNumber } from '@/components/fragments/Select/Number'
import { LabelTypography } from '@/components/fragments/Typographies'
import {
  SelectPackArea,
  SelectPackOptions,
  SelectPackOption
} from '@/components/fragments/Select/Pack/styles'

type OrdersListItemProps = {
  orderItem: OrderItem
}

export function OrdersListItem({ orderItem }: OrdersListItemProps) {
  const { updateOrder, deleteOrder } = useOrders()

  const handleQuantityChange = (value: number) => {
    if (value <= 0) return deleteOrder(orderItem)

    return updateOrder({ ...orderItem, quantity: value })
  }

  return (
    <ProductCard
      brand={orderItem.brand}
      description={orderItem.description}
      originalPrice={orderItem.selectedPack.originalPrice}
      currentPrice={orderItem.selectedPack.currentPrice}
      renderImage={
        <Image
          src={orderItem.image}
          alt={`Imagem do produto ${orderItem.description}`}
        />
      }
      renderActions={
        <>
          <SelectPackArea>
            <LabelTypography>Pack selecionado</LabelTypography>
            <SelectPackOptions style={{ justifyContent: 'flex-start' }}>
              <SelectPackOption selected>
                {orderItem.selectedPack.value}
                <small>{orderItem.selectedPack.mesurementUnit}</small>
              </SelectPackOption>
            </SelectPackOptions>
          </SelectPackArea>
          <SelectPackArea>
            <LabelTypography>Quantidade</LabelTypography>
            <SelectNumber
              value={orderItem.quantity}
              onChange={handleQuantityChange}
            />
          </SelectPackArea>
        </>
      }
    />
  )
}
