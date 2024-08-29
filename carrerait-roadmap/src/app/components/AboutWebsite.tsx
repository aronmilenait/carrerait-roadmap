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
        Últimamente me di cuenta de que muchas personas que aspiran a trabajar o
        que ya trabajan en IT tienen el mismo interrogante:
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          ¿Debería empezar a formarme o retomar mis estudios en la universidad,
          o debería hacerlo de manera autodidacta?
        </span>
      </p>

      <p className={paragraphClasses}>
        Esta pregunta se suma a muchas otras, como por ejemplo:
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          Si elijo la universidad, ¿es mejor una tecnicatura, una licenciatura o
          una ingeniería? ¿Me conviene una universidad pública o privada?
        </span>
      </p>

      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          Si quiero formarme de manera autodidacta, ¿cómo debería hacerlo?
        </span>
      </p>

      <p className={paragraphClasses}>
        Además, cada persona tiene <b>situaciones muy particulares.</b> Por
        ejemplo, hay quienes trabajan todo el día, y otros que no, o personas
        que ya están en el rubro porque se formaron de manera autodidacta pero
        quieren mejorar su carrera.
      </p>

      <h2 className="text-4xl font-extrabold text-sky-100 text-center">
        ¿Y qué respuesta puede darme un cuestionario?
      </h2>

      <p className={paragraphClasses}>Es que este no es cualquier quiz:</p>

      <ul className={listClasses}>
        <li>
          Cada respuesta se tiene en cuenta a la hora de darte la devolución.
        </li>
        <li>
          Son varias preguntas, enfocadas en los aspectos más importantes para
          decidir cómo avanzar con tu carrera profesional.
        </li>
        <li>
          No necesitás registrarte y es anónimo. Tus respuestas tampoco son
          almacenadas.
        </li>
      </ul>

      <p className={paragraphClasses}>
        Sin embargo, no tomes tu respuesta como una verdad absoluta e
        inmodificable. La idea es que <b>reflexiones sobre tus posibilidades</b>
        y limitaciones a medida que respondés, y que <b>tomes una decisión</b>
        considerando la respuesta brindada al final.
        <br />
        Todo lo que vas a leer fue escrito por mí, no por una IA, considerando
        qué es lo mejor para cada caso y enfocándome en cada respuesta.
      </p>
    </section>
  );
};

export default AboutWebsite;
