import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AboutMe = () => {
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
        Sobre mí
      </h1>
      <div className="flex justify-center mb-4"></div>
      <p className={paragraphClasses}>
        Soy{" "}
        <a
          href="https://www.linkedin.com/in/milenasaron/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300"
        >
          Milena Sol Aron
        </a>
        , la desarrolladora de este proyecto. Trabajo en el rubro desde 2023, y
        comencé mi formación de manera autodidacta.
      </p>
      <p className={paragraphClasses}>
        Me encargo de todo: el desarrollo de la plataforma mediante NextJS y
        TypeScript, la escritura de los cuestionarios y guías de orientación, la
        recopilación de recursos gratuitos, la difusión del proyecto, entre
        otros.
      </p>
    </section>
  );
};

export default AboutMe;
