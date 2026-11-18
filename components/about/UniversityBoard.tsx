import Image from "next/image";
import { universityOverview } from "@/lib/about";
import { AboutIcon } from "./AboutIcon";

const directors = [
  {
    name: "Dr. Hans T. Sy",
    role: "Chairman of the Board",
    portrait: "/about/board-hans-sy.webp",
  },
  {
    name: "Teddy Ocampo",
    role: "Former President of National University",
    portrait: "/about/board-teddy-ocampo.webp",
  },
  {
    name: "Dr. Renato Carlos H. Ermita Jr.",
    role: "President and CEO of National University",
    portrait: "/about/board-renato-ermita.webp",
  },
  {
    name: "Herbert Sy",
    role: "Board Member",
    portrait: "/about/board-herbert-sy.webp",
  },
  {
    name: "Susan Dimacali",
    role: "Board Member",
    portrait: "/about/board-susan-dimacali.webp",
  },
  {
    name: "Nilo Ocampo",
    role: "Board Member",
    portrait: "/about/board-nilo-ocampo.webp",
  },
  {
    name: "Elizabeth Sy",
    role: "Board Member",
    portrait: "/about/board-elizabeth-sy.webp",
  },
];

export function UniversityBoard() {
  return (
    <section aria-labelledby="university-board">
      <h2 id="university-board" className="mb-6 border-b border-[#d8d4c7] pb-4 font-serif text-[1.85rem] leading-tight tracking-tight text-[#101f55] sm:text-[2.15rem]">
        National University Board of Directors
      </h2>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-12 sm:gap-x-4">
        {directors.map(({ name, role, portrait }, index) => {
          const featured = index < 3;

          return (
            <li key={name} className={featured ? "sm:col-span-4" : "sm:col-span-3"}>
              <Image
                src={portrait}
                alt=""
                width={384}
                height={383}
                sizes={featured ? "(min-width: 1280px) 300px, (min-width: 640px) 33vw, 46vw" : "(min-width: 1280px) 225px, (min-width: 640px) 25vw, 46vw"}
                className="aspect-square w-full rounded-t-md border-b-2 border-gold bg-navy object-cover"
              />
              <h3 className="mt-3 text-sm leading-snug font-bold text-[#101f55] sm:text-base">
                {name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#475264] sm:text-sm">
                {role}
              </p>
            </li>
          );
        })}
      </ul>
      <a
        href={universityOverview}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#24477b] underline decoration-[#24477b]/35 underline-offset-4 hover:decoration-current"
      >
        View National University’s board listing
        <AboutIcon name="external" className="size-3.5 shrink-0" />
      </a>
    </section>
  );
}
