import { Link } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import { IconButton } from '@/components/partials/Buttons'
import { HeaderMobile } from '@/components/fragments/Header'
import { OrdersList } from '@/components/containers/Orders/List'

export function Orders() {
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
        pageTitle="Items"
      />
      <OrdersList />
    </>
  )
}
