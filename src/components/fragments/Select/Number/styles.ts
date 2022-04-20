import { darkLinearGradient } from '@/styles/global'
import { rgba } from 'polished'
import styled from 'styled-components'

export const SelectNumberArea = styled.div`
  align-items: center;
  background: ${({ theme }) => darkLinearGradient(theme)};
  border-radius: 1rem;
  color: ${({ theme }) => rgba(theme.colors.dark, 0.75)};
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 500;
  gap: 0.5rem;
  max-width: fit-content;
`
