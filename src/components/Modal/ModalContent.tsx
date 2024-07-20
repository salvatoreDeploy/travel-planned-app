import { FormEvent, ReactNode } from 'react'

interface ModalContentProps {
  children: ReactNode
  formSubmit?: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName?: (name: string) => void
  setOwnerEmail?: (email: string) => void
}

export function ModalContent({
  children,
  formSubmit,
  setOwnerName,
  setOwnerEmail,
}: ModalContentProps) {
  return (
    <div>
      <form onSubmit={formSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  )
}
