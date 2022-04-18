import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Product } from '@/schemas/Product'
import { TextButton } from '@/components/partials/Buttons'
import { ProductCard } from '@/components/fragments/Product/Card'
import { ProductPackSelection } from '@/components/fragments/Product/PackSelection'
import { useOrders } from '@/hooks/useOrders'

type ProductsListItemProps = {
  product: Product
}

export function ProductsListItem({ product }: ProductsListItemProps) {
  const [selectedPack, setSelectedPack] = useState(product.packs[0])

  const { addOrder } = useOrders()

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

  return (
    <ProductCard
      key={product.uuid}
      brand={product.brand}
      description={product.description}
      originalPrice={selectedPack.originalPrice}
      currentPrice={selectedPack.currentPrice}
      renderImage={<img src={product.image} alt="placeholder image" />}
      renderActions={
        <>
          <ProductPackSelection
            label="Escolha um pack"
            items={product.packs}
            selectedItem={selectedPack}
            onClick={setSelectedPack}
          />
          <TextButton onClick={handleAddProduct}>Adicionar</TextButton>
        </>
      }
    />
  )
}
