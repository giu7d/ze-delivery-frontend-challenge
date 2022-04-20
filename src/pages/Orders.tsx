import { Link } from 'react-router-dom'
import { BiChevronLeft, BiTrash } from 'react-icons/bi'

import { IconButton } from '@/components/partials/Buttons'
import { HeaderMobile } from '@/components/fragments/Header'
import { OrdersList } from '@/components/containers/Orders/List'
import { useOrders } from '@/hooks/useOrders'

export function Orders() {
  const { resetOrders } = useOrders()

  return (
    <>
      <HeaderMobile
        renderLeftAction={
          <Link to="/">
            <IconButton>
              <BiChevronLeft />
            </IconButton>
          </Link>
        }
        renderRightAction={
          <IconButton onClick={resetOrders}>
            <BiTrash />
          </IconButton>
        }
        pageTitle="Items"
      />
      <OrdersList />
    </>
  )
}
