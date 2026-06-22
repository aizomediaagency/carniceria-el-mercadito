import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies | Carnicería El Mercadito',
  description: 'Información sobre el uso de cookies en el sitio web de Carnicería El Mercadito conforme al artículo 22.2 de la LSSICE.',
  robots: { index: false, follow: false },
}

export default function PoliticaCookiesPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      subtitle="Información sobre cookies conforme al art. 22.2 LSSICE y las directrices de la AEPD"
      updatedAt="22 de junio de 2026"
    >
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
        del usuario cuando este los visita. Sirven para recordar preferencias, analizar el
        comportamiento de navegación o habilitar determinadas funcionalidades.
      </p>

      <h2>2. Cookies utilizadas en este sitio web</h2>
      <p>
        Este sitio web <strong>no instala cookies propias</strong> de sesión ni persistentes.
        No se utilizan herramientas de analítica web (Google Analytics u otras), ni se muestra
        publicidad comportamental.
      </p>
      <p>
        Sin embargo, el sitio incorpora contenido de terceros que puede instalar sus propias
        cookies:
      </p>

      <h3>Google Maps</h3>
      <p>
        La sección «Contacto» incluye un mapa de <strong>Google Maps</strong> (Google LLC /
        Google Ireland Ltd.). Al cargar el mapa, Google puede instalar cookies en el dispositivo
        del usuario para el funcionamiento del servicio. Estas cookies están fuera del control
        del titular de este sitio.
      </p>
      <ul>
        <li><strong>Proveedor:</strong> Google LLC / Google Ireland Ltd.</li>
        <li><strong>Finalidad:</strong> Funcionamiento del servicio de mapas y métricas internas de Google.</li>
        <li>
          <strong>Más información:</strong>{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de Google
          </a>
        </li>
      </ul>

      <h3>WhatsApp / Meta</h3>
      <p>
        El sitio incluye enlaces al servicio <strong>WhatsApp</strong> (Meta Platforms). Al hacer
        clic en dichos enlaces y acceder a WhatsApp, la plataforma puede tratar datos conforme a
        sus propias políticas. Este sitio no embebe código de seguimiento de Meta.
      </p>
      <ul>
        <li>
          <strong>Más información:</strong>{' '}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de WhatsApp
          </a>
        </li>
      </ul>

      <h3>Instagram / Meta</h3>
      <p>
        El sitio enlaza al perfil de Instagram{' '}
        <strong>@carneselmercaditocarabanchel</strong>. Instagram no está embebido directamente
        en el sitio, por lo que no se instalan cookies de Instagram al navegar por él.
      </p>

      <h2>3. Cómo gestionar o desactivar las cookies</h2>
      <p>
        Puede configurar su navegador para bloquear, eliminar o recibir avisos sobre las cookies.
        Tenga en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento de
        algunos servicios (como el mapa de Google).
      </p>
      <p>Instrucciones según navegador:</p>
      <ul>
        <li>
          <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos
          de sitios
        </li>
        <li>
          <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio
        </li>
        <li>
          <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web
        </li>
        <li>
          <strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies
        </li>
      </ul>
      <p>
        También puede optar por no participar en el uso de cookies de Google a través de{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out
        </a>{' '}
        o mediante la configuración de anuncios en{' '}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
          Google Ad Settings
        </a>.
      </p>

      <h2>4. Actualizaciones de esta política</h2>
      <p>
        El titular se reserva el derecho a actualizar la presente Política de Cookies en función
        de cambios legislativos, tecnológicos o en la configuración del sitio. Se recomienda
        revisar esta página periódicamente. La fecha de última actualización figura al inicio del
        documento.
      </p>

      <h2>5. Más información</h2>
      <p>
        Para cualquier consulta relacionada con el uso de cookies, puede contactar en{' '}
        <strong>carneselmercaditocarabanchel@gmail.com</strong> o consultar las directrices de la Agencia Española
        de Protección de Datos en{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>.
      </p>
    </LegalPageLayout>
  )
}
