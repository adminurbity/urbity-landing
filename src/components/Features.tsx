import type { LucideIcon } from 'lucide-react'

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

type FeaturesProps = {
  items: readonly FeatureItem[]
}

export function Features({ items }: FeaturesProps) {
  return (
    <section className="section features-section" id="modulos">
      <div className="section-heading section-heading-wide">
        <span className="eyebrow">Modulos clave</span>
        <h2>Funciones pensadas para resolver el trabajo real de una administracion.</h2>
        <p>
          La propuesta combina claridad visual, estructura y capacidad de crecimiento para
          que Urbity se perciba como una solucion seria desde el primer vistazo.
        </p>
      </div>

      <div className="feature-grid">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article className="feature-card" key={item.title}>
              <div className="feature-icon">
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
