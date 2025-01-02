import Link from 'next/link'
import { HeroCustom } from '../components/HeroVariant'

export const metadata = {
  title: 'Política de privacidad',
  description:
    'Políticas de privacidad de los servicios relacionados al AmbientSensorESP desarrollado por JonathanBytes',
}

export default function About() {
  return (
    <>
      <HeroCustom title={'Política de privacidad'} />
      <main>
        <article>
          <section>
            <h2>1. Introducción</h2>
            <p>
              En AmbientSensorESP, nos comprometemos a proteger su privacidad.
              Esta política de privacidad describe cómo recopilamos, utilizamos
              y protegemos los datos personales relacionados con el uso de
              nuestros dispositivos. Al utilizar AmbientSensorESP, usted acepta
              los términos de esta política.
            </p>
          </section>

          <section>
            <h2>2. Datos que Recopilamos</h2>
            <p>
              Para el funcionamiento del servicio, recopilamos los siguientes
              datos:
            </p>
            <ul>
              <li>
                <strong>Datos de sensores:</strong> Registros de temperatura y
                humedad de los últimos 2 meses.
              </li>
              <li>
                <strong>Datos del usuario:</strong> Número de teléfono del
                usuario para enviar notificaciones.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Propósito del Uso de Datos</h2>
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul>
              <li>
                Monitorear las condiciones ambientales registradas por los
                dispositivos.
              </li>
              <li>
                Notificar al usuario mediante mensajes de WhatsApp cuando se
                alcanza un umbral configurado.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Compartición de Datos</h2>
            <p>
              No compartimos ningún dato recopilado con terceros. Todos los
              datos son utilizados únicamente por AmbientSensorESP para los
              fines mencionados anteriormente.
            </p>
          </section>

          <section>
            <h2>5. Almacenamiento y Seguridad de los Datos</h2>
            <p>
              Los datos recopilados se almacenan de manera segura en Firebase
              Realtime Database (RTDB), una plataforma que utiliza autenticación
              para proteger la información. Implementamos medidas adecuadas para
              prevenir el acceso no autorizado, la pérdida o la alteración de
              los datos.
            </p>
          </section>

          <section>
            <h2>6. Derechos del Usuario</h2>
            <p>Como usuario de AmbientSensorESP, tiene derecho a:</p>
            <ul>
              <li>
                <strong>Acceder:</strong> a la información que recopilamos sobre
                usted.
              </li>
              <li>
                <strong>Corregir:</strong> cualquier información inexacta.
              </li>
              <li>
                <strong>Eliminar:</strong> sus datos almacenados en nuestro
                sistema.
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactarnos en cualquier
              momento a través del correo electrónico:{' '}
              <a href="mailto:contacto@jonathanbytes.com">
                contacto@jonathanbytes.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2>7. Cambios en esta Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de
              privacidad en cualquier momento. Le notificaremos sobre cambios
              significativos a través de nuestro sitio web o por correo
              electrónico, si es necesario.
            </p>
          </section>

          <section>
            <h2>8. Información de Contacto</h2>
            <p>
              Si tiene preguntas, comentarios o inquietudes sobre esta política
              de privacidad o el manejo de sus datos, puede contactarnos en:
            </p>
            <p>
              <strong>Correo electrónico:</strong>{' '}
              <a href="mailto:contacto@jonathanbytes.com">
                contacto@jonathanbytes.com
              </a>
            </p>
          </section>
        </article>
        <p />
        <Link href="/" className="btn">
          Volver
        </Link>
        <p />
      </main>
    </>
  )
}
