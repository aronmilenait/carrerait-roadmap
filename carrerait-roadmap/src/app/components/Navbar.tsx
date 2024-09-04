const Navbar = () => {
  const linkClasses = [
    "hover:text-white",
    "hover:border-b-2",
    "hover:border-white",
    "transition-transform",
    "duration-300",
    "transform",
    "hover:scale-105",
    "text-center",
    "text-xl",
    "font-bold",
  ];

  return (
    <nav className="bg-gradient-to-r from-sky-700 to-sky-500 text-sky-100 p-4 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      <a className="text-2xl font-bold text-shadow-md mb-4 sm:mb-0" href="/">
        Carrera IT Roadmap
      </a>
      <div className="flex-grow flex justify-center">
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <li>
            <a href="/cuestionario" className={linkClasses.join(" ")}>
              Cuestionario
            </a>
          </li>
          <li>
            <a href="/orientacion" className={linkClasses.join(" ")}>
              Orientación
            </a>
          </li>
          <li>
            <a href="/info" className={linkClasses.join(" ")}>
              Información
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
