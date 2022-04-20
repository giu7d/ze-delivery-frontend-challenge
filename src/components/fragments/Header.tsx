import { ReactElement } from 'react'

import { Header } from '@/components/partials/Header'
import { IconButton } from '@/components/partials/Buttons'
import { useWindowSize } from '@/hooks/utils/useWindowSize'
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
  const { width } = useWindowSize()

  if (width > 768)
    return (
      <Header>
        <PageTitleTypography>{pageTitle}</PageTitleTypography>
        {renderRightAction || <IconButton />}
      </Header>
    )

  return (
    <Header>
      {renderLeftAction || <IconButton />}
      <PageTitleTypography>{pageTitle}</PageTitleTypography>
      {renderRightAction || <IconButton />}
    </Header>
  )
}
