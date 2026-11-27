import type { EventPost } from "@/lib/events";

/** Flatten an event/news/research post for listing UIs. */
export function toTeaser(post: EventPost) {
  const summary = post.body[0] ?? "";
  const galleryThumbs =
    post.gallery?.flatMap((g) => g.items.map((it) => it.src)) ?? [];
  const allPhotos = [
    ...(post.images?.map((img) => img.src) ?? []),
    ...galleryThumbs,
  ];
  const uniquePhotos = Array.from(new Set(allPhotos));

  return {
    slug: post.slug,
    title: post.title,
    tag: post.tag,
    date: post.date ?? "",
    venue: post.venue ?? "",
    summary,
    image: post.images?.[0],
    photos: uniquePhotos,
    photoCount: uniquePhotos.length,
    href: post.links?.[0]?.href,
    body: post.body,
    hashtags: post.hashtags,
  };
}

export type StoryTeaserData = ReturnType<typeof toTeaser>;
