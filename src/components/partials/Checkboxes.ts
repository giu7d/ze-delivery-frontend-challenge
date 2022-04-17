import { primaryLinearGradient } from '@/styles/global'
import { rgba } from 'polished'
import styled from 'styled-components'

import { BaseButton } from './Buttons'

export const CheckboxArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CheckboxOptions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const CheckboxOption = styled(BaseButton)<{ selected?: boolean }>`
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  color: ${({ theme }) => rgba(theme.colors.dark, 0.75)};
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.75rem;
  text-transform: capitalize;

  small {
    font-size: 0.8rem;
    font-weight: 500;
  }

  ${({ selected, theme }) =>
    selected &&
    `
      background: ${primaryLinearGradient(theme)};
      border-color: transparent;
      color: ${theme.colors.light};
    `}
`
