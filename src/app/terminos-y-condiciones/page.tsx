import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Selva Ecomarketing",
  description: "Términos y condiciones de uso de los servicios de Selva Ecomarketing.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-abroad font-bold mb-8 text-neutral-900">Términos y Condiciones</h1>
        
        <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6">
          <p>
            Bienvenido a <strong>Selva Ecomarketing</strong>. Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir con los siguientes términos y condiciones. Por favor, léalos detenidamente.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">1. Uso del Sitio Web</h2>
          <p>
            Usted se compromete a utilizar nuestro sitio web únicamente para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de cualquier tercero.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de Selva Ecomarketing o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">3. Limitación de Responsabilidad</h2>
          <p>
            Selva Ecomarketing no será responsable de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja del uso o la imposibilidad de uso de nuestro sitio web o servicios.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">4. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio tras la publicación de cambios constituirá su aceptación de dichos cambios.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">5. Legislación Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes vigentes en Perú, sin dar efecto a ningún principio de conflicto de leyes.
          </p>

          <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">6. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estos términos, puede contactarnos en: <a href="mailto:info@selvagencia.pe" className="text-primary hover:underline">info@selvagencia.pe</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
