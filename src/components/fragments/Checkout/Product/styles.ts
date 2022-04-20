import { rgba } from 'polished'
import styled from 'styled-components'

import { PrimaryButton } from '@/components/fragments/Buttons'

export const CheckoutSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  bottom: 0;
  padding: 1rem 1rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const CheckoutButton = styled(PrimaryButton)`
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.1rem;
`
