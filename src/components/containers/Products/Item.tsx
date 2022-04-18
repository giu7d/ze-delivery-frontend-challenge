import { useState } from 'react'

import { Product } from '@/schemas/Product'
import { TextButton } from '@/components/partials/Buttons'
import { ProductCard } from '@/components/fragments/Product/Card'
import { ProductPackSelection } from '@/components/fragments/Product/PackSelection'

type ProductsListItemProps = {
  product: Product
}

export function ProductsListItem({ product }: ProductsListItemProps) {
  const [selectedPack, setSelectedPack] = useState(product.packs[0])

  return (
    <ProductCard
      key={product.uuid}
      brand={product.brand}
      description={product.description}
      oldPrice={selectedPack.originalPrice}
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
          <TextButton>Adicionar</TextButton>
        </>
      }
    />
  )
}
