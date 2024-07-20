import Image from 'next/image'
import NumberInput from './number-input'
import { Trash } from '@phosphor-icons/react/dist/ssr'

export function ProductDetails() {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-3">
      <div className="flex items-center justify-center max-w-28 rounded-xl aspect-square">
        <Image
          src="/no-image-available.jpg"
          alt=""
          width={300}
          height={300}
          className="block max-w-full object-cover rounded-xl"
        />
      </div>

      <div className="grid gap-3">
        <span className="font-bold">Essencial Masculino 100ml</span>
        <strong className="text-lg">R$212,00</strong>
      </div>

      <div className="flex flex-col justify-between items-end h-full">
        <Trash className="text-red-500 text-xl" weight="fill" />
        <NumberInput value={1} />
      </div>
    </div>
  )
}
