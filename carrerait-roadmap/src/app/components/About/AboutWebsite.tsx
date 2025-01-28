const AboutWebsite = () => {
  const paragraphClasses = [
    "text-base",
    "md:text-lg",
    "leading-relaxed",
    "text-white",
    "mb-6",
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
        interesados o trabajando en IT, repleto de recursos gratuitos de
        excelente calidad, guías de orientación y cuestionarios con
        recomendaciones personalizadas en base a tu situación laboral y
        personal.
      </p>
    </section>
  );
};

export default AboutWebsite;
