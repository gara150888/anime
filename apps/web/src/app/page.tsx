"use client";
import { Hero, Trending, RecentlyAdded, Categories, Cta, FooterHome } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-0 flex-1 bg-bg-base">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Hero />
        <Trending />
        <RecentlyAdded />
        <Categories />
        <Cta />
        <FooterHome />
      </div>
    </main>
  );
}
