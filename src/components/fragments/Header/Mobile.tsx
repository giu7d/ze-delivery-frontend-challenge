import { BiCart, BiMenuAltLeft } from 'react-icons/bi'

import { BadgeButton, IconButton } from '@/components/partials/Buttons'
import { Header } from '@/components/partials/Header'
import { PageTitleTypography } from '@/components/partials/Typographies'

export function HeaderMobile() {
  return (
    <Header>
      <IconButton>
        <BiMenuAltLeft />
      </IconButton>
      <PageTitleTypography>Produtos</PageTitleTypography>
      <BadgeButton>
        <span>3</span>
        <BiCart className="icon" />
      </BadgeButton>
    </Header>
  )
}
