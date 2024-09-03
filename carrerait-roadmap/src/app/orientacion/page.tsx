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
    <main className="bg-sky-950 text-white p-24">
      <h1 className="text-4xl font-extrabold text-sky-50 mb-4 text-center">
        Orientación
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guidesMeta.map((guide) => (
          <Link key={guide.slug} href={`/orientacion/${guide.slug}`}>
            <div className="block p-4 border rounded-lg hover:bg-gray-100">
              <h2 className="text-xl font-semibold">{guide.title}</h2>
              <p className="text-gray-600">{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
