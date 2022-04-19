import { Image } from '@/components/fragments/Image'
import { ProductCard } from '@/components/fragments/Product/Card'
import { SelectNumber } from '@/components/fragments/Select/Number'
import {
  CheckboxArea,
  CheckboxOption,
  CheckboxOptions
} from '@/components/partials/Checkboxes'
import { LabelTypography } from '@/components/partials/Typographies'
import { useOrders } from '@/hooks/useOrders'
import { OrderItem } from '@/schemas/Order'

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
          <CheckboxArea>
            <LabelTypography>Pack selecionado</LabelTypography>
            <CheckboxOptions style={{ justifyContent: 'flex-start' }}>
              <CheckboxOption selected>
                {orderItem.selectedPack.value}
                <small>{orderItem.selectedPack.mesurementUnit}</small>
              </CheckboxOption>
            </CheckboxOptions>
          </CheckboxArea>
          <CheckboxArea>
            <LabelTypography>Quantidade</LabelTypography>
            <SelectNumber
              value={orderItem.quantity}
              onChange={handleQuantityChange}
            />
          </CheckboxArea>
        </>
      }
    />
  )
}
