"use client";

import { useId, useRef } from "react";

export default function FooterCookieSettings({ privacyUrl }: { privacyUrl: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const heading = useId();

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="cursor-pointer underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Cookie Settings
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={heading}
        onClose={() => trigger.current?.focus()}
        className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-md rounded-xl border border-line bg-white p-6 text-navy shadow-xl backdrop:bg-black/60"
      >
        <h2 id={heading} className="text-xl font-bold">Cookie Settings</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          You can manage stored cookies in your browser settings. YouTube videos load when you choose to play them and are subject to YouTube’s privacy practices.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
          <a href={privacyUrl} className="underline underline-offset-4">Read NU’s Privacy Policy</a>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="cursor-pointer rounded-full bg-navy px-4 py-2 text-white hover:bg-royal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
