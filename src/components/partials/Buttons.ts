import { rgba } from 'polished'
import styled from 'styled-components'

import { primaryLinearGradient, darkLinearGradient } from '@/styles/global'

export const BaseButton = styled.button`
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: ${({ theme }) => rgba(theme.colors.dark, 0.1)};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  align-items: center;
  background: none;
  border-radius: 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  outline: none;
  overflow: hidden;
  transition: 100ms opacity ease-out;
  user-select: none;

  &::-moz-focus-inner {
    border: none;
  }

  &:active {
    border-style: none;
    opacity: 0.5;
  }
`

export const BadgeButton = styled(BaseButton)`
  align-items: center;
  background: ${({ theme }) => rgba(theme.colors.dark, 0.05)};
  border-radius: 10rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  font-weight: 500;
  gap: 0.25rem;
  justify-content: center;
  min-height: auto;
  padding: 0.5rem 1rem;

  .icon {
    font-size: 1rem;
  }
`

export const IconButton = styled(BaseButton)`
  min-height: 3rem;
  min-width: 3rem;
  background: inherit;
`

export const TextButton = styled(BaseButton)`
  background: ${({ theme }) => darkLinearGradient(theme)};
  border-radius: 1rem;
  color: ${({ theme }) => rgba(theme.colors.dark, 0.75)};
  font-size: 1rem;
  font-weight: 600;
  min-height: 3rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  width: 100%;
  gap: 0.5rem;
`

export const PrimaryButton = styled(TextButton)`
  background: ${({ theme }) => primaryLinearGradient(theme)};
  box-shadow: 0px 4px 4px ${({ theme }) => rgba(theme.colors.light, 0.1)};
  color: ${({ theme }) => theme.colors.light};
`

export const PrimaryCheckoutButton = styled(PrimaryButton)`
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.1rem;
`
