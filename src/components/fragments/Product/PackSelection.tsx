import { LabelTypography } from '@/components/partials/Typographies'
import {
  CheckboxArea,
  CheckboxOption,
  CheckboxOptions
} from '@/components/partials/Checkboxes'

type CheckboxItem = {
  id: string
  value: string
  mesurementUnit: string
}

type PackCheckboxProps = {
  label?: string
  items: CheckboxItem[]
  selectedItem?: CheckboxItem
}

export const ProductPackSelection = ({
  label,
  items,
  selectedItem
}: PackCheckboxProps) => {
  return (
    <CheckboxArea>
      {label && <LabelTypography>{label}</LabelTypography>}
      <CheckboxOptions>
        {items.map(item => (
          <CheckboxOption
            key={`${item.id}-checkbox-option`}
            selected={selectedItem && item.id === selectedItem.id}
          >
            {item.value}
            <small>{item.mesurementUnit}</small>
          </CheckboxOption>
        ))}
      </CheckboxOptions>
    </CheckboxArea>
  )
}
