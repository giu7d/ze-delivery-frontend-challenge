import { HeaderMobile } from '@/components/containers/Header'
import { ProductsList } from '@/components/containers/Products/List'
import { ProductFilter } from '@/components/containers/Products/Filter'

export function Home() {
  return (
    <>
      <HeaderMobile />
      <ProductFilter />
      <ProductsList />
    </>
  )
}
