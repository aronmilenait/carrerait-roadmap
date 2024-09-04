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
    <main className="min-h-screen bg-sky-950 text-white p-8 md:p-24">
      <h1 className="text-4xl font-extrabold text-sky-50 mb-12 text-center">
        Orientación
      </h1>
      <div className="space-y-12">
        {guidesMeta.map((guide) => (
          <Link key={guide.slug} href={`/orientacion/${guide.slug}`}>
            <div className="bg-sky-800 hover:bg-sky-700 transition-colors duration-300 p-6 rounded-lg shadow-lg cursor-pointer max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{guide.title}</h2>
              <p className="text-white mb-4">{guide.description}</p>
              <div className="text-white text-sm">Leer más...</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
