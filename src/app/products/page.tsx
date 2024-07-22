'use client'

import { useEffect, useState } from 'react'
import { Product } from '../../components/product'
import { api } from '../../data/api'
import { Product as IProduct } from '../../data/types'
import { useSearchParams } from 'next/navigation'

async function listProducts(offset = 0, search?: string): Promise<IProduct[]> {
  try {
    const response = await api<IProduct[]>(
      `/products?page[offset]=${offset}&page[limit]=9&search=${search}`,
    )

    return response
  } catch (error) {
    return []
  }
}

export default function Products() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<IProduct[]>([])
  const [hasMoreData, setHasMoreData] = useState(false)

  const search = String(searchParams.get('search'))

  function handleFetchMoreProducts() {
    listProducts(products.length).then((res) => {
      if (res.length < 9) setHasMoreData(false)
      else res.pop()

      setProducts((value) => [...value, ...res])
    })
  }

  useEffect(() => {
    listProducts(0, search).then((res) => {
      if (res.length === 9) {
        setHasMoreData(true)
        res.pop()
      }

      setProducts(res)
    })
  }, [search])

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto my-8">
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
      <button
        className="col-span-full mx-auto bg-white text-black disabled:text-zinc-400 text-sm text-center font-semibold border-zinc-300 border-[1px] w-44 p-3 rounded-full"
        disabled={!hasMoreData}
        onClick={handleFetchMoreProducts}
      >
        Carregar outros
      </button>
    </main>
  )
}
