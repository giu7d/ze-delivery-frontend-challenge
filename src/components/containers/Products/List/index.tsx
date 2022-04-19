import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

import { useOrders } from '@/hooks/useOrders'
import { useProducts } from '@/hooks/useProducts'
import { IconButton } from '@/components/partials/Buttons'
import { useScrollListener } from '@/hooks/useScrollListener'
import { Input, InputArea } from '@/components/partials/Inputs'
import { ProductCheckout } from '@/components/fragments/Product/Checkout'
import { FilterSection, ProductsSection } from '@/components/partials/Sections'

import { ProductsListItem } from './Item'

export function ProductsList() {
  const { products, isError, isLoading, loadMoreProducts } = useProducts()
  const { getOrderTotal } = useOrders()

  useScrollListener(() => loadMoreProducts())

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
        {products.map(page =>
          page.map(product => (
            <ProductsListItem key={product.uuid} product={product} />
          ))
        )}
      </ProductsSection>
      <ProductCheckout label="Agendar entrega" price={getOrderTotal()} />
    </>
  )
}
