import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Guide, GuideMeta } from "../types/guide-types";
import { remark } from "remark";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "content", "guides");

export function getGuideSlugs(): string[] {
  return fs
    .readdirSync(guidesDirectory)
    .map((file) => file.replace(/\.md$/, ""));
}

export function getGuideMeta(slug: string): GuideMeta {
  const fullPath = path.join(guidesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return {
    title: data.title,
    description: data.description,
    slug,
  };
}

export async function getGuideContent(slug: string): Promise<Guide> {
  const fullPath = path.join(guidesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    content: contentHtml,
  };
}

export function getAllGuidesMeta(): GuideMeta[] {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => getGuideMeta(slug));
}
