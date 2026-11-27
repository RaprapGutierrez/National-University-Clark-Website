import { Icon, type IconName } from "@/components/Icon";

/** @deprecated Prefer `@/components/Icon` — kept for existing about-page imports. */
export function AboutIcon({
  name,
  className = "size-4 shrink-0",
}: {
  name: IconName;
  className?: string;
}) {
  return <Icon name={name} className={className} />;
}
