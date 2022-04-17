import { rgba } from 'polished'
import styled from 'styled-components'

export const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
`

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 6rem;
`

export const CheckoutSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  bottom: 0;
  padding: 1rem 1rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`
