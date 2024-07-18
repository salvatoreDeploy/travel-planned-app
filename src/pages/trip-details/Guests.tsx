import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'
import { Button } from '../../components/Button'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jeniffer Araujo
            </span>
            <span className="block text-xs text-zinc-400 truncate ">
              jeniffer@email.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>

        <div className="flex justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Victor Henrique
            </span>
            <span className="block text-xs text-zinc-400 truncate ">
              vivi@email.com
            </span>
          </div>
          <CircleCheck className="size-5 text-lime-400" />
        </div>
      </div>

      <Button Bgcolor="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
