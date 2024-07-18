import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export function Search() {
  return (
    <div className="rounded-full bg-zinc-200 flex items-center gap-3 p-3 flex-grow">
      <MagnifyingGlass
        aria-hidden
        className="text-zinc-500 w-7 h-7"
        weight="bold"
      />
      <input
        type="search"
        placeholder="O que está buscando hoje?"
        className="bg-transparent outline-none text-lg w-[100%]"
      />
    </div>
  )
}
