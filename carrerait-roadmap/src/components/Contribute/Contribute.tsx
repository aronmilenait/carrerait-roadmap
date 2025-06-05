import { Heart, BookOpen, Share2, Lightbulb, Coffee } from "lucide-react";
import { ContributionItem } from "./ContributionItem";

export function Contribute() {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 mx-auto max-w-4xl">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
        Contribuir a CarreraIT
      </h1>
      <p className="text-xl leading-relaxed text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Si estás interesado en contribuir al proyecto, podés hacerlo de las
        siguientes maneras:
      </p>

      <ul className="grid gap-8 sm:grid-cols-3">
        <ContributionItem
          title="Compartiendo recursos"
          description="Enviando cursos, comunidades, plataformas, libros u otras herramientas útiles."
          icon={<BookOpen size={24} />}
        />
        <ContributionItem
          title="Difundiendo CarreraIT"
          description="Ayudándonos a llegar a más personas en redes sociales como LinkedIn, Instagram o recomendándolo a amigos."
          icon={<Share2 size={24} />}
        />
        <ContributionItem
          title="Aportando ideas"
          description="Tus sugerencias son valiosas para mejorar la plataforma."
          icon={<Lightbulb size={24} />}
        />
      </ul>

      <div className="mt-16 bg-gradient-to-br from-teal-800 to-gray-800 rounded-lg p-8 shadow-lg text-center">
        <Heart className="text-teal-300 w-12 h-12 mx-auto mb-6" />
        <p className="text-white text-xl font-bold mb-6">
          ¡Gracias por ser parte de CarreraIT! Con solo usar la plataforma, ya
          estás ayudando a su crecimiento.
        </p>
      </div>
    </section>
  );
}
