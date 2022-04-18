import useSWR from 'swr'

import { getProducts } from '@/services/api'

export function useProducts(page: number, limit: number) {
  const { data, error } = useSWR([page, limit], getProducts)

  return {
    products: data?.products || [],
    total: data?.total,
    isLoading: !data && !error,
    isError: error
  }
}
