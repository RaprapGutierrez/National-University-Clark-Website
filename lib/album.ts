/**
 * Builds the picture list for a story (used by News and Research).
 *
 * Save the pictures in /public/<base>/<folder>/ and name them
 * <folder>-01.jpg, <folder>-02.jpg, <folder>-03.jpg ... up to the count.
 * Picture 1 is the main picture; the rest go in the photo gallery.
 *
 * Example: album("research", "wuri-conference", 7, "Photo description")
 * uses /public/research/wuri-conference/wuri-conference-01.jpg to -07.jpg
 */
export function album(
  base: string,
  folder: string,
  count: number,
  alt: string,
) {
  const files = Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/${base}/${folder}/${folder}-${n}.jpg`;
  });
  return {
    images: [{ src: files[0], alt }],
    gallery:
      count > 1
        ? [
            {
              title: "More photos",
              items: files.slice(1).map((src, i) => ({
                src,
                alt: `${alt} (photo ${i + 2})`,
                caption: `Photo ${i + 2} of ${count}`,
              })),
            },
          ]
        : undefined,
  };
}
