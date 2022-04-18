import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.API_URL
})

export const getProducts = async (page: number, limit = 10) => {
  const { data, headers } = await API.get<Product[]>(`/products`, {
    params: page && {
      _page: page,
      _limit: limit
    }
  })

  const total = headers['X-Total-Count']

  return { products: data, total }
}

export const getBrands = async () => {
  const { data } = await API.get<Brand[]>('/brands')

  return data
}
