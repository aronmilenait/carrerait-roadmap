import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center p-6 bg-sky-800 text-sky-100">
      <p className="mb-4">
        <i>Carrera IT Roadmap</i> es desarrollado por Milena Sol Aron. <br />
        Si tenés alguna pregunta o feedback, ¡no dudes en contactarme!
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/aronmilenait"
          className="text-sky-300 hover:text-sky-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/milenasaron"
          className="text-sky-300 hover:text-sky-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </a>
        <a
          href="mailto:aronmilena.it@gmail.com"
          className="text-sky-300 hover:text-sky-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
