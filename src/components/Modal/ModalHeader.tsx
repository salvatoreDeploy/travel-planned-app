import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
}

export function ModalHeader({ children }: ModalProps) {
  return <div className="space-y-2">{children}</div>
}
