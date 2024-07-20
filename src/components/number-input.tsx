'use client'

import { Minus, Plus } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'

export interface NumberInputProps {
  value: number
  onValueChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export default function NumberInput(props: NumberInputProps) {
  const { value, onValueChange, min = 1, max = 10, step = 1 } = props
  const [count, setCount] = useState(value)

  const disableMinus = count === min
  const disableAdd = count === max

  function reduce() {
    if (!disableMinus) {
      const newNumber = count - step
      setCount(newNumber)
      if (onValueChange) onValueChange(newNumber)
    }
  }
  function add() {
    if (!disableAdd) {
      const newNumber = count + step
      setCount(newNumber)
      if (onValueChange) onValueChange(newNumber)
    }
  }

  return (
    <div className="flex items-center gap-1 w-28 py-3 px-4 bg-zinc-200 rounded-full">
      <button
        className="bg-transparent"
        disabled={disableMinus}
        onClick={reduce}
      >
        <Minus size="0.875rem" weight="bold" />
      </button>
      <input
        className="w-full bg-transparent text-sm font-bold text-right border-none outline-none rounded-md appearance-none"
        type="number"
        value={count}
        readOnly
      />
      <button className="bg-transparent" disabled={disableAdd} onClick={add}>
        <Plus size="0.875rem" weight="bold" />
      </button>
    </div>
  )
}
