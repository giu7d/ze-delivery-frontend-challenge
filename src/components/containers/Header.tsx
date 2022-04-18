import { BiCart, BiMenuAltLeft } from 'react-icons/bi'

import { BadgeButton, IconButton } from '@/components/partials/Buttons'
import { Header } from '@/components/partials/Header'
import { PageTitleTypography } from '@/components/partials/Typographies'
import { useOrders } from '@/hooks/useOrders'

export function HeaderMobile() {
  const { totalOfOrders } = useOrders()

  return (
    <Header>
      <IconButton>
        <BiMenuAltLeft />
      </IconButton>
      <PageTitleTypography>Produtos</PageTitleTypography>
      <BadgeButton>
        <span>{totalOfOrders}</span>
        <BiCart className="icon" />
      </BadgeButton>
    </Header>
  )
}
