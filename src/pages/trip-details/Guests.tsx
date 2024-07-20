import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'
import { Button } from '../../components/Button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../api/axios'

interface Participants {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipant] = useState<Participants[]>([])

  useEffect(() => {
    api
      .get(`/trip/${tripId}/participants`)
      .then((response) => setParticipant(response.data.participants))
  }, [tripId])

  // console.log(participants)

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block text-xs text-zinc-400 truncate ">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="text-lime-400 size-5" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5" />
              )}
            </div>
          )
        })}
      </div>

      <Button Bgcolor="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
