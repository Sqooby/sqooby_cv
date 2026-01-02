'use client'

import { motion } from 'framer-motion'
import { Mail, Send, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form data:', data)
    setSubmitStatus('success')
    setIsSubmitting(false)
    reset()

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            Skontaktuj <span className="text-gradient">się</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Masz pomysł na projekt lub po prostu chcesz pogadać? Śmiało pisz!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold mb-6 text-gradient">
                Stwórzmy coś niesamowitego razem
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Czy masz pytanie, propozycję projektu, czy po prostu chcesz się przywitać,
                postaram się odpowiedzieć jak najszybciej.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'michal.basznianin3@gmail.com',
                  href: 'mailto:michal.basznianin3@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+48 783 781 508',
                  href: 'tel:+48783781508',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Rzeszów, Poland',
                  href: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-xl hover:glass-strong transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-medium group-hover:text-accent-purple transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              className="relative p-8 glass rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-full blur-2xl" />
              <p className="relative text-slate-300 italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="relative text-sm text-slate-500 mt-2">- Peter Drucker</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Imię
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="Twoje imię"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="twoj@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Wiadomość
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent-purple transition-colors resize-none"
                  placeholder="Opowiedz mi o swoim projekcie..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Wyślij wiadomość</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center"
                >
                  Wiadomość wysłana pomyślnie! Odezwę się wkrótce.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center"
                >
                  Coś poszło nie tak. Spróbuj ponownie.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
