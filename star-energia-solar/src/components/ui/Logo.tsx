import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Logo oficial, sem alterações. A altura define o tamanho; a proporção é preservada. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name}, página inicial`} className={cn("inline-flex shrink-0", className)}>
      <Image
        src={site.logo.src}
        width={site.logo.width}
        height={site.logo.height}
        alt={site.name}
        loading="eager"
        sizes="220px"
        className="h-full w-auto"
      />
    </Link>
  );
}
