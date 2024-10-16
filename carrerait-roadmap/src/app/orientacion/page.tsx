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
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center tracking-wide">
        Guías y artículos de orientación
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {guidesMeta.map((guide) => (
          <Link key={guide.slug} href={`/orientacion/${guide.slug}`}>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-teal-900 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl sm:text-2xl font-bold mb-2 sm:mb-4 text-teal-300">
                {guide.title}
              </h2>
              <p className="text-gray-300 mb-4 text-base sm:text-lg">
                {guide.description}
              </p>
              <div className="text-teal-50 text-sm sm:text-lg font-semibold">
                Leer más...
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
