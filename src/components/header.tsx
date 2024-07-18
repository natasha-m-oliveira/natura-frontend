import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Search } from './search'
import {
  CaretDown,
  ShoppingCartSimple,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <header className="flex items-center gap-6 py-2 w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] h-20">
      <h2 className="text-3xl font-bold">Cosméticos&Co</h2>

      <NavigationMenu.Root className="relative flex justify-center">
        <NavigationMenu.List className="center flex list-none">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-1 rounded px-3 py-2">
              Produtos{' '}
              <CaretDown
                className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <Search />

      <div className="flex items-center gap-2">
        <ShoppingCartSimple className="w-5 h-5" weight="bold" />
        <UserCircle className="w-5 h-5" weight="bold" />
      </div>
    </header>
  )
}
