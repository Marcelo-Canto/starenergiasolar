import { MapPin, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Prévia leve de localização: nenhum script ou iframe de terceiros.
 * O desenho é abstrato (não imita um mapa real); o clique abre o Google Maps oficial.
 */
export function MapPreview({ className }: { className?: string }) {
  return (
    <a
      href={site.links.maps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver localização da STAR Energia Solar no Google Maps (abre em nova aba)"
      className={cn(
        "group relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#e9eef5] p-6 ring-1 ring-line sm:p-7",
        className,
      )}
    >
      {/* Quadras e vias estilizadas */}
      <svg aria-hidden className="absolute inset-0 -z-10 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 340">
        <rect width="600" height="340" fill="#e9eef5" />
        <g fill="#f5f7fa">
          <path d="M-20 250 L640 120 L640 150 L-20 282 Z" />
          <path d="M260 -20 L300 -20 L360 360 L320 360 Z" />
          <path d="M-20 70 L640 30 L640 46 L-20 88 Z" />
          <path d="M460 -20 L476 -20 L520 360 L504 360 Z" />
          <path d="M80 -20 L94 -20 L130 360 L116 360 Z" />
        </g>
        <path d="M-20 266 L640 135" stroke="#f5b800" strokeWidth="2" strokeDasharray="10 12" opacity="0.7" />
      </svg>

      <span className="absolute top-[34%] left-[52%] -translate-x-1/2 -translate-y-full" aria-hidden>
        <span className="absolute top-full left-1/2 h-3 w-8 -translate-x-1/2 rounded-[50%] bg-navy/20 blur-[2px]" />
        <MapPin
          size={48}
          weight="fill"
          className="relative text-navy transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-1"
        />
      </span>

      <div className="rounded-[14px] bg-white/95 p-4 shadow-[0_10px_30px_-18px_rgb(6_43_99/0.5)] backdrop-blur-sm">
        <p className="text-[15px] font-semibold text-navy">{site.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {site.address.street} - {site.address.district}, {site.address.city} - {site.address.region}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          Ver localização no Google Maps
          <ArrowUpRight
            size={15}
            weight="bold"
            aria-hidden
            className="transition-transform duration-200 ease-(--ease-out-strong) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </a>
  );
}
