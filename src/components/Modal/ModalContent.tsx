import { FormEvent, ReactNode } from 'react'

interface ModalContentProps {
  children: ReactNode
  formSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export function ModalContent({ children, formSubmit }: ModalContentProps) {
  return (
    <div>
      <form onSubmit={formSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  )
}
