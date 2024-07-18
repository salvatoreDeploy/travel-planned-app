import { Calendar, Clock, Plus, Tag, X } from 'lucide-react'
import { Separator } from '../../components/Separator'
import { useState } from 'react'
import { ImportantLinks } from './ImportantLinks'
import { Guests } from './Guests'
import { Activitys } from './Activitys'
import { DestinationAndDateHeader } from './DestinationAndDateHeader'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../components/Button'
import { ModalContent } from '../../components/Modal/ModalContent'
import { ModalHeader } from '../../components/Modal/ModalHeader'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function handleCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true)
  }

  function handleCreateActivityModalClose() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Atividades</h2>
            <button
              onClick={handleCreateActivityModalOpen}
              className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <Activitys />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <Separator />

          <Guests />
        </div>

        {isCreateActivityModalOpen && (
          <Modal>
            <ModalHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button" onClick={handleCreateActivityModalClose}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos convidados podem visualizar as atividades.
              </p>
            </ModalHeader>

            <ModalContent>
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
            </ModalContent>
          </Modal>
        )}
      </main>
    </div>
  )
}
