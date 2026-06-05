const WhatsAppIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'Consulta el Catálogo',
    desc: 'Descarga y revisa nuestro catálogo de productos con todos los cortes disponibles y precios actualizados.',
  },
  {
    number: '02',
    icon: <WhatsAppIcon />,
    title: 'Escríbenos por WhatsApp',
    desc: 'Envíanos tu pedido al 675 62 86 88 con los productos y cantidades. Te confirmamos disponibilidad y precio final.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    title: 'Recibe tu Pedido',
    desc: 'Realizamos el envío a tu domicilio en la Comunidad de Madrid. Producto fresco y en perfectas condiciones.',
  },
]

export default function HowToOrder() {
  return (
    <section id="pedidos" className="py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="section-tag">Proceso de Pedido</p>
          <h2 className="section-title mb-5">Cómo Hacer tu Pedido</h2>
          <div className="h-px w-16 bg-wood-400 mx-auto" />
        </div>

        {/* Pasos */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-wood-700 flex items-center justify-center text-cream-300 group-hover:bg-wood-600 transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 w-7 h-7 bg-cream-100 border-2 border-wood-300 flex items-center justify-center font-lato text-[11px] font-bold text-wood-600">
                  {step.number}
                </span>
              </div>
              <h3 className="font-playfair text-xl text-wood-800 mb-3">{step.title}</h3>
              <p className="font-lato text-wood-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Aviso importante */}
        <div className="max-w-2xl mx-auto border border-wood-600">
          {/* Cabecera */}
          <div className="bg-wood-700 px-8 py-4 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-wood-500" />
            <p className="font-lato text-[10px] tracking-[0.35em] uppercase text-cream-500 flex-shrink-0">
              Información importante
            </p>
            <div className="h-px flex-1 bg-wood-500" />
          </div>

          {/* Cuerpo */}
          <div className="bg-wood-900 px-8 py-8 text-center">
            {/* Iconos destacados */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <p className="text-3xl mb-1">🚚</p>
                <p className="font-lato text-[10px] tracking-widest uppercase text-wood-400">Solo Madrid</p>
              </div>
              <div className="w-px h-10 bg-wood-700" />
              <div className="text-center">
                <p className="font-playfair text-3xl text-cream-200 font-bold mb-1">120 €</p>
                <p className="font-lato text-[10px] tracking-widest uppercase text-wood-400">Pedido mínimo</p>
              </div>
            </div>

            <p className="font-lato text-wood-400 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
              Realizamos entregas en Madrid capital y toda la Comunidad de Madrid.
              No enviamos fuera de la Comunidad.
            </p>

            <a
              href="https://wa.me/34675628688?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hacer Pedido por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
