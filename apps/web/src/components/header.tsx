"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";

export default function Header() {
  const links: { to: string; label: string }[] = [
    { to: "/trending", label: "Trending" },
    { to: "/new", label: "New" },
    { to: "/list", label: "My List" },
  ];

  return (
    <header className="h-[56px] shrink-0 border-b border-border-subtle bg-bg-base/90 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-6 md:px-10">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="font-mono text-[15px] font-medium tracking-tight text-text-primary hover:text-text-secondary transition-colors"
          >
            anime
          </Link>
          <div className="hidden md:flex items-center gap-5">
            {links.map(({ to, label }) => {
              if (label === "anime") return null;
              return (
                <Link
                  key={to}
                  href={to as any}
                  className="font-sans text-[13px] font-normal text-text-secondary hover:text-text-primary transition-colors"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/anime/anime"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-text-tertiary hover:text-text-secondary transition-colors hidden sm:inline-flex items-center gap-1.5"
          >
            <span>★</span>
            <span>4.2k</span>
          </a>
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
