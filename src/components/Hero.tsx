import { ArrowRight, BadgeCheck, Building2, Shield, Sparkles } from 'lucide-react'

const heroHighlights = [
  'Comunicacion oficial y trazable',
  'Seguimiento visible de incidencias',
  'Base ordenada de residentes',
]

const heroMetrics = [
  { label: 'Comunicados', value: '3 pendientes' },
  { label: 'Incidencias', value: '7 activas' },
  { label: 'Residentes', value: '128 registrados' },
]

export function Hero() {
  return (
    <section className="hero-section section" id="top">
      <div className="hero-copy">
        <span className="eyebrow">Software para administracion residencial</span>
        <h1>Administra tu comunidad con mas orden, claridad y trazabilidad.</h1>
        <p className="hero-description">
          Centraliza comunicados, incidencias y residentes en una sola plataforma.
          Menos caos operativo, mejor experiencia para la comunidad.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#cta">
            Solicitar acceso temprano
            <ArrowRight size={18} />
          </a>
          <a className="button button-secondary" href="#modulos">
            Ver modulos clave
          </a>
        </div>

        <div className="hero-proofbar">
          <div className="hero-proof-item">
            <BadgeCheck size={16} />
            <span>Menos caos operativo</span>
          </div>
          <div className="hero-proof-item">
            <Shield size={16} />
            <span>Mas trazabilidad institucional</span>
          </div>
          <div className="hero-proof-item">
            <Building2 size={16} />
            <span>Listo para edificios y conjuntos</span>
          </div>
        </div>

        <ul className="hero-highlights" aria-label="Diferenciales principales">
          {heroHighlights.map((item) => (
            <li key={item}>
              <Sparkles size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-product" aria-label="Vista previa de la plataforma">
        <div className="product-window">
          <div className="product-window-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="product-shell">
            <aside className="product-sidebar">
              <div className="product-brand">Urbity OS</div>
              <div className="product-nav-item product-nav-item-active">Dashboard</div>
              <div className="product-nav-item">Comunicados</div>
              <div className="product-nav-item">Incidencias</div>
              <div className="product-nav-item">Residentes</div>
            </aside>

            <div className="product-main">
              <div className="product-main-header">
                <div>
                  <small>Panel operativo</small>
                  <h2>Todo lo importante de la comunidad en una sola vista.</h2>
                </div>
                <div className="product-status">Hoy 08:30 AM</div>
              </div>

              <div className="product-metrics">
                {heroMetrics.map((metric) => (
                  <div className="product-metric-card" key={metric.label}>
                    <small>{metric.label}</small>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>

              <div className="product-content-grid">
                <article className="product-card product-card-featured">
                  <small>Comunicado reciente</small>
                  <strong>Mantenimiento de ascensor programado para manana, 8:00 AM.</strong>
                  <p>Enviado a Torre A y Torre B. 86% de residentes ya lo vio.</p>
                </article>

                <article className="product-card">
                  <small>Incidencia abierta</small>
                  <strong>Fuga en parqueadero - prioridad alta</strong>
                  <p>Asignada a mantenimiento. Ultima actualizacion hace 18 min.</p>
                </article>

                <article className="product-card">
                  <small>Actividad de hoy</small>
                  <strong>12 registros actualizados y 4 nuevas solicitudes</strong>
                  <p>Directorio al dia y seguimiento claro para administracion.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
