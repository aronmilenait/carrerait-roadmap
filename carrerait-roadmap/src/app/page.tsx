import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClipboardList,
  faPaperPlane,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const gridDivClasses =
  "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 cursor-pointer p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-gray-800";
const titleClasses = "text-2xl font-bold text-teal-200 mt-4";
const textClasses = "mt-2 text-gray-300";
const iconClasses = "text-teal-300 text-4xl mb-2";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-6 md:p-24 flex flex-col justify-center items-center">
      <section id="hero" className="text-center space-y-6 md:space-y-8">
        <div className="relative mb-8">
          <div className="text-4xl md:text-5xl font-extrabold text-teal-100 relative">
            <span className="text-teal-300">Carrera</span>
            <span className="text-teal-500">IT</span>
          </div>
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 blur-sm opacity-30 -z-10"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
          <div className={gridDivClasses}>
            <FontAwesomeIcon icon={faBook} className={iconClasses} />
            <p className={titleClasses}>Recursos gratuitos</p>
            <p className={textClasses}>
             Gratuitos, para diversas áreas de IT y de excelente calidad.
            </p>
          </div>

          <div className={gridDivClasses}>
            <FontAwesomeIcon icon={faClipboardList} className={iconClasses} />
            <p className={titleClasses}>Cuestionarios</p>
            <p className={textClasses}>
              Recibí recomendaciones sobre cómo avanzar con tu carrera.
            </p>
          </div>

          <div className={gridDivClasses}>
            <FontAwesomeIcon icon={faPaperPlane} className={iconClasses} />
            <p className={titleClasses}>Guías y artículos de orientación</p>
            <p className={textClasses}>
              Formación, empleo y mucho más.
            </p>
          </div>

          <div className={gridDivClasses}>
            <FontAwesomeIcon icon={faInfoCircle} className={iconClasses} />
            <h3 className={titleClasses}>Información</h3>
            <p className={textClasses}>Conocé el proyecto.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
