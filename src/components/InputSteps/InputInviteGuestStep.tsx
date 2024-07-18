import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../Button'

interface InputInviteGuestStepProps {
  handleOpenModalInvite: () => void
  emailsToInvite: string[]
  handleOpenModalConfirmTrip: () => void
}

export function InputInviteGuestStep({
  emailsToInvite,
  handleOpenModalConfirmTrip,
  handleOpenModalInvite,
}: InputInviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <button
          onClick={handleOpenModalInvite}
          type="button"
          className="bg-transparent text-zinc-400 flex-1 text-left"
        >
          {emailsToInvite.length > 0 ? (
            <span>{emailsToInvite.length} pessoa(s) convidada(s)</span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">
              {' '}
              Quem estara na viagem ?
            </span>
          )}
        </button>
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      <Button onClick={handleOpenModalConfirmTrip} Bgcolor="primary">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
