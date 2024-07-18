import { X } from '@phosphor-icons/react/dist/ssr'

export function AlertBar() {
  return (
    <div className="bg-zinc-600 text-white w-full py-3">
      <div className="flex items-center w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto">
        <span className="text-sm mx-auto mr-5">
          Aproveita as nossas oportunidades!!!
        </span>
        <X className="w-5 h-5 ml-auto" weight="bold" />
      </div>
    </div>
  )
}
