import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const paragraphClasses = [
    "text-xl",
    "leading-relaxed",
    "text-white",
    "mb-6",
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

  const iconContainerClasses = "flex flex-col items-center space-y-2";

  const iconClasses = [
    "h-16",
    "w-16",
    "bg-sky-700",
    "rounded-full",
    "text-white",
    "flex",
    "items-center",
    "justify-center",
    "shadow-lg",
    "transition-transform",
    "duration-300",
    "hover:scale-110",
  ].join(" ");

  const linkClasses =
    "text-sky-300 hover:text-sky-400 transition-colors duration-300";

  return (
    <section className="bg-sky-950 text-white space-y-8 py-10 px-4 max-w-2xl mx-auto rounded-lg">
      <h1 className="text-4xl font-extrabold text-sky-50 mb-4 text-center">
        Sobre mí
      </h1>
      <p className={paragraphClasses}>
        ¡Hola! Me llamo Milena y soy de Argentina. Trabajo en el área de
        desarrollo desde 2023, y me hace muy feliz dedicarme a esto.
      </p>
      <p className={paragraphClasses}>
        Si tenés alguna duda sobre el proyecto, feedback, o simplemente querés
        ampliar tu red de contactos, podés encontrarme en:
      </p>
      <div className="flex justify-center space-x-8 mb-8">
        <div className={iconContainerClasses}>
          <a
            href="https://github.com/aronmilenait"
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className={iconClasses}>
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </div>
          </a>
          <span className="text-sm text-sky-300">GitHub</span>
        </div>
        <div className={iconContainerClasses}>
          <a
            href="https://www.linkedin.com/in/milenasaron"
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className={iconClasses}>
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </div>
          </a>
          <span className="text-sm text-sky-300">LinkedIn</span>
        </div>
        <div className={iconContainerClasses}>
          <a
            href="mailto:aronmilena.it@gmail.com"
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <div className={iconClasses}>
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </div>
          </a>
          <span className="text-sm text-sky-300">Email</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-sky-50 mb-4">
        ¿Cómo nació este proyecto?
      </h2>
      <p className={paragraphClasses}>
        La idea de crearlo surgió al ver a muchas personas consultando qué era
        <b>lo mejor para su formación</b>, basándose en sus{" "}
        <b>situaciones personales</b>. Por ejemplo:
      </p>
      <p className={paragraphClasses}>
        <span className={quoteClasses}>
          Tengo 31 años, 4 hijos y un perro. Me gustaría empezar a trabajar en
          programación, pero no tengo idea de nada. ¿Me conviene estudiar de
          forma autodidacta o ir a la universidad? ¿Qué es mejor: una
          tecnicatura, una licenciatura o una ingeniería?
        </span>
      </p>
      <p className={paragraphClasses}>
        Este interrogante surge en distintos perfiles, incluyendo aquellos que
        ya tienen experiencia en el rubro, que abandonaron la universidad, que
        nunca la iniciaron, o que, aprendiendo de forma autodidacta,
        consiguieron entrar al rubro sin hacer una carrera en IT.
      </p>
      <p className={paragraphClasses}>
        <b>Yo también estuve ahí, y a veces me replanteo mi camino.</b> Por eso,
        decidí crear este sitio web, donde podés responder unas preguntas y
        recibir una respuesta basada en tu situación particular, con consejos y
        recomendaciones.
      </p>
    </section>
  );
};

export default AboutMe;
