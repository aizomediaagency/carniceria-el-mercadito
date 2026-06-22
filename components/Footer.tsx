import Image from 'next/image'

const links = [
  { href: '#nosotros', label: 'Nosotros'   },
  { href: '#catalogo', label: 'Catálogo'   },
  { href: '#pedidos',  label: 'Cómo Pedir' },
  { href: '#horarios', label: 'Horarios'   },
  { href: '#contacto', label: 'Contacto'   },
]

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* ── Pre-footer CTA — imagen de fondo ── */}
      <section className="relative overflow-hidden">

        {/* Imagen de fondo */}
        <Image
          src="/images/carne-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Overlays encadenados para oscurecer sin perder textura */}
        <div className="absolute inset-0 bg-wood-950/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-950/50 via-transparent to-wood-950/85" />
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* Contenido */}
        <div className="relative z-10 py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto">

            {/* Ornamento superior */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-24 bg-wood-600/60" />
              <div className="w-2 h-2 bg-wood-400 rotate-45 flex-shrink-0" />
              <div className="h-px w-24 bg-wood-600/60" />
            </div>

            <p className="font-lato text-[10px] tracking-[0.45em] uppercase text-wood-300 mb-6">
              ¿Listo para pedir?
            </p>

            <h2
              className="font-playfair text-cream-100 leading-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              Carne de calidad,<br />
              <span className="text-wood-300 italic">hoy en tu mesa</span>
            </h2>

            <p className="font-lato text-cream-400 leading-relaxed mb-12 max-w-md mx-auto" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
              Haz tu pedido por WhatsApp y te lo llevamos a domicilio
              en toda la Comunidad de Madrid.
            </p>

            {/* Datos clave inline */}
            <div className="inline-flex items-center justify-center gap-8 mb-12 border border-wood-500/60 px-10 py-5 bg-wood-950/80 backdrop-blur-sm">
              <div className="text-center">
                <p className="font-playfair text-3xl text-cream-100 font-bold leading-none mb-1">120 €</p>
                <p className="font-lato text-[9px] tracking-widest uppercase text-wood-400">Pedido mínimo</p>
              </div>
              <div className="w-px h-12 bg-wood-600" />
              <div className="text-center">
                <p className="font-playfair text-3xl text-cream-100 font-bold leading-none mb-1">Madrid</p>
                <p className="font-lato text-[9px] tracking-widest uppercase text-wood-400">Comunidad entera</p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://wa.me/34675628688?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-12 py-4 animate-pulse-cta"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Hacer mi Pedido Ahora
              </a>
            </div>

            {/* Ornamento inferior */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-24 bg-wood-800/80" />
              <div className="w-1.5 h-1.5 bg-wood-700 rotate-45 flex-shrink-0" />
              <div className="h-px w-24 bg-wood-800/80" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer principal ── */}
      <footer className="bg-wood-950 py-14 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-wood-800">

            {/* Marca */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="El Mercadito"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <div>
                  <p className="font-playfair text-cream-100 text-xl font-bold leading-none">El Mercadito</p>
                  <p className="font-lato text-[10px] tracking-widest uppercase text-wood-500 mt-0.5">
                    Carnicería Tradicional
                  </p>
                </div>
              </div>
              <p className="font-lato text-wood-400 text-sm leading-relaxed">
                Carabanchel, Madrid.<br />
                Treinta años eligiendo solo lo mejor<br />
                para las familias de nuestro barrio.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <p className="font-lato text-[10px] tracking-widest uppercase text-wood-600 mb-4">Secciones</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-lato text-sm text-wood-400 hover:text-cream-300 transition-colors duration-300 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-wood-400 transition-all duration-300 overflow-hidden" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto rápido */}
            <div>
              <p className="font-lato text-[10px] tracking-widest uppercase text-wood-600 mb-4">Contacto</p>
              <div className="space-y-3">
                <p className="font-lato text-wood-400 text-sm leading-relaxed">
                  Av. de Ntra. Sra. de Fátima, 3<br />
                  Carabanchel, 28047 Madrid
                </p>
                <a
                  href="https://wa.me/34675628688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-sm text-[#25D366] hover:text-green-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={WA_PATH} />
                  </svg>
                  675 62 86 88
                </a>
                <a
                  href="https://www.instagram.com/carneselmercaditocarabanchel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-sm text-wood-400 hover:text-cream-300 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @carneselmercaditocarabanchel
                </a>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            <p className="font-lato text-xs text-wood-700">
              © {year} Carnicería El Mercadito. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 font-lato text-xs text-wood-600">
              <a href="/aviso-legal" className="hover:text-wood-400 transition-colors duration-300">Aviso Legal</a>
              <span className="text-wood-800">·</span>
              <a href="/politica-privacidad" className="hover:text-wood-400 transition-colors duration-300">Privacidad</a>
              <span className="text-wood-800">·</span>
              <a href="/politica-cookies" className="hover:text-wood-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
