import { BiMinus, BiPlus } from 'react-icons/bi'

import { IconButton } from '@/components/fragments/Buttons'

import { SelectNumberArea } from './styles'

type SelectNumberProps = {
  value?: number
  onChange: (value: number) => void
}

export function SelectNumber({ value = 0, onChange }: SelectNumberProps) {
  return (
    <SelectNumberArea>
      <IconButton onClick={() => onChange(value - 1)}>
        <BiMinus />
      </IconButton>
      <span>{value}</span>
      <IconButton onClick={() => onChange(value + 1)}>
        <BiPlus />
      </IconButton>
    </SelectNumberArea>
  )
}
