import { notFound } from "next/navigation";
import { getGuideContent, getGuideSlugs } from "@/utils/guides";
import { Guide } from "@/types/guide-types";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

export default async function GuidePage({ params }: Params) {
  const { slug } = params;

  const validSlugs = getGuideSlugs();

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const guide: Guide = await getGuideContent(slug);

  return (
    <section className="bg-gray-900 text-teal-900 p-4 sm:p-6 md:p-12">
      <article className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        <header className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-extrabold text-teal-900 mb-2 sm:mb-4">
            {guide.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: guide.content }}
          className="prose sm:prose lg:prose-lg xl:prose-lg prose-black leading-relaxed"
        />
      </article>
      <div className="flex justify-center mt-12">
        <Link href="/orientacion">
          <div className="flex items-center gap-2 bg-teal-300 text-teal-900 font-semibold px-5 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-teal-500 hover:shadow-lg hover:-translate-y-1">
            <CornerUpLeft className="w-5 h-5" />
            Volver a Orientación
          </div>
        </Link>
      </div>
    </section>
  );
}
