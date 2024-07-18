import { Plus } from 'lucide-react'
import { Separator } from '../../components/Separator'
import { useState } from 'react'
import { CreateActivityModal } from '../../components/CreateActivityModal'
import { ImportantLinks } from './ImportantLinks'
import { Guests } from './Guests'
import { Activitys } from './Activitys'
import { DestinationAndDateHeader } from './DestinationAndDateHeader'

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
          <CreateActivityModal
            createActivityModalClose={handleCreateActivityModalClose}
          />
        )}
      </main>
    </div>
  )
}
