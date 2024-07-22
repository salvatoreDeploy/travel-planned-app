/* eslint-disable prettier/prettier */
import { MapPin, Calendar, Settings2 } from 'lucide-react'
import { Button } from '../../components/Button'
import { useParams } from 'react-router-dom'
import { api } from '../../api/axios'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: string
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  /* 
     TODO: 
        Criar estado bollean para botao alterar local e data assim habilitar os input, 
        efetuar logica de troca de botão para confirmar novos dados,
        função que vai receber os valores dos dados e fazer a chamada para api e voltar o estado dos inputs apara desabilitados 
  */

  useEffect(() => {
    api
      .get(`/trip/${tripId}/details`)
      .then((response) => setTrip(response.data.trip))
  }, [tripId])


  /* TODO: Criar função a parte em pasta utils */

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL")
      .concat(' até ')
      .concat(format(trip.ends_at, "d' de 'LLL"))
    : null

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled
          type="text"
          placeholder={trip?.destination}
          className="bg-transparent placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { }}
            disabled
            className="flex items-center gap-2"
          >
            <Calendar className="size-5 text-zinc-400" />
            <span className=" text-zinc-100">
              {displayedDate ?? 'Quando?'}
            </span>
          </button>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button Bgcolor="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>

        {/* <Button Bgcolor="primary">
          Confirmar alterações
          <Settings2 className="size-5" />
        </Button> */}
      </div>
    </div>
  )
}
