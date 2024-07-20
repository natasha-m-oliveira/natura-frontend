import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

type BreadcrumbsProps = {
  children: React.ReactNode
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const children = React.Children.toArray(props.children)
  const lastIndex = children.length - 1

  return (
    <ul className="flex items-center gap-2 text-sm text-zinc-400 [&>a:last-child]:text-black [&>a]:cursor-pointer [&>a]:p-2">
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < lastIndex && <CaretRight />}
        </React.Fragment>
      ))}
    </ul>
  )
}
