/* eslint-disable camelcase */
type Product = {
  id: string
  uuid: string
  type: string
  name: string
  description: string
  beverage_type: string
  slug: string
  image: string
  tags: string
  search_tags: string
  hl: number
  status: string
  stock: string
  vendors: {
    vendor: {
      id: string
      uuid: string
      name: string
      slug: string
      status: string
    }
  }[]
  category: {
    id: string
    uuid: string
    name: string
    slug: string
    status: string
  }
  packs: {
    id: string
    uuid: string
    original_price: number
    current_price: number
    status: string
    items: any[]
    unities: number
  }[]
}

type Brand = {
  id: string
  uuid: string
  name: string
  slug: string
  status: string
}
