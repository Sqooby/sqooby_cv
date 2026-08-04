'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Blob } from '@/components/ds/Blob'
import { Button } from '@/components/ds/Button'
import { Card } from '@/components/ds/Card'
import { Input } from '@/components/ds/Input'
import { Textarea } from '@/components/ds/Textarea'

const formSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  email: z.string().email('Niepoprawny adres email'),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków'),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'michal.basznianin3@gmail.com', href: 'mailto:michal.basznianin3@gmail.com' },
  { icon: Phone, label: 'Telefon', value: '+48 783 781 508', href: 'tel:+48783781508' },
  { icon: MapPin, label: 'Lokalizacja', value: 'Rzeszów, Polska', href: undefined },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form data:', data)
    setSent(true)
    setIsSubmitting(false)
    reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-section">
      <div className="container-page flex flex-col gap-12">
        {/* The one dark section per page — the closing slab */}
        <div className="relative overflow-hidden rounded-media border-2 border-ink-900 bg-ink-900 px-8 py-20 text-center text-paper-000 shadow-sticker-lg">
          <Blob
            palette="sunset"
            size={620}
            opacity={0.55}
            className="absolute left-1/2 top-[-30%] z-0 -translate-x-1/2"
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="loop-eyebrow !text-paper-300">05 / KONTAKT</span>
            <h2 className="max-w-[14ch] text-display-1" style={{ letterSpacing: '-0.045em' }}>
              Zróbmy coś głośnego
            </h2>
            <p className="max-w-[46ch] text-body text-paper-300">
              Masz projekt, ofertę albo pytanie? Czytam wszystko i odpowiadam
              w dwa dni robocze — nawet jeśli odpowiedź brzmi nie.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                tone="paper"
                size="lg"
                href="mailto:michal.basznianin3@gmail.com"
                icon={<ArrowRight size={18} strokeWidth={2} />}
              >
                Napisz maila
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="flex items-center gap-4 !p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink-900 bg-butter-100">
                  <item.icon size={18} strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="loop-eyebrow">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block truncate font-bold text-body-sm text-blue-500 no-underline hover:text-lilac-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-bold text-body-sm text-ink-900">{item.value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="!p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="Imię"
                  placeholder="Twoje imię"
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="twoj@email.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>
              <Textarea
                label="Wiadomość"
                rows={5}
                placeholder="Opowiedz mi o swoim projekcie…"
                error={errors.message?.message}
                {...register('message')}
              />
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<Send size={16} strokeWidth={2} />}
                >
                  {isSubmitting ? 'Wysyłanie…' : 'Wyślij'}
                </Button>
                {sent && (
                  <span className="font-mono text-caption uppercase tracking-eyebrow text-mint-500">
                    Wysłane — odezwę się wkrótce
                  </span>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
