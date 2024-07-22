'use client'

import Link from 'next/link'
import { Search } from './search'
import {
  CaretDown,
  ShoppingCartSimple,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'
import { useShoppingCart } from '../hooks/use-cart'

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <header className="flex items-center gap-6 py-2 w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] h-20">
      <Link href="/" className="text-2xl font-bold">
        Cosméticos&Co
      </Link>

      <nav className="relative flex justify-center">
        <ul className="center flex list-none">
          <li>
            <Link
              href="/products"
              className="group flex select-none items-center justify-between gap-1 rounded px-3 py-2"
            >
              Produtos{' '}
              <CaretDown
                className="relative top-[1px] transition-transform duration-[250] ease-in group-hover:-rotate-180"
                aria-hidden
              />
            </Link>
          </li>
        </ul>
      </nav>

      <Search />

      <div className="flex items-center gap-2">
        <Link href="/cart" className="relative">
          {!!cartCount && (
            <span className="absolute -top-2 -right-2 w-5 h-5 leading-snug rounded-full bg-orange-400 text-white text-center text-sm">
              {cartCount}
            </span>
          )}
          <ShoppingCartSimple className="w-8 h-8" weight="bold" />
        </Link>
        <Link href="#">
          <UserCircle className="w-8 h-8" weight="bold" />
        </Link>
      </div>
    </header>
  )
}
