import { LabelTypography } from '@/components/partials/Typographies'
import {
  CheckboxArea,
  CheckboxOption,
  CheckboxOptions
} from '@/components/partials/Checkboxes'
import { ProductPack } from '@/schemas/Product'

type PackCheckboxProps = {
  label?: string
  items: ProductPack[]
  selectedItem?: ProductPack
  onClick?: (item: ProductPack) => void
}

export const ProductPackSelection = ({
  label,
  items,
  selectedItem,
  onClick = () => {}
}: PackCheckboxProps) => {
  return (
    <CheckboxArea>
      {label && <LabelTypography>{label}</LabelTypography>}
      <CheckboxOptions>
        {items.map(item => (
          <CheckboxOption
            key={`${item.id}-checkbox-option`}
            selected={selectedItem && item.id === selectedItem.id}
            onClick={() => onClick(item)}
          >
            {item.value}
            <small>{item.mesurementUnit}</small>
          </CheckboxOption>
        ))}
      </CheckboxOptions>
    </CheckboxArea>
  )
}
