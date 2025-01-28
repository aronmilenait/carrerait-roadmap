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
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/sobre-carrerait" className={footerLinksClasses}>
            Sobre CarreraIT
          </a>
          <a href="/contacto" className={footerLinksClasses}>
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
