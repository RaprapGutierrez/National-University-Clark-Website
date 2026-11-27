import Image from "next/image";

function Lines() {
  return (
    <div className="flex-1 space-y-1" aria-hidden="true">
      <div className="h-0.5 bg-gold" />
      <div className="h-0.5 bg-gold" />
    </div>
  );
}

export default function LogoDivider() {
  return (
    <div className="flex items-center gap-6 py-4" role="separator">
      <Lines />
      <div className="flex items-center gap-2.5 text-navy" aria-hidden="true">
        <Image
          src="/nu-logo.png"
          alt=""
          width={38}
          height={46}
          className="h-12 w-auto sm:h-14"
        />
        <span className="text-[15px] font-extrabold uppercase leading-[1.05] tracking-tight">
          National
          <br />
          University
        </span>
        <span className="text-2xl font-extrabold uppercase leading-none tracking-wide text-royal">
          CLARK
        </span>
      </div>
      <Lines />
    </div>
  );
}
