export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-6 md:p-24 flex flex-col justify-center items-center">
      <section id="hero" className="text-center space-y-6 md:space-y-8">
        <div className="relative mb-8">
          <div className="text-4xl md:text-5xl font-extrabold text-teal-100 relative">
            <span className="text-teal-300">Carrera</span>
            <span className="text-teal-500">IT</span>
          </div>
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 blur-sm opacity-30 -z-10"></span>
        </div>
        <h1 className="text-teal-100 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto relative">
          Descubrí cuál es el mejor camino para vos
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 blur-sm opacity-30 -z-10"></span>
        </h1>
        <p className="text-teal-200 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto">
          Respondé algunas preguntas y recibí recomendaciones personalizadas
          basadas en tu perfil y las tendencias actuales del sector.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/cuestionario"
            className="bg-teal-600 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Ir al cuestionario
          </a>
          <a
            href="/info"
            className="bg-teal-600 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Más información
          </a>
        </div>
      </section>
    </main>
  );
}
