import Link from "next/link";
import { getAllGuidesMeta } from "@/app/lib/guides";
import { BookOpen, ArrowRight } from "lucide-react";

export default async function Orientation() {
  const guidesMeta = getAllGuidesMeta();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
        Guías y artículos de orientación
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guidesMeta.map((guide) => (
          <Link key={guide.slug} href={`/orientacion/${guide.slug}`}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-teal-400 mr-3" />
                  <h2 className="text-xl font-semibold text-teal-300 group-hover:text-teal-400 transition-colors duration-200">
                    {guide.title}
                  </h2>
                </div>
                <p className="text-teal-300 font-medium mb-2">
                  Por Milena Sol Aron
                </p>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {guide.description}
                </p>
                <div className="flex items-center text-teal-400 font-medium group-hover:text-teal-300 transition-colors duration-200">
                  <span className="mr-2">Leer más</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
