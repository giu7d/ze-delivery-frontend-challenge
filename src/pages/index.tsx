import { HeaderMobile } from '@/components/fragments/Header'
import { ProductsList } from '@/components/containers/Products/List'
import { ProductFilter } from '@/components/containers/Products/Filter'
import { Link } from 'react-router-dom'
import { BadgeButton } from '@/components/partials/Buttons'
import { BiCart } from 'react-icons/bi'
import { useOrders } from '@/hooks/useOrders'

export function Home() {
  const { totalOfOrders } = useOrders()

  return (
    <>
      <HeaderMobile
        pageTitle="Produtos"
        renderRightAction={
          <Link to="/orders">
            <BadgeButton>
              <span>{totalOfOrders}</span>
              <BiCart className="icon" />
            </BadgeButton>
          </Link>
        }
      />
      <ProductFilter />
      <ProductsList />
    </>
  )
}
