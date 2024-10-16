import { notFound } from "next/navigation";
import { getGuideContent, getGuideSlugs } from "@/app/lib/guides";
import { Guide } from "@/app/types/types";

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
    <main className="bg-gray-900 min-h-screen text-teal-900 p-4 sm:p-6 md:p-12">
      <article className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        <header className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-extrabold text-teal-900 mb-2 sm:mb-4">
            {guide.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: guide.content }}
          className="prose sm:prose lg:prose-lg xl:prose-xl"
        />
      </article>
    </main>
  );
}
