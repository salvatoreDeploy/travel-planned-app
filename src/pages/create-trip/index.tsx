import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputDestinationAndDateStep } from '../../components/InputSteps/inputDestinationAndDateStep'
import { InputInviteGuestStep } from '../../components/InputSteps/InputInviteGuestStep'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Modal } from '../../components/Modal/Modal'
import { ModalHeader } from '../../components/Modal/ModalHeader'
import { ModalContent } from '../../components/Modal/ModalContent'
import { X, User, Mail, AtSign, Plus } from 'lucide-react'
import { Button } from '../../components/Button'

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

        {/* TODO: Componentizar fluxo de steps */}
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
        <Modal>
          <ModalHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecionar convidados</h2>
              <button type="button" onClick={handleClosedModalInvite}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </p>
          </ModalHeader>

          <ModalContent formSubmit={handleAddEmailToInvite}>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      onClick={() => removeEmailFromInvites(email)}
                      type="button"
                    >
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <div className="flex items-center flex-1 gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
              <AtSign className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Digite o e-mail do convidado"
                className="bg-transparent placeholder-zinc-400 outline-none flex-1"
              />

              <Button Bgcolor="primary">
                Convidar
                <Plus className="size-5" />
              </Button>
            </div>
          </ModalContent>
        </Modal>
      )}

      {isConfirmTripModal && (
        <Modal>
          <ModalHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Confirmar criação da viagem
              </h2>
              <button type="button" onClick={handleCloseModalConfirmTrip}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>

            <p className="text-sm text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <span className="font-semibold text-zinc-100">
                Florianópolis, Brasil
              </span>{' '}
              nas datas{' '}
              <span className="font-semibold text-zinc-100">
                de 16 a 27 de Agosto de 2024
              </span>{' '}
              preencha seus dados abaixo:
            </p>
          </ModalHeader>

          <ModalContent formSubmit={handleCreateTrip}>
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="size-5 text-zinc-400" />

              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Mail className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <Button Bgcolor="primary" size="full">
              Confirmar criação da viagem
            </Button>
          </ModalContent>
        </Modal>
      )}
    </div>
  )
}
