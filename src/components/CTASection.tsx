import { BadgeCheck, Zap } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

type LeadFormData = {
  name: string
  email: string
  phone: string
}

type CTASectionProps = {
  onSubmitLead?: (lead: LeadFormData) => Promise<void> | void
}

export function CTASection({ onSubmitLead }: CTASectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    const formData = new FormData(form)
    const lead = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? '').trim(),
    }

    const phonePattern = /^3\d{9}$/
    if (!phonePattern.test(lead.phone)) {
      setIsSubmitted(false)
      setErrorMessage('Ingresa un celular valido de 10 digitos. Ejemplo: 3101000102.')
      return
    }

    setIsLoading(true)
    setErrorMessage(null)

    try {
      await onSubmitLead?.(lead)
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      setIsSubmitted(false)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'No pudimos enviar tus datos. Intenta de nuevo.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section cta-section" id="cta">
      <div className="cta-copy">
        <span className="eyebrow">Acceso anticipado</span>
        <h2>Solicita acceso y empieza a operar con una imagen mas profesional.</h2>
        <p>
          Si administras edificios, conjuntos o espacios compartidos, deja tus
          datos y conversemos sobre como implementar Urbity en tu operacion.
        </p>

        <div className="cta-points">
          <div className="cta-point">
            <BadgeCheck size={18} />
            <span>Respuesta directa para acceso temprano</span>
          </div>
          <div className="cta-point">
            <Zap size={18} />
            <span>Enfoque en administraciones con necesidad real</span>
          </div>
        </div>
      </div>

      <form className="lead-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Nombre</span>
          <input name="name" type="text" placeholder="Tu nombre" required />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="admin@edificio.com"
            required
          />
        </label>

        <label className="field">
          <span>Celular</span>
          <input
            name="phone"
            type="tel"
            placeholder="3101001234"
            inputMode="numeric"
            pattern="3[0-9]{9}"
            maxLength={10}
            required
          />
        </label>

        <button
          className="button button-primary button-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Quiero acceso'}
        </button>

        <p className="form-note">
          {isSubmitted
            ? 'Recibido. Te contactaremos pronto.'
            : errorMessage ??
              'Sin ruido. Solo pedimos lo necesario para validar interes real.'}
        </p>
      </form>
    </section>
  )
}
