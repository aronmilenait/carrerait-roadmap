export interface GuideMeta {
  title: string;
  description: string;
}

export interface Guide extends GuideMeta {
  slug: string;
  content: string;
}
