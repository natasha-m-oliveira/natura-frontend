import Image from 'next/image'
import NumberInput from './number-input'
import { Trash } from '@phosphor-icons/react/dist/ssr'
import { formatToBRL } from '../utils/price'
import { useShoppingCart } from '../hooks/use-cart'
import { resolveImageUrl } from '../utils/resolve-image-url'

type ProductDetailsProps = {
  id: string
  name: string
  image: string | null
  price: number
  discount: number | null
  quantity: number
}

export function ProductDetails(props: ProductDetailsProps) {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart()

  const currentPrice = props.discount
    ? props.price - props.discount
    : props.price

  function handleQuantityChange(id: string, current: number, previous: number) {
    if (current > previous) {
      incrementItem(id)
    } else if (current < previous) {
      decrementItem(id)
    }
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-3">
      <div className="flex items-center justify-center max-w-28 rounded-xl aspect-square">
        <Image
          src={resolveImageUrl(props.image)}
          alt=""
          width={300}
          height={300}
          className="block max-w-full object-cover rounded-xl"
        />
      </div>

      <div>
        <span className="font-bold">{props.name}</span>
        <div className="relative my-3">
          {!!props.discount && (
            <strong className="block text-zinc-400 font-bold line-through">
              {formatToBRL(props.discount)}
            </strong>
          )}
          <strong className="block text-lg">{formatToBRL(currentPrice)}</strong>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end h-full">
        <Trash
          className="text-red-500 text-xl cursor-pointer"
          weight="fill"
          onClick={() => removeItem(props.id)}
        />
        <NumberInput
          value={props.quantity}
          onValueChange={(value) =>
            handleQuantityChange(props.id, value, props.quantity)
          }
        />
      </div>
    </div>
  )
}
