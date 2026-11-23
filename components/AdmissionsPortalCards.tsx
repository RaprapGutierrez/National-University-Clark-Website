import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  APPLY_LOGIN_URL,
  APPLY_URL,
  BILLS_LOGIN_URL,
  BILLS_REGISTER_URL,
  NUIS_LOGIN_URL,
} from "@/lib/site";

type PortalAction = {
  label: string;
  href: string;
  tone: "blue" | "gold";
};

type PortalCard = {
  title: string;
  subtitle: string;
  body: string;
  note: string;
  icon: { src: string; alt: string };
  actions: PortalAction[];
};

const cards: PortalCard[] = [
  {
    title: "NU Quest",
    subtitle: "Your NU Journey Starts Here",
    body: "Start your NU journey with ease by applying for university admission.",
    note: "For NU Admission Applicants use only.",
    icon: { src: "/portals/nu-quest.png", alt: "NU Quest" },
    actions: [
      { label: "Login", href: APPLY_LOGIN_URL, tone: "blue" },
      { label: "Register", href: APPLY_URL, tone: "gold" },
    ],
  },
  {
    title: "NUIS",
    subtitle: "Central Access to NU Services",
    body: "Your all-in-one platform for academic services accessible anytime, anywhere.",
    note: "For Nationalians use only.",
    icon: { src: "/portals/nuis.png", alt: "NUIS" },
    actions: [{ label: "Login", href: NUIS_LOGIN_URL, tone: "blue" }],
  },
  {
    title: "NU Bills",
    subtitle: "Seamless and Secure Payments",
    body: "Pay tuition and other fees quickly and securely with our online payment facility.",
    note: "Intended for Nationalians. Register for guests.",
    icon: { src: "/portals/nu-bills.png", alt: "NU Bills" },
    actions: [
      { label: "Login", href: BILLS_LOGIN_URL, tone: "blue" },
      { label: "Register", href: BILLS_REGISTER_URL, tone: "gold" },
    ],
  },
];

function ActionButton({ action }: { action: PortalAction }) {
  const className =
    action.tone === "gold"
      ? "inline-flex min-h-10 items-center justify-center rounded-md bg-[#f0b429] px-5 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white transition active:scale-[0.98] hover:bg-[#e0a61f]"
      : "inline-flex min-h-10 items-center justify-center rounded-md bg-[#2f6fed] px-5 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white transition active:scale-[0.98] hover:bg-[#2563eb]";

  return (
    <a
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {action.label}
    </a>
  );
}

export default function AdmissionsPortalCards() {
  return (
    <div className="relative z-10 -mt-14 grid gap-4 sm:-mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 100} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <Image
                src={card.icon.src}
                alt={card.icon.alt}
                width={48}
                height={48}
                sizes="48px"
                loading="lazy"
                className="size-12 shrink-0 rounded-[12px]"
              />
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg font-extrabold leading-snug text-navy">
                  {card.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate">{card.subtitle}</p>
              </div>
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
              {card.body}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {card.actions.map((action) => (
                <ActionButton key={action.label} action={action} />
              ))}
            </div>

            <p className="mt-4 text-xs italic leading-snug text-slate/70">
              *{card.note}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
