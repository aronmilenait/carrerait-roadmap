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
    <main className="bg-gray-900 min-h-screen text-teal-900 p-6 md:p-12">
      <article className="max-w-3xl mx-auto bg-teal-50 p-8 rounded-lg shadow-md">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-teal-900 mb-4">
            {guide.title}
          </h1>
          <p className="text-sky-800 text-lg">
            Publicado el {new Date().toLocaleDateString()}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: guide.content }}
          className="prose lg:prose-xl text-gray-950"
        />
      </article>
    </main>
  );
}
