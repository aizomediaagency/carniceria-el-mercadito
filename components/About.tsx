import Image from 'next/image'

const stats = [
  { value: '+30', label: 'Años de experiencia' },
  { value: '100%', label: 'Producto de calidad' },
  { value: <span aria-hidden="true">❤</span>, label: 'Buen trato siempre' },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-[520px] bg-cream-300 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/jefe.png"
                alt="El propietario de Carnicería El Mercadito"
                width={400}
                height={600}
                className="h-full w-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Borde decorativo */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-wood-200 -z-10" />
            {/* Badge año */}
            <div className="absolute -top-5 -left-5 bg-wood-700 text-cream-100 px-5 py-4 text-center shadow-xl">
              <p className="font-playfair text-3xl font-bold leading-none">1995</p>
              <p className="font-lato text-[10px] tracking-widest uppercase mt-1 text-wood-300">Desde</p>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <p className="section-tag">Nuestra Historia</p>
            <h2 className="section-title mb-6">
              Tradición y calidad<br />
              <span className="text-wood-500">desde 1995</span>
            </h2>

            <div className="h-px w-16 bg-wood-400 mb-8" />

            <p className="font-lato text-wood-600 text-lg leading-relaxed mb-5">
              Desde 1995 llevamos sirviendo a las familias de Carabanchel con la mejor calidad
              de carnes. Más de treinta años de tradición, honestidad y buen trato son nuestra
              carta de presentación.
            </p>

            <p className="font-lato text-wood-500 leading-relaxed mb-10">
              Una carnicería de barrio donde encontrarás siempre el mejor producto, seleccionado
              con cuidado y servido con el trato cercano de toda la vida. En El Mercadito,
              cada cliente es parte de nuestra familia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-3xl text-wood-700 font-bold mb-1">{stat.value}</p>
                  <p className="font-lato text-[10px] tracking-wide uppercase text-wood-500 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
