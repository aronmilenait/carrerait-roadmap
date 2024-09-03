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
    <main className="bg-sky-950 text-white p-24">
      <h1 className="text-4xl font-extrabold text-sky-50 mb-4">
        {guide.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: guide.content }} />
    </main>
  );
}
