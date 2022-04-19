import { ReactElement } from 'react'

import { Header } from '@/components/partials/Header'
import { IconButton } from '@/components/partials/Buttons'
import { PageTitleTypography } from '@/components/partials/Typographies'

type HeaderMobileProps = {
  pageTitle: string
  renderRightAction?: ReactElement
  renderLeftAction?: ReactElement
}

export function HeaderMobile({
  pageTitle,
  renderLeftAction,
  renderRightAction
}: HeaderMobileProps) {
  return (
    <Header>
      {renderLeftAction || <IconButton />}
      <PageTitleTypography>{pageTitle}</PageTitleTypography>
      {renderRightAction || <IconButton />}
    </Header>
  )
}
