import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/Button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Rserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011dfsafdsfdsfasdafdsafdsfsd
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>

        <div className="flex justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Regras da casa
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.notion.com.br/rooms/104700011dfsafdsfdsfasdafdsafdsfsd
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
      </div>

      <Button Bgcolor="secondary">
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>
    </div>
  )
}
