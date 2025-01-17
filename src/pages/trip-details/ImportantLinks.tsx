import { Link2, Plus, Tag, X } from 'lucide-react'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal/Modal'
import { ModalHeader } from '../../components/Modal/ModalHeader'
import { ModalContent } from '../../components/Modal/ModalContent'
import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/axios'

interface Links {
  id: string
  title: string
  url: string
}

export function ImportantLinks() {
  const { tripId } = useParams()

  const [links, setLinks] = useState<Links[]>()

  const [isRegisterLinkModalOpen, setIsRegisterLinkModalOpen] = useState(false)

  function handleRegisterLinkModalOpen() {
    setIsRegisterLinkModalOpen(true)
  }

  function handleRegisterLinkModalClose() {
    setIsRegisterLinkModalOpen(false)
  }

  function handleRegisterNewLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const tagLink = data.get('tag_link')?.toString()
    const tagUrl = data.get('url')?.toString()

    api.post(`/trip/${tripId}/link`, {
      title: tagLink,
      url: tagUrl,
    })

    window.document.location.reload()
  }

  useEffect(() => {
    api
      .get(`/trip/${tripId}/links`)
      .then((response) => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        {links?.map((link) => {
          return (
            <div key={link.id} className="flex justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href="#"
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          )
        })}
      </div>

      <Button
        onClick={handleRegisterLinkModalOpen}
        Bgcolor="secondary"
        size="full"
      >
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>

      {isRegisterLinkModalOpen && (
        <Modal>
          <ModalHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar link</h2>
              <button type="button" onClick={handleRegisterLinkModalClose}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Todos convidados podem visualizar os links importantes.
            </p>
          </ModalHeader>
          <ModalContent formSubmit={handleRegisterNewLink}>
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="size-5 text-zinc-400" />

              <input
                type="text"
                name="tag_link"
                placeholder="Titulo do link"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Link2 className="size-5 text-zinc-400" />

              <input
                type="text"
                name="url"
                placeholder="URL"
                className="bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>

            <Button type="submit" Bgcolor="primary" size="full">
              Salvar Links
            </Button>
          </ModalContent>
        </Modal>
      )}
    </div>
  )
}
