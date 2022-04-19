import { useMemo } from 'react'
import debounce from 'lodash.debounce'

export function useDebounce(callback: any, wait = 250) {
  return useMemo(() => debounce(callback, wait), [])
}
