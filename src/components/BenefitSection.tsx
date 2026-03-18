import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

type BenefitItem = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  tone: 'teal' | 'blue' | 'amber'
  icon: LucideIcon
}

type BenefitSectionProps = {
  items: BenefitItem[]
}

export function BenefitSection({ items }: BenefitSectionProps) {
  return (
    <section className="section benefit-section" id="beneficios">
      <div className="section-heading section-heading-wide">
        <span className="eyebrow">Beneficios reales</span>
        <h2>Una plataforma clara para que administrar se vea y se sienta mas profesional.</h2>
        <p>
          Urbity no vende promesas vagas. Mejora tareas concretas que hoy consumen tiempo,
          generan ruido y afectan la percepcion de la comunidad.
        </p>
      </div>

      <div className="benefit-stack">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <article
              className={`benefit-row benefit-row-${item.tone} ${index % 2 === 1 ? 'benefit-row-reverse' : ''}`}
              key={item.title}
            >
              <div className="benefit-copy">
                <span className="eyebrow eyebrow-soft">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul className="benefit-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <ArrowRight size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="benefit-visual" aria-hidden="true">
                <div className="benefit-visual-header">
                  <div className="benefit-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <strong>{item.eyebrow}</strong>
                    <span>Operacion mas clara para tu comunidad</span>
                  </div>
                </div>

                <div className="benefit-visual-body">
                  <div className="metric-card">
                    <small>Flujo recomendado</small>
                    <strong>Reportar, comunicar y cerrar</strong>
                    <span>Todo en una sola experiencia para el administrador.</span>
                  </div>
                  <div className="metric-strip">
                    <span>Menos friccion</span>
                    <span>Mas trazabilidad</span>
                    <span>Mejor percepcion</span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
