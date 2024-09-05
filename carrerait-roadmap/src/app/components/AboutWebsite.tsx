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
  ].join(" ");

  return (
    <section className="bg-gray-900 text-white mx-auto rounded-lg p-8 sm:p-6 max-w-full sm:max-w-lg md:max-w-2xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold text-sky-50 mb-6 text-center">
        Sobre Carrera IT
      </h1>
      <p className={paragraphClasses}>
        Creé este proyecto después de notar una problemática sin solución: todos
        los días, muchas personas preguntan en comunidades como r/devsarg o
        r/programación:
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
        Estos son solo algunos ejemplos de publicaciones que veo a diario.
        Muchas de ellas quedan olvidadas y sin respuesta. Para que todos puedan
        tenerla, creé un cuestionario donde, en base a tu situación personal,
        vas a obtener una devolución que te va a recomendar ciertas cosas,
        teniendo en cuenta también el mercado laboral actual.
      </p>
      <p className={paragraphClasses}>
        Pero me parecía poco. Sentía que faltaba algo, y aunque la respuesta
        obtenida no es absoluta, sino que busca ayudar a tomar una decisión,
        decidí agregar más funcionalidades.
      </p>
      <p className={paragraphClasses}>
        Además del cuestionario, CarreraIT cuenta con una sección de
        Orientación, donde vas a poder encontrar guías útiles si querés trabajar
        en el rubro o si ya estás en él, especialmente si estás estudiando (de
        manera autodidacta o en una institución) o si querés hacerlo. También
        hay una sección de Recursos gratuitos, donde vas a encontrar material
        interesante para tu formación autodidacta.
      </p>
      <p className={paragraphClasses}>
        La idea es que sea un espacio para todos los que nos dedicamos a IT,
        pero como soy desarrolladora, probablemente me enfoque más en esa área
        en general.
      </p>
    </section>
  );
};

export default AboutWebsite;
