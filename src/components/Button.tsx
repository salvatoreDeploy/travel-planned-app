import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 flex items-center gap-2',
  variants: {
    Bgcolor: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
    item: {
      default: 'justify-center',
      beteween: 'justify-between',
    },
  },

  defaultVariants: {
    Bgcolor: 'primary',
    size: 'default',
    item: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({
  children,
  Bgcolor,
  size,
  item,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ Bgcolor, size, item })}>
      {children}
    </button>
  )
}
