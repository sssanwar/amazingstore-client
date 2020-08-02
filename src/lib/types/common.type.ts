export type Product = {
  id: number
  name: string
  unitPrice: number
  promotions: Promotion[]
}

export type Promotion = {
  id: number
  description: string
}

export type CartItem = {
  productId: number
  quantity: number
}

export type TotalSum = {
  subTotal: number
  total: number
  saved: number
  details: string[]
}
