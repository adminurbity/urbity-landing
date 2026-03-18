import { useState } from 'react'

const logoSources = ['/logo.png', '/urbity-logo.svg', '/urbity-logo.png']

const navItems = [
  { href: '#modulos', label: 'Producto' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#para-quien', label: 'Para quien' },
]

export function Header() {
  const [logoIndex, setLogoIndex] = useState(0)
  const [showFallback, setShowFallback] = useState(false)

  const handleLogoError = () => {
    const nextIndex = logoIndex + 1

    if (nextIndex < logoSources.length) {
      setLogoIndex(nextIndex)
      return
    }

    setShowFallback(true)
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Urbity inicio">
        {showFallback ? (
          <div className="brand-fallback">
            <strong>Urbity</strong>
          </div>
        ) : (
          <img
            className="brand-logo"
            src={logoSources[logoIndex]}
            alt="Urbity"
            onError={handleLogoError}
          />
        )}
      </a>

      <nav className="site-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-ghost" href="#cta">
        Solicitar demo
      </a>
    </header>
  )
}
