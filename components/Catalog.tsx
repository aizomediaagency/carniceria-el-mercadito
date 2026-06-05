const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Catalog() {
  return (
    <section id="catalogo" className="py-24 bg-wood-800 relative overflow-hidden">
      {/* Foto de fondo con overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/carne2.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.3)' }}
      />
      <div className="absolute inset-0 bg-wood-950/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-wood-300 mb-3">
          Nuestros Productos
        </p>
        <h2 className="section-title-light mb-5">Catálogo de Productos</h2>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-wood-600" />
          <div className="w-2 h-2 bg-wood-400 rotate-45" />
          <div className="h-px w-16 bg-wood-600" />
        </div>

        <p className="font-lato text-cream-500 text-lg leading-relaxed mb-14 max-w-xl mx-auto">
          Descarga nuestro catálogo completo con todos los productos disponibles,
          cortes y precios actualizados.
        </p>

        {/* Tarjeta PDF */}
        <div className="bg-wood-900/60 border border-wood-600 p-10 max-w-sm mx-auto mb-10">
          <div className="w-16 h-16 bg-wood-700 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <h3 className="font-playfair text-xl text-cream-100 mb-1">Lista de Precios</h3>
          <p className="font-lato text-wood-400 text-sm mb-7">PDF · Actualizado regularmente</p>

          <a
            href="https://canva.link/catalogocarniceria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Ver Catálogo
          </a>
        </div>

        {/* WhatsApp alternativo */}
        <p className="font-lato text-wood-500 text-sm mb-5">
          ¿Tienes dudas sobre algún producto?
        </p>
        <a
          href="https://wa.me/34675628688?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20vuestros%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <WhatsAppIcon />
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  )
}
