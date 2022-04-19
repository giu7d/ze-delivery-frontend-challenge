import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BiCheck } from 'react-icons/bi'

import { Product } from '@/schemas/Product'
import { useOrders } from '@/hooks/useOrders'
import { Image } from '@/components/fragments/Image'
import { ProductCard } from '@/components/fragments/Product/Card'
import { PrimaryButton, TextButton } from '@/components/partials/Buttons'
import { ProductPackSelection } from '@/components/fragments/Product/PackSelection'

type ProductsListItemProps = {
  product: Product
}

export function ProductsListItem({ product }: ProductsListItemProps) {
  const [selectedPack, setSelectedPack] = useState(product.packs[0])
  const { orders, addOrder } = useOrders()

  const handleAddProduct = () => {
    addOrder({
      ...product,
      selectedPack,
      quantity: 1,
      deliveryPeriod: '',
      productId: product.id,
      id: uuidv4()
    })
  }

  const isSelectedOrderInOrders = () => {
    return !!orders.find(order => order.selectedPack === selectedPack)
  }

  return (
    <ProductCard
      brand={product.brand}
      description={product.description}
      originalPrice={selectedPack.originalPrice}
      currentPrice={selectedPack.currentPrice}
      renderImage={
        <Image
          src={product.image}
          alt={`Imagem do produto ${product.description}`}
        />
      }
      renderActions={
        <>
          <ProductPackSelection
            label="Escolha um pack"
            items={product.packs}
            selectedItem={selectedPack}
            onClick={setSelectedPack}
          />

          {!isSelectedOrderInOrders() ? (
            <TextButton onClick={handleAddProduct}>Adicionar</TextButton>
          ) : (
            <PrimaryButton>
              Adicionado
              <BiCheck className="icon" />
            </PrimaryButton>
          )}
        </>
      }
    />
  )
}
