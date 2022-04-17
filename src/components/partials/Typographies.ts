import { rgba } from 'polished'
import styled from 'styled-components'

export const OldPriceTypography = styled.small`
  color: ${({ theme }) => rgba(theme.colors.dark, 0.25)};
  font-size: 1rem;
  font-weight: 700;
  text-decoration-line: line-through;
`

export const CurrentPriceTypography = styled.span`
  color: ${({ theme }) => rgba(theme.colors.primary, 0.75)};
  font-size: 1.25rem;
  font-weight: 700;
`

export const FinalPriceTypography = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`

export const LabelTypography = styled.label`
  color: ${({ theme }) => rgba(theme.colors.dark, 0.75)};
  font-size: 0.75rem;
  text-transform: uppercase;
`

export const PageTitleTypography = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`
