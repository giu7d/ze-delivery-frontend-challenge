import { Link } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'

import { useOrders } from '@/hooks/useOrders'
import { Header } from '@/components/fragments/Header'
import { BadgeButton } from '@/components/fragments/Buttons'
import { ProductsList } from '@/components/containers/Products/List'
import { ProductFilter } from '@/components/containers/Products/Filter'

export function Home() {
  const { totalOfOrders } = useOrders()

  return (
    <>
      <Header
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
