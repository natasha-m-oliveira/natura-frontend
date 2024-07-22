'use client'

import Image from 'next/image'
import { formatToBRL } from '../utils/price'
import { Heart } from '@phosphor-icons/react/dist/ssr'
import { useShoppingCart } from '../hooks/use-cart'
import { resolveImageUrl } from '../utils/resolve-image-url'

type ProductProps = {
  id: string
  name: string
  image: string | null
  price: number
  discount: number | null
}

export function Product(props: ProductProps) {
  const { addItem } = useShoppingCart()

  const currentPrice = props.discount
    ? props.price - props.discount
    : props.price

  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex items-center justify-center max-w-xl rounded-xl">
        <Image
          src={resolveImageUrl(props.image)}
          alt=""
          width={600}
          height={600}
          className="block max-w-full object-cover rounded-xl aspect-square"
        />
      </div>
      <h3 className="text-base md:text-lg font-bold">{props.name}</h3>
      <div className="relative">
        {!!props.discount && (
          <span className="absolute text-zinc-400 text-lg md:text-xl font-bold line-through -top-3 right-0">
            {formatToBRL(props.price)}
          </span>
        )}
        <span className="text-lg md:text-xl font-bold">
          {formatToBRL(currentPrice)}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="bg-white group border-zinc-300 border-[1px] rounded-full p-2">
          <Heart
            weight="bold"
            className="text-black group-hover:text-red-500 w-5 h-5"
          />
        </button>
        <button
          className="flex-grow bg-orange-400 text-white text-sm font-bold col-span-full rounded-full py-2 px-3"
          onClick={() =>
            addItem({
              id: props.id,
              name: props.name,
              image: props.image,
              price: props.price,
              discount: props.discount,
              quantity: 1,
            })
          }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
