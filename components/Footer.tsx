import Image from 'next/image'

const links = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#pedidos', label: 'Cómo Pedir' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-950 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-wood-800">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="El Mercadito" width={44} height={44} className="object-contain" />
              <div>
                <p className="font-playfair text-cream-100 text-xl font-bold leading-none">El Mercadito</p>
                <p className="font-lato text-[10px] tracking-widest uppercase text-wood-500 mt-0.5">
                  Carnicería Tradicional
                </p>
              </div>
            </div>
            <p className="font-lato text-wood-400 text-sm leading-relaxed">
              Carabanchel, Madrid.<br />
              Calidad y buen trato desde 1995.
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
                    className="font-lato text-sm text-wood-400 hover:text-cream-300 transition-colors"
                  >
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
                className="block font-lato text-sm text-[#25D366] hover:text-green-400 transition-colors"
              >
                WhatsApp: 675 62 86 88
              </a>
              <a
                href="https://www.instagram.com/carneselmercaditocarabanchel/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-lato text-sm text-wood-400 hover:text-cream-300 transition-colors"
              >
                @carneselmercaditocarabanchel
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-lato text-xs text-wood-700">
            © {year} Carnicería El Mercadito. Todos los derechos reservados.
          </p>
          <p className="font-lato text-xs text-wood-800">
            Envíos solo en Madrid · Pedido mínimo 120 €
          </p>
        </div>

      </div>
    </footer>
  )
}
