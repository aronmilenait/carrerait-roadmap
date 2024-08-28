const AboutWebsite = () => {
  const paragraphClasses = [
    "text-xl",
    "leading-relaxed",
    "text-white",
    "mb-6",
  ].join(" ");

  const listClasses = [
    "list-disc",
    "list-inside",
    "text-left",
    "text-xl",
    "space-y-3",
  ].join(" ");

  const quoteClasses = [
"text-white",
    "italic",
    "text-xl",
    "leading-relaxed",
    "border-l-4",
    "pl-4",
    "border-sky-100",
  ].join(" ");

  return (
    <section className="bg-sky-950 text-white space-y-8 py-10 px-4 max-w-2xl mx-auto rounded-lg">
      <h1 className="text-4xl font-extrabold text-sky-50 mb-4 text-center">
        Sobre Carrera IT Roadmap
      </h1>

      <p className={paragraphClasses}>
        Durante el último tiempo, me di cuenta de que muchas personas que
        aspiran o que trabajan en IT tienen el mismo interrogante:
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          ¿Debería empezar a formarme/retomar mis estudios en la universidad o
          de manera autodidacta?
        </span>
      </p>

      <p className={paragraphClasses}>
        Esta pregunta se suma a muchas otras, como por ejemplo:
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          Si elijo la universidad, ¿es mejor una tecnicatura, una licenciatura o
          una ingeniería? ¿Me conviene una pública o privada?
        </span>
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          Si quiero formarme de manera autodidacta, ¿cómo lo hago?
        </span>
      </p>

      <p className={paragraphClasses}>
        Además, cada persona tiene situaciones muy particulares. Por ejemplo:
        hay quienes trabajan todo el día, y otros que no, o gente que ya está en
        el rubro por haberse formado de manera autodidacta pero quiere mejorar
        su carrera.
      </p>

      <h2 className="text-4xl font-extrabold text-sky-100 text-center">
        ¿Y qué respuesta puede darme un cuestionario?
      </h2>

      <p className={paragraphClasses}>Es que este no es cualquier quiz:</p>

      <ul className={listClasses}>
        <li>
          Cada pregunta que respondés es considerada a la hora de darte la
          respuesta final.
        </li>
        <li>
          Son varias preguntas, enfocadas en los aspectos más importantes a la
          hora de decidir cómo avanzar con tu carrera profesional.
        </li>
        <li>
          No necesitás registrarte y es anónimo. Tus respuestas tampoco son
          almacenadas.
        </li>
      </ul>

      <p className={paragraphClasses}>
        Sin embargo, no tomes tu respuesta como una verdad absoluta,
        inmodificable. La idea es que vayas reflexionando sobre tus
        posibilidades y limitaciones a medida que lo respondés, y que tomes una
        decisión considerando la respuesta brindada al final.
        <br />
        Todo lo que vas a leer fue escrito por mí, y no por IA, considerando qué
        es lo mejor para cada caso y enfocándome en cada respuesta.
      </p>
    </section>
  );
};

export default AboutWebsite;
