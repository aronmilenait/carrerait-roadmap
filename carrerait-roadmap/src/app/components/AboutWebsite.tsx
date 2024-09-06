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
        Creé este proyecto después de notar una problemática sin solución: todos
        los días, muchas personas preguntan en comunidades como <i>r/devsarg</i>{" "}
        o<i>r/programación</i>:
      </p>
      <ul className={listClasses}>
        <li>
          Cómo retomar sus estudios universitarios después de haberlos
          abandonado por cuestiones laborales, estando ya en el rubro.
        </li>
        <li>Cómo formarse de manera autodidacta.</li>
        <li>Qué hacer con sus estudios según sus situaciones personales.</li>
        <li>Qué carrera seguir y dónde estudiarla.</li>
      </ul>
      <p className={paragraphClasses}>
        Al ser tantas publicaciones de este estilo, quedan olvidadas y sin
        respuesta. Para que todos puedan tener una, creé el <b>cuestionario.</b>{" "}
        Así, todos tendrían una, basándose en ciertos parámetros. No brinda una{" "}
        <b>respuesta absoluta</b>, sino que te aconseja en base a tus
        respuestas.
      </p>
      <p className={paragraphClasses}>
        Pero me parecía poco: sentía que faltaba algo.
      </p>
      <p className={paragraphClasses}>
        Por eso, creé dos secciones más: una de <b>orientación</b>, con guías
        útiles, y otra de <b>recursos</b>, donde sólo comparto aquellos que son
        gratuitos.
      </p>
      <p className={paragraphClasses}>
        Mi objetivo con este proyecto es que sea útil para quienes trabajamos en
        IT. Si bien soy de Argentina y vas a notar que menciono instituciones de
        acá, la mayoría de los recursos van a servirte.
      </p>
      <p className={paragraphClasses}>
        <b>Actualmente, el proyecto está siendo desarrollado.</b> A medida que pase el tiempo,
        voy a incorporar más guías y material gratuito.
      </p>
    </section>
  );
};

export default AboutWebsite;
