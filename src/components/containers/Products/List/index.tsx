import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

import { useProducts } from '@/hooks/useProducts'
import { IconButton } from '@/components/partials/Buttons'
import { Input, InputArea } from '@/components/partials/Inputs'
import { ProductCheckout } from '@/components/fragments/Product/Checkout'
import { FilterSection, ProductsSection } from '@/components/partials/Sections'

import { ProductsListItem } from './Item'

export function ProductsList() {
  const { products, isError, isLoading } = useProducts(1, 100)

  if (isError) {
    return <div>{isError.message}</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <>
      <FilterSection>
        <InputArea>
          <BiSearchAlt className="icon" />
          <Input type="text" placeholder="Buscar" />
        </InputArea>
        <IconButton>
          <BiFilterAlt />
        </IconButton>
      </FilterSection>
      <ProductsSection>
        {products.map(product => (
          <ProductsListItem key={product.uuid} product={product} />
        ))}
      </ProductsSection>
      <ProductCheckout />
    </>
  )
}
