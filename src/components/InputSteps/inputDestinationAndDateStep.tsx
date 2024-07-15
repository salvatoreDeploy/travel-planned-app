import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'

interface InputDestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  handleAlterGuestsInput: () => void
  handleOpenGuestsInput: () => void
}

export function InputDestinationAndDateStep({
  handleAlterGuestsInput,
  handleOpenGuestsInput,
  isGuestsInputOpen,
}: InputDestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai? "
          className="bg-transparent placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando? "
          className="w-40 bg-transparent placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          onClick={handleAlterGuestsInput}
          className="flex items-center gap-2 hover:bg-zinc-700 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={handleOpenGuestsInput}
          className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
