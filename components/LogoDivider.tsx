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
      <Image
        src="/logo.webp"
        alt="National University"
        width={200}
        height={60}
        className="h-12 w-auto sm:h-14"
      />
      <Lines />
    </div>
  );
}
