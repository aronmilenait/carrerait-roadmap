const Footer = () => {
  const footerLinksClasses =
    "font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300";

  return (
    <footer className="bg-gray-800 py-6 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="/"
          className="text-4xl sm:text-3xl md:text-2xl font-extrabold text-teal-100 relative z-10"
        >
          <span className="text-teal-300">Carrera</span>
          <span className="text-teal-500">IT</span>
        </a>
        <nav className="mt-4 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="/cuestionario" className={footerLinksClasses}>
            Cuestionarios
          </a>
          <a href="/orientacion" className={footerLinksClasses}>
            Orientación
          </a>
          <a href="/recursos" className={footerLinksClasses}>
            Recursos
          </a>
          <a href="/sobre-carrerait" className={footerLinksClasses}>
            Sobre CarreraIT
          </a>
          <a
            href="https://www.linkedin.com/in/milenasaron"
            className={footerLinksClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
