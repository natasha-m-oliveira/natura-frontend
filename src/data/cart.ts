import { api } from '../data/api'
import { Cart as ICart } from '../data/types'
import Cookie from 'js-cookie'
import { Cart } from '../context/types'

export const getCartById = async (id: string): Promise<Cart | null> => {
  try {
    const response = await api<ICart>(`/carts/${id}`)

    return {
      cartId: response.id,
      products:
        response.items?.map((item) => {
          const { product } = item

          return {
            id: product?.id,
            name: product?.name,
            image: product?.image,
            price: product?.price,
            discount: product?.discount,
            quantity: item.quantity,
          }
        }) ?? [],
    } as Cart
  } catch (error) {
    if (error instanceof Error) window.alert(error?.message)

    return null
  }
}

export const createCart = async (cart: Cart): Promise<string | null> => {
  try {
    const response = await api<ICart>('/carts', {
      method: 'POST',
      body: JSON.stringify({
        items: cart.products.map((product) => ({
          productId: product.id,
          quantity: product.quantity,
        })),
      }),
    })

    Cookie.set('natura@cartId', response.id, {
      expires: 7,
    })

    return response.id
  } catch (error) {
    console.log(error)
    if (error instanceof Error) window.alert(error?.message)

    return null
  }
}

export const updateCartItems = async (cart: Cart): Promise<void> => {
  try {
    await api<void>(`/carts/${cart.cartId}/items`, {
      method: 'PUT',
      body: JSON.stringify({
        items: cart.products.map((product) => ({
          productId: product.id,
          quantity: product.quantity,
        })),
      }),
    })
  } catch (error) {
    if (error instanceof Error) window.alert(error?.message)
  }
}
