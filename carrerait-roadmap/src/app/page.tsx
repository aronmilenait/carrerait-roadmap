import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-sky-950 text-white p-24 min-h-screen flex flex-col justify-center items-center">
      <section id="hero" className="text-center space-y-6">
        <h1 className="text-sky-100 text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
          Descubrí el mejor camino para tu carrera en IT
        </h1>
        <p className="text-sky-100 text-xl max-w-2xl mx-auto">
          Respondé unas preguntas rápidas y obtené una recomendación
          personalizada sobre cómo avanzar en tu carrera. Sin registro, sin
          complicaciones.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#cuestionario"
            className="bg-sky-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-sky-800 transition duration-300 w-full sm:w-auto text-center"
          >
            Comenzá el cuestionario
          </a>
          <a
            href="#info"
            className="bg-sky-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-sky-800 transition duration-300 w-full sm:w-auto text-center"
          >
            Quiero más detalles
          </a>
        </div>
      </section>
    </main>
  );
}
