import { PrimaryCheckoutButton } from '@/components/partials/Buttons'
import { CheckoutSection } from '@/components/partials/Sections'
import { FinalPriceTypography } from '@/components/partials/Typographies'

export function ProductCheckout() {
  return (
    <CheckoutSection>
      <PrimaryCheckoutButton>
        <span>Agendar entrega</span>
        <FinalPriceTypography>
          <small>R$</small>
          52
          <small>.99</small>
        </FinalPriceTypography>
      </PrimaryCheckoutButton>
    </CheckoutSection>
  )
}
