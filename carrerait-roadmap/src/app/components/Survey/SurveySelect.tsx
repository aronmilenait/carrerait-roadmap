"use client";

const SurveySelector = () => {
  return (
    <section className="min-h-screen bg-grey-950 text-white space-y-8 py-10 px-4 max-w-2xl mx-auto rounded-lg">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-teal-400 font-extrabold mb-6 text-center">
        Cuestionario
      </h1>
      <p className="text-2xl font-bold mb-8 text-center">
        Antes de empezar, elegí la opción que más se adapte a tu situación
        personal:
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="/cuestionario-aspirante"
          className="bg-teal-600 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Quiero trabajar en IT
        </a>
        <a
          href="/cuestionario-it"
          className="bg-teal-600 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Estoy trabajando en IT
        </a>
      </div>
      <p className="text-xl mt-8 mb-8 text-center">
        El objetivo de hacer esta distinción es poder brindar una
        retroalimentación más especifica, teniendo en cuenta un factor muy
        importante: si ya estás trabajando en el rubro, o si es algo a lo que
        aspirás.
      </p>
    </section>
  );
};

export default SurveySelector;
