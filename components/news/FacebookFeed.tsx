"use client";

import { useState } from "react";

// Facebook's Page plugin. It only loads after the visitor clicks, so the page stays fast
// and nothing is sent to Facebook until the visitor chooses to see the feed.
export default function FacebookFeed({
  pageUrl,
  title = "NU Clark on Facebook",
}: {
  pageUrl: string;
  title?: string;
}) {
  const [show, setShow] = useState(false);
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    pageUrl,
  )}&tabs=timeline&width=500&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <div className="w-full max-w-[500px] overflow-hidden rounded-3xl border-2 border-gold bg-white shadow-lg">
      {show ? (
        <iframe
          title={title}
          src={src}
          width="500"
          height="720"
          loading="lazy"
          allow="encrypted-media"
          className="block h-[720px] w-full border-0"
        />
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 bg-navy p-8 text-center text-white">
          <h3 className="text-xl font-extrabold text-gold">{title}</h3>
          <p className="max-w-xs text-sm text-white/85">
            The feed is loaded from Facebook, which may set its own cookies.
          </p>
          <button
            type="button"
            onClick={() => setShow(true)}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold leading-none text-navy transition hover:-translate-y-0.5"
          >
            Show Facebook feed
          </button>
        </div>
      )}
    </div>
  );
}
