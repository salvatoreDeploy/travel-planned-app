import { Calendar, Clock, Tag, X } from 'lucide-react'
import { Button } from './Button'

export interface CreateActivityModalProps {
  createActivityModalClose: () => void
}

export function CreateActivityModal({
  createActivityModalClose,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={createActivityModalClose}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        {/* <div className="w-full h-px bg-zinc-800" /> */}

        <div>
          <form className="space-y-4">
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="size-5 text-zinc-400" />

              <input
                type="text"
                name="activity"
                placeholder="Qual a atividade?"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  type="date"
                  name="activity_date"
                  placeholder="Selecionar data"
                  className="bg-transparent placeholder-zinc-400 outline-none"
                />
              </div>
              <div className="h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-6">
                <div>
                  <Clock className="size-4 text-zinc-400" />
                </div>
                <input
                  type="time"
                  name="activity_hour"
                  placeholder="Horario"
                  className="bg-transparent placeholder-zinc-400 outline-none"
                />
              </div>
            </div>

            <Button type="submit" Bgcolor="primary" size="full">
              Salvar Atividades
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
