export type Product = {
  id: string
  name: string
  image: string | null
  price: number
  discount: number | null
  quantity: number
}

export type Cart = {
  cartId: string
  products: Product[]
}

export type CartContextProps = {
  cart: Cart
  setCart: React.Dispatch<React.SetStateAction<Cart>>
}
