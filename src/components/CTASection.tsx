import { useState } from 'react'
import type { FormEvent } from 'react'

type LeadFormData = {
  name: string
  email: string
}

type CTASectionProps = {
  onSubmitLead?: (lead: LeadFormData) => Promise<void> | void
}

export function CTASection({ onSubmitLead }: CTASectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const lead = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
    }

    setIsLoading(true)

    try {
      await onSubmitLead?.(lead)
      setIsSubmitted(true)
      event.currentTarget.reset()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section cta-section" id="cta">
      <div className="cta-copy">
        <span className="eyebrow">Acceso anticipado</span>
        <h2>Sé de los primeros en usar Urbity</h2>
        <p>
          Si administras una comunidad y quieres ordenar la operación antes que
          otros, deja tus datos. Te contactaremos para acceso temprano.
        </p>
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

        <button className="button button-primary button-full" type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Quiero acceso'}
        </button>

        <p className="form-note">
          {isSubmitted
            ? 'Recibido. La integración final del lead puede conectarse a tu CRM o backend.'
            : 'Sin ruido. Solo pedimos lo necesario para validar interés real.'}
        </p>
      </form>
    </section>
  )
}
