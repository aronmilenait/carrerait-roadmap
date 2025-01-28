import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contribute() {
  const paragraphClasses = [
    "text-base",
    "md:text-lg",
    "leading-relaxed",
    "text-white",
    "mb-6",
  ].join(" ");

  const listClasses = [
    "text-base",
    "md:text-lg",
    "leading-relaxed",
    "text-white",
    "mb-6",
    "list-disc",
  ].join(" ");

  return (
    <section className="min-h-screen bg-gray-900 text-white mx-auto rounded-lg p-8 sm:p-6 max-w-full sm:max-w-lg md:max-w-2xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold text-sky-50 mb-6 text-center">
        Contribuir a CarreraIT
      </h1>
      <p className={paragraphClasses}>
        Si estás interesado en contribuir al proyecto, podés hacerlo de las
        siguientes maneras:
      </p>
      <ul className="space-y-4">
        <li className={listClasses}>
          <strong>Compartiendo recursos gratuitos:</strong> enviando cursos,
          comunidades, plataformas, libros u otras herramientas que puedan
          ayudar a otros en su camino.
        </li>
        <li className={listClasses}>
          <strong>Ayudándonos a llegar a más personas:</strong> difundiendo
          CarreraIT en tus redes sociales como LinkedIn, Instagram, Twitter y
          más o recomendándolo a tus amigos.
        </li>
        <li className={listClasses}>
          <strong>Compartiendo tus ideas y opiniones:</strong> tus sugerencias
          son valiosas para mejorar la plataforma. Si tenés una idea, no dudes
          en enviarla.
        </li>
        <li className={listClasses}>
          <strong>Contribuí económicamente:</strong> podés hacerlo mediante{" "}
          <a
            href="https://cafecito.app/carrerait"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300"
          >
            Cafecito
          </a>
          .
        </li>
      </ul>
      <div className="flex items-center justify-center mt-8 bg-teal-800 rounded-lg p-6 shadow-lg">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-teal-300 text-lg mr-4"
        />
        <p className="text-white text-lg mt-2 font-bold">
          ¡Gracias por ser parte de CarreraIT! Con tan solo utilizar la
          plataforma estás aportando mucho a su crecimiento. Recordá que podés
          contactarte conmigo{" "}
          <Link
            href="/contacto"
            className="font-semibold text-teal-200 hover:text-teal-100 transition-colors duration-300"
          >
            acá
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
