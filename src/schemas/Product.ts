export interface ProductPack {
  id: string
  value: string
  mesurementUnit: string
  originalPrice: number
  currentPrice: number
}

export interface Product {
  id: string
  uuid: string
  brand: string
  description: string
  image: string
  packs: ProductPack[]
}
