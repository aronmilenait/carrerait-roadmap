import Link from "next/link";
import { getAllGuidesMeta } from "@/app/lib/guides";
import { GuideMeta } from "@/app/types/types";

interface OrientationProps {
  guidesMeta: GuideMetaWithSlug[];
}

interface GuideMetaWithSlug extends GuideMeta {
  slug: string;
}

export default async function Orientation() {
  const guidesMeta = getAllGuidesMeta();

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-teal-400 font-extrabold mb-6 text-center">
        Guías y artículos de orientación
      </h1>
      <div className="space-y-8">
        {guidesMeta.map((guide) => (
          <Link key={guide.slug} href={`/orientacion/${guide.slug}`}>
            <div className="bg-teal-800 hover:bg-teal-700 transition-colors duration-300 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer max-w-xl sm:max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                {guide.title}
              </h2>
              <p className="text-white mb-4 text-base sm:text-lg">
                {guide.description}
              </p>
              <div className="text-teal-50 text-sm sm:text-lg">Leer más...</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
