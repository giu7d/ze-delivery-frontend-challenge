import axios from 'axios'

import { Product } from '@/schemas/Product'

export const API = axios.create({
  baseURL: process.env.API_URL
})

export async function getProducts(page: number, limit = 10) {
  const { data, headers } = await API.get<ProductResponse[]>(`/products`, {
    params: page && {
      _page: page,
      _limit: limit
    }
  })

  const total = headers['X-Total-Count']

  const products = adaptProductsResponseToProducts(data)

  return { products, total }
}

export async function getBrands() {
  const { data } = await API.get<BrandResponse[]>('/brands')

  return data
}

function adaptProductsResponseToProducts(data: ProductResponse[]): Product[] {
  return data.map(item => ({
    id: item.id,
    uuid: item.uuid,
    brand: item.vendors[0].vendor.name,
    description: item.name,
    image: item.image,
    packs: item.packs.map(pack => ({
      id: pack.id,
      value: pack.unities.toString(),
      mesurementUnit: 'un',
      originalPrice: pack.original_price,
      currentPrice: pack.current_price
    }))
  }))
}
