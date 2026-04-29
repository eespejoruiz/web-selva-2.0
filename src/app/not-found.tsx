// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Parece que te has internado demasiado en la selva
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        La página que buscas no existe o ha sido movida. No te preocupes,
        podemos ayudarte a encontrar el camino de vuelta.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          Volver al Inicio
        </Link>
        <Link
          href="/servicios"
          className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
        >
          Ver Servicios
        </Link>
      </div>
    </div>
  );
}
