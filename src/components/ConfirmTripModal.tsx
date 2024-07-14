import { X, User, Mail } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmTripModalProps {
  handleCloseModalConfirmTrip: () => void
  handleCreateTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  handleCloseModalConfirmTrip,
  handleCreateTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={handleCloseModalConfirmTrip}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas{' '}
            <span className="font-semibold text-zinc-100">
              de 16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        {/* <div className="w-full h-px bg-zinc-800" /> */}

        <div>
          <form onSubmit={handleCreateTrip} className="space-y-4">
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="size-5 text-zinc-400" />

              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Mail className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center gap-2 justify-center hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 h-11"
            >
              Confirmar criação da viagem
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
