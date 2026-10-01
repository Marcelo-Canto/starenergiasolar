import { Check } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";

export function CheckList({ items, tone = "light", className }: { items: string[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15.5px]">
          <span
            className={cn(
              "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
              tone === "dark" ? "bg-solar text-navy-950" : "bg-navy text-white",
            )}
          >
            <Check size={12} weight="bold" aria-hidden />
          </span>
          <span className={tone === "dark" ? "text-white/90" : "text-ink"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
