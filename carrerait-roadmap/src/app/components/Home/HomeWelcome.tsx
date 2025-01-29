import Link from "next/link";
import {
  Book,
  Compass,
  FileText,
  HelpCircle,
  MessageCircle,
  Users,
} from "lucide-react";

const homeLinks = [
  { href: "/cuestionario", icon: FileText, title: "Cuestionarios" },
  { href: "/orientacion", icon: Compass, title: "Orientación" },
  { href: "/recursos", icon: Book, title: "Recursos" },
  { href: "/sobre-carrerait", icon: Users, title: "Sobre CarreraIT" },
  { href: "/contacto", icon: MessageCircle, title: "Contacto" },
  { href: "/contribuir", icon: HelpCircle, title: "Contribuir" },
];

export default function HomeWelcome() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-teal-600">Carrera</span>
            <span className="text-teal-800">IT</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Una plataforma gratuita para aprender, crecer y destacar en la
            industria tecnológica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 flex flex-col items-center"
            >
              <link.icon className="w-12 h-12 text-teal-600 mb-4" />
              <h2 className="text-xl font-semibold text-white">{link.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
