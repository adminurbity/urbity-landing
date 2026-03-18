import { AlertTriangle, Clock3, MessagesSquare } from 'lucide-react'

const painPoints = [
  {
    title: 'Informacion perdida en chats',
    description:
      'Avisos urgentes y decisiones importantes terminan enterrados en conversaciones informales.',
    icon: MessagesSquare,
  },
  {
    title: 'Procesos manuales que drenan tiempo',
    description:
      'Excel, papel y seguimiento por llamada hacen que la operacion sea mas lenta y menos confiable.',
    icon: Clock3,
  },
  {
    title: 'Falta de visibilidad para residentes',
    description:
      'Cuando no hay un canal claro, aumentan las dudas, las quejas y la sensacion de desorden.',
    icon: AlertTriangle,
  },
]

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problema">
      <div className="section-heading">
        <span className="eyebrow">El problema actual</span>
        <h2>La administracion pierde credibilidad cuando la operacion depende de improvisacion.</h2>
        <p>
          Muchas comunidades operan con herramientas que no fueron pensadas para este trabajo.
          El resultado es ruido, retrabajo y una experiencia poco profesional.
        </p>
      </div>

      <div className="problem-grid">
        {painPoints.map((item) => {
          const Icon = item.icon

          return (
            <article className="problem-card" key={item.title}>
              <div className="problem-icon">
                <Icon size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
