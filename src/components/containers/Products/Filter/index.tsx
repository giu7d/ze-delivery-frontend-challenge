import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

import { useDebounce } from '@/hooks/utils/useDebounce'
import { Input, InputArea } from '@/components/fragments/Inputs'

import { FilterArea } from './styles'

export function ProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const debounceSetSearchParams = useDebounce(setSearchParams, 250)

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value

    debounceSetSearchParams({ search })
  }

  return (
    <FilterArea>
      <InputArea>
        <BiSearchAlt className="icon" />
        <Input
          type="text"
          defaultValue={searchParams.get('search') || ''}
          placeholder="Buscar"
          onChange={handleInput}
        />
      </InputArea>
    </FilterArea>
  )
}
