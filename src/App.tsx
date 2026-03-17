import './App.css'
import { CTASection } from './components/CTASection'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'

const solutionItems = [
  {
    title: 'Comunicados centralizados',
    description:
      'Publica anuncios importantes en un canal claro, visible y trazable para toda la comunidad.',
  },
  {
    title: 'Reportes de incidencias',
    description:
      'Recibe, organiza y da seguimiento a novedades sin depender de mensajes dispersos.',
  },
  {
    title: 'Gestión de residentes',
    description:
      'Mantén información clave de propietarios e inquilinos en una base ordenada y accesible.',
  },
]

const roadmapItems = [
  {
    name: 'Comunicados',
    status: 'Disponible primero',
    description: 'Mensajes oficiales, avisos urgentes y seguimiento de lectura.',
    tone: 'live',
  },
  {
    name: 'Incidencias',
    status: 'Disponible primero',
    description: 'Registro de reportes, prioridades y estado de atención.',
    tone: 'live',
  },
  {
    name: 'Residentes',
    status: 'Disponible primero',
    description: 'Directorio y datos clave de la comunidad en un solo lugar.',
    tone: 'live',
  },
  {
    name: 'Reservas',
    status: 'Próximamente',
    description: 'Agenda de zonas comunes con menos fricción para residentes.',
    tone: 'next',
  },
  {
    name: 'Votaciones',
    status: 'Próximamente',
    description: 'Participación digital para decisiones de la comunidad.',
    tone: 'next',
  },
  {
    name: 'Pagos',
    status: 'Próximamente',
    description: 'Cobros, recordatorios y trazabilidad financiera.',
    tone: 'next',
  },
] as const

function App() {
  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection items={solutionItems} />
        <Features items={roadmapItems} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
