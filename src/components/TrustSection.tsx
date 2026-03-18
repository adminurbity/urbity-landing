import { BadgeCheck, Building, House, Landmark, Sparkles } from 'lucide-react'

const audienceItems = [
  {
    title: 'Conjuntos residenciales',
    description: 'Centraliza comunicados, incidencias y visibilidad operativa para comunidades activas.',
    icon: House,
  },
  {
    title: 'Edificios y torres',
    description: 'Reduce dependencia de chats informales y formaliza la comunicacion con residentes.',
    icon: Building,
  },
  {
    title: 'Coworkings y propiedades mixtas',
    description: 'Ordena novedades, ocupantes y seguimiento sin inflar la operacion administrativa.',
    icon: Landmark,
  },
]

const claims = [
  'Disenado para operaciones con alta frecuencia de comunicados y reportes.',
  'Pensado para administraciones que quieren verse mas modernas y confiables.',
  'Listo para iniciar con acceso temprano y evolucionar hacia un SaaS completo.',
]

export function TrustSection() {
  return (
    <section className="section trust-section" id="para-quien">
      <div className="trust-shell">
        <div className="trust-copy">
          <span className="eyebrow eyebrow-dark">Confianza y enfoque</span>
          <h2>Urbity esta pensado para equipos que necesitan orden antes de crecer.</h2>
          <p>
            La propuesta se enfoca en casos donde la operacion diaria exige comunicar,
            responder y mantener informacion accesible sin improvisacion constante.
          </p>

          <ul className="trust-claims">
            {claims.map((claim) => (
              <li key={claim}>
                <BadgeCheck size={18} />
                <span>{claim}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trust-panel">
          <div className="trust-panel-header">
            <div className="trust-icon-wrap">
              <Sparkles size={20} />
            </div>
            <div>
              <strong>Para quien es</strong>
              <span>Comunidades que quieren operar con mas criterio</span>
            </div>
          </div>

          <div className="trust-grid">
            {audienceItems.map((item) => {
              const Icon = item.icon

              return (
                <article className="trust-card" key={item.title}>
                  <div className="trust-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
