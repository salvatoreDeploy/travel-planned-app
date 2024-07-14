import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from '../../components/InviteGuestModal'
import { ConfirmTripModal } from '../../components/ConfirmTripModal'
import { InputDestinationAndDateStep } from '../../components/InputSteps/inputDestinationAndDateStep'
import { InputInviteGuestStep } from '../../components/InputSteps/InputInviteGuestStep'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isModalInviteOpen, setIsModalInviteOpen] = useState(false)
  const [isConfirmTripModal, setIsConfirmTripModal] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const navigate = useNavigate()

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function handleAlterGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function handleOpenModalInvite() {
    setIsModalInviteOpen(true)
  }

  function handleClosedModalInvite() {
    setIsModalInviteOpen(false)
  }

  function handleAddEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      alert('E-mail ja existente.')

      return

      // TODO refazer interface usando Toltip, Toast ou focus.
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )

    setEmailsToInvite(newEmailList)
  }

  function handleOpenModalConfirmTrip() {
    setIsConfirmTripModal(true)
  }

  function handleCloseModalConfirmTrip() {
    setIsConfirmTripModal(false)
  }

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trip/123/details')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-maskImg bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <Header />

        <div className="space-y-4">
          <InputDestinationAndDateStep
            handleAlterGuestsInput={handleAlterGuestsInput}
            handleOpenGuestsInput={handleOpenGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InputInviteGuestStep
              emailsToInvite={emailsToInvite}
              handleOpenModalConfirmTrip={handleOpenModalConfirmTrip}
              handleOpenModalInvite={handleOpenModalInvite}
            />
          )}
        </div>

        <Footer />
      </div>

      {isModalInviteOpen && (
        <InviteGuestModal
          handleClosedModalInvite={handleClosedModalInvite}
          emailsToInvite={emailsToInvite}
          handleAddEmailToInvite={handleAddEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModal && (
        <ConfirmTripModal
          handleCloseModalConfirmTrip={handleCloseModalConfirmTrip}
          handleCreateTrip={handleCreateTrip}
        />
      )}
    </div>
  )
}
