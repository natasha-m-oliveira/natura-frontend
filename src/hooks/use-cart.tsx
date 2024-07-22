import { useContext, useEffect } from 'react'
import { CartContext } from '../context/cart-context'
import { createCart, getCartById, updateCartItems } from '../data/cart'
import Cookie from 'js-cookie'
import debounce from '../utils/debounce'
import { Product } from '../context/types'

const debouncedUpdateCartItems = debounce(updateCartItems, 100)

export const useShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { products } = cart

  const { cartCount, totalPrice, totalDiscount } = products.reduce(
    (totals, product) => {
      totals.cartCount += product.quantity
      totals.totalPrice += product.price * product.quantity
      totals.totalDiscount += (product.discount ?? 0) * product.quantity
      return totals
    },
    { cartCount: 0, totalPrice: 0, totalDiscount: 0 },
  )

  const addItem = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (item) => item.id === product.id,
      )

      if (existingProduct) {
        const curCart = {
          cartId: prevCart.cartId,
          products: prevCart.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
        debouncedUpdateCartItems(curCart)
        return curCart
      }

      const curCart = {
        cartId: prevCart.cartId,
        products: [...prevCart.products, { ...product, quantity: 1 }],
      }

      if (prevCart.cartId) {
        debouncedUpdateCartItems(curCart)
        return curCart
      }

      createCart(curCart).then((cartId) => {
        if (cartId) {
          setCart((prevCart) => ({ ...prevCart, cartId }))
        }
      })
      return curCart
    })
  }

  const removeItem = (id: string) => {
    setCart((prevCart) => {
      const curCart = {
        cartId: prevCart.cartId,
        products: prevCart.products.filter((item) => item.id !== id),
      }
      debouncedUpdateCartItems(curCart)
      return curCart
    })
  }

  const incrementItem = (id: string) => {
    setCart((prevCart) => {
      const curCart = {
        cartId: prevCart.cartId,
        products: prevCart.products.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      }
      debouncedUpdateCartItems(curCart)
      return curCart
    })
  }

  const decrementItem = (id: string) => {
    setCart((prevCart) => {
      const curCart = {
        cartId: prevCart.cartId,
        products: prevCart.products
          .map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
      debouncedUpdateCartItems(curCart)
      return curCart
    })
  }

  useEffect(() => {
    const cartIdCookie = Cookie.get('natura@cartId')

    if (!cartIdCookie) return

    getCartById(String(cartIdCookie)).then((res) => {
      if (res) setCart(res)
    })
  }, [setCart])

  return {
    cartCount,
    cartDetails: cart,
    totalPrice,
    totalDiscount,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
  }
}
