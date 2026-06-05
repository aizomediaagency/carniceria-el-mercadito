import Image from 'next/image'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Carnicería El Mercadito — Carabanchel, Madrid"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-wood-950/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-wood-950/30 via-transparent to-wood-950/75" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        {/* Línea superior */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-cream-600" />
          <span className="font-lato text-[11px] tracking-[0.35em] uppercase text-cream-500">
            Carabanchel · Madrid · Desde 1995
          </span>
          <div className="h-px w-12 bg-cream-600" />
        </div>

        {/* Título principal */}
        <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream-50 mb-5 leading-none">
          El Mercadito
        </h1>

        {/* Ornamento */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-wood-400" />
          <div className="w-2 h-2 bg-wood-300 rotate-45" />
          <div className="h-px w-20 bg-wood-400" />
        </div>

        {/* Subtítulo */}
        <p className="font-lato text-xl md:text-2xl text-cream-400 mb-14 leading-relaxed max-w-2xl mx-auto font-light">
          Carnicería tradicional de calidad y buen trato
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://canva.link/catalogocarniceria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cream w-full sm:w-auto"
          >
            Ver Catálogo
          </a>
          <a
            href="https://wa.me/34675628688"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon />
            Pedir por WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#nosotros"
        aria-label="Ir a la sección Nosotros"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <span className="font-lato text-[11px] tracking-[0.35em] uppercase text-cream-500 group-hover:text-cream-200 transition-colors">
          Descubre
        </span>
        <div className="w-10 h-10 border border-cream-600 rounded-full flex items-center justify-center animate-bounce group-hover:border-cream-200 transition-colors">
          <svg className="w-4 h-4 text-cream-500 group-hover:text-cream-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </a>
    </section>
  )
}
