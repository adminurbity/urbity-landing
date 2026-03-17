const painPoints = [
  {
    title: 'Información perdida en WhatsApp',
    description:
      'Los avisos importantes se mezclan con conversaciones y terminan desapareciendo cuando más se necesitan.',
  },
  {
    title: 'Mala comunicación con residentes',
    description:
      'La comunidad siente desorden cuando no sabe dónde consultar novedades, normas o estados de gestión.',
  },
  {
    title: 'Procesos manuales que consumen tiempo',
    description:
      'Excel, papel y chats obligan a repetir trabajo y elevan el riesgo de errores operativos.',
  },
]

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problema">
      <div className="section-heading">
        <span className="eyebrow">El problema</span>
        <h2>Administrar una comunidad no debería sentirse como apagar incendios</h2>
        <p>
          Cuando la operación depende de canales dispersos, el administrador
          pierde tiempo explicando, buscando y corrigiendo lo que nunca debió
          desordenarse.
        </p>
      </div>

      <div className="problem-grid">
        {painPoints.map((item, index) => (
          <article className="problem-card" key={item.title}>
            <span className="problem-index">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
