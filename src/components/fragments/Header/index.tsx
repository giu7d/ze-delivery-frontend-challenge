import { ReactElement } from 'react'

import { IconButton } from '@/components/fragments/Buttons'
import { useWindowSize } from '@/hooks/utils/useWindowSize'
import { PageTitleTypography } from '@/components/fragments/Typographies'

import { HeaderArea } from './styles'

type HeaderProps = {
  pageTitle: string
  renderRightAction?: ReactElement
  renderLeftAction?: ReactElement
}

export function Header({
  pageTitle,
  renderLeftAction,
  renderRightAction
}: HeaderProps) {
  const { width } = useWindowSize()

  if (width > 768)
    return (
      <HeaderArea>
        <PageTitleTypography>{pageTitle}</PageTitleTypography>
        {renderRightAction || <IconButton />}
      </HeaderArea>
    )

  return (
    <HeaderArea>
      {renderLeftAction || <IconButton />}
      <PageTitleTypography>{pageTitle}</PageTitleTypography>
      {renderRightAction || <IconButton />}
    </HeaderArea>
  )
}
