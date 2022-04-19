import useSWRInfinite from 'swr/infinite'

import { getProducts } from '@/services/api'

const LIMIT = 10

function getPaginationQuery(index: number, data: any[]) {
  if (data && !data.length) return

  return `?_page=${index + 1}&_limit=${LIMIT}`
}

export function useProducts() {
  const { data, error, setSize } = useSWRInfinite(
    getPaginationQuery,
    getProducts,
    {
      revalidateFirstPage: false
    }
  )

  const loadMoreProducts = () => {
    setSize(size => size + 1)
  }

  return {
    products: data || [],
    loadMoreProducts,
    isLoading: !data && !error,
    isError: error
  }
}
