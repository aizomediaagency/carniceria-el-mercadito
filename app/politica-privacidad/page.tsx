import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Carnicería El Mercadito',
  description: 'Política de privacidad de Carnicería El Mercadito conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
  robots: { index: false, follow: false },
}

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Tratamiento de datos conforme al RGPD (UE) 2016/679 y la LOPDGDD (LO 3/2018)"
      updatedAt="22 de junio de 2026"
    >
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Denominación / Titular:</strong> Francisco Javier Rilo García</li>
        <li><strong>NIF / DNI / CIF:</strong> 50952975V</li>
        <li><strong>Domicilio:</strong> Av. de Ntra. Sra. de Fátima, 3, Carabanchel, 28047 Madrid</li>
        <li><strong>Correo electrónico:</strong> carneselmercaditocarabanchel@gmail.com</li>
        <li><strong>Teléfono / WhatsApp:</strong> +34 675 62 86 88</li>
      </ul>

      <h2>2. Datos que recabamos y cómo los obtenemos</h2>
      <p>
        Este sitio web no dispone de formularios de registro ni áreas de usuario. Los datos
        personales se recaban exclusivamente a través de los siguientes canales:
      </p>
      <ul>
        <li>
          <strong>WhatsApp (+34 675 62 86 88):</strong> cuando el usuario contacta para realizar
          un pedido o consulta, facilitando voluntariamente su nombre, número de teléfono y, en
          caso de envío a domicilio, su dirección postal.
        </li>
        <li>
          <strong>Instagram (@carneselmercaditocarabanchel):</strong> cuando el usuario interactúa
          a través de mensajes directos o comentarios en la plataforma. El tratamiento de datos en
          Instagram está sujeto a las políticas de Meta Platforms.
        </li>
      </ul>

      <h2>3. Finalidades del tratamiento y base jurídica</h2>
      <table>
        <thead>
          <tr>
            <th>Finalidad</th>
            <th>Base jurídica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gestión y tramitación del pedido (cobro, preparación, entrega)</td>
            <td>Ejecución de contrato — art. 6.1.b RGPD</td>
          </tr>
          <tr>
            <td>Atención al cliente y resolución de incidencias</td>
            <td>Interés legítimo — art. 6.1.f RGPD</td>
          </tr>
          <tr>
            <td>Envío de información sobre ofertas y novedades</td>
            <td>Consentimiento del interesado — art. 6.1.a RGPD</td>
          </tr>
          <tr>
            <td>Cumplimiento de obligaciones legales (fiscales, contables)</td>
            <td>Obligación legal — art. 6.1.c RGPD</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Plazo de conservación</h2>
      <p>
        Los datos se conservarán durante el tiempo imprescindible para la finalidad para la que
        fueron recabados y, en todo caso, durante los plazos legalmente exigidos:
      </p>
      <ul>
        <li>Datos de pedido: 5 años (obligaciones mercantiles y fiscales).</li>
        <li>Comunicaciones comerciales: hasta que el interesado revoque su consentimiento.</li>
      </ul>

      <h2>5. Destinatarios y cesiones de datos</h2>
      <p>
        Los datos personales no se cederán a terceros salvo obligación legal. Únicamente se
        comunicarán los datos de envío estrictamente necesarios al servicio de reparto encargado de
        realizar la entrega del pedido.
      </p>
      <p>
        <strong>Transferencias internacionales:</strong> No se realizan transferencias
        internacionales de datos de forma directa. WhatsApp e Instagram son servicios prestados
        por Meta Platforms Ireland Ltd. y pueden implicar transferencias a EE. UU. con las
        garantías previstas en su política de privacidad. El titular no controla dichos
        tratamientos y recomienda consultar las políticas propias de cada plataforma.
      </p>

      <h2>6. Derechos de los interesados</h2>
      <p>
        En virtud del RGPD, el interesado puede ejercer en cualquier momento los siguientes
        derechos:
      </p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos personales se tratan.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión («derecho al olvido»):</strong> solicitar la eliminación de los datos.</li>
        <li><strong>Oposición:</strong> oponerse al tratamiento por razones particulares.</li>
        <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir los datos en formato estructurado y legible.</li>
        <li>
          <strong>Revocación del consentimiento:</strong> retirar en cualquier momento el
          consentimiento prestado, sin que ello afecte a la licitud del tratamiento previo.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, puede dirigirse por escrito a{' '}
        <strong>carneselmercaditocarabanchel@gmail.com</strong>, indicando el derecho que desea ejercer y adjuntando
        una copia de su documento de identidad.
      </p>
      <p>
        Asimismo, tiene derecho a presentar una reclamación ante la{' '}
        <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        El titular adopta las medidas técnicas y organizativas necesarias para garantizar la
        seguridad de los datos personales y prevenir su alteración, pérdida, tratamiento o acceso
        no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos
        almacenados y los riesgos a los que están expuestos.
      </p>
    </LegalPageLayout>
  )
}
