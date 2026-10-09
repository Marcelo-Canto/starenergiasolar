import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, tone = "light", className }: { items: Crumb[]; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Você está em" className={className}>
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", dark ? "text-white/75" : "text-muted")}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={cn("font-medium", dark ? "text-white" : "text-navy")}>
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className={cn("inline-flex min-h-6 items-center transition-colors", dark ? "hover:text-white" : "hover:text-navy")}>
                    {c.name}
                  </Link>
                  <CaretRight size={12} aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
