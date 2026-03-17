const heroStats = [
  'Menos mensajes perdidos',
  'Más claridad operativa',
  'Un solo lugar para administrar',
]

export function Hero() {
  return (
    <section className="hero-section section" id="top">
      <div className="hero-copy">
        <span className="eyebrow">Validación temprana para administradores</span>
        <h1>Gestiona tu comunidad sin caos</h1>
        <p className="hero-description">
          Centraliza comunicados, incidencias y administración en un solo lugar.
          Olvídate de WhatsApp y Excel.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#cta">
            Solicitar acceso anticipado
          </a>
          <p className="hero-proof">
            Diseñado para edificios, condominios y conjuntos residenciales.
          </p>
        </div>

        <ul className="hero-stats" aria-label="Beneficios principales">
          {heroStats.map((stat) => (
            <li key={stat}>{stat}</li>
          ))}
        </ul>
      </div>

      <div className="hero-panel" aria-label="Vista previa del producto">
        <div className="hero-panel-card hero-panel-primary">
          <span className="panel-label">Hoy en Urbity</span>
          <h2>Todo lo importante vive en un flujo ordenado</h2>
          <div className="signal-list">
            <div>
              <strong>Comunicado urgente</strong>
              <span>Mantenimiento de ascensor informado a toda la torre</span>
            </div>
            <div>
              <strong>Incidencia reportada</strong>
              <span>Fuga en parqueadero con estado y seguimiento visible</span>
            </div>
            <div>
              <strong>Residente actualizado</strong>
              <span>Nuevo arrendatario registrado sin hojas sueltas</span>
            </div>
          </div>
        </div>

        <div className="hero-panel-card hero-panel-secondary">
          <span className="panel-label">Antes</span>
          <p>
            Mensajes repetidos, archivos perdidos y tareas críticas atrapadas en
            chats.
          </p>
        </div>
      </div>
    </section>
  )
}
