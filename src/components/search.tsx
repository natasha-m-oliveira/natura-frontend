'use client'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import debounce from '../utils/debounce'
import { useState } from 'react'

export function Search() {
  const [query, setQuery] = useState('')

  const router = useRouter()

  const handleSearch = debounce((value: string) => {
    router.push(`/products?search=${value}`)
  }, 100)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(query)
    }
  }

  return (
    <div className="bg-zinc-200 flex items-center gap-3 p-3 flex-grow rounded-full">
      <MagnifyingGlass
        aria-hidden
        className="text-zinc-500 w-7 h-7"
        weight="bold"
      />
      <input
        type="search"
        placeholder="O que está buscando hoje?"
        className="bg-transparent outline-none text-lg w-full"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
