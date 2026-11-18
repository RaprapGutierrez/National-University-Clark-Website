import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Blocks from "@/components/Blocks";
import { sections } from "@/lib/site";
import { programsBySchool } from "@/lib/programs";
import type { Block } from "@/lib/content";

// Yellow outline that follows the shape of the cutout, like a sticker
const STICKER =
  "drop-shadow(4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(-4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 -4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 10px 14px rgba(0, 0, 0, 0.25))";

export function generateStaticParams() {
  const academics = sections.find((s) => s.slug === "academics");
  if (!academics) return [];
  return academics.pages.flatMap((school) =>
    (programsBySchool[school.slug] ?? []).map((p) => ({
      section: academics.slug,
      slug: school.slug,
      program: p.slug,
    })),
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ section: string; slug: string; program: string }>;
}) {
  const { section, slug, program } = await params;
  const sec = sections.find((s) => s.slug === section);
  const school = sec?.pages.find((p) => p.slug === slug);
  const programs = programsBySchool[slug] ?? [];
  const data = programs.find((p) => p.slug === program);
  if (section !== "academics" || !sec || !school || !data) notFound();

  const blocks: Block[] = [
    { type: "text", heading: `About the ${data.title}`, body: data.about },
    {
      type: "mv",
      items: [
        { label: "Our Mission", text: data.mission },
        { label: "Our Vision", text: data.vision },
      ],
    },
    {
      type: "list",
      heading: "Program educational objectives",
      items: data.objectives,
    },
    { type: "list", heading: "Program outcomes", items: data.outcomes },
    { type: "list", heading: "Accreditation", items: data.accreditation },
  ];

  return (
    <>
      <PageBanner
        title={data.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: sec.title, href: `/${sec.slug}` },
          { label: school.title, href: `/${sec.slug}/${school.slug}` },
          { label: data.title },
        ]}
      />
      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_280px]">
        <article>
          <p className="mb-10 max-w-2xl text-lg text-slate">
            {data.text ?? school.title}
          </p>
          <Blocks blocks={blocks} />
        </article>

        <aside>
          {data.image && (
            <div
              className="mx-auto mb-8 aspect-[4/3] w-3/4 lg:w-full"
              style={{ filter: STICKER }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  sizes="280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          )}

          <h2 className="mb-3 font-bold">More in {school.title}</h2>
          <div className="flex flex-col gap-1">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/${sec.slug}/${school.slug}/${p.slug}`}
                className={`rounded-lg px-3 py-2 text-sm hover:bg-white ${
                  p.slug === program
                    ? "bg-white font-bold text-royal"
                    : "text-slate"
                }`}
              >
                {p.title}
              </Link>
            ))}
          </div>
          <Link
            href={`/${sec.slug}/${school.slug}`}
            className="mt-4 inline-block px-3 text-sm font-semibold text-royal hover:underline"
          >
            ← Back to {school.title}
          </Link>
        </aside>
      </main>
    </>
  );
}
