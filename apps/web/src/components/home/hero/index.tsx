"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@anime/ui/components/button";
import { FEATURED } from "@/data/featured";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const item = FEATURED[idx];
  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1 font-mono text-[11px] text-text-tertiary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-syntax-string" />
            <span>Now playing</span>
          </div>
          <h1 className="font-sans text-[clamp(36px,5.5vw,72px)] font-semibold tracking-[-0.035em] leading-none text-text-primary">
            {item.title}
            <span className="block text-text-secondary">{item.subtitle}</span>
          </h1>
          <p className="mt-6 font-sans text-base leading-normal text-text-secondary max-w-prose">
            Stream the complete saga in one place. Discover new episodes updated daily across every genre.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button size="lg" className="rounded-lg bg-text-primary text-bg-base hover:bg-text-secondary">
              Watch episode 1
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg border-border-subtle hover:border-text-secondary text-text-primary">
              + My List
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-7">
          <div className="relative">
            <Link href="#" className="group block overflow-hidden rounded-3xl border border-border-subtle bg-bg-surface">
              <div className="aspect-video relative overflow-hidden">
                <img src={item.img_url} alt={item.title} className="h-full w-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-bg-base/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-sans text-[12px] text-text-tertiary">{item.season} · {item.episode_title}</p>
                    <p className="font-sans text-[14px] font-medium text-text-primary">{item.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-bg-base/80 border border-border-subtle px-3 py-1.5 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-syntax-string animate-pulse" />
                    <span className="font-mono text-[11px] text-text-secondary">HD</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border-subtle px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[13px] font-medium text-text-secondary">{item.title}</span>
                  <span className="text-text-disabled">·</span>
                  <span className="font-mono text-[12px] text-text-tertiary">{item.year}</span>
                  <span className="text-text-disabled">·</span>
                  <span className="font-mono text-[12px] text-syntax-string">{item.genre}</span>
                </div>
                <span className="font-mono text-[11px] text-text-tertiary">{item.time}</span>
              </div>
            </Link>
            <div className="flex items-center justify-between mt-4 px-1">
              <Button variant="outline" size="icon" className="rounded-lg border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-secondary"
                onClick={() => setIdx((i) => (i - 1 + FEATURED.length) % FEATURED.length)} aria-label="Previous">
                <ChevronLeft size={24} />
              </Button>
              <div className="flex gap-1.5">
                {FEATURED.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 w-1.5 rounded-full transition-colors ${i === idx ? "bg-syntax-keyword" : "bg-border-subtle hover:bg-text-disabled"}`} />
                ))}
              </div>
              <Button variant="outline" size="icon" className="rounded-lg border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-secondary" onClick={() => setIdx((i) => (i + 1) % FEATURED.length)} aria-label="Next"><ChevronRight size={24} /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
