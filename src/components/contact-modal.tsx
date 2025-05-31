"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulando envio do formulário
    setTimeout(() => {
      setFormSubmitted(true)
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 500)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset form state after modal is closed
    setTimeout(() => {
      setFormSubmitted(false)
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#fffaf2] border-[#dfdad3]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[#0f1f2a] text-xl">Entre em Contato</DialogTitle>
          </div>
          <DialogDescription className="text-[#8d8c8c]">
            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </DialogDescription>
        </DialogHeader>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-[#0f1f2a]">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-[#bab9b9] bg-[#fffaf2] text-[#0f1f2a]"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#0f1f2a]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#bab9b9] bg-[#fffaf2] text-[#0f1f2a]"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-[#0f1f2a]">
                  Assunto
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-[#bab9b9] bg-[#fffaf2] text-[#0f1f2a]"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-[#0f1f2a]">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] border-[#bab9b9] bg-[#fffaf2] text-[#0f1f2a]"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#3f8ec9] text-[#fffaf2] hover:bg-[#2d7bb8] transition-colors">
                Enviar Mensagem
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3f8ec9]/10 mb-4">
              <svg
                className="w-8 h-8 text-[#3f8ec9]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#0f1f2a] mb-2">Mensagem Enviada!</h3>
            <p className="text-[#8d8c8c] mb-6">
              Obrigado por entrar em contato. Nossa equipe responderá o mais breve possível.
            </p>
            <Button onClick={handleClose} className="bg-[#3f8ec9] text-[#fffaf2] hover:bg-[#2d7bb8] transition-colors">
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
