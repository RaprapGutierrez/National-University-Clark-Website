import Image from "next/image";
import Link from "next/link";
import { campusContact } from "@/lib/about";
import FooterCookieSettings from "./FooterCookieSettings";

const footerLinks = [
  {
    title:"University",
    links: [
      { label:"About NU", href:"/about" },
      { label:"Athletics", href:"https://www.nu.edu.ph/athletics" },
    ],
  },
  {
    title:"Admissions",
    links: [
      { label:"Programs Offered", href:"https://www.nu.edu.ph/nu-clark/admissions/programs" },
      { label:"Colleges & Departments", href:"/academics" },
      { label:"Apply Now", href:"/admissions/apply-now" },
      { label:"Scholarships", href:"/admissions/scholarships" },
      { label:"For International Students", href:"https://www.nu.edu.ph/nu-clark/campus-life/international-students-support" },
      { label:"Admission Requirements", href:"/admissions/requirements" },
    ],
  },
  {
    title:"Connect",
    links: [
      { label:"Contact Us", href: campusContact },
      { label:"Careers", href:"https://www.nu.edu.ph/nu-clark/talent-hub" },
    ],
  },
];

const badges = [
  { file:"the", alt:"Times Higher Education Sustainability Impact Ratings 2026", width: 172, height: 45 },
  { file:"greatplacetowork", alt:"Great Place to Work Certified", width: 85, height: 146 },
  { file:"microsoft", alt:"Microsoft Elevate Showcase School", width: 320, height: 320 },
  { file:"qs", alt:"QS World University Rankings Asia", width: 78, height: 103 },
  { file:"ched", alt:"Commission on Higher Education", width: 64, height: 64 },
];

const socials = [
  { name:"Facebook", href:"https://www.facebook.com/NationalUniversityClark" },
  { name:"Instagram", href:"https://instagram.com/NationalUPH" },
  { name:"X", href:"https://x.com/NationalUPhil" },
  { name:"YouTube", href:"https://www.youtube.com/@NationalUniversityPhilippines" },
  { name:"TikTok", href:"https://www.tiktok.com/@nationaluph" },
  { name:"LinkedIn", href:"https://www.linkedin.com/company/nationaluph" },
  { name:"Spotify", href:"https://open.spotify.com/artist/3HyEPPZbwqtVqdamGSMZ3x" },
];

const privacyUrl ="https://www.nu.edu.ph/privacy-policy";
const frame ="mx-auto w-full max-w-[90rem] px-5 sm:px-9";
const linkStyle ="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1b214a] text-white sm:mt-20">
      <div className={`${frame} pt-10 pb-10 sm:pt-15 sm:pb-16`}>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-[11.75rem_minmax(0,1fr)] lg:grid-cols-[minmax(11.75rem,1.1fr)_minmax(0,2.2fr)] lg:gap-x-10">
          <div className="flex flex-col items-center gap-5 md:w-[11.75rem]">
            <Link href="/" className={linkStyle} aria-label="NU Clark home">
              <Image
                src="/about/footer-crest.webp"
                alt="National University crest"
                width={360}
                height={436}
                className="h-auto w-32 sm:w-45"
              />
            </Link>
            <ul aria-label="National University social media" className="flex w-[11.75rem] flex-wrap justify-center gap-2">
              {socials.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`block rounded-full transition-opacity hover:opacity-80 ${linkStyle}`}>
                    <Image src={`/about/footer-social-${name.toLowerCase()}.svg`} alt="" width={40} height={40} className="size-10" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,.58fr)] sm:gap-x-8">
            {footerLinks.map(({ title, links }) => (
              <section key={title} className={title === "Connect" ?"col-span-2 sm:col-span-1" : undefined}>
                <h2 className="mb-4 text-xl font-bold sm:mb-6">{title}</h2>
                <ul className="space-y-2.5 text-sm font-semibold">
                  {links.map(({ label, href }) => (
                    <li key={label}><Link className={linkStyle} href={href}>{label}</Link></li>
                  ))}
                </ul>
                {title === "Connect" && (
                  <a
                    href="/about/footer-npc.webp"
                    aria-label="View the National Privacy Commission seal of registration"
                    className={`mt-6 inline-block ${linkStyle}`}
                  >
                    <Image
                      src="/about/footer-npc.webp"
                      alt="National Privacy Commission seal of registration"
                      width={153}
                      height={281}
                      className="h-30 w-auto sm:h-35"
                    />
                  </a>
                )}
              </section>
            ))}
          </nav>
        </div>

        <section aria-labelledby="footer-accreditations" className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-[#6977c2]/65 pt-6 sm:mt-12">
          <h2 id="footer-accreditations" className="font-bold">Accreditations</h2>
          <ul aria-label="Institutional badges published by National University" className="flex flex-wrap items-center gap-3">
            {badges.map(({ file, alt, width, height }) => (
              <li key={file} className={file === "the" ?"grid h-14 place-items-center rounded-lg bg-white px-3 sm:h-16" : undefined}>
                <Image
                  src={`/about/footer-${file}.webp`}
                  alt={alt}
                  width={width}
                  height={height}
                  className={file === "the" ?"h-auto w-42" :"h-12 w-auto object-contain sm:h-16"}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="bg-[#252d60]">
        <div className={`${frame} flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5 text-sm font-semibold sm:py-7`}>
          <p>Copyright © 2026 National University. All Rights Reserved.</p>
          <nav aria-label="Policies">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <li><a href="https://www.nu.edu.ph/terms-and-conditions" className={linkStyle}>Terms &amp; Conditions</a></li>
              <li className="sm:border-l sm:border-white/70 sm:pl-4"><a href={privacyUrl} className={linkStyle}>Privacy Policy</a></li>
              <li className="sm:border-l sm:border-white/70 sm:pl-4"><FooterCookieSettings privacyUrl={privacyUrl} /></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
