const AboutWebsite = () => {
  const paragraphClasses = [
    "text-base",
    "md:text-lg",
    "leading-relaxed",
    "text-white",
    "mb-6",
  ].join(" ");

  const listClasses = [
    "list-disc",
    "list-inside",
    "text-left",
    "text-base",
    "md:text-lg",
    "text-white",
    "space-y-3",
    "mb-6",
    "font-semibold",
    "border-teal-600",
    "border-2",
    "p-4",
    "rounded-lg",
  ].join(" ");

  return (
    <section className="bg-gray-900 text-white mx-auto rounded-lg p-8 sm:p-6 max-w-full sm:max-w-lg md:max-w-2xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold text-sky-50 mb-6 text-center">
        Sobre Carrera IT
      </h1>
      <p className={paragraphClasses}>
        Decidí crear este proyecto para solucionar una problemática: la falta de
        respuestas sobre cómo avanzar en tu carrera de IT en base a ciertos
        factores y situaciones personales.
      </p>
      <p className={paragraphClasses}>
        Todos los días, veía como personas en distintas comunidades preguntaban
        cómo seguir formándose o mejorando dentro del rubro. Esas publicaciones
        quedaban sin responder debido a lo repetitivo que se tornaba para los
        demás miembros, siendo que se trataba de varias por día o semana.
      </p>
      <p className={paragraphClasses}>
        El objetivo de CarreraIT es ser un espacio para todos los que estamos
        interesados o trabajando en IT.
      </p>
      <p className={paragraphClasses}>
        Mediante cuestionarios divididos en base a tres factores importantes (si
        estás trabajando en IT, si sos aspirante o si fuiste desvinculado), vas
        a obtener recomendaciones personalizadas sobre cómo avanzar con tu
        carrera.
      </p>
      <p className={paragraphClasses}>
        Además de los cuestionarios, podés encontrar{" "}
        <a href="/orientacion" className="font-bold">guías de orientación</a> y{" "}
        <a href="/recursos" className="font-bold">recursos</a> gratuitos de excelente calidad.
      </p>
    </section>
  );
};

export default AboutWebsite;
