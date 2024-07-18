import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'
import { Button } from '../Button'

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
        <Button onClick={handleAlterGuestsInput} Bgcolor="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={handleOpenGuestsInput} Bgcolor="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
