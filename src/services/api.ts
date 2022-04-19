import axios from 'axios'

import { Product } from '@/schemas/Product'

export const API = axios.create({
  baseURL: process.env.API_URL
})

export async function getProducts(query = '') {
  const { data } = await API.get<ProductResponse[]>(`/products${query}`)

  const products = adaptProductsResponseToProducts(data)

  return products
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
