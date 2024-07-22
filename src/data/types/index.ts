export enum CartStatus {
  pending = 'pending',
  ordered = 'ordered',
}

export interface Product {
  id: string
  name: string
  description: string | null
  image: string | null
  price: number
  discount: number | null
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  cartId: string
  productId: string
  quantity: number
  createdAt: Date

  product?: Product
}

export interface Cart {
  id: string
  status: CartStatus
  createdAt: Date
  updatedAt: Date

  items?: CartItem[]
}
