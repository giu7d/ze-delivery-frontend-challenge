import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

import { useDebounce } from '@/hooks/utils/useDebounce'
import { IconButton } from '@/components/partials/Buttons'
import { Input, InputArea } from '@/components/partials/Inputs'
import { FilterSection } from '@/components/partials/Sections'

export function ProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const debounceSetSearchParams = useDebounce(setSearchParams, 500)

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value

    debounceSetSearchParams({ search })
  }

  return (
    <FilterSection>
      <InputArea>
        <BiSearchAlt className="icon" />
        <Input
          type="text"
          defaultValue={searchParams.get('search') || ''}
          placeholder="Buscar"
          onChange={handleInput}
        />
      </InputArea>
      <IconButton>
        <BiFilterAlt />
      </IconButton>
    </FilterSection>
  )
}
