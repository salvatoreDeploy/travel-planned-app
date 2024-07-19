import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const modalVariants = tv({
  base: 'w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5',
  variants: {
    size: {
      default: 'w-[640px]',
      xs: 'w-[360px]',
    },
  },
})

interface ModalProps extends VariantProps<typeof modalVariants> {
  children: ReactNode
}

export function Modal({ children, size }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className={modalVariants({ size })}>{children}</div>
    </div>
  )
}
