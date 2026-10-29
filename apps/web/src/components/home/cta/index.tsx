import { Button } from "@anime/ui/components/button";

export default function Cta() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle">
      <div className="max-w-2xl">
        <h2 className="font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.03em] leading-[1.05] text-text-primary">
          Start watching in{" "}<span className="text-text-secondary">one click.</span>
        </h2>
        <p className="mt-4 font-sans text-[15px] leading-[1.6] text-text-secondary max-w-[60ch]">No signup required to browse. Create a free account to save favorites and resume anywhere.</p>
        <div className="mt-8 flex items-center gap-3">
          <Button size="lg" className="rounded-lg bg-text-primary text-bg-base hover:bg-text-secondary">
            Watch now →
          </Button>
          <Button size="lg" variant="outline" className="rounded-lg border-border-subtle text-text-primary hover:border-text-secondary">
            Create account
          </Button>
        </div>
      </div>
    </section>
  );
}
