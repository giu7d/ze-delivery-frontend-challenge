import { FinalPriceTypography } from '@/components/fragments/Typographies'

import { CheckoutButton } from './styles'

type CheckoutProps = {
  label?: string
  price: number
}

export function Checkout({ label, price }: CheckoutProps) {
  const renderPrice = () => {
    const [decimal, precision] = price.toFixed(2).split('.')

    return (
      <FinalPriceTypography>
        <small>R$</small>
        {decimal}
        <small>.{precision}</small>
      </FinalPriceTypography>
    )
  }

  return (
    <CheckoutButton>
      {label && <span>{label}</span>}
      {renderPrice()}
    </CheckoutButton>
  )
}
