import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/lib/content";
import ImageCarousel from "@/components/ImageCarousel";
import ImageGallery from "@/components/ImageGallery";

// Yellow outline that follows the shape of the cutout, like a sticker
const STICKER =
  "drop-shadow(4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(-4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 -4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 10px 14px rgba(0, 0, 0, 0.25))";

type CardItem = {
  title: string;
  text?: string;
  href?: string;
  image?: string;
  logo?: string;
};

// Organization card: logo on top, blue and gold box
function LogoCard({ item }: { item: CardItem }) {
  return (
    <div className="flex h-full flex-col items-center rounded-3xl border-2 border-gold bg-navy p-5 text-center text-white shadow-lg transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none">
      {item.logo && (
        <div className="relative mb-4 h-32 w-full">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            fill
            sizes="(min-width: 1024px) 240px, 45vw"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-lg font-extrabold text-gold">{item.title}</h3>
      {item.text && <p className="mt-1.5 text-sm text-white/85">{item.text}</p>}
    </div>
  );
}

function Heading({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <h2 className="mb-5 text-2xl font-extrabold text-navy">{children}</h2>;
}

// Card with a sticker photo on top and a blue and gold box below
function StickerCard({ item }: { item: CardItem }) {
  const inner = (
    <>
      {item.image && (
        <div
          className="relative z-10 mx-auto -mb-10 aspect-[4/3] w-3/4 transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:rotate-1 motion-reduce:transform-none"
          style={{ filter: STICKER }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 260px, 70vw"
            className="object-contain object-bottom"
          />
        </div>
      )}

      <div
        className={`flex flex-1 flex-col items-center rounded-3xl border-2 border-gold bg-navy px-5 pb-6 text-center text-white shadow-lg transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-navy/40 ${
          item.image ? "pt-14" : "pt-6"
        }`}
      >
        <h3 className="text-lg font-extrabold text-gold">{item.title}</h3>
        {item.text && (
          <p className="mt-1.5 text-sm text-white/85">{item.text}</p>
        )}
      </div>
    </>
  );

  const cls =
    "group mx-auto flex h-full w-full max-w-xs flex-col transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] motion-reduce:transform-none";

  if (!item.href) return <div className={cls}>{inner}</div>;
  if (item.href.startsWith("http"))
    return (
      <a href={item.href} className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={item.href} className={cls}>
      {inner}
    </Link>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <div className="max-w-3xl space-y-4 text-slate">
            {block.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      );

    case "mv":
      return (
        <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
          {block.items.map((m) => (
            <div key={m.label}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-royal">
                {m.label}
              </h3>
              <p className="text-lg leading-relaxed text-slate">{m.text}</p>
            </div>
          ))}
        </section>
      );

    case "cards": {
      // Cards with logos (organizations)
      if (block.items.some((c) => c.logo)) {
        return (
          <section>
            <Heading>{block.heading}</Heading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((c, i) => (
                <LogoCard key={i} item={c} />
              ))}
            </div>
          </section>
        );
      }

      // If any card has an image, show the whole block as sticker cards
      const hasImages = block.items.some((c) => c.image);

      if (hasImages) {
        return (
          <section>
            <Heading>{block.heading}</Heading>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {block.items.map((c, i) => (
                <StickerCard key={i} item={c} />
              ))}
            </div>
          </section>
        );
      }

      return (
        <section>
          <Heading>{block.heading}</Heading>
          <div className="grid gap-4 sm:grid-cols-2">
            {block.items.map((c, i) => {
              const inner = (
                <>
                  <b className="block text-lg text-navy">{c.title}</b>
                  {c.text && (
                    <span className="mt-1 block text-sm text-slate">
                      {c.text}
                    </span>
                  )}
                </>
              );
              const cls =
                "rounded-2xl border border-line bg-white p-5 shadow-sm";
              if (!c.href)
                return (
                  <div key={i} className={cls}>
                    {inner}
                  </div>
                );
              const external = c.href.startsWith("http");
              return external ? (
                <a
                  key={i}
                  href={c.href}
                  className={`${cls} hover:border-royal`}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={i}
                  href={c.href}
                  className={`${cls} hover:border-royal`}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      );
    }

    case "list":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <ul className="max-w-3xl space-y-2 text-slate">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <ol className="space-y-4">
            {block.items.map((s, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <b className="block text-navy">{s.title}</b>
                  <span className="text-sm text-slate">{s.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "table":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-120 text-left text-sm">
              <thead className="bg-mist text-navy">
                <tr>
                  {block.columns.map((c) => (
                    <th key={c} className="px-4 py-3 font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate">
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-line">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case "stats":
      return (
        <section className="grid gap-4 sm:grid-cols-3">
          {block.items.map((s, i) => (
            <div key={i} className="rounded-2xl bg-navy p-6 text-white">
              <div className="text-4xl font-extrabold text-gold">{s.value}</div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </section>
      );

    case "image":
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            className="h-auto w-full rounded-2xl border border-line"
          />
          {block.caption && (
            <figcaption className="mt-2 text-sm text-slate">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "carousel":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <ImageCarousel
            items={block.items}
            label={block.label ?? block.heading}
          />
        </section>
      );

    case "gallery":
      return (
        <section>
          <Heading>{block.heading}</Heading>
          <ImageGallery items={block.items} />
        </section>
      );

    case "note":
      return (
        <div className="rounded-xl border border-dashed border-gold bg-gold/10 p-4 text-sm text-navy">
          <b>To do:</b> {block.text}
        </div>
      );
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-12">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}
