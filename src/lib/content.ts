import { getCollection, type CollectionEntry } from 'astro:content';

export type SitePage = CollectionEntry<'pages'>;
export type CopyEntry = CollectionEntry<'copy'>;

export async function getSitePages(): Promise<SitePage[]> {
  return getCollection('pages');
}

export async function getCopyBySurface(
  surface: CopyEntry['data']['surface'],
): Promise<CopyEntry[]> {
  const entries = await getCollection('copy');
  return entries.filter((entry) => entry.data.surface === surface);
}
