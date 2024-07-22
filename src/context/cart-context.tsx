import { createContext, ReactNode, useState } from 'react'
import { Cart, CartContextProps } from './types'

const DEFAULT_VALUE: CartContextProps = {
  cart: { cartId: '', products: [] },
  setCart: () => {},
}

export const CartContext = createContext<CartContextProps>(DEFAULT_VALUE)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ cartId: '', products: [] })

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
