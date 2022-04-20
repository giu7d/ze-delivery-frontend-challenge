import { To, useNavigate } from 'react-router-dom'
import { BiChevronLeft, BiTrash } from 'react-icons/bi'

import { IconButton } from '@/components/partials/Buttons'
import { HeaderMobile } from '@/components/fragments/Header'
import { OrdersList } from '@/components/containers/Orders/List'
import { useOrders } from '@/hooks/useOrders'

export function Orders() {
  const navigate = useNavigate()
  const { resetOrders } = useOrders()

  const goBack = () => {
    navigate(-1 as To, { replace: true })
  }

  return (
    <>
      <HeaderMobile
        renderLeftAction={
          <IconButton onClick={goBack}>
            <BiChevronLeft />
          </IconButton>
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
