import type { ReactNode } from "react";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsTabs from "@/components/AdmissionsTabs";

type Crumb = { label: string; href?: string };

export default function AdmissionsShell({
  active,
  title,
  subtitle,
  crumbs,
  notice,
  children,
}: {
  active:"apply-now" |"requirements" |"scholarships";
  title: string;
  subtitle: string;
  crumbs: Crumb[];
  notice?: string;
  children: ReactNode;
}) {
  return (
    <>
      <AcademicsBanner
        title={title}
        subtitle={subtitle}
        label="Admissions"
        crumbs={crumbs}
        showRule={false}
      />

      <div className="border-b border-line bg-white">
        <AdmissionsTabs active={active} />
        {notice ? (
          <div className="border-t border-line bg-mist">
            <p className="mx-auto max-w-6xl px-4 py-3 text-sm font-semibold leading-relaxed text-navy sm:px-5">
              {notice}
            </p>
          </div>
        ) : null}
      </div>

      <main className="pb-16 pt-0 sm:pb-20">{children}</main>
    </>
  );
}
