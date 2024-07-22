'use client'

import { Breadcrumbs } from '../../components/breadcrumbs'
import Link from 'next/link'
import { ProductDetails } from '../../components/product-details'
import { ArrowRight, Tag } from '@phosphor-icons/react/dist/ssr'
import { useShoppingCart } from '../../hooks/use-cart'
import { formatToBRL } from '../../utils/price'

export default function Cart() {
  const { cartDetails, totalPrice, totalDiscount } = useShoppingCart()
  const shipping = totalPrice ? 1500 : 0
  const totalPurchase = totalPrice - totalDiscount + shipping

  return (
    <div className="w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto py-2 border-t-[1px] border-zinc-200">
      <Breadcrumbs>
        <Link href="./">Início</Link>
        <Link href="./cart">Carrinho</Link>
      </Breadcrumbs>

      <main className="grid md:grid-cols-[2fr_1fr] gap-4 my-4">
        <h2 className="text-3xl font-extrabold mb-2 col-span-full">
          Seu carrinho
        </h2>

        <div className="border-[1px] border-zinc-300 rounded-2xl divide-y px-4">
          {cartDetails.products.length ? (
            cartDetails.products.map((product) => (
              <ProductDetails
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
                quantity={product.quantity}
              />
            ))
          ) : (
            <span>Você não possui nenhum produto no carrinho.</span>
          )}
        </div>

        <aside className="grid grid-cols-[1fr_auto] gap-y-4 gap-x-2 h-min border-[1px] border-zinc-300 rounded-2xl px-4 py-3">
          <h3 className="text-xl font-extrabold col-span-full">Sumário</h3>
          <span className="text-zinc-400">Subtotal</span>
          <strong className="text-right">{formatToBRL(totalPrice)}</strong>

          <span className="text-zinc-400">Desconto{!!totalDiscount}</span>
          <strong className="text-right text-red-500">
            -{formatToBRL(totalDiscount)}
          </strong>

          <span className="text-zinc-400">Frete</span>
          <strong className="text-right">{formatToBRL(shipping)}</strong>

          <div className="border-t-[1px] border-zinc-300 col-span-full" />

          <span className="text-xl">Total</span>
          <strong className="text-xl text-right">
            {formatToBRL(totalPurchase)}
          </strong>

          <div className="bg-zinc-200 flex items-center gap-3 p-2 rounded-full">
            <Tag aria-hidden className="text-zinc-500 w-6 h-6" weight="bold" />
            <input
              type="text"
              placeholder="Cupom"
              className="bg-transparent outline-none text-lg w-full"
            />
          </div>

          <button className="bg-black text-white text-sm rounded-full py-2 px-3">
            Aplicar
          </button>

          <button className="flex items-center justify-center gap-4 bg-orange-400 text-white text-sm col-span-full rounded-full py-3 px-4">
            Finalizar compra <ArrowRight weight="bold" />
          </button>
        </aside>
      </main>
    </div>
  )
}
