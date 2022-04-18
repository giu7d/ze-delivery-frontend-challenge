import { PrimaryCheckoutButton } from '@/components/partials/Buttons'
import { CheckoutSection } from '@/components/partials/Sections'
import { FinalPriceTypography } from '@/components/partials/Typographies'

type ProductCheckoutProps = {
  label?: string
  price: number
}

export function ProductCheckout({ label, price }: ProductCheckoutProps) {
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
      <PrimaryCheckoutButton>
        {label && <span>{label}</span>}
        {renderPrice()}
      </PrimaryCheckoutButton>
    </CheckoutSection>
  )
}
