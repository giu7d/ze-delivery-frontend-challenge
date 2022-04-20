import { To, useNavigate } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import { IconButton } from '@/components/fragments/Buttons'
import { Header } from '@/components/fragments/Header'
import { OrdersList } from '@/components/containers/Orders/List'

export function Orders() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1 as To, { replace: true })
  }

  return (
    <>
      <Header
        renderLeftAction={
          <IconButton onClick={goBack}>
            <BiChevronLeft />
          </IconButton>
        }
        pageTitle="Items"
      />
      <OrdersList />
    </>
  )
}
