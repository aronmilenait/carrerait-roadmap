import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { homeLinks } from "@/app/data/home/homeLinks";

export default function HomeWelcome() {
  const gridDivClasses =
    "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 cursor-pointer p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-gray-800";
  const titleClasses = "text-2xl font-bold text-teal-200 mt-4";
  const iconClasses = "text-teal-300 text-4xl mb-2";

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-6 md:p-12 px-6 flex flex-col justify-center items-center">
      <div className="text-5xl md:text-6xl font-extrabold text-teal-100 relative mb-8">
        <span className="text-teal-300">Carrera</span>
        <span className="text-teal-500">IT</span>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
        Una plataforma gratuita para aprender, crecer y destacar en la industria
        tecnológica.
      </p>
      <div className="text-center space-y-6 md:space-y-8">
        <div className="relative mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {homeLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={gridDivClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} className={iconClasses} />
              <h2 className={titleClasses}>{link.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
