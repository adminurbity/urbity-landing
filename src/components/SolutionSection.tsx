type SolutionItem = {
  title: string
  description: string
}

type SolutionSectionProps = {
  items: SolutionItem[]
}

export function SolutionSection({ items }: SolutionSectionProps) {
  return (
    <section className="section solution-section" id="solucion">
      <div className="section-heading">
        <span className="eyebrow">La solución</span>
        <h2>Urbity reúne la operación de la comunidad en una plataforma clara</h2>
        <p>
          Menos improvisación, más trazabilidad. Urbity convierte tareas
          dispersas en flujos simples para comunicar, resolver y administrar.
        </p>
      </div>

      <div className="solution-grid">
        {items.map((item) => (
          <article className="solution-card" key={item.title}>
            <div className="solution-icon" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
