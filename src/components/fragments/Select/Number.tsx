import { IconButton } from '@/components/partials/Buttons'
import { darkLinearGradient } from '@/styles/global'
import { rgba } from 'polished'
import { BiMinus, BiPlus } from 'react-icons/bi'
import styled from 'styled-components'

type SelectNumberProps = {
  value?: number
  onChange: (value: number) => void
}

export function SelectNumber({ value = 0, onChange }: SelectNumberProps) {
  return (
    <SelectNumberWrapper>
      <IconButton onClick={() => onChange(value - 1)}>
        <BiMinus />
      </IconButton>
      <span>{value}</span>
      <IconButton onClick={() => onChange(value + 1)}>
        <BiPlus />
      </IconButton>
    </SelectNumberWrapper>
  )
}

const SelectNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => darkLinearGradient(theme)};
  color: ${({ theme }) => rgba(theme.colors.dark, 0.75)};
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  gap: 0.5rem;
  max-width: fit-content;
  align-items: center;
`
