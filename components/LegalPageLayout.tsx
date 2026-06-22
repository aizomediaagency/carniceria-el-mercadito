import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

interface LegalPageLayoutProps {
  title: string
  subtitle: string
  updatedAt: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, subtitle, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <main>
      <Header />

      {/* Hero oscuro */}
      <section className="bg-wood-950 pt-32 pb-16 px-6 border-b border-wood-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-lato text-[10px] tracking-[0.4em] uppercase text-wood-400 mb-4">
            Información legal
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-100 leading-tight mb-4">
            {title}
          </h1>
          <p className="font-lato text-wood-300 text-sm">{subtitle}</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-20 bg-wood-700" />
            <div className="w-1.5 h-1.5 bg-wood-500 rotate-45" />
            <div className="h-px w-20 bg-wood-700" />
          </div>
        </div>
      </section>

      {/* Contenido */}
      <article className="bg-cream-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-lato text-xs text-wood-500 mb-10 pb-6 border-b border-wood-100">
            Última actualización: {updatedAt}
          </p>

          <div className="legal-content">
            {children}
          </div>

        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
