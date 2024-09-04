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
    <main className="bg-sky-950 min-h-screen text-gray-900 p-6 md:p-12">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-sk-800 mb-4">
            {guide.title}
          </h1>
          <p className="text-sky-800 text-lg">
            Publicado el {new Date().toLocaleDateString()}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: guide.content }}
          className="prose lg:prose-xl"
        />
      </article>
    </main>
  );
}
