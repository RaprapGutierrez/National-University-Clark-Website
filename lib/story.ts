import type { EventPost } from "@/lib/events";

/** Flatten an event/news/research post into a short teaser for listing pages. */
export function toTeaser(post: EventPost) {
  const summary = post.body[0] ?? "";
  const photoCount =
    (post.images?.length ?? 0) +
    (post.gallery?.reduce((n, g) => n + g.items.length, 0) ?? 0);

  return {
    slug: post.slug,
    title: post.title,
    tag: post.tag,
    date: post.date ?? post.venue ?? "",
    summary,
    image: post.images?.[0],
    photoCount,
    href: post.links?.[0]?.href,
    body: post.body,
    hashtags: post.hashtags,
  };
}

export type StoryTeaserData = ReturnType<typeof toTeaser>;
