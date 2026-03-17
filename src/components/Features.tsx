type FeatureItem = {
  name: string
  status: string
  description: string
  tone: 'live' | 'next'
}

type FeaturesProps = {
  items: readonly FeatureItem[]
}

export function Features({ items }: FeaturesProps) {
  return (
    <section className="section features-section" id="modulos">
      <div className="section-heading">
        <span className="eyebrow">Módulos escalables</span>
        <h2>Empieza con lo esencial y crece con la operación de tu comunidad</h2>
        <p>
          La propuesta inicial resuelve el dolor más urgente hoy y deja claro
          que Urbity evolucionará como un producto SaaS serio.
        </p>
      </div>

      <div className="roadmap">
        {items.map((item) => (
          <article className={`roadmap-card roadmap-card-${item.tone}`} key={item.name}>
            <div className="roadmap-meta">
              <h3>{item.name}</h3>
              <span>{item.status}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
