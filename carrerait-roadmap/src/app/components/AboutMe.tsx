import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const AboutMe = () => {
  const paragraphClasses = [
    "text-base",
    "md:text-lg",
    "leading-relaxed",
    "text-white",
    "mb-6",
  ].join(" ");

  const iconContainerClasses = "flex flex-col items-center space-y-2";

  const iconClasses = [
    "h-14",
    "w-14",
    "md:h-16",
    "md:w-16",
    "bg-gray-800",
    "rounded-full",
    "p-2",
    "border-4",
    "border-teal-700",
    "text-teal-400",
    "flex",
    "items-center",
    "justify-center",
    "shadow-lg",
    "hover:scale-110",
    "transition-transform",
    "duration-300",
  ].join(" ");

  const linkClasses =
    "text-sky-300 hover:text-sky-400 transition-colors duration-300";

  return (
    <section className="bg-gray-900 text-white mx-auto rounded-lg p-8 sm:p-6 max-w-full sm:max-w-lg md:max-w-2xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold text-sky-50 mb-6 text-center">
        Sobre mí
      </h1>
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-teal-700">
          <Image
            src="/myself.jpeg"
            alt="Milena Sol Aron"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <p className={paragraphClasses}>
        Soy Milena Sol Aron, la desarrolladora de este proyecto. Trabajo en el
        rubro desde 2023, y comencé mi formación de manera autodidacta.
      </p>
      <p className={paragraphClasses}>
        Entre 2023 y 2024, pasé por tres universidades diferentes, buscando la
        opción que mejor se adaptara a mi situación personal, hasta llegar a la
        que estoy en la actualidad.
      </p>
      <p className={paragraphClasses}>
        Dado a que trabajo en el rubro y que entiendo la dificultad de decidir
        cómo avanzar con nuestras carreras, decidí crear este proyecto. En el
        próximo apartado, voy a explicar más sobre esto.
      </p>
      <p className={paragraphClasses}>
        Pronto voy a incorporar un formulario de contacto, pero mientras tanto,
        si tenés alguna duda o sugerencia para el proyecto, ¡no dudes en
        escribirme!
      </p>
      <div className="flex flex-wrap justify-center space-x-8 sm:space-x-6 md:space-x-10 mb-8">
        <div className={iconContainerClasses}>
          <a
            href="https://github.com/aronmilenait"
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className={iconClasses}>
              <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
            </div>
          </a>
          <span className="text-xs md:text-lg font-semibold text-teal-300">
            GitHub
          </span>
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
              <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
            </div>
          </a>
          <span className="text-xs md:text-lg font-semibold text-teal-300">
            LinkedIn
          </span>
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
              <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7" />
            </div>
          </a>
          <span className="text-xs md:text-lg font-semibold text-teal-300">
            Email
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
