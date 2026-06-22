import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Aviso Legal | Carnicería El Mercadito',
  description: 'Aviso legal e información del titular del sitio web Carnicería El Mercadito, conforme a la Ley 34/2002 (LSSICE).',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout
      title="Aviso Legal"
      subtitle="Información general del titular conforme a la Ley 34/2002 (LSSICE)"
      updatedAt="22 de junio de 2026"
    >
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSICE), se ponen a disposición
        del usuario los siguientes datos:
      </p>
      <ul>
        <li><strong>Denominación social / Titular:</strong> Francisco Javier Rilo García</li>
        <li><strong>NIF / DNI / CIF:</strong> 50952975V</li>
        <li><strong>Domicilio:</strong> Av. de Ntra. Sra. de Fátima, 3, Carabanchel, 28047 Madrid</li>
        <li><strong>Teléfono / WhatsApp:</strong> +34 675 62 86 88</li>
        <li><strong>Correo electrónico:</strong> carneselmercaditocarabanchel@gmail.com</li>
        <li><strong>Sitio web:</strong> https://carniceriaelmercadito.es</li>
        <li><strong>Actividad:</strong> Comercio al por menor de carnes y productos cárnicos</li>
      </ul>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio web <strong>carniceriaelmercadito.es</strong>,
        de titularidad de Francisco Javier Rilo García. El acceso al sitio web implica la aceptación
        plena de las condiciones aquí expuestas.
      </p>
      <p>
        El titular se reserva el derecho a modificar, en cualquier momento, la presentación,
        configuración y contenido del sitio web, así como las presentes condiciones de uso. El uso
        continuado del sitio tras dichas modificaciones implica la aceptación de los cambios.
      </p>

      <h2>3. Condiciones de acceso y uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado del sitio web y de los contenidos en él
        publicados, con respeto a la legislación vigente, la buena fe y el orden público. Queda
        expresamente prohibido:
      </p>
      <ul>
        <li>Reproducir, distribuir, comunicar públicamente o modificar los contenidos del sitio sin
          autorización expresa del titular.</li>
        <li>Utilizar el sitio con fines ilícitos, lesivos o contrarios a la moral.</li>
        <li>Introducir o difundir virus informáticos u otros elementos que puedan provocar daños.</li>
      </ul>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web —incluyendo textos, fotografías, logotipos, diseños,
        código fuente y elementos gráficos— son propiedad de Francisco Javier Rilo García o de
        terceros que han autorizado expresamente su uso. Dichos contenidos están protegidos por la
        legislación española e internacional en materia de propiedad intelectual e industrial.
      </p>
      <p>
        Queda estrictamente prohibida la reproducción total o parcial de los contenidos sin
        autorización escrita del titular, salvo para uso personal y privado.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no garantiza la disponibilidad continuada del sitio web ni la ausencia de errores
        en los contenidos publicados. No será responsable de los daños que pudieran derivarse de:
      </p>
      <ul>
        <li>Interrupciones técnicas o fallos del servicio ajenos a su control.</li>
        <li>Accesos no autorizados al sitio o al sistema informático del usuario.</li>
        <li>El uso que el usuario haga de los contenidos del sitio.</li>
      </ul>
      <p>
        Los enlaces a sitios web de terceros (Google Maps, Instagram, WhatsApp) se ofrecen a título
        meramente informativo. El titular no es responsable del contenido ni de las políticas de
        privacidad de dichos sitios.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        El presente Aviso Legal se rige íntegramente por la legislación española. Para la resolución
        de cualquier conflicto derivado del acceso o uso de este sitio web, las partes se someten,
        con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y
        Tribunales de la ciudad de Madrid, salvo que la normativa de consumidores y usuarios
        vigente establezca otro fuero imperativo.
      </p>
    </LegalPageLayout>
  )
}
