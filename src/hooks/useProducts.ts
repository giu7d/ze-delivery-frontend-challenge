import useSWRInfinite from 'swr/infinite'

import { getProducts } from '@/services/api'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const LIMIT = 10

const _getPaginationQuery = (index: number, data: any[]) => {
  if (data && !data.length) return

  return {
    _page: index + 1,
    _limit: LIMIT
  }
}

export function useProducts() {
  const [searchParams] = useSearchParams()
  const { data, error, setSize, mutate } = useSWRInfinite(
    _getPaginationQuery,
    query =>
      getProducts({
        ...query,
        q: searchParams.get('search') || ''
      }),
    {
      revalidateFirstPage: false
    }
  )

  useEffect(() => {
    mutate()
  }, [searchParams])

  const loadMoreProducts = () => setSize(size => size + 1)

  return {
    products: data || [],
    loadMoreProducts,
    isLoading: !data && !error,
    isError: error
  }
}
