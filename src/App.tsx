import type { LucideIcon } from 'lucide-react'
import {
  BellRing,
  Building2,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  MessageSquareDot,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react'
import './App.css'
import { BenefitSection } from './components/BenefitSection'
import { CTASection } from './components/CTASection'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { TrustSection } from './components/TrustSection'

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

type BenefitItem = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  tone: 'teal' | 'blue' | 'amber'
  icon: LucideIcon
}

const featureItems: FeatureItem[] = [
  {
    title: 'Comunicados centralizados',
    description:
      'Publica anuncios oficiales, confirma lectura y evita repetir el mismo mensaje en multiples chats.',
    icon: BellRing,
  },
  {
    title: 'Incidencias con seguimiento',
    description:
      'Recibe reportes, asigna prioridades y deja visible el estado de cada novedad para toda la operacion.',
    icon: Wrench,
  },
  {
    title: 'Base de residentes actualizada',
    description:
      'Consolida propietarios, arrendatarios y datos clave sin depender de hojas sueltas o cadenas de correo.',
    icon: Users,
  },
  {
    title: 'Tablero operativo',
    description:
      'Ve lo pendiente, lo urgente y lo resuelto en una sola vista para administrar con criterio y rapidez.',
    icon: LayoutDashboard,
  },
  {
    title: 'Historial y trazabilidad',
    description:
      'Cada accion queda registrada para responder mejor, reducir fricciones y mantener orden institucional.',
    icon: ClipboardList,
  },
  {
    title: 'Base para modulos futuros',
    description:
      'Urbity puede crecer hacia reservas, votaciones, contabilidad y pagos sin rehacer los procesos desde cero.',
    icon: CreditCard,
  },
]

const benefitItems: BenefitItem[] = [
  {
    eyebrow: 'Ahorro de tiempo',
    title: 'Menos trabajo manual, menos seguimiento por WhatsApp.',
    description:
      'Urbity convierte tareas repetitivas en flujos claros para que la administracion invierta su tiempo en decisiones y no en perseguir informacion.',
    bullets: [
      'Comunicados con canal oficial y ordenado',
      'Reportes con estado visible para residentes y equipo',
      'Menos retrabajo por mensajes repetidos',
    ],
    tone: 'teal',
    icon: MessageSquareDot,
  },
  {
    eyebrow: 'Contabilidad',
    title: 'Mas transparencia financiera para edificios y conjuntos.',
    description:
      'La informacion contable deja de vivir en archivos dispersos y pasa a una plataforma pensada para dar claridad, control y confianza a la comunidad.',
    bullets: [
      'Visibilidad clara de movimientos y estados financieros',
      'Mayor transparencia en la contabilidad de la administracion',
      'Pagos de administracion mas ordenados y faciles de seguir',
    ],
    tone: 'blue',
    icon: Building2,
  },
  {
    eyebrow: 'Confianza',
    title: 'Mas claridad para administradores, consejo y residentes.',
    description:
      'Cuando todos entienden donde consultar novedades y estados, baja la friccion y sube la percepcion de control y profesionalismo.',
    bullets: [
      'Menos confusion sobre que se reporto o resolvio',
      'Mejor experiencia para residentes',
      'Operacion mas presentable frente a la comunidad',
    ],
    tone: 'amber',
    icon: ShieldCheck,
  },
]

async function submitLead(lead: { name: string; email: string; phone: string }) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    let errorMessage = 'No pudimos recibir tus datos. Intenta de nuevo.'

    try {
      const data = (await response.json()) as { error?: string }
      if (data.error) {
        errorMessage = data.error
      }
    } catch {
      // Ignore invalid JSON responses and keep the fallback message.
    }

    throw new Error(errorMessage)
  }
}

function App() {
  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features items={featureItems} />
        <BenefitSection items={benefitItems} />
        <TrustSection />
        <CTASection onSubmitLead={submitLead} />
      </main>
      <Footer />
    </div>
  )
}

export default App
