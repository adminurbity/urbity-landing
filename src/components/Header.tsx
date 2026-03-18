import { useState } from 'react'

const logoSources = ['/logo.png', '/urbity-logo.svg', '/urbity-logo.png']

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

      <a className="button button-secondary" href="#cta">
        Solicitar acceso
      </a>
    </header>
  )
}
