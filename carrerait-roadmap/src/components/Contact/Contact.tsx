import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 mx-auto max-w-4xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
        Contacto
      </h1>
      <p className="text-xl leading-relaxed text-gray-50 text-center mb-12 max-w-2xl mx-autod">
        Si tenés alguna duda, sugerencia o idea para el proyecto, ¡no dudes en
        contactarme!
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="cursor-pointer flex items-center gap-3 bg-gray-800 p-4 sm:mr-4 sm:ml-4 rounded-lg shadow-lg">
          <Mail className="text-teal-400 text-3xl" />
          <a
            href="mailto:carrerait.web@gmail.com"
            className="text-xl font-semibold text-teal-400"
            aria-label="Enviar correo a carrerait.web@gmail.com"
          >
            carrerait.web@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
