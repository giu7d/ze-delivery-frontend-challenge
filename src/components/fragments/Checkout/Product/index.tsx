import { FinalPriceTypography } from '@/components/fragments/Typographies'

import { CheckoutButton, CheckoutSection } from './styles'

type ProductCheckoutProps = {
  label?: string
  price: number
}

export function CheckoutProduct({ label, price }: ProductCheckoutProps) {
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
    <CheckoutSection>
      <CheckoutButton>
        {label && <span>{label}</span>}
        {renderPrice()}
      </CheckoutButton>
    </CheckoutSection>
  )
}
