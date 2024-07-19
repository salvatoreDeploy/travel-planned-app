import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react'
import { Button } from '../Button'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { ModalHeader } from '../Modal/ModalHeader'
import { ModalContent } from '../Modal/ModalContent'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndDates, setEventStartAndDates] = useState<
    DateRange | undefined
  >()

  function handleOpenDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function handleCloseDatePicker() {
    return setIsDatePickerOpen(false)
  }

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

      <button
        onClick={handleOpenDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40">Quando?</span>
      </button>

      {isDatePickerOpen && (
        <Modal size="xs">
          <ModalHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecione uma data</h2>
              <button type="button" onClick={handleCloseDatePicker}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
          </ModalHeader>

          <ModalContent>
            <DayPicker
              mode="range"
              selected={eventStartAndDates}
              onSelect={setEventStartAndDates}
            />
          </ModalContent>
        </Modal>
      )}

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
