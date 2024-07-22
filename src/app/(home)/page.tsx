import Link from 'next/link'
import { Banner } from '../../components/banner'
import { Product } from '../../components/product'
import { api } from '../../data/api'
import { Product as IProduct } from '../../data/types'

async function listProducts(): Promise<IProduct[]> {
  try {
    const response = await api<IProduct[]>('/products?page[limit]=4')

    return response
  } catch {
    return []
  }
}

export default async function Home() {
  const products = await listProducts()

  return (
    <main className="w-full">
      <Banner />

      <h2 className="text-3xl text-center font-bold my-8">
        descubra as fragrâncias que combinam com você
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>

      <div className="my-8 flex justify-center">
        <Link
          href="/products"
          className="bg-white text-black text-sm text-center font-semibold border-zinc-300 border-[1px] w-44 p-3 rounded-full"
        >
          Ver mais
        </Link>
      </div>
    </main>
  )
}
