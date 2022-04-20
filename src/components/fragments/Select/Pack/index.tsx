import { ProductPack } from '@/schemas/Product'
import { LabelTypography } from '@/components/fragments/Typographies'

import { SelectPackArea, SelectPackOption, SelectPackOptions } from './styles'

type SelectPackProps = {
  label?: string
  items: ProductPack[]
  selectedItem?: ProductPack
  onClick?: (item: ProductPack) => void
}

export const SelectPack = ({
  label,
  items,
  selectedItem,
  onClick = () => {}
}: SelectPackProps) => {
  return (
    <SelectPackArea>
      {label && <LabelTypography>{label}</LabelTypography>}
      <SelectPackOptions>
        {items.map(item => (
          <SelectPackOption
            key={`${item.id}-checkbox-option`}
            selected={selectedItem && item.id === selectedItem.id}
            onClick={() => onClick(item)}
          >
            {item.value}
            <small>{item.mesurementUnit}</small>
          </SelectPackOption>
        ))}
      </SelectPackOptions>
    </SelectPackArea>
  )
}
