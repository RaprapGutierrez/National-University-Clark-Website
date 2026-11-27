import Image from "next/image";

const values = [
  {
    name:"Integrity",
    image:"integrity",
    description:"We act honestly, treat people fairly, and do what is right in our dealings with others. Our choices reflect who we are.",
  },
  {
    name:"Compassion",
    image:"compassion",
    description:"We value people, pay attention to what they are going through, and respond with care and understanding in every situation.",
  },
  {
    name:"Innovation",
    image:"innovation",
    description:"We improve established ways of working through creative changes that address a real need and help us respond as circumstances evolve.",
  },
  {
    name:"Resilience",
    image:"resilience",
    description:"We draw on our strength of character to meet difficulties, adapt to setbacks, and recover so we can keep going.",
  },
  {
    name:"Patriotism",
    image:"patriotism",
    description:"Love of country is central to our university community. We show that commitment through service to the Philippines and respect for what it stands for.",
  },
];

const attributes = [
  { name:"Leadership and Teamwork", icon:"leadership" },
  { name:"Responsible Citizenship", icon:"citizenship" },
  { name:"Innovative, Creative, and Critical Thinking", icon:"thinking" },
  { name:"Academic and Professional Competence", icon:"competence" },
  { name:"Effective Communication", icon:"communication" },
  { name:"Whole-person Character", icon:"character" },
  { name:"Life and Career Skills Orientation", icon:"life-career" },
  { name:"Technological Literacy", icon:"technology" },
];

export function UniversityValues() {
  return (
    <section aria-labelledby="core-values">
      <h2 id="core-values" className="mb-5 border-b-2 border-gold pb-3 text-2xl font-extrabold text-navy">
        Core Values
      </h2>
      <div className="overflow-hidden rounded-xl bg-navy">
        <div className="border-b border-white/20 p-5 text-white sm:px-7 sm:py-6">
          <h3 className="text-lg font-extrabold">Principles</h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/90">
            These values guide NU faculty, staff, and students in pursuing ethical scholarship, improving how they work, and serving their communities.
          </p>
        </div>
        <dl className="grid gap-px bg-white/25 sm:grid-cols-2 xl:grid-cols-6">
          {values.map(({ name, image, description }, index) => (
            <div key={name} className={`bg-[#fffdf8] p-5 text-navy sm:px-6 sm:last:col-span-2 xl:last:col-span-3 ${index > 2 ?"xl:col-span-3" :"xl:col-span-2"}`}>
              <dt className="flex items-center gap-3 text-lg font-extrabold">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-[#f5edda]">
                  <Image src={`/about/value-${image}.png`} alt="" width={28} height={28} className="size-7 object-contain" />
                </span>
                {name}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#475264]">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function GraduateAttributes() {
  return (
    <section aria-labelledby="graduate-attributes">
      <h2 id="graduate-attributes" className="mb-5 text-2xl font-extrabold text-navy">
        Graduate Attributes Intended for Nationalians
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {attributes.map(({ name, icon }) => (
          <li key={name} className="flex min-h-16 items-center gap-3 rounded-md border border-line border-l-2 border-l-gold bg-mist px-4 py-3 text-sm leading-snug font-bold text-navy">
            <Image src={`/about/attribute-${icon}.svg`} alt="" width={22} height={22} className="size-[22px] shrink-0 object-contain" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
