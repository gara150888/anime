import Link from "next/link";
import { TRENDING } from "@/data/trending";

export default function Trending() {
  return (
    <section className="border-t border-border-subtle py-16 md:py-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-sans text-[28px] font-semibold tracking-tight text-text-primary">Trending now</h2>
        <a href="#" className="font-mono text-[12px] text-text-tertiary hover:text-text-secondary transition-colors">View all →</a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory -mx-2 px-2 md:-mx-4 md:px-4">
        {TRENDING.map((anime) => (
          <Link key={anime.title} href="#" className="group block w-65 shrink-0 snap-start bg-bg-base hover:bg-bg-surface transition-colors rounded-xl border border-border-subtle overflow-hidden">
            <div className="p-4 md:p-5">
              <div className="relative overflow-hidden rounded-lg bg-bg-elevated border border-border-subtle mb-4" style={{ aspectRatio: "7 / 10" }}>
                <img src={anime.img_url} alt={anime.title} className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute top-2 right-2 rounded-md bg-bg-base/80 border border-border-subtle px-2 py-0.5 font-mono text-[10px] text-text-secondary backdrop-blur-sm">
                  {anime.ep}
                </div>
              </div>
              <h3 className="text-[16px] font-medium leading-tight text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2">{anime.title}</h3>
              <div className="mt-1.5 flex items-center gap-2 font-mono text-[11px] text-text-tertiary">
                <span>{anime.year}</span>
                <span className="text-text-disabled">·</span>
                <span className="text-syntax-string">{anime.genre}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
