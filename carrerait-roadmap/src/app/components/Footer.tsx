const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="/"
          className="text-4xl md:text-3xl font-extrabold text-teal-100 relative z-10"
        >
          <span className="text-teal-300">Carrera</span>
          <span className="text-teal-500">IT</span>
        </a>
        <nav className="mt-4 flex justify-center space-x-6">
          <a
            href="/"
            className="font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300"
          >
            Inicio
          </a>
          <a
            href="/cuestionario"
            className="font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300"
          >
            Cuestionario
          </a>
          <a
            href="https://www.linkedin.com/in/milenasaron"
            className="font-semibold text-teal-400 hover:text-teal-200 transition-colors duration-300"
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
